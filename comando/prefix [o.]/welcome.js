const Discord = require('discord.js');
var mongoose = require("mongoose");
var database = require("../../database.js");

exports.run = (Olivia, message, args, prefixes) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let mw = args.slice(2).join(' ');
    let boticone = Olivia.user.displayAvatarURL;
    let cor = "#f7d200";

    if (!message.member.hasPermission(["MANAGE_GUILD"]) && message.author.id!== '316989384077475841' ) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);

    database.Guilds.findOne({

      "_id": message.guild.id
    }, function(erro, documento) {
        

        if (documento) {

            if (!razaou.length < 1) {
              var prefix = prefixes.prefixos

              if(message.content.startsWith(prefix+'welcome add msg')) {
                    if (!mw) {

                       var embed22 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Está faltando a mensagem!`)
                      message.channel.send(embed22);

                    } else {
                      
                      documento.welcomemsg = mw
                      documento.welcome = true
                      documento.save();
                      var embed1 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Mensagem de Bem-Vindo foi alterada para: \n**└**` + '``' + documento.welcomemsg + '``.')
                      message.channel.send(embed1);
                    }
                }

                if (message.content.startsWith(prefix+"welcome remove")) {
                    if (!documento.welcome) {
                      var embed2 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Não há um welcome definido neste servidor!`)
                      message.channel.send(embed2);
                    } else {
                        documento.welcome = false
                        documento.webhook = false
                        documento.semwebhook = false
                        documento.welcomechannel = "Nenhum"
                        documento.welcomemsg = "Nenhuma"
                        documento.save()
                        var embed3 = new Discord.RichEmbed()
                        .setColor(cor)
                        .setDescription(`**${message.author.username}**, Welcome removido com sucesso!`)
                        message.channel.send(embed3);
                    }
                }

                if (message.content.startsWith(prefix+"welcome view")) {
                    if (!documento.welcome) {
                       var embed20 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Não há um welcome definido neste servidor!`)
                      message.channel.send(embed20);
                    } else {}
                      if(documento.webhook == true) {

                        let a = {
                          "true": "Webhook"
                        }  

                        var embedwelcomeinfo = new Discord.RichEmbed()
                        .setColor(cor)
                        .setAuthor('Olivia', boticone)
                        .setThumbnail(message.guild.iconURL)
                        .addField('**✉ Mensagem**', '```js\n' + documento.welcomemsg + '```')
                        .addField('**💬 Canal**', '<#' + documento.welcomechannel + '>')
                        .addField('**Tipo**', a[documento.webhook])
                          message.channel.send(embedwelcomeinfo);
                      } else if(documento.semwebhook == true) {

                        let b = {
                          "true": "Default"
                        }

                        var embedwelcomeinfo2 = new Discord.RichEmbed()
                        .setColor(cor)
                        .setAuthor('Olivia', boticone)
                        .setThumbnail(message.guild.iconURL)
                        .addField('**✉ Mensagem**', '```js\n' + documento.welcomemsg + '```')
                        .addField('**💬 Canal**', '<#' + documento.welcomechannel + '>')
                        .addField('**Tipo**', b[documento.semwebhook])
                          message.channel.send(embedwelcomeinfo2);
                      }
                    

                }

                if (message.content.startsWith(prefix+"welcome add ch")) {
                  let canal = message.mentions.channels.first()
                  if (!canal) {
                    var embed21 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Está faltando o canal para receber as mensagens!`)
                      message.channel.send(embed21);
                  } else {
                    documento.welcomechannel = message.mentions.channels.first().id
                    documento.save();
                    var embed1 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, O canal ` + '<#' + documento.welcomechannel + '> foi setado para receber as mensagens de Bem-Vindo.')
                    message.channel.send(embed1);
                  }
                }

                if (message.content.startsWith(prefix+"welcome help")) {
                  var embedwelcomeinfo2 = new Discord.RichEmbed()
                  .setColor(cor)
                  .setAuthor('Olivia', boticone)
                  .setThumbnail(message.guild.iconURL)
                  .addField('Como usar', "```css\n{member} menciona o usuário.\n{guild} fala o nome do servidor.\n{members} fala o total usuários no servidor.\n{name} fala no nome do usuário.\n{tag} fala a tag e o nome do usuário.\n```")
                  message.channel.send(embedwelcomeinfo2);
                }

                if (message.content.startsWith(prefix+"welcome set type help")) {
                  var embedwelcomeinfo22 = new Discord.RichEmbed()
                  .setColor(cor)
                  .setAuthor('Olivia', boticone)
                  .setThumbnail(message.guild.iconURL)
                  .addField('**Welcome em mensagem**', '``o.welcome set type default``\nEx: **[Aqui](https://cdn.discordapp.com/attachments/464270386943623188/494258283834507264/unknown.png)**')
                  .addField('**Welcome em webhook**', '``o.welcome set type webhook``\nEx: **[Aqui](https://cdn.discordapp.com/attachments/464270386943623188/494258422154395649/unknown.png)**')
                  message.channel.send(embedwelcomeinfo22);
                }

                if (message.content.startsWith(prefix+"welcome set type default")) {
                  documento.semwebhook = true
                  documento.webhook = false
                  documento.save()
                  var embed31 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Tipo de mensagens definida para **Default**!`)
                      message.channel.send(embed31);
                }

                if (message.content.startsWith(prefix+"welcome set type webhook")) {
                  documento.webhook = true
                  documento.semwebhook = false
                  documento.save()
                  var embed30 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Tipo de mensagens definida para **webhook**!`)
                      message.channel.send(embed30);
                }

            } else {

              var embedwelcome = new Discord.RichEmbed()
              .setColor(cor)
              .setAuthor('Olivia', boticone)
              .setThumbnail(message.guild.iconURL)
              .addField("**Modulos disponiveis:**", "``"+documento.prefixo+"welcome set type < default | webhook | help >``\n``"+documento.prefixo+"welcome add < msg | ch >``\n``"+documento.prefixo+"welcome remove``\n``"+documento.prefixo+"welcome view``\n``"+documento.prefixo+"welcome help``")
              //.setFooter(`${message.author.username}`, message.author.displayAvatarURL)

                message.channel.send(embedwelcome);
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
                webhook: false,
                semwebhook: false
            })
            servidor.save()
            var embedresult = new Discord.RichEmbed()
            .setColor(cor)
            .setDescription(`**${message.author.username}**, Use o comando novamente!`)
            message.channel.send(embedresult);

        }

    })

}
