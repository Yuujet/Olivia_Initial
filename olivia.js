const Discord = require('discord.js');
const { TOKEN2 } = require('./config.js')
const Olivia = new Discord.Client({
    fetchAllMembers: true
});
const prefix = 'o.';
const ownerID = '316989384077475841';
const active = new Map();
const fs = require('fs');
const database = require("./database.js");
const cor = '#f7d200';
const bau = 'https://cdn.discordapp.com/attachments/440690061554614272/481513514645717003/300px-Colossal_Chest.png';
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3NDc5NTUxMTIzMzM4MDM1MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTM0MTUxNjk1fQ.K2pUIxCsqfRcEpjAUEoJcV3Pcbufz7lRlo5URsJmNxM', Olivia);

Olivia.on("ready", async () => {
    Olivia.user.setActivity(`Use - o.ajuda | Servidores: ${Olivia.guilds.size}`, {url: 'https://twitch.tv/JeTe', type: "STREAMING"});
});

Olivia.on("guildCreate", guild => {
    Olivia.user.setActivity(`Use - o.ajuda | Servidores: ${Olivia.guilds.size}`, {url: 'https://twitch.tv/JeTe', type: "STREAMING"});  
});
  
Olivia.on("guildDelete", guild => {
    Olivia.user.setActivity(`Use - o.ajuda | Servidores: ${Olivia.guilds.size}`, {url: 'https://twitch.tv/JeTe', type: "STREAMING"});
});

//Sistema de BemVindo - Auto Role
Olivia.on('guildMemberAdd', member => {

  database.Guilds.findOne({
      "_id": member.guild.id
  }, function (erro, documento) {

      if(documento) {

          if(documento.welcome) {

              var bemvindo = documento.welcomemsg
              if(member.guild.channels.get(documento.welcomechannel)) {
                if(documento.webhook == true) {
                    Olivia.guilds.get(member.guild.id).channels.get(documento.welcomechannel).createWebhook(member.guild.name, member.guild.iconURL).then(w => {
                        w.send(bemvindo.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{members}/g, `${member.guild.members.size}`).replace(/{name}/g, `${member.user.username}`).replace(/{tag}/g, `${member.user.tag}`));
                        w.delete()
                    })   
                } else if(documento.semwebhook == true) {
                    Olivia.guilds.get(member.guild.id).channels.get(documento.welcomechannel).send(bemvindo.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{members}/g, `${member.guild.members.size}`).replace(/{name}/g, `${member.user.username}`).replace(/{tag}/g, `${member.user.tag}`))
                }
                    
              } else {}

          } else {}

          if(documento.autorole) {

              var cargo = documento.autoroleid
              if(member.guild.roles.get(documento.autoroleid)) {
                  Olivia.guilds.get(member.guild.id).members.get(member.user.id).addRole(Olivia.guilds.get(member.guild.id).roles.get(cargo));
              } else {}

          } else {}

      } else {}

  })
})
//Sistema de ByeBye
Olivia.on('guildMemberRemove', member => {

    database.Users.deleteOne({
        "_id": member.id
    }, function(erro, documento) {})

    database.Guilds.findOne({
        "_id": member.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (documento.byebye) {

                var bbbyebye = documento.byebyemsg
                Olivia.guilds.get(member.guild.id).channels.get(documento.byebyechannel).createWebhook(member.guild.name, member.guild.iconURL).then(w => {
                    w.send(bbbyebye.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{members}/g, `${member.guild.members.size}`).replace(/{name}/g, `${member.user.username}`).replace(/{tag}/g, `${member.user.tag}`));
                    w.delete()
                })

            } else {}

        } else {}

    })
})

//Sistema de Xp
var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 40)
let coinsRDM = Math.round(Math.random() * 50)
Olivia.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {
        if(servidorto) {
            if(servidorto.leveis) {
                if(xpCol.has(message.author.id)) return;
                database.Users.findOne({
                    "_id": message.author.id
                }, function (erro, documento) {
                    if(documento) {
                            var unbug = 370 * documento.level + 1
                            var up = servidorto.levelupmsg
                        

                            if(documento.xp > unbug) {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.level += 1

                                if(servidorto.levelup) {
                                    message.guild.channels.get(servidorto.levelupchannel).send(up.replace(/{member}/g, `<@${message.author.id}>`).replace(/{name}/g, `${message.author.username}`).replace(/{tag}/g, `${message.author.tag}`).replace(/{level}/g, `${documento.level}`));
                                }                                            

                                documento.xp = 0
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            } else {
                                documento.xp += xpRDM
                                documento.coins += coinsRDM
                                documento.save()
                                xpCol.add(message.author.id)
                                setTimeout(function () {
                                    xpCol.delete(message.author.id)
                                }, 30 * 1000)
                            }

                    } else {
                        var pessoa = new database.Users({
                            _id: message.author.id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            mensagens: 0,
                            msglevel: 0,
                            rep: 0,
                            suprema: 0,
                            background: 'https://i.imgur.com/PBv5FMm.jpg',
                            casado: false,
                            casadoid: 0,
                            casadoq: "Ninguem.",
                            casadoava: "https://cdn.discordapp.com/attachments/464270386943623188/495574810806714368/Discord.png"
                        })
                        pessoa.save()
                    }
                });

            } else {}
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
                levelupchannel: "Nenhum",
                levelupmsg: "Nenhuma",
                levelup: false
            })
            servidor.save()
        }
    });
});

//Sistema de Coins
var dinCol = new Set()
let dinRDM = Math.round(Math.random() * 100)
Olivia.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(dinCol.has(message.author.id)) return;
    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {
            if(message.guild.members.get(message.author.id)) {
                if (message.guild.members.get(message.author.id)) {
                documento.coins += dinRDM * 6
                documento.save()
                dinCol.add(message.author.id)
                setTimeout(function() {
                    dinCol.delete(message.author.id)
                }, 50 * 1000)
            } else {
                if(message.guild.members.get(message.author.id)) {
                    documento.coins += dinRDM * 4
                    documento.save()
                    dinCol.add(message.author.id)
                    setTimeout(function() {
                        dinCol.delete(message.author.id)
                    }, 50 * 1000)
                } else {

                    if (message.guild.members.get(message.author.id)) {
                        documento.coins += dinRDM * 2
                        documento.save()
                        dinCol.add(message.author.id)
                        setTimeout(function() {
                            dinCol.delete(message.author.id)
                        }, 50 * 1000)

                } else {
                    documento.coins += dinRDM
                    documento.save()
                    dinCol.add(message.author.id)
                    setTimeout(function() {
                        dinCol.delete(message.author.id)
                    }, 50 * 1000)
                }
            }
            }
            } else {
            if(message.guild.members.get(message.author.id)) {
                documento.coins += dinRDM * 4
                documento.save()
                dinCol.add(message.author.id)
                setTimeout(function() {
                    dinCol.delete(message.author.id)
                }, 50 * 1000)
            } else {

                if (message.guild.members.get(message.author.id)) {
                    documento.coins += dinRDM * 2
                    documento.save()
                    dinCol.add(message.author.id)
                    setTimeout(function() {
                        dinCol.delete(message.author.id)
                    }, 50 * 1000)

            } else {
                documento.coins += dinRDM
                documento.save()
                dinCol.add(message.author.id)
                setTimeout(function() {
                    dinCol.delete(message.author.id)
                }, 50 * 1000)
            }
        }
    }
        } else {
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                mensagens: 0,
                msglevel: 0,
                rep: 0,
                suprema: 0,
                background: 'https://i.imgur.com/PBv5FMm.jpg'
            })

            pessoa.save()
        }
    })
});

//Sistema de caixa
Olivia.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (serverro, servidorto) {

        if(servidorto) {

            if(servidorto.box) {

                if(servidorto.caixa) {} else {

                    var prc = Math.round(Math.random() * 7500)

                    if(prc == 1670) {
                        let sicon = message.guild.iconURL;
                        servidorto.caixa = true
                        servidorto.caixatipo = "Lendario"
                        servidorto.save()
                        var elendaria = new Discord.RichEmbed()
                        .setColor(cor)
                        .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Lendária** foi dropada, use `o.pick` para pegar.')
                        .setImage(bau)
                        .setFooter(`${message.guild.name}`, sicon)
                        .setTimestamp()
                        message.channel.send(elendaria);

                    } else if(prc == 153) {
                        let sicon2 = message.guild.iconURL;
                        servidorto.caixa = true
                        servidorto.caixatipo = "Epico"
                        servidorto.save()
                        var eepico = new Discord.RichEmbed()
                        .setColor(cor)
                        .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Epica** foi dropada, use `o.pick` para pegar.')
                        .setImage(bau)
                        .setFooter(`${message.guild.name}`, sicon2)
                        .setTimestamp()
                        message.channel.send(eepico);

                    } else if(prc == 527) {
                        let sicon3 = message.guild.iconURL;
                        servidorto.caixa = true
                        servidorto.caixatipo = "Raro"
                        servidorto.save()
                        var eraro = new Discord.RichEmbed()
                        .setColor(cor)
                        .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Raro** foi dropada, use `o.pick` para pegar.')
                        .setImage(bau)
                        .setFooter(`${message.guild.name}`, sicon3)
                        .setTimestamp()
                        message.channel.send(eraro);

                    } else if(prc == 2083) {
                        let sicon4 = message.guild.iconURL;
                        servidorto.caixa = true
                        servidorto.caixatipo = "Comum"
                        servidorto.save()
                        var ecomum = new Discord.RichEmbed()
                        .setColor(cor)
                        .addField('🎁 | **Drop Box** | 🎁', 'Uma caixa **Comum** foi dropada, use `o.pick` para pegar.')
                        .setImage(bau)
                        .setFooter(`${message.guild.name}`, sicon4)
                        .setTimestamp()
                        message.channel.send(ecomum);

                    } else {}
                }
            } else {}

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
                caixatipo: "Comum"
            })
            servidor.save()
        }

    })
})

//Marcação Olivia
Olivia.on('message', async message => {
    if(message.author.bot) return;
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {
        if(documento){
            let prefixos = documento.prefixo
                if(message.content.startsWith(`<@${Olivia.user.id}>`)){

                    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
                
                    var embed = new Discord.RichEmbed()
                    .setColor(cor)
                    .setAuthor('Olivia', Olivia.user.displayAvatarURL)
                    .setThumbnail(message.author.avatarURL)
                    .setDescription(`Olá **${message.author.username}**. Eu sou a Olivia.\nMeu prefix é **[${prefixos}]**.\n\nUse **[${prefixos}ajuda]** para ver meus comandos.`)
                    .setFooter(`${nomeeapelido}`, message.author.avatarURL)
                    .setTimestamp()
                    message.channel.send(embed).then(a =>{
                      setTimeout(function () {
                      a.delete();
                    }, 10000)});
                }
        } else {
            var servidor = new database.Guilds({
                _id: message.guild.id,
                prefix_on: false,
                prefixo: "o."
            })
            servidor.save()
        }
    })
});

//Command Handler 2 - Prefix [o.]
Olivia.on('message', message => {
    if(message.author.bot) return;

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {
        if(documento){

            const prefixos = documento.prefixo
            let args = message.content.slice(prefixos.length).trim().split(' ');
            let cmd = args.shift().toLowerCase();

            if(message.author.bot) return;
            if(message.channel.type == "dm") return;
            if (!message.content.startsWith(prefixos)) return;

            try {
                delete require.cache[require.resolve(`./comando/prefix [o.]/${cmd}.js`)];

                let ops = {
                ownerID: ownerID,
                active: active
                }

                let prefixes = {
                    prefixos: prefixos
                }
                let commandFile = require(`./comando/prefix [o.]/${cmd}.js`)
                commandFile.run(Olivia, message, args, prefixes, ops)

            } catch (e) {
                console.log(e.stack);
            }
        } else {
            var servidor = new database.Guilds({
                _id: message.guild.id,
                prefix_on: false,
                prefixo: "o."
            })
            servidor.save()
        }
    })
});
/*
Olivia.on('message', message => {    
    var arr = message.content.trim().split(/ +/g);
    const prefixo = 'o.';
    var botname = 'olivia'
    var prefixmsg = arr[0]
    .toString()
    .substring(0, prefixo.length)

    let ops = {
        ownerID: ownerID
    }

    var command;
    var args;


    if(prefixmsg === prefixo){
        command = arr[0]
        .toString()
        .substring(prefixo.length, arr[0].toString().length)
        args = arr.slice(1);
    }
    if (arr[0].toString().toLowerCase() === botname){        
        command = arr[1];
        args = arr.slice(2);
    }



    try{
    const file = require(`./comando/${command}.js`);
    file.run(Olivia, message, args, ops);
        console.log(`Comando ${command} usado no servidor ${message.guild.name}`)

    }catch(err){ //aqui será executado quando algo estiver errado no comando!
      console.log(`Um erro ocorreu no comando ${command} no servidor ${message.guild.name}!\n${err}`);
    }
});
*/
//Bot Login
Olivia.login(TOKEN2);
Olivia.on('ready', () => { console.log(`${Olivia.user.username}, está online`) });
