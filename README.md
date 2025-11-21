# Desafio Cypress - QA - Automação de Testes E2E para E-commerce

Projeto de Automação em **Cypress** para Testes E2E para E-commerce.

---

## 🎯 Objetivo do Projeto 🎯

O projeto tem como objetivo utilizar **Cypress** para automação de Testes end-to-end
para validação de um fluxo completo do site testado. O foco da automação desse
repositorio é na funcionalidade "Carrinho" do site, realizando testes com foco em validar
o maximo de cenarios de testes possiveis para essa função do e-commerce, visando facilitar
a validação e reutilização de metodos, elementos e comandos para outras funções futuramente.

### 🛍 Site Utilizado: EBAC-SHOP Loja de Teste 🛍
|Link:|http://lojaebac.ebaconline.art.br|
|-----|---------------------------------|

---

## 🛠 Tecnologias e Ferramentas Utilizadas 🛠
| Tecnologia / Biblioteca   | Descrição                                     |
|---------------------------|-----------------------------------------------|
| Node.js                   | Ambiente de execução JavaScript               |
| Cypress                   | Framework de Testes                           |
| VsCode                    | Editor de Código                              |
| Git Bash                  | Versionamento de Código                       |

---
## ⚙ Antes de Tudo: Como Configurar! ⚙
### 1 Passo - Clone o repositório
```sh
git clone https://github.com/AlexAlcolea/desafio-cypress-QA.git
```
### 2 Passo - Instale as dependencias do **node.js**
```sh
npm install
```
### 3 Passo - Execute os Testes
**Modo Interativo**
```sh
npx cypress open
```
OU
**Modo Headless**
```sh
npx cypress run 
```

---
## 👨‍🔬 Funcionalidade Automatizada e Cenários de Teste 👨‍🔬
A funcionalidade escolhida para automatizar foi o "Carrinho" do site,
visando que essa função possui uma alta quantidade de cenarios como 
validação da quantidade, total, imagem do produto, remoção do produto, aplicar cupom
de desconto e seguir para o "Checkout", os elementos e metodos utilizados podem ser reaproveitados
e a funcionalidade pode ser quase que totalmente validade com esses cenarios, visando isso, foram implementados
os seguintes cenários de teste:

| N° do Cenario | Descrição do Cenario                                           |
|--------------|----------------------------------------------------------------|
| Cenario 1.1  | Acessando Carrinho por Botão "Mini Cart"                        |
| Cenario 1.2  | Acessando Carrinho por Botão "Ver Carrinho"                     |
| Cenario 1.3  | Validando aumento da quantidade de itens e total                |
| Cenario 1.4  | Validando aplicar cupom de desconto "desconto10"                |
| Cenario 1.5  | Validando aumento da quantidade de itens com cupom de desconto  |
| Cenario 1.6  | Validando tentar aplicar mais de um cupom de desconto           |
| Cenario 1.7  | Validando adicionar cupom invalido                              |
| Cenario 1.8  | Validando remover cupom e atualização do total                  |
| Cenario 1.9  | Validando remover item por Botão "Menos" da quantidade          |
| Cenario 2.0  | Validando remover item por Botão "Remove"                       |
| Cenario 2.1  | Validando Botão "Desfazer"                                      |
| Cenario 2.2  | Validando Botão "Concluir Compra"                               |


---

## 👨‍💻 Autor 👨‍💻 
### Alex Alcoléa
Analista de Testes de Software 
