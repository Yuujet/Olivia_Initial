const Discord = require('discord.js')
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');
var database = require("../../database.js")
var cor = '#f7d200'
var ownerID = '316989384077475841';
var day1 = 150
var day2 = 300
var day3 = 450
var day4 = 700
var day5 = 850
var day6 = 900
var day7 = 1050


exports.run = async (Olivia, message, args, ops) => {
    if(message.author.id !== ownerID) return message.channel.send(`**${message.author.username}**, este comando está em manutenção.`)
    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            var dias = documento.ddaily
            var autor = message.author.username
            var autori = message.author.displayAvatarURL
            var cont = documento.ddaily
            var time = documento.udaily

            if(dias == 0) {

                var embed = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day1}** de bônus diário. \n\nContagem: **1**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043759177793548/Dia_1.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime()
                documento.ddaily += 1
                documento.coins += day1
                documento.save()
                message.channel.send(embed);

            } else if(dias  == 1) {

                var embed1 = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day2}** de bônus diário. \n\nContagem: **2**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043761685725194/Dia_2.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime() 
                documento.ddaily += 1
                documento.coins += day2
                documento.save()
                message.channel.send(embed1);

            } else if(dias == 2) {

                var embed3 = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day3}** de bônus diário. \n\nContagem: **3**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043765356003328/Dia_3.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime()
                documento.ddaily += 1
                documento.coins += day3
                documento.save()
                message.channel.send(embed3);
            } else if(dias == 3) {

                var embed4 = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day4}** de bônus diário. \n\nContagem: **4**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043772888973323/Dia_4.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime()
                documento.ddaily += 1
                documento.coins += day4
                documento.save()
                message.channel.send(embed4);
            } else if(dias == 4) {

                var embed5 = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day5}** de bônus diário. \n\nContagem: **5**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043774558044160/Dia_5.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime()
                documento.ddaily += 1
                documento.coins += day5
                documento.save()
                message.channel.send(embed5);
            } else if(dias == 5) {

                var embed6 = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day6}** de bônus diário. \n\nContagem: **6**`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043777825406977/Dia_6.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime()
                documento.ddaily += 1
                documento.coins += day6
                documento.save()
                message.channel.send(embed6);
            } else if(dias == 6) {

                var embed7 = new Discord.RichEmbed()
                .setColor(cor)
                .setDescription(`Você acaba de receber **${day7}** de bônus diário. \n\nContagem: **7**\nContagem semanal resetada.`)
                .setThumbnail('https://cdn.discordapp.com/attachments/464270386943623188/493043780480401411/Dia_7.png')
                .setFooter(autor, autori)

                var x = new Date().getTime();
                var tempo_minimo = 24 * 60 * 60 * 1000
                var a = new Date(tempo_minimo - (x - time))
                var z = a
                var hora = z.getHours();
                var minuto = z.getMinutes();
                var segundo = z.getSeconds()
                if (x - documento.udaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja recebeu o seu bônus diário.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

                documento.udaily = new Date().getTime()
                documento.ddaily = 0
                documento.coins += day7
                documento.save()
                message.channel.send(embed7);
            }
        } else {

            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                udaily: 0,
                ddaily: 0
            })

            pessoa.save()

        }
    })

}
