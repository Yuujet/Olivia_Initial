const Discord = require('discord.js');
var database = require("../../database.js");

exports.run = (Olivia, message, args) => {
    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        level: docu.level,
                        xp: docu.xp
                    }
                });
                position = position.sort(function(a, b) {
                    return b.level - a.level
                    return b.xp - a.xp
                });
                position = position.filter(function(a) {
                    return Olivia.users.get(a.id)
                })
                var numero = 0;

                var dono = ["316989384077475841"]
                var toplevel = "\n" + position.slice(0, 10).map((a, posicao) => `${(posicao + 1)}   > ${Olivia.users.get(a.id).username}  \n         Nivel: ${a.level}` + (dono.includes(a.id) ? " > 👑" : "")).join("\n") + "";


                message.channel.send('**Classificação de Nivel Global.**\n\n```js\n   📋 Niveis\n' + toplevel + '```')
            }
        });
    })
}