const Discord = require('discord.js');
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');
var database = require("../../database.js");
var cor = '#f7d200';

exports.run = async (Olivia, message, args) => {
    let user = message.mentions.users.first()
    let user2 = message.author
        
        if (!user) return message.channel.send(`**${message.author.username}**, está faltando mencionar alguem!`)
        if (message.mentions.users.first().id == message.author.id) return message.channel.send(`**${message.author.username}**, Você não pode dar rep para si mesmo.`);
		if (message.mentions.users.first().bot) return message.channel.send(`**${message.author.username}**, Você não pode dar rep para um bot.`);
        
        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {
					
	                        var autor = message.author.username
	                        var autori = message.author.displayAvatarURL

	                        var embed = new Discord.RichEmbed()
	                        .setColor(cor)
	                        .setDescription(`Você acaba de dar um ponto de reputação para **${message.mentions.users.first().username}**.`)
	                        .setFooter(autor, autori)

	                        var time = documento.rdaily

	                        var x = new Date().getTime();
	                        var tempo_minimo = 24 * 60 * 60 * 1000
	                        var a = new Date(tempo_minimo - (x - time))
	                        var z = a
	                        var hora = z.getHours();
	                        var minuto = z.getMinutes();
	                        var segundo = z.getSeconds()
	                        if (x - documento.rdaily < tempo_minimo ) return message.channel.send(`**${message.author.username}**, Você ja deu rep.\n**Tempo restante:** ` + '``' + hora + '``:``' + minuto + '``:``' + segundo + '``')

	                        doc2.rep += 1
	                        documento.rdaily = new Date().getTime()
	                        documento.save()
	                        doc2.save()
	                        message.channel.send(embed);
						

                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
                            rep: 0
                        })
                        pessoa.save()
                    }

                } else {

                    var pessoa = new database.Users({
                        _id: message.author.id,
                        rep: 0,
                        rdaily: 0
                    })
                    pessoa.save()
                }
            })
        })
}