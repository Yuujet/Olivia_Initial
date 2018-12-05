const Discord = require("discord.js");
const superagent = require("superagent");
var database = require("../../database.js");

exports.run = (Olivia, message, args) => {

  	database.Guilds.findOne({
    	"_id": message.guild.id
	}, async function(erro, documento) {

    if(documento){

      	let prefix = documento.prefixo
      	let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
	    if (!message.channel.nsfw) return message.channel.send(`🔞 **| ${nomeeapelido}**, Este canal não permite imagens **NSFW**.`)

	    let razao = args.slice(0).join(' ');

	    if (!razao.length < 1) {

	        if(message.content.startsWith(prefix+'hentai gif')) {

	            let {body} = await superagent
	            .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
	            if (!message.channel.nsfw) return message.channel.send(`🔞 **| ${nomeeapelido}**, Este canal não permite gif **NSFW**.`)
	  
	            let gife = new Discord.RichEmbed()
	            .setColor('#f7d200')
	            .setDescription(`**🔞 [Gif](${body.url})**`)
	            .setImage(body.url)            

	            message.channel.send(gife);
	        }

	        if(message.content.startsWith(prefix+'hentai image')) {

	            let {body} = await superagent
	            .get(`https://nekos.life/api/v2/img/hentai`);
	            if (!message.channel.nsfw) return message.channel.send(`🔞 **| ${nomeeapelido}**, Este canal não permite imagens **NSFW**.`)
	  
	            let imagene = new Discord.RichEmbed()
	            .setColor('#f7d200')
	            .setDescription(`**🔞 [Image](${body.url})**`)
	            .setImage(body.url)
	            
	            message.channel.send(imagene);

	        }

	        if(message.content.startsWith(prefix+'hentai loli')) {

	            let {body} = await superagent
	            .get(`https://nekos.life/api/v2/img/hentai`);
	            if (!message.channel.nsfw) return message.channel.send(`🔞 **| ${nomeeapelido}**, Este canal não permite imagens **NSFW**.`)
	  
	            let lolie = new Discord.RichEmbed()
	            .setColor('#f7d200')
	            .setDescription(`**🔞 [Loli](${body.url})**`)
	            .setImage(body.url)            

	            message.channel.send(lolie);
	        }

	        if(message.content.startsWith(prefix+'hentai neko')) {

	            let {body} = await superagent
	            .get(`https://nekos.life/api/v2/img/lewd`);
	            if (!message.channel.nsfw) return message.channel.send(`🔞 **| ${nomeeapelido}**, Este canal não permite imagens **NSFW**.`)
	  
	            let nekoe = new Discord.RichEmbed()
	            .setColor('#f7d200')
	            .setDescription(`**🔞 [Neko](${body.url})**`)
	            .setImage(body.url)            

	            message.channel.send(nekoe);
	        }

    } else {

        let oicon = message.client.user.displayAvatarURL

        let help1 = new Discord.RichEmbed()
        .setThumbnail(oicon)
        .setColor("#f7d200")
        .setAuthor(nomeeapelido, message.author.displayAvatarURL)
        .setDescription('**Modulos disponiveis.** \n`'+prefix+'hentai gif`\n`'+prefix+'hentai image`\n`'+prefix+'hentai loli`\n`'+prefix+'hentai neko`')

        message.channel.send(help1)
    }
      
    } else {
        var servidor = new database.Guilds({
            _id: message.guild.id,
            prefix_on: false,
            prefixo: "o."
        })
        servidor.save()
    }
})
}