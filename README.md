# PedeWhats - O que é?

O projeto "PedeWhats" visa a solicitação de comidas através do Whatsapp, diretamente para o restaurante (caso tenha atendimento via Whatsapp). O projeto é desenvolvido e mantido por membros do grupo no Whatsapp Front-End Brasil [Link de acesso ao grupo.](https://chat.whatsapp.com/F1CVS6duSzo9yPWVPz9SuW)

## Informações sobre o projeto  

[![Release](https://img.shields.io/github/release/agenciah1code/PedeWhats.svg?label=version)](https://github.com/agenciah1code/PedeWhats/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/agenciah1code/PedeWhats.svg)](https://github.com/agenciah1code/PedeWhats/releases/latest)
![GitHub top language](https://img.shields.io/github/languages/top/agenciah1code/PedeWhats.svg)
[![GitHub issues](https://img.shields.io/github/issues/agenciah1code/PedeWhats.svg)](https://github.com/agenciah1code/PedeWhats/issues)
[![GitHub forks](https://img.shields.io/github/forks/agenciah1code/PedeWhats.svg)](https://github.com/agenciah1code/PedeWhats/network)
[![GitHub stars](https://img.shields.io/github/stars/agenciah1code/PedeWhats.svg)](https://github.com/agenciah1code/PedeWhats/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/agenciah1code/PedeWhats.svg)](https://github.com/agenciah1code/PedeWhats/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/agenciah1code/PedeWhats.svg)](https://github.com/agenciah1code/PedeWhats/blob/master/LICENSE)

# Como usar?

O projeto é bem simples, uma página com um formulário na qual você preencherá o telefone do restaurante (necessário que o mesmo preste atendimento via Whatsapp), informará sua comida preferida, também alguns itens que deseja remover ou acrescentar em seu pedido, ao final poderá revisar seu pedido e mandar diretamente para o Whatsapp do restaurante através da plataforma. Simples não?

**Link da aplicação: [https://agenciah1code.github.io/PedeWhats/](https://agenciah1code.github.io/PedeWhats/)**

# Aos desenvolvedores e colaboradores

À partir daqui, segue informações técnicas sobre o projeto, como colaborar, desenvolver, utilização da API, etc.

## Como colaborar?

Para colaborar com o projeto é simples, basta realizar um [Fork](https://github.com/agenciah1code/PedeWhats) do projeto, realizar modificações, correções, implementações, etc, e depois nos enviar um [Pull Request.](https://github.com/agenciah1code/PedeWhats/pulls)

Não tem experiencia em desenvolvimento? Não tem problema, deixe seu comentário/sugestão diretamente em nossas ["Issues".](https://github.com/agenciah1code/PedeWhats/issues)

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

O projeto inicial terá como base o pedido de "Pizzas" em sua versão 1.0, nas versões seguintes, serão implentadas novas opções de comidas como por exemplo:

- Comida japonesa
- Comida chinesa
- Comida tailandesa
- Lanches
- Salgados
- E muito mais...

## Hierárquia de diretórios

O projeto deverá seguir a seguinte hierárquia de diretórios:

--css  
--fonts  
--functions  
--img  
--js  
--lib

Além também dos arquivos "index.php", LICENSE e README.md que ficarão para fora destes diretórios.