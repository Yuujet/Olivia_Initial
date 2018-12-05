const Discord = require('discord.js');
const ownerID = '316989384077475841';
var database = require("../../database.js")

exports.run = async(Olivia, message, args) => {
        if (message.content.includes("token")) return message.channel.send(`**${message.author.username}**, não posso mostrar meu **Token** aqui.`)
        if(message.author.id !== ownerID) return
        function clean(text) {
                    if (typeof (text) === 'string') {return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));}
                    else {return text;}
                }
                try {
                    let  code = args.join(' ');

                    let evaled = eval(code);

                    if (typeof evaled !== 'string') {evaled = require('util').inspect(evaled);}

                    message.channel.send('📤 **Codigo saida** \n```js\n' + clean(evaled) + '\n```');
        }
                catch (err) {                    
                    message.channel.send('❌ **Erro** \n```js\n' + clean(err) + '\n```');
                }
      }
