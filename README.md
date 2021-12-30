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

O projeto é bem simples, uma página com um formulário na qual você preencherá o telefone do restaurante (necessário que o mesmo preste atendimento via Whatsapp), informará sua comida preferida, também alguns itens que deseja remover ou acrescentar em seu pedido, ao final poderá revisar seu pedido e mandar diretamente para o Whatsapp do restaurante através da plataforma. Simples não?

#### **Link da aplicação: [https://mariopaglia.github.io/PedeWhats/](https://mariopaglia.github.io/PedeWhats/)**

# Aos desenvolvedores e colaboradores

À partir daqui, segue informações técnicas sobre o projeto, como colaborar, desenvolver, utilização da API, etc.

## Hierárquia de arquivos e diretórios

O projeto deverá seguir a seguinte hierárquia de diretórios:

```
|- css/  
|- fonts/  
|- functions/  
|- img/
|- js/
|- lib/
|  index.html
|  LICENSE
|  README.md
```

## Como colaborar?

Para colaborar com o projeto é simples, basta realizar um [Fork](https://github.com/mariopaglia/PedeWhats/fork) do projeto, realizar modificações, correções, implementações, etc, e depois nos enviar um [Pull Request.](https://github.com/mariopaglia/PedeWhats/pulls)

Não tem experiencia em desenvolvimento? Não tem problema, deixe seu comentário/sugestão diretamente em nossas [Issues.](https://github.com/mariopaglia/PedeWhats/issues)

## Utilização da API

A API gratuita do Whatsapp é bem simples de ser usada, veja abaixo com mais detalhes como ela funciona e como deverá ser implementada no projeto:

**https://api.whatsapp.com/send?phone=seunumerodetelefone&text=sua%20mensagem**

Vamos desmembrá-la para entender melhor o funcionamento:

#### Primeira parte

https:// api.whatsapp.com/send? **phone=seunumerodetelefone**

A primeira parte, precisará conter o número do telefone, com código do país + DDD + telefone, ficando no formato à seguir: 5511999999999

#### Segunda parte

https:// api.whatsapp.com/send? phone=seunumerodetelefone& **text=sua%20mensagem**

Na segunda parte, temos a mensagem que queremos enviar ao restaurante, note que não aceita espaços, por este motivo temos que codificar com "%20", abaixo, segue link de um conversor online.

Acesse [https://r12a.github.io/app-conversion/](https://r12a.github.io/app-conversion/), escreva o texto no primeiro campo e depois pegue o resultado do campo "Percent encoding for URIs"

## Cronograma de desenvolvimento

De forma a facilitar com que novos recursos sejam implementados, pendências para o projeto serão criados diretamente nas [Issues](https://github.com/mariopaglia/PedeWhats/issues), dessa forma, tanto administradores do projeto, colaboradores ou não-colaboradores, poderão de forma fácil criar uma nova Issue solicitando melhoria, correções, etc.
