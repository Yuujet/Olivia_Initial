const Discord = require('discord.js')
var database = require("../../database.js")

exports.run = async (Olivia, message, args) => {

    let razaou = args.slice(0).join(' ');
    let boticone = Olivia.user.displayAvatarURL;
    let cor = "#f7d200";
    let sicon = message.guild.iconURL;
    let uicon = message.author.displayAvatarURL;
    let bau = 'https://cdn.discordapp.com/attachments/440690061554614272/481513514645717003/300px-Colossal_Chest.png';
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documendo) {
        if(documendo){
            var prefix = documendo.prefixo
            database.Users.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
        
                if(documento){
                    var prefix = documendo.prefixo
                    
                    if (!razaou.length < 1) {
        
                        if (message.content.startsWith(prefix+"box open comum")) {
        
                            /*var max_coins = 700;
                            var min_coins = 100;
                            var C_aleatorio_coins = Math.floor(Math.random() * (max_coins - min_coins + 0)) + min_coins;
                            var C_coins = Math.round(C_aleatorio_coins)
        
                            var max_xp = 300;
                            var min_xp = 100;
                            var C_aleatorio_xp = Math.floor(Math.random() * (max_xp - min_xp + 0)) + min_xp;
                            var C_xp = Math.round(C_aleatorio_xp)*/
        
        
                            var premio;
                            var premio2;
                            if(documento.comum > 0){
                                premio = Math.round(Math.random() * 700)
                                premio2 = Math.round(Math.random() * 300)
                                documento.comum -= 1
                                documento.coins += premio
                                documento.xp += premio2
                                documento.save();
        
                                let ocomum = new Discord.RichEmbed()
                                .setThumbnail(bau)
                                .setColor(cor)
                                .addField(`${nomeeapelido}`, `Abriu uma caixa **Comum** e recebeu: \n\n**Créditos:** ${premio}\n**XP:** ${premio2}`)
                                .setFooter(`${nomeeapelido}`, uicon)
                                .setTimestamp()
                                message.channel.send(ocomum);
        
                            } else {
                                message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não possui caixas **Comum**.`);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box open suprema")) {
                            var premio;
                            var premio2;
                            if(documento.suprema > 0){
                                premio = Math.round(Math.random() * 6000)
                                premio2 = Math.round(Math.random() * 3500)
                                documento.suprema -= 1
                                documento.coins += premio
                                documento.xp += premio2
                                documento.save();
        
                                let ocomum = new Discord.RichEmbed()
                                .setThumbnail(bau)
                                .setColor(cor)
                                .addField(`${nomeeapelido}`, `Abriu uma caixa **Suprema** e recebeu: \n\n**Créditos:** ${premio}\n**XP:** ${premio2}`)
                                .setFooter(`${nomeeapelido}`, uicon)
                                .setTimestamp()
                                message.channel.send(ocomum);
        
                            } else {
                                message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não possui caixas **Suprema**.`);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box open rara")) {
                            var premio;
                            var premio2;
                            if(documento.raro > 0){
                                premio = Math.round(Math.random() * 1400)
                                premio2 = Math.round(Math.random() * 800)
                                documento.raro -= 1
                                documento.coins += premio
                                documento.xp += premio2
                                documento.save();
                                let orara = new Discord.RichEmbed()
                                .setThumbnail(bau)
                                .setColor(cor)
                                .addField(`${nomeeapelido}`, `Abriu uma caixa **Rara** e recebeu: \n\n**Créditos:** ${premio}\n**XP:** ${premio2}`)
                                .setFooter(`${nomeeapelido}`, uicon)
                                .setTimestamp()
                                message.channel.send(orara);
        
                            } else {
                                message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não possui caixas **Rara**.`);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box open epica")) {
                            var premio;
                            var premio2;
                            if(documento.epico > 0){
                                premio = Math.round(Math.random() * 2100)
                                premio2 = Math.round(Math.random() * 1000)
                                documento.epico -= 1
                                documento.coins += premio
                                documento.xp += premio2
                                documento.save();
                                let oepica = new Discord.RichEmbed()
                                .setThumbnail(bau)
                                .setColor(cor)
                                .addField(`${nomeeapelido}`, `Abriu uma caixa **Epica** e recebeu: \n\n**Créditos:** ${premio}\n**XP:** ${premio2}`)
                                .setFooter(`${nomeeapelido}`, uicon)
                                .setTimestamp()
                                message.channel.send(oepica);
        
                            } else {
                                message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não possui caixas **Epica**.`);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box open lendaria")) {
                            var premio;
                            var premio2;
                            if(documento.lendario > 0){
                                premio = Math.round(Math.random() * 4500)
                                premio2 = Math.round(Math.random() * 2000)
                                documento.lendario -= 1
                                documento.coins += premio
                                documento.xp += premio2
                                documento.save();
                                let olendaria = new Discord.RichEmbed()
                                .setThumbnail(bau)
                                .setColor(cor)
                                .addField(`${nomeeapelido}`, `Abriu uma caixa **Lendária** e recebeu: \n\n**Créditos:** ${premio}\n**XP:** ${premio2}`)
                                .setFooter(`${nomeeapelido}`, uicon)
                                .setTimestamp()
                                message.channel.send(olendaria);
        
                            } else {
                                message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não possui caixas **Lendária**.`);
                            }
                        }
        
                        database.Guilds.findOne({
                            "_id": message.guild.id
                        }, function (servidore, servidord) {
        
                            if(servidord){
        
                                var desenvolvedores = ["316989384077475841", "433361493770240020"]
        
                        if (message.content.startsWith(prefix+"box drop comum")) {
                            if(!desenvolvedores.includes(message.author.id)) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);
                            if(servidord.caixa){
                                message.channel.send('🎁 | Uma caixa foi dropada');
                            } else {
                                servidord.caixa = true
                                servidord.caixatipo = "Comum"
                                servidord.save()
                                message.delete()
                                var ecomum = new Discord.RichEmbed()
                                .setColor(cor)
                                .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Comum** foi dropada, use `o.pick` para pegar.')
                                .setImage(bau)
                                .setFooter(`${message.guild.name}`, sicon)
                                .setTimestamp()
                                message.channel.send(ecomum);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box drop rara")) {
                            if(!desenvolvedores.includes(message.author.id)) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);
                            if(servidord.caixa){
                                message.channel.send('🎁 | Uma caixa foi dropada');
                            } else {
                                servidord.caixa = true
                                servidord.caixatipo = "Raro"
                                servidord.save()
                                message.delete()
                                var erara = new Discord.RichEmbed()
                                .setColor(cor)
                                .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Rara** foi dropada, use `o.pick` para pegar.')
                                .setImage(bau)
                                .setFooter(`${message.guild.name}`, sicon)
                                .setTimestamp()
                                message.channel.send(erara);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box drop epica")) {
                            if(!desenvolvedores.includes(message.author.id)) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);
                            if(servidord.caixa){
                                message.channel.send('🎁 | Uma caixa foi dropada');
                            } else {
                                servidord.caixa = true
                                servidord.caixatipo = "Epico"
                                servidord.save()
                                message.delete()
                                var eepica = new Discord.RichEmbed()
                                .setColor(cor)
                                .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Epica** foi dropada, use `o.pick` para pegar.')
                                .setImage(bau)
                                .setFooter(`${message.guild.name}`, sicon)
                                .setTimestamp()
                                message.channel.send(eepica);
                            }
                        }
        
                        if (message.content.startsWith(prefix+"box drop lendaria")) {
                            if(!desenvolvedores.includes(message.author.id)) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);
                            if(servidord.caixa){
                                message.channel.send('🎁  | Uma caixa foi dropada');
                            } else {
                                servidord.caixa = true
                                servidord.caixatipo = "Lendario"
                                servidord.save()
                                message.delete()
                                var elendaria = new Discord.RichEmbed()
                                .setColor(cor)
                                .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Lendária** foi dropada, use `o.pick` para pegar.')
                                .setImage(bau)
                                .setFooter(`${message.guild.name}`, sicon)
                                .setTimestamp()
                                message.channel.send(elendaria);
                            }
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
        
                    } else {
                      let total = documento.comum + documento.raro + documento.epico + documento.lendario + documento.suprema;
                                   var embed5 = new Discord.RichEmbed()              
                      .setColor(cor)
                      .setAuthor('Olivia', boticone)
                      .setThumbnail(uicon)
                      .addField(`🎁 Suas Caixas **${total}**`,  `**Comum** - [${documento.comum}] \n**Rara** - [${documento.raro}] \n**Epica** - [${documento.epico}] \n**Lendaria** - [${documento.lendario}] \n**Suprema** - [${documento.suprema}]`)
                      .setDescription("**Como usar:**\n``"+prefix+"box open <comum | rara | epica | lendaria | suprema> ``")
                      .setFooter(`${nomeeapelido}`, uicon)
                      .setTimestamp()
        
                        message.channel.send(embed5);
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
                        suprema: 0,
                        background: "https://i.imgur.com/J3GPYFM.jpg",
                        ban: false,
                        frase: "Nenhuma"
                    })
        
                    pessoa.save()
                }
        
            })
        } else {
            var servidord = new database.Guilds({
                _id: message.guild.id,
                prefix_on: false,
                prefixo: "o."
            })
            servidord.save()
        }
    })
}
