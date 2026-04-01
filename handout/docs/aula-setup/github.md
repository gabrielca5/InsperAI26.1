# GitHub

O GitHub é a plataforma onde vamos hospedar nossos projetos na nuvem.

Na prática, ele permite:

- guardar seus projetos online;
- compartilhar código com outras pessoas;
- colaborar em grupo;
- sincronizar o projeto entre sua máquina e a nuvem.

## O que é um repositório?

Um repositório é a pasta do projeto organizada para ser acompanhada pelo Git.

Na prática, é onde ficam:

- os arquivos do seu código;
- o histórico das alterações;
- as branches do projeto;
- as informações necessárias para colaborar com outras pessoas.

Você pode pensar em um repositório como a "casa" do projeto.

Quando o repositório está no seu computador, você trabalha localmente. Quando ele está no GitHub, ele também passa a existir na nuvem, o que permite salvar, compartilhar e sincronizar o projeto com outras pessoas.

## Crie sua conta

1. Acesse: [github.com](https://github.com)
2. Crie sua conta.
3. Confirme o email usado no cadastro.

Se você ainda não configurou seu nome e email no Git, volte um momento para a etapa anterior e rode os comandos de `git config`.

## Conectando sua máquina ao GitHub

Aqui entra uma distinção importante:

- sua senha do GitHub serve para entrar no site;
- sua chave SSH serve para autenticar sua máquina no terminal;

Para o fluxo do curso, a opção mais simples e estável é usar **SSH**.

### 1. Gere uma chave SSH

No terminal, rode: **(Não esqueça de mudar o e-mail para o mesmo da conta do github)**

```bash
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
```

Use o mesmo email da sua conta do GitHub.

Se você estiver no Windows e o comando `ssh-keygen` não funcionar no PowerShell, abra o `Git Bash`, que é instalado junto com o Git for Windows, e rode o mesmo comando lá.

Quando aparecerem as perguntas:

1. Aperte `Enter` para aceitar o local padrão do arquivo.
2. Aperte `Enter` duas vezes para criar a chave sem passphrase (É uma camada de proteção extra que não vai ser necessária)

### 2. Adicione a chave ao `ssh-agent`

#### Windows (PowerShell)

Se aparecer erro de permissão neste passo, abra o PowerShell como administrador e tente novamente.

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

#### macOS e Linux

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 3. Copie sua chave pública

#### Windows (PowerShell)

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

#### macOS e Linux

```bash
cat ~/.ssh/id_ed25519.pub
```

Copie a linha inteira exibida no terminal.

### 4. Cadastre a chave no GitHub

1. No GitHub, clique na sua foto de perfil.
2. Entre em `Settings`.
3. Vá em `SSH and GPG keys`.
4. Clique em `New SSH key`.
5. Dê um nome para a chave, como `Notebook pessoal` ou `PC de casa`.
6. Cole a chave pública copiada no passo anterior.
7. Salve.

### 5. Teste a conexão

Rode:

```bash
ssh -T git@github.com
```

Na primeira vez, o terminal pode perguntar se você quer confiar no servidor do GitHub. Digite `yes`.

Se tudo deu certo, você verá uma mensagem dizendo que a autenticação funcionou.

## Criando um repositório

Vamos criar um repositório, que é onde o projeto ficará armazenado.

1. No GitHub, clique no botão `+` no canto superior direito.
2. Clique em `New repository`.

![alt text](criar-repo.png)

3. Preencha:

- nome do projeto;
- visibilidade: público ou privado;
- `README`: pode deixar marcado;
- `.gitignore`: escolha `Python`.

4. Clique em `Create repository`.

## Clonando um repositório

Clonar significa trazer uma cópia do repositório do GitHub para a sua máquina.

1. No repositório, clique no botão verde `Code`.
2. Escolha a aba `SSH`.
3. Copie a URL mostrada.

![alt text](image.png)

Ela terá um formato parecido com este:

```text
git@github.com:usuario/nome-do-repositorio.git
```

4. Abra o Visual Studio Code em uma janela nova.

![alt text](image-1.png)

5. Clique em `Clone Git Repository...`
6. Cole a URL copiada e aperte `Enter`.

Pronto: agora o repositório existe na nuvem e também na sua máquina.

## Branches

Branch é uma linha paralela de trabalho. Em vez de alterar direto a `main`, você cria uma branch para desenvolver uma tarefa específica.

Isso reduz o risco de quebrar a versão principal do projeto e facilita a revisão.

### Criando e entrando em uma branch

No terminal do VS Code, rode:

```bash
git switch -c nome-da-branch
```

Exemplo:

```bash
git switch -c adiciona-grafico-inicial
```

Para ver em qual branch você está:

```bash
git branch
```

## Salvando suas mudanças

Depois de editar os arquivos:

1. Veja o que mudou:

```bash
git status
```

2. Adicione os arquivos ao próximo commit:

```bash
git add .
```

3. Crie um commit:

```bash
git commit -m "Adiciona grafico inicial do projeto"
```

4. Envie sua branch para o GitHub:

```bash
git push -u origin nome-da-branch
```

Na primeira vez, troque `nome-da-branch` pelo nome real da branch que você criou.

## Pull Request (PR)

Um Pull Request é o pedido para que suas mudanças entrem no projeto principal.

Na prática, ele serve para:

- mostrar o que você alterou;
- permitir revisão por outras pessoas;
- discutir mudanças antes do merge;
- manter a `main` mais estável.

### Abrindo um PR

1. Depois de fazer `git push`, o GitHub normalmente mostra o botão `Compare & pull request`.

![alt text](ver-pr.png)

2. Clique nesse botão.
3. Revise o título e a descrição do PR.
4. Clique em `Create pull request`.

### Revisando um PR

1. Veja as alterações na aba `Files changed`.
2. Se estiver tudo certo, o merge pode ser feito na aba `Conversation`.

![alt text](image-2.png)

3. Clique em `Merge pull request`.

![alt text](image-3.png)

Se houver conflitos, será necessário resolvê-los antes do merge. Quando isso acontecer, peça ajuda sem hesitar: conflito de branch é uma parte normal do trabalho com Git.

## Atualizando sua cópia local com `git pull`

Antes de começar uma tarefa nova, atualize sua `main`.

1. Volte para a branch principal:

```bash
git switch main
```

2. Puxe as alterações mais recentes do GitHub:

```bash
git pull origin main
```
