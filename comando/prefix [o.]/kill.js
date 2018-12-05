var Discord = require('discord.js')

exports.run = async (Olivia, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let user = message.mentions.users.first()
    if(!user) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`)
    let user2 = message.mentions.users.first()
    let nomeeapelido2 = message.guild.member(user2).nickname || message.mentions.users.first().username;
    const links = ['https://media1.tenor.com/images/db1136b19969ca0809daffc3d93fc848/tenor.gif', 'https://media1.tenor.com/images/62ef360ace36ba9e60a11e6dec2edb59/tenor.gif', 'https://media1.tenor.com/images/91450ccfb53784ff2c6c2112474a1a86/tenor.gif', 'https://media1.tenor.com/images/0304cf80269c43d51bab9554c04435e9/tenor.gif', 'https://media1.tenor.com/images/c3db731680762951371ff8231e4990b7/tenor.gif'];

    message.channel.send({
                        'embed': {
                            "color": 0xf7d200,
                            "description":  `**${nomeeapelido}** matou **${nomeeapelido2}**`,
                            'image': {
                                'url': links[Math.round(Math.random() * links.length)],
                            },
                        },
                    });
}
