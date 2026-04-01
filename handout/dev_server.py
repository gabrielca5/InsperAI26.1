from __future__ import annotations

import argparse
import os

import mkdocs.commands.serve
import mkdocs.livereload
import watchdog.events


def patch_livereload_watch() -> None:
    original_watch = mkdocs.livereload.LiveReloadServer.watch

    def watch(self, path: str, func=None, *, recursive: bool = True) -> None:
        path = os.path.abspath(path)
        if not (func is None or func is self.builder):
            raise TypeError("Plugins can no longer pass a 'func' parameter to watch().")

        if path in self._watched_paths:
            self._watched_paths[path] += 1
            return
        self._watched_paths[path] = 1

        def callback(event):
            with self._rebuild_cond:
                self._want_rebuild = True
                self._rebuild_cond.notify_all()

        handler = watchdog.events.FileSystemEventHandler()
        handler.on_any_event = callback
        self._watch_refs[path] = self.observer.schedule(handler, path, recursive=recursive)

    if mkdocs.livereload.LiveReloadServer.watch is not original_watch:
        return
    mkdocs.livereload.LiveReloadServer.watch = watch


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dev-addr", default="127.0.0.1:8000")
    args = parser.parse_args()

    patch_livereload_watch()
    mkdocs.commands.serve.serve(config_file="mkdocs.yml", dev_addr=args.dev_addr)


if __name__ == "__main__":
    main()
