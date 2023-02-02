# PedeWhats - O que é?

O projeto "PedeWhats" visa a solicitação de comidas através do Whatsapp, diretamente para o restaurante (caso tenha atendimento via Whatsapp).

## Informações sobre o projeto  

[![Release](https://img.shields.io/github/release/mariopaglia/PedeWhats.svg?label=version)](https://github.com/mariopaglia/PedeWhats/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/mariopaglia/PedeWhats.svg)](https://github.com/mariopaglia/PedeWhats/releases/latest)
![GitHub top language](https://img.shields.io/github/languages/top/mariopaglia/PedeWhats.svg)
[![GitHub issues](https://img.shields.io/github/issues/mariopaglia/PedeWhats.svg)](https://github.com/mariopaglia/PedeWhats/issues)
[![GitHub forks](https://img.shields.io/github/forks/mariopaglia/PedeWhats.svg)](https://github.com/mariopaglia/PedeWhats/network)
[![GitHub stars](https://img.shields.io/github/stars/mariopaglia/PedeWhats.svg)](https://github.com/mariopaglia/PedeWhats/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/mariopaglia/PedeWhats.svg)](https://github.com/mariopaglia/PedeWhats/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/mariopaglia/PedeWhats.svg)](https://github.com/mariopaglia/PedeWhats/blob/master/LICENSE)

## Como usar?

O projeto consiste em uma página com um formulário para que você possa preencher as informações do seu pedido de comida. É necessário informar o telefone do restaurante que presta atendimento via WhatsApp, selecionar a comida preferida, adicionar ou excluir itens e revisar o pedido antes de enviá-lo diretamente para o WhatsApp do restaurante, tudo através da plataforma. Fácil e prático, não é mesmo?

#### **Acesse a aplicação em: [https://mariopaglia.github.io/PedeWhats/](https://mariopaglia.github.io/PedeWhats/)**

# Aos desenvolvedores e colaboradores

A seguir, você encontrará informações técnicas sobre o projeto, incluindo instruções para colaborar, desenvolver, usar a API, entre outras coisas.

## Como colaborar?

Para contribuir com o projeto, basta realizar um [Fork](https://github.com/mariopaglia/PedeWhats/fork) do repositório e realizar as modificações, correções e implementações que desejar. Em seguida, basta enviar um [Pull request](https://github.com/mariopaglia/PedeWhats/pulls).

Se você não tem experiência em desenvolvimento, não se preocupe. Você ainda pode participar deixando sugestões ou comentários nas [Issues](https://github.com/mariopaglia/PedeWhats/issues).

## Utilização da API

A API gratuita do WhatsApp é simples de ser usada. Veja como ela funciona:

https://api.whatsapp.com/send?phone=CÓDIGO_PAÍS+DDD+NÚMERO_DE_TELEFONE&text=SUA_MENSAGEM_CODIFICADA

Exemplo: https://api.whatsapp.com/send?phone=5511999999999&text=Sua%20mensagem

Onde:
- "CÓDIGO_PAÍS+DDD+NÚMERO_DE_TELEFONE" deve conter o número de telefone completo, com o código do país, DDD e número.
- "SUA_MENSAGEM_CODIFICADA" é a mensagem que você deseja enviar, codificada para retirar os espaços (encodeURI).

## Cronograma de desenvolvimento

Para tornar a implementação de novos recursos mais fácil, as pendências para o projeto serão registradas diretamente nas [Issues do projeto](https://github.com/mariopaglia/PedeWhats/issues). Dessa forma, tanto administradores, colaboradores quanto pessoas externas ao projeto poderão criar facilmente uma nova Issue para solicitar melhorias, correções, etc.
