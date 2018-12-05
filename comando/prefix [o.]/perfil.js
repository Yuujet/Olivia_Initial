const Discord = require('discord.js');
var database = require("../database.js")
var Jimp = require("jimp");
let ownerID = '316989384077475841';

exports.run = async (Olivia, message) => {

    //if(message.author.id !== ownerID) return message.channel.send(`**${message.author.username}**, este comando está em manutenção.`)

    let usuario = message.mentions.users.first() ? message.mentions.users.first() : message.author
    var desenvolvedores = ["316989384077475841"]
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
    let cor = '#f7d200'    

    database.Users.findOne({
        "_id": usuario.id
    }, function (erro, documento) {

        if(documento) {
            let cas = (documento.casado == true)

              message.channel.startTyping();
                var unbug = 370 * documento.level + 1
                      Jimp.loadFont('./comandos/fontes/mouse_memoirs/mouse_memoirs_64.fnt').then(function (letra) {
                        Jimp.loadFont('./comandos/fontes/mouse_memoirs/mouse_memoirs_32.fnt').then(function (letra2) {
                          Jimp.loadFont('./comandosfontes/mouse_memoirs/mouse_memoirs_16.fnt').then(function (Letra3) {
                            Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/518807328053657610/Camada_2.png", function (erre, img) {
                                Jimp.read(`${documento.background}`).then(function (background) {
                                    Jimp.read(`${usuario.avatarURL}`).then(function (avatar) {
                                      //Jimp.read(`${documento.casadoava}`).then(function (avatar2) {
                                        Jimp.read(`https://cdn.discordapp.com/attachments/467390020920147978/487778059315838987/emote.png`).then(function (staff) {
                                          Jimp.read(`https://cdn.discordapp.com/attachments/464270386943623188/495551967461113877/Sem_Titulo-1.png`).then(function (fundo) {
                                            Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/518807327114264577/Camada_1.png").then(function (perfil) {
                                                Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/495569487395946496/mask_exagonal.png").then(function (mascara) {
                                                  Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function (mascara2) {
                                                      Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/501865675346935818/Vip_Borda_-_Bronze_1.png").then(function (vipBronze) {
                                                        avatar.resize(212, 212);
                                                        mascara.resize(212, 212);
                                                        staff.resize(50, 50);
                                                        avatar.mask(mascara, 0, 0);
                                                        background.resize(564, 284);
                                                        img.resize(701, 463);
                                                        img.composite(background, 104, 21);
                                                        img.composite(perfil, 0, 0);
                                                        img.composite(avatar, 515, 123);
                                                        if(desenvolvedores.includes(usuario.id)) {
                                                            //img.composite(staff, 595, 83)
                                                            img.composite(staff, 600, 400)
                                                        }
                                                        if(documento.vipbronze) {
                                                            img.composite(vipBronze, 0, 0);
                                                            vipBronze.resize(850, 480);
                                                        }
                                                        /*if(documento.casado) {
                                                            fundo.resize(240, 84);
                                                            avatar2.resize(64, 64);
                                                            mascara2.resize(64, 64);
                                                            avatar2.mask(mascara2, 0, 0);
                                                            img.composite(fundo, 415, 24);
                                                            img.print(Letra3, 313, 28, `${documento.casadoq}`);
                                                            img.composite(avatar2, 225, 19)
                                                        }*/

                                                        img.print(letra2, 135, 255,  `${usuario.username}`);
                                                        img.print(letra, 675, 59, `${documento.level}`);
                                                        img.print(letra2, 458, 335, `${Number(documento.coins).toLocaleString()}`);
                                                        img.print(letra2, 426, 396, `${Number(documento.xp).toLocaleString()}/${unbug}`);
                                                        img.print(letra, 689, 343, `${documento.rep}`);

                                                            img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                                                                message.channel.send(``, new Discord.Attachment(buffer, 'Profile.png')).catch(err => {
                                                                var embed2 = new Discord.RichEmbed()
                                                                .setColor(cor)
                                                                .setDescription('**' + nomeeapelido + '**, Parece que ocorreu um erro ao enviar o seu perfil.')

                                                                message.channel.send(embed2);
                                                                });
                                                                message.channel.stopTyping();
                                                            });
                                                        });
                                                      })
                                                  });
                                              });
                                            })
                                                    
                                          });
                                      //});
                                  }).catch(err => {
                                    var embed3 = new Discord.RichEmbed()
                                      .setColor(cor)
                                      .setDescription('**' + nomeeapelido + '**, Parece que o seu background está invalido.')

                                      message.channel.send(embed3);
                                  })
                              });
                          });
                      })
                  });
              });
        } else {}

    })

}

