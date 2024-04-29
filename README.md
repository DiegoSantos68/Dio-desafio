# Guia de Utilização do Bot de Atendimento

Este guia fornece instruções sobre como utilizar o Bot de Atendimento desenvolvido para uma empresa atacadista. O bot está disponível no aplicativo Telegram e oferece suporte durante o horário comercial.

## Requisitos Prévios

Antes de começar, certifique-se de ter os seguintes requisitos:

- Ter o aplicativo Telegram instalado em seu dispositivo.
- Possuir uma conta no Telegram para interagir com o bot.

## Como Iniciar o Bot

Para iniciar o bot, siga as etapas abaixo:

1. Procure pelo nome de usuário do bot no Telegram ou acesse o link fornecido para iniciar uma conversa.
   - Nome de usuário do bot: [inserir nome de usuário aqui]

## Enviando Mensagens

Após iniciar a conversa com o bot, você pode enviar mensagens para iniciar a interação. Veja como proceder:

### Horário Comercial (09:00 às 18:00)

- Se você enviar uma mensagem durante o horário comercial, o bot responderá automaticamente com um link para mais informações.

### Fora do Horário Comercial

- Se você enviar uma mensagem fora do horário comercial, o bot informará sobre o horário de funcionamento da empresa (09:00 às 18:00) e solicitará seu e-mail para contato.
- Siga as instruções fornecidas pelo bot para fornecer seu e-mail.

## Acesso aos Dados

Os e-mails fornecidos fora do horário comercial são armazenados em nosso banco de dados SQLite. Saiba mais:

- Os e-mails são armazenados de forma segura e serão utilizados apenas para contato durante o horário comercial.

## Instalação das Bibliotecas

Para configurar o ambiente de desenvolvimento e executar o bot, siga as instruções abaixo para instalar as bibliotecas necessárias:

1. **Telegraf**:
   - Execute o comando `npm install telegraf` para instalar a biblioteca Telegraf, que permite interagir com a API do Telegram.

2. **Prisma Client**:
   - Execute o comando `npm install @prisma/client` para instalar o Prisma Client, um ORM para bancos de dados.

3. **dotenv**:
   - Execute o comando `npm install dotenv` para instalar a biblioteca dotenv, que permite carregar variáveis de ambiente de um arquivo `.env`.

4. **Prisma CLI** (Opcional):
   - Se ainda não tiver instalado, você pode instalar a Prisma CLI globalmente executando o comando `npm install -g prisma`. Esta CLI é usada para gerar o cliente Prisma a partir do arquivo de esquema.
