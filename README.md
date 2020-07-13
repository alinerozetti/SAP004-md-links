# Markdown Links

***

Markdown Links é uma biblioteca para ler arquivo markdown desenvolvida em Node.js, executável através de linha de comando, retornando no terminal uma lista do arquivo lido, com os links presentes.

##  Uso e instalação

Para a instalação da biblioteca é necessário possuir o Nodejs e o NPM, execute no terminal o comando:
- npm i alinerozetti

Para  utilizar a biblioteca seguem as opções:
listar a url e titulo dos links:
- md-links <path-to-file>
listar a url, titulo e validação dos links:
- md-links <path-to-file> --validate
Para verificar a quatidade de links e links únicos:
- md-links <path-to-file> --stats
Para verificar a quatidade de links, links únicos e links não funcionando:
- md-links <path-to-file> --stats --validate

## Implementações Futuras

- Testes
- Diretório e leitura do mesmo.


