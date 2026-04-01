# Git

## Por que versionar código?

Quando você programa, é normal alterar arquivos várias vezes até chegar em uma versão que funciona bem.

Sem versionamento, a tendência não é organizar versões: é sobrescrever o mesmo arquivo várias vezes.

Por exemplo, você começa com um `modelo.py` que funciona. Depois faz uma mudança, testa, faz outra, mexe de novo e, quando percebe, o arquivo atual já não é mais igual à última versão estável.

O problema é que, sem um histórico organizado:

- versões anteriores se perdem;
- se o código quebrar, fica difícil voltar para a última versão que funcionava;
- em grupo, duas pessoas podem sobrescrever o trabalho uma da outra;
- entender o que mudou ao longo do tempo vira uma tarefa confusa.

Versionar código é justamente organizar esse histórico de mudanças.

Em vez de depender da memória ou de arquivos soltos, você mantém um projeto só e registra cada alteração de forma estruturada. Assim, fica possível saber o que mudou, quando mudou, quem mudou e voltar para uma versão anterior quando necessário.

## O que é o Git?

O Git é um sistema de controle de versão. Pense nele como um histórico inteligente do seu projeto.

Na prática, ele serve para:

- acompanhar alterações nos arquivos;
- voltar para versões anteriores com segurança;
- trabalhar em equipe sem sobrescrever o trabalho de outras pessoas;
- criar cópias do código original (branches) para testar ideias sem mexer na versão principal do projeto.

## Instalação

O objetivo desta seção é simples: instalar o Git e garantir que o comando `git` funcione no terminal.

### Windows

1. Acesse o site oficial: [git-scm.com/download/win](https://git-scm.com/download/win)
2. Baixe o instalador e execute o arquivo.
3. Avance pelas telas mantendo as opções padrão.
4. Ao final, abra o PowerShell ou o terminal do VS Code e rode:

```bash
git --version
```

Se aparecer algo como `git version 2.x.x`, a instalação funcionou.

Se o comando não for reconhecido:

- feche e abra o terminal novamente;
- se ainda falhar, reinicie o computador e teste de novo.

### macOS

1. Abra o Terminal.
2. Rode:

```bash
git --version
```

Em muitos casos, o macOS oferece automaticamente a instalação das Command Line Tools da Apple. Se isso acontecer, aceite e aguarde.

Depois, rode novamente:

```bash
git --version
```

Se ainda não funcionar, consulte a página oficial: [git-scm.com/download/mac](https://git-scm.com/download/mac)

### Linux

Abra o terminal e instale o Git usando o gerenciador de pacotes da sua distribuição.

#### Debian / Ubuntu

```bash
sudo apt update
sudo apt install git
```

#### Fedora

```bash
sudo dnf install git
```

#### Arch Linux

```bash
sudo pacman -S git
```

Depois, confirme a instalação:

```bash
git --version
```

Se você usa outra distribuição, consulte a página oficial: [git-scm.com/download/linux](https://git-scm.com/download/linux)

## Configuração Inicial do Git

Depois de instalar, precisamos dizer ao Git quem está fazendo os commits.

Essas informações aparecem no histórico do projeto. Elas não criam sua conta no GitHub, mas ajudam a associar seus commits à pessoa certa.

### Configure seu nome

```bash
git config --global user.name "Seu Nome"
```

Exemplo:

```bash
git config --global user.name "Maria Silva"
```

### Configure seu email

```bash
git config --global user.email "seu-email@exemplo.com"
```

!!! note "Importante"
    Use o mesmo email que você vai cadastrar e verificar no GitHub. Isso ajuda o GitHub a associar seus commits à sua conta.

### Verifique se a configuração foi salva

```bash
git config --global --list
```

Você deve ver pelo menos estas linhas:

- `user.name=Seu Nome`
- `user.email=seu-email@exemplo.com`