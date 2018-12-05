const Discord = require('discord.js');
const cor = '#f7d200';
const ownerID = '316989384077475841';
var database = require("../../database.js");

exports.run =  async(Olivia, message, prefixes) => {
	database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {
		if(documento){
			
			var prefix = documento.prefixo
			let user = message.author
			let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
			let boticone = message.client.user.displayAvatarURL

			//if(message.author.id !== ownerID) return message.channel.send('Comando em manutenção.')
			var embed = new Discord.RichEmbed()
			.setColor(cor)
			.setThumbnail(boticone)
			.setDescription('🛒	**Mercadinho Da Olivia.**\n\n**Opções:\n\n🎁  - Para comprar caixas.**')
			.setFooter(nomeeapelido, user.displayAvatarURL)
			.setTimestamp()

			var loja = new Discord.RichEmbed()
			.setColor(cor)
			.setDescription('🛒	**Mercadinho Da Olivia.**\n\n**Para poder efetuar uma compra digite **\n``'+prefix+'buy <comum | rara | epica | lendaria | suprema> <quantidade>``')
			.setThumbnail(boticone)
			.addField('Preço das Caixas:', 'Comum - 500 \nRara - 1500 \nEpica - 3000 \nLendaria - 6000 \nSuprema - 9000', true)
			.setFooter('Clique no emoji ⬅ para voltar ao menu.', user.displayAvatarURL)
			.setTimestamp()


			message.channel.send(embed).then(msg => {
				msg.react('🎁');
				
				const coletar = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;
				const a = msg.createReactionCollector(coletar, { time: 60000 });
				
				a.on('collect', r => {
					msg.clearReactions()
					msg.edit(loja).then(r2 => {
						msg.react('⬅')

						const coletar2 = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
						const b = msg.createReactionCollector(coletar2, { time: 60000 });

						b.on('collect', r3 => {
							msg.clearReactions()
							msg.edit(embed).then(msg=>{						
								msg.react('🎁')
								})
								
						})
					})
				})

			});
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