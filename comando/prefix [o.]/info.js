const Discord = require("discord.js");
const database = require("../../database.js");
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');

exports.run = (Olivia, message, args, ops) => {//o.eval Olivia.guilds.map(a=>a.memberCount).join("+") https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=2048
  
  database.Guilds.findOne({

      "_id": message.guild.id
    }, function(erro, documento) {

      if (documento) {
        let prefixos = documento.prefixo
        let oicon = message.client.user.displayAvatarURL

  const help1 = new Discord.RichEmbed()
  .setThumbnail(oicon)
  .setColor("#f7d200")
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setDescription('**Modulos disponiveis.** \n`'+prefixos+'info bot`\n`'+prefixos+'info server`\n`'+prefixos+'info user @mention`')
  let reason = args.slice(0).join(' ')
  if (reason.length < 1) return message.channel.send(help1);

  if(args[0] === 'bot') {

        let users = Olivia.users.size
        let ping = `${Math.round(Olivia.ping)}`
        let bicon = Olivia.user.displayAvatarURL;
        let Oliviaembed = new Discord.RichEmbed()
        .setAuthor(`Olivia`, Olivia.user.displayAvatarURL)
        .setColor("#f7d200")
        .setThumbnail(bicon)
        .addField(":pencil: Prefix", `Meu prefix é **[${prefixos}]**.`, true)
        .addField("<:dev:468637065689432074> Dono","-> **Yuu-San#2297**", true)
        .addField("<:Links:468637065341435915> Links", `-> **[Suporte Server](https://discord.gg/n8VeUZs)** \n-> **[Convite](https://discordapp.com/oauth2/authorize?client_id=474795511233380353&scope=Olivia&permissions=8)** \n-> **[Vote](https://discordbots.org/bot/474795511233380353/vote)**`, true) //\n-> **[Site](https://discordOlivias.org/Olivia/459660557335920640)**`, true)
        .addField(":family: Usuarios",`-> **${Olivia.users.size}**`, true)
        .addField(":speech_balloon: Canais",`-> **${Olivia.channels.size}** `, true)
        .addField(":globe_with_meridians: Servidores",`-> **${Olivia.guilds.size}**`, true)
        .addField(":earth_americas: Região do Bot","-> :flag_br: **Brasil**", true)
        .addBlankField()
        .addField(":date: Entrei no server em", `${moment(message.guild.me.joinedAt).format("LLL")}`, true)
        .addField(":date: Fui Criada em", `${moment(Olivia.user.createdAt).format("lll")}`, true);


        let olivia = new Discord.RichEmbed()
        .setColor("#f7d200")
        .setThumbnail(bicon)
        .setAuthor(`Olivia`, bicon)
        .setDescription(`**Sobre Mim** \nOlá sou a Olivia, um personagem do anime *Asobi Asobase*. Sou um bot Brasileiro, criada Pelo **Yuu-San#2297.**`)
        .addField('🔖 Geral', '**Prefix:**\n**Principal** `[o.]`\n**Alternativo** `[olivia ]`\n\n**Região** :flag_br: Brasil')
        .addField('📝 Info' , `**Usuarios | **${Olivia.users.size} \n**Canais | **${Olivia.channels.size} \n**Servidores | **${Olivia.guilds.size}`, true)
        .addField('<:Links:468637065341435915> Links', `**[Server](https://discord.gg/n8VeUZs)** \n**[Convite](https://discordapp.com/oauth2/authorize?client_id=474795511233380353&scope=Olivia&permissions=8)** \n**[Vote](https://discordbots.org/bot/474795511233380353/vote)**`, true)
        .addField(':date: Datas' ,`**Entrei no server | **${moment(message.guild.me.joinedAt).format("LLL")} \n**Fui Criada | **${moment(Olivia.user.createdAt).format("lll")}`, false)

        var teste1 = `${moment(message.guild.me.joinedAt).format("LLL")}`
        var teste2 = `${moment(Olivia.user.createdAt).format("LLL")}`

        let canais = Olivia.channels.size
        let servers = Olivia.guilds.size

        let Olivia2 = new Discord.RichEmbed()
        .setColor("#f7d200")
        .setAuthor(`Olivia`, bicon)
        .setDescription('**Sobre Mim** \nOlá sou a Olivia, um personagem do anime *Asobi Asobase*. Sou um bot Brasileiro, criada Pelo **Yuu-San#2297.**\nMeu prefix é ``['+prefixos+']``.')
        .addField('🌐 Servidores', '```js\n' + servers.toLocaleString() + '```', true)
        .addField('👪 Usuarios', '```js\n' + users.toLocaleString() + '```', true)
        .addField('💬 Canais', '```js\n' + canais.toLocaleString() + '```', true)
        .addField('🌎 Região', '```css\nBrasil\n```', true)
        .addBlankField()
        .addField('📅 Datas', '**Entrei no Servidor - ' + message.guild.name + ' :**\n```js\n' + teste1 + '```' + '**Fui criada :**\n```js\n' + teste2 + '```' , true)
        .addField('<:Links:468637065341435915> Links', `**[Server](https://discord.gg/n8VeUZs)** \n**[Convite](https://discordapp.com/oauth2/authorize?client_id=474795511233380353&scope=bot&permissions=66321471)** \n**[Vote](https://discordbots.org/bot/474795511233380353/vote)**`, true)


        message.channel.send(Olivia2);
  };

  if(args[0] === 'server') {
    let regioes = {
      "brazil": ":flag_br: Brasil",
      "us-west": "America Do Sul"
    };

    var servidor = message.guild
    let sicon = message.guild.iconURL;
    let Online = message.guild.members.filter(a => a.presence.status == "online").size;
    let Ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let Ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let Offline = message.guild.members.filter(a => a.presence.status == "offline").size;

    let serverembed1 = new Discord.RichEmbed()
      .setAuthor(`Informações do Servidor: ${message.guild.name} `, sicon)
      .setColor("#f7d200")
      .setThumbnail(sicon)
      .addField("Nome do Servidor", `**${message.guild.name}**`, true)
      .addField(":crown: Dono do Server", `**${message.guild.owner.user.tag}**`, true)
      .addField(`:family: Membros - [${message.guild.members.filter(m => !m.user.bot).size}]`, `<:online:438399398808911882> Online: ${Online} \n<:dnd:438399396548313091> Ocupado: ${Ocupado}\n<:idle:438399398796460032> Ausente: ${Ausente}\n<:offline:438399398762905600> Offline: ${Offline}`, true)
      .addField(":robot: Bots", message.guild.members.filter(m => m.user.bot).size, true)
      .addField(`:speech_balloon: Canais - [${message.guild.channels.filter(a => a.type !== "category").size}]`, `<:channel_text:467288235404558346> Texto: ${message.guild.channels.filter(m => m.type == "text").size} \n<:channel_voice:467288235278598144> Voz: ${message.guild.channels.filter(m => m.type == "voice").size}`, true)
      .addField(":earth_americas: Região do Servidor", `${regioes[servidor.region]}`, true)
      .setFooter('Página: 1/2')
      
    let serverembed2 = new Discord.RichEmbed()
      .setColor("#f7d200")
      .addField(`:crown: Cargos - [${message.guild.roles.size}]`, `\`\`\`${message.guild.roles.map(a => a.name).slice(0,35).join(", ")}\`\`\`` )
      .addBlankField()
      .addField(":star2: Você entrou em", moment(message.guild.members.get(message.author.id).joinedAt).format("LLL"), true)
      .addField(":date: Servidor Criado em", moment(message.guild.createdAt).format("LLL"), true)
      .setFooter('Página: 2/2')
      
    message.channel.send(serverembed1).then(msg => {
        msg.react('➡')
      
        const ceta = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
              const a = msg.createReactionCollector(ceta, { time: 60000 });
              
        a.on('collect', ar => {
            msg.clearReactions()
            msg.edit(serverembed2).then(r2 => {
                msg.react('⬅')               
                      
                const coletar2 = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
                const b = msg.createReactionCollector(coletar2, { time: 60000 });
      
                b.on('collect', r3 => {
                    msg.clearReactions()
                    msg.edit(serverembed1).then(r4 => {           
                        msg.react('➡')
                    })  
                })
            })
        })
    }) 
  };

  if(args[0] === 'user') {
    let user = message.mentions.users.first() || message.author;
          
          const mentioneduser = message.mentions.users.first() || message.author;
          const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
          let game;
          if (user.presence.game === null) {
              game = 'Não está jogando atualmente.';
          } else {
              game = user.presence.game.name;
          }
          let messag;
          if (user.lastMessage === null) {
              messag = 'He didnt sent a message.';
          } else {
              messag = user.lastMessage;
          }
          let status;
          if (user.presence.status === 'online') {
              status = '<:online:438399398808911882> Online.';
          } else if (user.presence.status === 'dnd') {
              status = '<:dnd:438399396548313091> Ocupado.';
          } else if (user.presence.status === 'idle') {
              status = '<:idle:438399398796460032> Ausente.';
          } else if (user.presence.status === 'offline') {
              status = '<:offline:438399398762905600> Offline.';
          }
        // Let afk;
        // if (user.presence.data.afk === true) {
        //   afk = "✅"
        // } else {
        //   afk = "❌"
        // }
          let stat;
          if (user.presence.status === 'offline') {
              stat = 0x000000;
          } else if (user.presence.status === 'online') {
              stat = 0x00AA4C;
          } else if (user.presence.status === 'dnd') {
              stat = 0x9C0000;
          } else if (user.presence.status === 'idle') {
              stat = 0xf7d200;
          }

          let userapelido = message.guild.member(user).nickname

          let userapelido2 = userapelido
          function apelido(){
          var apelidinho = userapelido2
          if(apelidinho != undefined){
              return apelidinho
          }else{
              return "Não tem apelido neste servidor."
          }
          }

          let bots = {
              "true": "Sim",
              "false": "Não"
          };

          let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

          let a = message.mentions.users.first() || message.member

          // message.member.roles.map(r => r.name).join(', ')

          const criouconta = moment(mentioneduser.createdAt).format("LLL")
      
          var embed = new Discord.RichEmbed()
          .setColor(stat)
          .setThumbnail(user.displayAvatarURL)
          .setAuthor(`Sobre o(a) ${user.username}!`, user.displayAvatarURL)
          .addField('👥 **UserInfo**', `**Username:** ${user.tag}\n**ID:** ${user.id}\n**Criou a Conta:** ${criouconta}\n**Jogando:** ${game}\n**Status:** ${status}\n**Bot?** ${bots[user.bot]}`)
          .addBlankField()
          .addField('🌐 **ServerInfo**',  `**Apelido:** ${apelido()}\n**Entrou no Servidor:** ${moment(message.guild.members.get(user.id).joinedAt).format("LLL")}`)//\n**Cargos:** **Abaixo┐**` + '```\n' + a.roles.map(r => r.name).slice(0,35).join(', ') + '```')
          .setFooter(nomeeapelido, message.author.displayAvatarURL)
          .setTimestamp()
          message.channel.send(embed)
  };

      } else {
        var servidor = new database.Guilds({
          _id: message.guild.id,
          prefix_on: false,
          prefixo: "o."
        })
      }
    })
}
