const Discord = require('discord.js');
var mongoose = require("mongoose");
var database = require("../../database.js");

exports.run = (Olivia, message, args, ops) => {

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

          var prefix = documento.prefixo

            if (!razaou.length < 1) {

                if (message.content.startsWith(prefix+"byebye add msg")) {
                    if (!mw) {

                       var embed22 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Está faltando a mensagem!`)
                      message.channel.send(embed22);

                    } else {
                      
                      documento.byebyemsg = mw
                      documento.byebye = true
                      documento.save();
                      var embed1 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Mensagem de ByeBye foi alterada para: \n**└**` + '``' + documento.byebyemsg + '``.')
                      message.channel.send(embed1);
                    }
                }

                if (message.content.startsWith(prefix+"byebye remove")) {
                    if (!documento.byebye) {
                      var embed2 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Não há um byebye definido neste servidor!`)
                      message.channel.send(embed2);
                    } else {
                        documento.byebye = false
                        documento.webhook = false
                        documento.semwebhook = false
                        documento.byebyechannel = "Nenhum"
                        documento.byebyemsg = "Nenhuma"
                        documento.save()
                        var embed3 = new Discord.RichEmbed()
                        .setColor(cor)
                        .setDescription(`**${message.author.username}**, byebye removido com sucesso!`)
                        message.channel.send(embed3);
                    }
                }

                if (message.content.startsWith(prefix+"byebye view")) {
                    if (!documento.byebye) {
                       var embed20 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Não há um byebye definido neste servidor!`)
                      message.channel.send(embed20);
                    } else {}
                      if(documento.webhook == true) {

                        let a = {
                          "true": "Webhook"
                        }  

                        var embedbyebyeinfo = new Discord.RichEmbed()
                        .setColor(cor)
                        .setAuthor('Olivia', boticone)
                        .setThumbnail(message.guild.iconURL)
                        .addField('**✉ Mensagem**', '```js\n' + documento.byebyemsg + '```')
                        .addField('**💬 Canal**', '<#' + documento.byebyechannel + '>')
                        .addField('**Tipo**', a[documento.webhook])
                          message.channel.send(embedbyebyeinfo);
                      } else if(documento.semwebhook == true) {

                        let b = {
                          "true": "Default"
                        }

                        var embedbyebyeinfo2 = new Discord.RichEmbed()
                        .setColor(cor)
                        .setAuthor('Olivia', boticone)
                        .setThumbnail(message.guild.iconURL)
                        .addField('**✉ Mensagem**', '```js\n' + documento.byebyemsg + '```')
                        .addField('**💬 Canal**', '<#' + documento.byebyechannel + '>')
                        .addField('**Tipo**', b[documento.semwebhook])
                          message.channel.send(embedbyebyeinfo2);
                      }
                    

                }

                if (message.content.startsWith(prefix+"byebye add ch")) {
                  let canal = message.mentions.channels.first()
                  if (!canal) {
                    var embed21 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Está faltando o canal para receber as mensagens!`)
                      message.channel.send(embed21);
                  } else {
                    documento.byebyechannel = message.mentions.channels.first().id
                    documento.save();
                    var embed1 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, O canal ` + '<#' + documento.byebyechannel + '> foi setado para receber as mensagens de ByeBye.')
                    message.channel.send(embed1);
                  }
                }

                if (message.content.startsWith(prefix+"byebye help")) {
                  var embedbyebyeinfo2 = new Discord.RichEmbed()
                  .setColor(cor)
                  .setAuthor('Olivia', boticone)
                  .setThumbnail(message.guild.iconURL)
                  .addField('Como usar', "```css\n{member} menciona o usuário.\n{guild} fala o nome do servidor.\n{members} fala o total usuários no servidor.\n{name} fala no nome do usuário.\n{tag} fala a tag e o nome do usuário.\n```")
                  message.channel.send(embedbyebyeinfo2);
                }

                if (message.content.startsWith(prefix+"byebye set type help")) {
                  var embedbyebyeinfo22 = new Discord.RichEmbed()
                  .setColor(cor)
                  .setAuthor('Olivia', boticone)
                  .setThumbnail(message.guild.iconURL)
                  .addField('**Byebye em mensagem**', '``"+prefix+"byebye set type default``\nEx: **[Aqui](https://cdn.discordapp.com/attachments/464270386943623188/494258283834507264/unknown.png)**')
                  .addField('**Byebye em webhook**', '``"+prefix+"byebye set type webhook``\nEx: **[Aqui](https://cdn.discordapp.com/attachments/464270386943623188/494258422154395649/unknown.png)**')
                  message.channel.send(embedbyebyeinfo22);
                }

                if (message.content.startsWith(prefix+"byebye set type default")) {
                  documento.semwebhook = true
                  documento.webhook = false
                  documento.save()
                  var embed31 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Tipo de mensagens definida para **Default**!`)
                      message.channel.send(embed31);
                }

                if (message.content.startsWith(prefix+"byebye set type webhook")) {
                  documento.webhook = true
                  documento.semwebhook = false
                  documento.save()
                  var embed30 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Tipo de mensagens definida para **webhook**!`)
                      message.channel.send(embed30);
                }

            } else {

              var embedbyebye = new Discord.RichEmbed()
              .setColor(cor)
              .setAuthor('Olivia', boticone)
              .setThumbnail(message.guild.iconURL)
              .addField("**Modulos disponiveis:**", "``"+prefix+"byebye set type < default | webhook | help >``\n``"+prefix+"byebye add < msg | ch >``\n``"+prefix+"byebye remove``\n``"+prefix+"byebye view``\n``"+prefix+"byebye help``")
              //.setFooter(`${message.author.username}`, message.author.displayAvatarURL)

                message.channel.send(embedbyebye);
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
                semwebhook: false,
                prefixo: "o."
            })
            servidor.save()
            var embedresult = new Discord.RichEmbed()
            .setColor(cor)
            .setDescription(`**${message.author.username}**, Use o comando novamente!`)
            message.channel.send(embedresult);

        }

    })

}
