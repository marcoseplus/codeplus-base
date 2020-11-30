# Projeto Start VTEX

Projeto desenvolvido para automatizar tarefas e criar fluxo de desenvolvimento de lojas Vtex mais inteligentes para a Agência E-plus.


## Primeiros passos

Clone este repositório, instale as dependências (npm i).


### Pré-requisitos

Node, npm ou yarn.


### Instalando

```
npm i
```

### Desenvolvendo

Para iniciar o desenvolvimento, você deve editar as configs que se encontram dentro do arquivo ```gulpfile.js``` e rodar o comando ```npm run start```, este comando é reponsavel por substituir textos e os nomes dos arquivos de acordo com o config alterado e assim mantermos o padrão. 

Rode o comando ```npm run dev``` para iniciar o desenvolvimento, a loja ficará disponível no endereço: http://{{loja}}.vtexlocal.com.br:3000 e não minificada tanto JS quanto CSS.

Qualquer alteração nos arquivos .scss e .js surtirão efeito no mesmo momento na página.

### Produção

Ao finalizar o desenvolvimento e subir os arquivos minificados para a plataforma VTEX executar o comando ```npm run build ``` e efetuar o upload dos arquivos js e css gerados na pasta build.

### Deployment

Ao finalizar o desenvolvimento e subir os arquivos minificados para a plataforma VTEX executar o comando ```npm run build ``` e efetuar o upload dos arquivos js e css gerados na pasta build.

## Colaboração

Front-end Eplus