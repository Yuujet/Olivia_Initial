const Discord = require('discord.js')
var database = require("../../database.js")

exports.run = async (Olivia, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let boticone = Olivia.user.displayAvatarURL;
    let cor = "#f7d200";

    var desenvolvedores = ["316989384077475841"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_GUILD"]))
    return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {
            var prefix = documento.prefixo
            
            if (!razaou.length < 1) {

                if (message.content.startsWith(prefix+"config nivel")) {
                    if(documento.leveis){
                        documento.leveis = false
                        documento.save()
                        message.channel.send(`<:dnd:438399396548313091>** | ${message.author.username}**, o sistema de **Nivel** foi desativado.`);
                    } else {
                        documento.leveis = true
                        documento.save()
                        message.channel.send(`<:online:438399398808911882>** | ${message.author.username}**, o sistema de **Nivel** foi ativado.`);
                    }
                }

                if (message.content.startsWith(prefix+"config credito")) {
                    if(documento.coins){
                        documento.coins = false
                        documento.save()
                        message.channel.send(`<:dnd:438399396548313091>** | ${message.author.username}**, o sistema de **Créditos** foi desativado.`);
                    } else {
                        documento.coins = true
                        documento.save()
                        message.channel.send(`<:online:438399398808911882>** | ${message.author.username}**, o sistema de **Créditos** foi ativado.`);
                    }
                }

                if (message.content.startsWith(prefix+"config caixa")) {
                    if(documento.box){
                        documento.box = false
                        documento.save()
                        message.channel.send(`<:dnd:438399396548313091>** | ${message.author.username}**, o sistema de **Caixa** foi desativado.`);
                    } else {
                        documento.box = true
                          documento.save()
                        message.channel.send(`<:online:438399398808911882>** | ${message.author.username}**, o sistema de **Caixa** foi ativado.`);
                    }
                }

                if (message.content.startsWith(prefix+"config autorole")) {
                    if(documento.autorole){
                        documento.autorole = false
                        documento.save()
                        message.channel.send(`<:dnd:438399396548313091>** | ${message.author.username}**, o sistema de **Autorole** foi desativado.`);
                    } else {
                        documento.autorole = true
                        documento.save()
                        message.channel.send(`<:online:438399398808911882>** | ${message.author.username}**, o sistema de **Autorole** foi ativado.`);
                    }
                }



            } else {

              //var caixa = documento.box
              //var status = caixa.replace('true', '<:online:438399398808911882> Ligado') && caixa.replace('false','<:dnd:438399396548313091> Desligado')

              {//caixa
                var ligado = '<:online:438399398808911882>Ligado'
                var desligado = '<:dnd:438399396548313091>Desligado'
                var coiso = documento.box
                var caixa;
                if(coiso === true) caixa = ligado;
                if(coiso === false) caixa = desligado;
              }
              {//money
                var ligado1 = '<:online:438399398808911882>Ligado'
                var desligado1 = '<:dnd:438399396548313091>Desligado'
                var coiso2 = documento.coins
                var money;
                if(coiso2 === true) money = ligado1;
                if(coiso2 === false) money = desligado1;
              }
              {//nivel
                var ligado2 = '<:online:438399398808911882>Ligado'
                var desligado2 = '<:dnd:438399396548313091>Desligado'
                var coiso3 = documento.leveis
                var nivel;
                if(coiso3 === true) nivel = ligado2;
                if(coiso3 === false) nivel = desligado2;
              }
              {//autorole
                var ligado3 = '<:online:438399398808911882>Ligado'
                var desligado3 = '<:dnd:438399396548313091>Desligado'
                var coiso4 = documento.autorole
                var autorole;
                if(coiso4 === true) autorole = ligado3;
                if(coiso4 === false) autorole = desligado3;
              }              

              var embed =  new Discord.RichEmbed()
              .setColor(cor)
              .setAuthor('Olivia', boticone)
              .setThumbnail(message.guild.iconURL)
              .setDescription('**Sistemas.**')
              .addField('**Nivel**', `**Status:** ${nivel}\n`+'``'+prefix+'config nivel``', true)
              .addField('**Caixa**', `**Status:** ${caixa}\n`+'``'+prefix+'config caixa``', true)
              .addField('**Creditos**', `**Status:** ${money}\n`+'``'+prefix+'config credito``', true)
              .addField('**AutoRole**', `**Status:** ${autorole}\n`+'``'+prefix+'config autorole``', true)

                message.channel.send(embed);
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum",
                leveis: true,
                coins: true,
                box: true,
                caixa: false,
                caixatipo: "Comum",
                prefixo: "o."
            })
            servidor.save()
            var embedresult = new Discord.RichEmbed()
            .setColor(cor)
            .setDescription(`**${message.author.username}**, Use o comando novamente!`)
            message.reply(embedresult);

        }

    })

}
