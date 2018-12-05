const Discord = require('discord.js');

exports.run = async(Olivia, message, args) => {
    let nada = args.slice(0).join(' ');
    let msg = args.slice(1).join(' ');
    let boticone = message.client.user.displayAvatarURL
    let cor = "#f7d200";
    let ownerID = '316989384077475841';
    if(message.author.id !== ownerID) return
    if (!nada.length < 1) {

        if (message.content.startsWith('o.anuncio diadascrianças')) {

            message.delete(message.author).catch(O_o=>{})
            
            var embed = new Discord.RichEmbed()
            .setColor(cor)
            .setImage('https://cdn.discordapp.com/attachments/440690061554614272/500337433519456276/Criancas.jpg')
            .setDescription(`${msg}`)
            
            message.channel.send('<@everyone>', embed)
        }

    } else {

        var embedwelcome = new Discord.RichEmbed()
        .setColor(cor)
        .setAuthor('Olivia', boticone)
        .setThumbnail(boticone)
        .setDescription("**Como usar:**\n\n``o.anuncio diadascrianças``")
        message.channel.send(embedwelcome);
    }
}