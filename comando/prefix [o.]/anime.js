const log = console.log
const Discord = require('discord.js');
const mal = require('malapi').Anime;
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');

exports.run = async(Olivia, message, args) => {
    let boticon = message.client.user.displayAvatarURL;
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    
    let razaou = args.slice(0).join(' ');
    let cor = '#f7d200'

    if(!razaou) return message.channel.send('coloque um anime')
    

    try {
        if(razaou == undefined) return message.channel.send('coloque um anime')
        mal.fromName(razaou).then(anime => {

            let statu = {
                "Finished Airing": "Completo",
                "Currently Airing": "Lançamento"
            };

            let a2 = `${statu[anime.status]}`
            //let publicou = anime.aired.replace(/Dec/g, `Dezembro`).replace(/to/g, `à`)

            let numero = anime.aired
            let publicou = numero.toLocaleString('pt-BR', { style: 'text', text: 'BRL' })

            let a = `${moment([anime.aired]).format('LL')}`

            let nome = '```\n' + anime.title + '```'
            let alternativa = '```\n' + `${anime.alternativeTitles.japanese.join(', ').substring(9).trim()}` + '```'
            let episodios = '```\n' + anime.episodes + '```'
            let generos = '```\n' + `${anime.genres.join(', ')}` + '```'
            let st = '```\n' + a2 + '```'
            let estudio = '```\n' + `${anime.studios.join(', ').replace('       ', '')}` + '```'
            let pucl = '```\n' + anime.aired + '```'


                const embed = new Discord.RichEmbed()
                .setAuthor('MyAnime List', `https://cdn.discordapp.com/attachments/464270386943623188/492167947163533312/download.png`)
                .setColor(cor)
                .addField('Nome:' , `**[${anime.title}](${anime.detailsLink})**`, true)
                .addField('Alternativa:', alternativa, true)
                .addField('Episódios:', episodios, false)
                //.addField('Status:' , anime.status, true)
                .addField('Generos', generos)
                .addField('Status:', st, true)
                .addField('Estudio:', estudio, true)
                .addField('Data de Publicação:', pucl, true)
                //.setDescription(`**Synopsi:** \n${anime.synopsis.slice(0, 480)}`)
                //.setThumbnail(anime.image)

                var embedimg = new Discord.RichEmbed()
                .setDescription(`**[${anime.title}](${anime.detailsLink})**`)
                .setColor(cor)
                .setImage(anime.image)
               

                var embed2 = new Discord.RichEmbed()
                .setAuthor(nomeeapelido, message.author.displayAvatarURL)
                .setColor(cor)
                .setDescription('**Anime pesquisado: '+ `[${anime.title}](${anime.detailsLink})` +'**\n\nOpções:\n\n🖼 - Para ver a imagem do anime.\n⚙ - Para ver as info do anime.')
                
                message.channel.send(embed2).then(msg=>{
                    msg.react('🖼').then(r=>{
                        msg.react('⚙')

                        const coletar = (reaction, user) => reaction.emoji.name === '🖼' && user.id === message.author.id;
                        const a = msg.createReactionCollector(coletar, { time: 60000 });
                        const coletar2 = (reaction, user) => reaction.emoji.name === '⚙' && user.id === message.author.id;
                        const b = msg.createReactionCollector(coletar2, { time: 60000 });
                        const coletar3 = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
				        const c = msg.createReactionCollector(coletar3, { time: 60000 });

                        a.on('collect', r3 => {
                            msg.clearReactions()
                            msg.edit(embedimg).then(msg=>{						
                                msg.react('⬅').then(r2=>{
                                    msg.react('⚙')
                                
                                    
                                })
                            })   
                        })

                        b.on('collect', r3 => {
                            msg.clearReactions()
                            msg.edit(embed).then(msg=>{                     
                                msg.react('⬅')
                                        
                                            
                            })
                        })

                        c.on('collect', r3 => {
                            msg.clearReactions()
                            msg.edit(embed2).then(msg=>{                        
                                msg.react('🖼').then(r2=>{
                                    msg.react('⚙')
                                })
                            })
                        })
                })
            })
            
        });
    } catch(err) {
        log(err);
    }
}