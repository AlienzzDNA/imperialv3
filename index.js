const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const bot = new Discord.Client();



bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
  })
  
  bot.on('message', (msg) => {
    if (msg.content === 'ping') {
      msg.channel.send('pong')
    }
  })

  bot.on('message', (msg) => {
    if (msg.content === '#vote') {
      msg.channel.send('')
    }
  })

bot.login('OTAyNzUzNjA1MjA2MDI0MjEy.YXjAzw.iSo8f5qV1lhj463JwkB7tzCdsXY')