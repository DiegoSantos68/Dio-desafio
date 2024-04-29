// Importando os módulos necessários
const { Telegraf, Scenes, session } = require('telegraf');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

// Carregando as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicializando o bot do Telegram com o token fornecido
const bot = new Telegraf('bot-faesa');

// Inicializando o cliente Prisma para interação com o banco de dados
const prisma = new PrismaClient();

// Função para verificar se o horário atual está dentro do horário comercial
const isBusinessHours = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 9 && hours < 18; 
};

// Função para lidar com as mensagens recebidas pelo bot
const handleMessage = async (ctx) => {
  // Verifica se estamos dentro do horário comercial
  if (isBusinessHours()) {
    // Responde com uma mensagem padrão e um link para mais informações
    ctx.reply('Olá! Por aqui você pode encontrar mais informações em: https://faesa.br');
  } else {
    // Se estivermos fora do horário comercial, pede o e-mail do usuário
    ctx.reply('Desculpe, estamos fora do horário comercial (09:00 às 18:00) no momento. Por favor, deixe seu e-mail para entrarmos em contato posteriormente.');
    // Reinicia a sessão de e-mail e direciona para a cena de e-mail
    ctx.session.email = null;
    ctx.scene.enter('email');
  }
};

// Define a cena de e-mail
const emailScene = new Scenes.BaseScene('email');

// Define o comportamento ao receber texto na cena de e-mail
emailScene.on('text', async (ctx) => {
  const email = ctx.message.text.trim();
  // Verifica se o e-mail é válido
  if (email.includes('@')) {
    // Se for válido, salva no banco de dados e responde com uma mensagem de agradecimento
    await prisma.email.create({ data: { email } });
    ctx.reply('Obrigado! Entraremos logo logo entraremos em contato com você.');
    ctx.scene.leave();
  } else {
    // Se não for válido, pede um e-mail válido
    ctx.reply('Por favor, forneça um endereço de e-mail válido.');
  }
});

// Cria o palco para gerenciar as cenas
const stage = new Scenes.Stage([emailScene]);

// Adiciona o middleware de sessão e o middleware do palco ao bot
bot.use(session());
bot.use(stage.middleware());

// Define as ações para os comandos 'start' e 'help', e para todas as outras mensagens
bot.start(handleMessage);
bot.help(handleMessage);
bot.on('text', handleMessage);

// Inicia o bot
bot.launch();
console.log('Bot started');
