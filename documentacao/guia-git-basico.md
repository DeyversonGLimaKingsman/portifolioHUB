# Guia Git Básico

Este guia tem como objetivo apresentar os conceitos fundamentais do Git e os comandos básicos para começar a versionar e gerenciar seus projetos.

## O que é Git?

Git é um sistema de controle de versão distribuído. Ele permite que você acompanhe e registre mudanças no seu código-fonte ao longo do tempo. A principal vantagem do Git é que ele é distribuído, ou seja, cada desenvolvedor tem uma cópia completa do repositório em seu computador.

## Como Iniciar com Git

### 1. Instalando o Git

Para usar o Git, você precisa instalá-lo em sua máquina. Acesse o (https://git-scm.com/) e faça o download para o seu sistema operacional.

### 2. Configuração Inicial

Após instalar o Git, configure seu nome e e-mail para associar suas mudanças a uma identidade:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
```

### 3. Inicializando um Repositório

Para criar um repositório Git em um diretório, use o comando:

```bash
git init
```

Isso criará um repositório local no diretório atual.

## Comandos Básicos do Git

### 4. Verificando o Status do Repositório

Para verificar o estado atual do seu repositório, use:

```bash
git status
```

Esse comando informa quais arquivos foram alterados, quais estão prontos para serem confirmados (committed) e quais ainda precisam ser adicionados.

### 5. Adicionando Arquivos

Antes de registrar suas mudanças no Git, você precisa adicionar os arquivos alterados ao "stage". Use:

```bash
git add nome-do-arquivo
```

Ou para adicionar todos os arquivos modificados:

```bash
git add .
```

### 6. Fazendo um Commit

Um commit é como um "ponto de salvamento" no seu repositório. Após adicionar seus arquivos, use:

```bash
git commit -m "Mensagem descrevendo as mudanças"
```

A mensagem deve ser breve e descritiva sobre as alterações feitas.

### 7. Visualizando o Histórico de Commits

Para ver o histórico dos commits realizados, use:

```bash
git log
```

Este comando mostra os commits feitos no repositório com detalhes como a data, autor e a mensagem do commit.

### 8. Criando um Repositório Remoto

Para compartilhar seu código com outros ou fazer backup, você pode usar um repositório remoto (ex: no GitHub, GitLab, Bitbucket). Para adicionar um repositório remoto:

```bash
git remote add origin https://github.com/usuario/nome-do-repositorio.git
```

### 9. Enviando (Push) suas Alterações para o Repositório Remoto

Após configurar o repositório remoto, você pode enviar suas mudanças com:

```bash
git push origin main
```

O comando envia suas alterações para o branch principal (geralmente chamado `main`).

### 10. Baixando (Pull) Alterações do Repositório Remoto

Para obter as últimas alterações de um repositório remoto, use:

```bash
git pull origin main
```

Isso vai baixar as atualizações feitas por outras pessoas e integrar com seu repositório local.

### 11. Criando e Mudando de Branches

Branches (ramificações) permitem que você trabalhe em novas funcionalidades sem afetar o código principal. Para criar uma nova branch e mudar para ela:

```bash
git checkout -b nome-da-branch
```

Para mudar de branch:

```bash
git checkout nome-da-branch
```

### 12. Mesclando (Merge) Branches

Após terminar de trabalhar em uma branch, você pode querer integrar suas alterações de volta à branch principal (`main`). Para fazer isso, primeiro mude para a branch principal:

```bash
git checkout main
```

E então execute o merge:

```bash
git merge nome-da-branch
```

### 13. Revertendo Mudanças

Se você quiser desfazer alterações feitas em um arquivo específico, use:

```bash
git checkout -- nome-do-arquivo
```

Se você já cometeu uma mudança e quer desfazê-la, use:

```bash
git revert <ID_do_commit>
```

Esse comando cria um novo commit que desfaz as mudanças feitas.

## Conclusão

Git é uma ferramenta poderosa para gerenciar o versionamento do seu código. Com os comandos básicos que vimos neste guia, você pode iniciar seus projetos de forma organizada e eficiente. Não se esqueça de usar boas práticas, como escrever mensagens de commit claras e frequentemente fazer commits para garantir que seu histórico de alterações seja bem documentado.