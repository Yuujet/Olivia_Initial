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
                        coins: docu.coins
                    }
                });
                position = position.sort(function(a, b) {
                    return b.coins - a.coins
                });
                position = position.filter(function(a) {
                    return Olivia.users.get(a.id)
                })

                var dono = ["316989384077475841"]
                var moneytop = "\n" + position.slice(0, 10).map((a, posicao) => `${(posicao + 1)}   > ${Olivia.users.get(a.id).username}  \n         Créditos: ${a.coins.toLocaleString()} ` + (dono.includes(a.id) ? " > 👑" : "")).join("\n") + "";

              message.channel.send('**Classificação de Créditos Global.**\n\n```js\n   📋 Créditos\n' + moneytop + '```')
            }
        });
    })
}
