const discord = require('discord.js');
const snek = require('snekfetch');
const twemoji = require('twemoji');
const fs = require('fs');

exports.run = async (Olivia, message, args, ops) => {

  let razao = args.slice(0).join(' ');
  let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username

    if (!razao.length < 1) {
      try {
        const emote = discord.Util.parseEmoji(args[0]);
        if (emote.animated === true) {
          const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?size=2048`;
          const { body: buffer } = await snek.get(`${URL}`);
          const toSend = fs.writeFileSync('emote.gif', buffer);          
          message.channel.send({ file: 'emote.gif' });
        } else if (emote.id === null) {
          const twemote = twemoji.parse(args[0]);
          const regex = /src="(.+)"/g;
          const regTwemote = regex.exec(twemote)[1];
          const { body: buffer } = await snek.get(`${regTwemote}`);
          const toSend = fs.writeFileSync('emote.png', buffer);
          await message.channel.send({ file: 'emote.png' });
        } else {
          const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png?size=2048`;
          const { body: buffer } = await snek.get(`${URL}`);
          const toSend = fs.writeFileSync('emote.png', buffer);
          message.channel.send({ file: 'emote.png' });
        } 
      } catch (error) {
        if (error.message === 'TypeError: Cannot read property \'1\' of null') {
          message.channel.send('Nada.')
        }
      }
    } else {
      message.channel.send('**'+ nomeeapelido + '**, Coloque um emoji para eu poder ampliar.')
    }

}
