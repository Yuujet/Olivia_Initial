var Discord = require('discord.js')

exports.run = async (Olivia, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    const links = ['https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif'];

    message.channel.send({
                        'embed': {
                            "color": 0xf7d200,
                            "description":  `**${nomeeapelido}** se matou.`,
                            'image': {
                                'url': links[Math.round(Math.random() * links.length)],
                            },
                        },
                    });
}
