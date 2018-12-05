const Discord = require('discord.js')
const database = require ('../../database.js')

exports.run = async (Olivia, message, args) => {

    let razaou = args.slice(0).join(' ');

    if(!message.member.hasPermission(["MANAGE_GUILD"]) && message.author.id!== '316989384077475841' ) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);
    
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {
        if(documento){
            let prefixos = documento.prefixo
            let ocon = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=2048`

            if (!razaou.length < 1) {
                
                if(message.content.startsWith(prefixos + 'prefix set')) {
                    let mw = args.slice(1).join(' ');
                    if (mw.length < 1) return message.channel.send(`**${message.author.username}**, Coloque um prefixo menor que **5** caractéres.`)
                    if (mw.length > 5) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, Você prefisa colocar um prefixo com **5** caractéres ou menos.`)


                    message.guild.member(Olivia.user).setNickname(`Olivia [${mw}]`)
                    documento.prefixo = mw
                    documento.save()

                    var embed = new Discord.RichEmbed()
                    .setThumbnail(ocon)
                    .setColor("#f7d200")
                    .setDescription(`**${message.author.username}**\n\nPrefixo do servidor **${message.guild.name}** alterado para: \n` + '``' + documento.prefixo + '``')
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                    message.channel.send(embed)
                }

                if(message.content.startsWith(prefixos + 'prefix reset')) {
                    message.guild.member(Olivia.user).setNickname('')
                    documento.prefixo = "o."
                    documento.save()

                    message.channel.send(`<:yes:471419279120793621> | **${message.author.username}**, Prefixo do servidor **${message.guild.name}** foi resetado.`)                    
                }                
            } else {
                    var help1 = new Discord.RichEmbed()
                    .setThumbnail(ocon)
                    .setColor("#f7d200")
                    .setAuthor(message.author.username, message.author.displayAvatarURL)
                    .addField(`**Meu prefix no servidor: **${message.guild.name}`, `**Prefixo: **` + '``' + documento.prefixo + '``')
                    .setDescription('**Modulos disponiveis.** \n`'+documento.prefixo+'prefix set < prefix >`\n`'+documento.prefixo+'prefix reset`')
    
                    let reason = args.slice(0).join(' ')
                    if (reason.length < 1) return message.channel.send(help1);
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