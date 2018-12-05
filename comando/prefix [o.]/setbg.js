var database = require("../../database.js");
const Discord = require('discord.js');

exports.run = (Olivia, message, args) => {

    let razaou = args.slice(0).join(' ');
    let cor = '#f7d200';
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    //let bg = message.attachments.first().url || args.slice(0).join(' ')

    database.Users.findOne({
        "_id": message.author.id
    }, function (erro, documento) {

        if(documento) {

            if(!razaou.length < 1) {

            	if (razaou.includes('http://') || razaou.includes('https://')) {
            		
                	if (razaou.includes('.png') || razaou.includes('.jpg') || razaou.includes('.jpeg')) {

                 	message.delete(message.author).catch(O_o=>{})
	                documento.background = razaou
	                documento.save();

	                var embed = new Discord.RichEmbed()
	                .setColor(cor)
	                .setImage(razaou)
	                .setDescription('**' + nomeeapelido + '**, Background alterado para')
	                message.channel.send(embed);
                } else {

                  var embed3 = new Discord.RichEmbed()
	              	.setColor(cor)
	              	.setDescription('**' + nomeeapelido + '**, Coloque um link de imagem valido.')

                  message.channel.send(embed3);
                }
              } else {
                
                var embed3 = new Discord.RichEmbed()
	              .setColor(cor)
	              .setDescription('**' + nomeeapelido + '**, Coloque um link de imagem valido.')

                message.channel.send(embed3);
              }
            } else {

              var embed2 = new Discord.RichEmbed()
              .setColor(cor)
              .setDescription('**' + nomeeapelido + '**, está faltando o link.')

              message.channel.send(embed2);
            }

        } else {
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rep: 0,
                comum: 0,
                raro: 0,
                epico: 0,
                lendario: 0,
                background: "https://i.imgur.com/PBv5FMm.jpg"
            })

            pessoa.save()
        }

    })

}
