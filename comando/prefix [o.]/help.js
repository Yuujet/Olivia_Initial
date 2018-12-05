const Discord = require("discord.js");
var database = require("../../database.js");

exports.run = (Olivia, message, args, ops) => {
  database.Guilds.findOne({
    "_id": message.guild.id
}, function(erro, documento) {
    if(documento){

      let prefix = documento.prefixo
      let total = '42'
      let cor = '#f7d200'
      let oicon = message.client.user.displayAvatarURL
      let uicon = message.author.displayAvatarURL
      let nome = message.client.user.username
      let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

      var embed = new Discord.RichEmbed()
      .setThumbnail(oicon)
      .setAuthor(`${nome}`, oicon)
      .setDescription(`Olá sou a Olivia, um personagem do anime *Asobi Asobase*. Sou um bot Brasileiro, criada Pelo **Yuu-San#2297.**\n\n Estou com o total de **${total}** comandos.\n `)
      .addField(":pencil: Prefix","**Use: **`"+prefix+"`")
      .setTitle("**Sobre Min**")
      .addField('⚙ **Comandos Uteis**', '`avatar` **|** `ontime` **|** `info` **|** `invite` **|** `vote` **|** `sconvite` **|** `emojis` **|** `emoji`')//8
      .addField('👮 **Comandos Administração**', '`kick` **|** `ban` **|** `tempmute` **|** `limpar` **|** `welcome` **|** `byebye` **|** `autorole` **|** `config` **|** `levelup` **|** `prefix`')//10
      //.addField('🎶 **Comandos Musica**', '`play` **|** `skip` **|** `volume` **|** `pause` **|** `resume` **|** `np`')//6
      .addField('😂 **Comandos Diversão**', '`punch` **|** `kiss` **|** `hug` **|** `kill` **|** `suicide` **|** `bit` **|** `cry` **|** `pat` **|** `cuddle`')//9
      .addField('🔞 **Comandos NSFW**', '`hentai`')//1
      .addField('💰 **Comandos Economia**', '`money` **|** `moneytop` **|** `pay` **|** `daily` **|** `pick` **|** `box` **|** `buy` **|** `loja`')//8
      .addField('👥 **Comandos Social**', '`rank` **|** `level` **|** `perfil` **|** `setbg` **|** `rep` **|** `reptop`')//6
      //.addField(' **Comandos Jogos**', '`osu`')
      .setColor(cor)

      message.channel.send(embed)
    } else {
        var servidor = new database.Guilds({
            _id: message.guild.id,
            prefix_on: false,
            prefixo: "o."
        })
        servidor.save()
    }
})
}
