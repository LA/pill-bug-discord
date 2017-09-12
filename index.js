const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('ready');
});

client.on('message', (message) => {
  if (message.content.includes('!PBRoll')) {
    const msg = message.content.split(' ');

    if(msg.length == 2) {
      const startNum = 1;
      const num = parseInt(msg[1]);
      const returnNum = Math.floor(Math.random() * num) + startNum;

      message.reply('Rollie Pollie rolled ' + returnNum + '.');
    }
  }
});

const token = process.env.TOKEN;
client.login(token);
