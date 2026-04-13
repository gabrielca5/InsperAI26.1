# Primeiro handout no repositório

Até aqui, você já fez o mais difícil:

- criou e configurou sua conta no GitHub;
- aceitou uma atividade no GitHub Classroom;
- clonou o repositório da atividade;
- abriu o projeto no VS Code;
- instalou o `uv`.

Agora falta usar tudo isso para começar de fato o handout.

## 1. Clone o repositório, se ainda não tiver feito isso

Se você já clonou o repositório na etapa de GitHub, pode pular para o próximo passo.

Se ainda não clonou:

1. Vá até a página da atividade no GitHub Classroom.
2. Abra o repositório criado para você.
3. Clique no botão verde `Code`.
4. Copie a URL correta:

    - **Windows**: `HTTPS`
    - **macOS e Linux**: `SSH`

5. No terminal, vá até a pasta em que você quer salvar o repositório.
6. Rode:

```bash
git clone URL_DO_REPOSITORIO
```

Quando o clone terminar, siga para o próximo passo.

## 2. Entre na pasta do repositório

Se o repositório ainda não estiver aberto no VS Code, abra o terminal, vá até a pasta clonada e rode:

```bash
cd nome-do-repositorio
code .
```

Se o VS Code já estiver aberto na pasta correta, você pode seguir para o próximo passo.

## 3. Sincronize as dependências do projeto

No terminal do VS Code, rode:

```bash
uv sync
```

Todo projeto UV tem arquivos de configuração que dizem para o uv qual versão do python usar e quais são as dependências do projeto.

Esse comando usa esses arquivos para instalar tudo que o projeto precisa para funcionar e cria o ambiente virtual automaticamente, se ele ainda não existir.

Se tudo der certo, ao final você terá um ambiente pronto para executar os arquivos do handout.

## 4. Verifique se o ambiente está pronto

Depois do `uv sync`, você pode fazer um teste simples:

```bash
uv run python --version
```

Se um número de versão do Python aparecer no terminal, o ambiente está funcionando.

## 5. Abra o notebook da atividade

Abra o arquivo `handout.ipynb`, que é um notebook Jupyter.

Esse tipo de arquivo permite misturar:

- texto;
- código;
- saídas dos comandos;
- gráficos e tabelas.

Notebooks Jupyter são muito usados em IA porque facilitam a experimentação: você consegue testar pequenas partes do código, visualizar resultados imediatamente e documentar o raciocínio no mesmo arquivo.

## 6. Instale as extensões necessárias no VS Code, se for solicitado

Ao abrir um notebook pela primeira vez, o VS Code pode sugerir extensões como:

- `Python`
- `Jupyter`

Se isso acontecer, instale as extensões recomendadas.

Essas extensões permitem executar células do notebook dentro do próprio VS Code.

## 7. Selecione o kernel correto

No canto superior direito do notebook, o VS Code deve mostrar a opção de selecionar um kernel.

Escolha o interpretador Python do ambiente criado pelo projeto, que normalmente estará associado à pasta `.venv`.

Se aparecer mais de uma opção, prefira a que menciona:

- `.venv`
- o repositório atual
- ou o Python gerenciado pelo `uv`

## 8. Siga o passo a passo do notebook

Realize as atividades propostas no notebook.

## 9. Salve seu progresso

Ative a opção de salvamento automático do VS Code para não perder seu progresso
Ao longo da atividade, lembre-se de salvar o notebook com frequência.

- No canto superior esquerdo, clique em `File``
- Nas últimas opções, ative `Auto Save`

Alternativamente, você pode usar:

- `Ctrl + S` no Windows/Linux
- `Cmd + S` no macOS

Isso salva pontualmente suas mudanças

## 10. Ao terminar, faça commit e push

Quando você termina a atividade, ainda existe uma diferença importante:

- o arquivo salvo está no seu computador;
- o repositório no GitHub ainda não recebeu essas mudanças.

Para enviar sua resolução, você vai usar `commit` e `push`.

### O que é commit?

Um `commit` é um registro das mudanças que você fez no projeto.

Pense nele como um checkpoint com mensagem. Ele serve para marcar um estado do seu trabalho e dizer, no histórico do repositório, o que foi alterado.

### O que é push?

Um `push` envia para o repositório remoto. No Git, os commits são checkpoints locais até que você sincronize o seu repositório local (na sua máquina) com o remoto (no GitHub).

Em outras palavras:

- `commit` organiza e registra a mudança localmente;
- `push` sincroniza essa mudança local com o repositório remoto.

### Passo a passo

No terminal, dentro da pasta do repositório, rode:

```bash
git status
```

Esse comando mostra quais arquivos foram alterados.

Depois, adicione as mudanças ao próximo commit:

```bash
git add .
```

Agora crie o commit:

```bash
git commit -m "Handout resolvido"
```

Por fim, envie as mudanças para o GitHub:

```bash
git push
```

Se tudo der certo, sua atividade ficará sincronizada com o repositório remoto no GitHub.

Para entender esse fluxo com mais calma, vá para a página [Fluxo com Git e GitHub](fluxo-git-github.md).
