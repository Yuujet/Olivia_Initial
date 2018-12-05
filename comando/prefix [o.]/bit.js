var Discord = require('discord.js')

exports.run = async (Olivia, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let user = message.mentions.users.first()
    if(!user) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`)
    let user2 = message.mentions.users.first()
    let nomeeapelido2 = message.guild.member(user2).nickname || message.mentions.users.first().username;
    const links = ['https://media1.tenor.com/images/432a41a6beb3c05953c769686e8c4ce9/tenor.gif', 'https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif', 'https://media1.tenor.com/images/418a2765b0bf54eb57bab3fde5d83a05/tenor.gif', 'https://media1.tenor.com/images/6ab39603ef0dd6dbfc78ba20885b991f/tenor.gif'];

    message.channel.send({
                        'embed': {
                            "color": 0xf7d200,
                            "description":  `**${nomeeapelido}** mordeu **${nomeeapelido2}**`,
                            'image': {
                                'url': links[Math.round(Math.random() * links.length)],
                            },
                        },
                    });
}
