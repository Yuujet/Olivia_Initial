const Discord = require('discord.js')
const database = require("../../database.js")
let ownerID = '316989384077475841';

exports.run = async (Olivia, message, args) => {

    if(message.author.id !== ownerID) return message.channel.send(`**${message.author.username}**, este comando está em manutenção.`)

    var membro = message.mentions.users.first()

    if(!membro) return message.channel.send(`**${message.author.username}**, está faltando mencionar alguem!`)

    database.Users.findOne({
        "_id": message.mentions.users.first().id
    }, function(erro, documento) {

        
                if (documento) {


                    documento.vipbronze = true

                    documento.save()

                    message.channel.send(`${message.author.username}, definiu o ${membro.username} como vip.`)


                } else {

                    var pessoa = new database.Users({
                        _id: message.mentions.users.first().id,
                        vipbronze: false
                    })
        
                    pessoa.save()
        
                }
    })
}