var Discord = require('discord.js')

exports.run = async (Olivia, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    const links = ['https://media1.tenor.com/images/26b0be070060011fb69dcb6df838e15e/tenor.gif?', 'https://media1.tenor.com/images/04b0feb0e2e6861d5e57c1cb2cdb4dd9/tenor.gif', 'https://media1.tenor.com/images/180ece0e4a1656131513bcc60afeec81/tenor.gif', 'https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif', 'https://media1.tenor.com/images/f4efbb0911cb0d6d3e8b1d1d4bdb83e1/tenor.gif', 'https://media.tenor.com/images/e69ebde3631408c200777ebe10f84367/tenor.gif', 'https://media1.tenor.com/images/84c4e8c1a24b84bece745d2dcd2a5aa8/tenor.gif', 'https://media1.tenor.com/images/78a307b6864f0ccfab68213aa02556d6/tenor.gif', 'https://media1.tenor.com/images/de4e31bbd6c63214b9900eb1eb6ff9b2/tenor.gif', 'https://media1.tenor.com/images/d455554406f0be0670c984901793001a/tenor.gif'];

    message.channel.send({
                        'embed': {
                            "color": 0xf7d200,
                            "description":  `**${nomeeapelido}** está chorando.`,
                            'image': {
                                'url': links[Math.round(Math.random() * links.length)],
                            },
                        },
                    });
}
