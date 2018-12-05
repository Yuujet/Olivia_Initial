const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Olivia, message, args) => {
  if (message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
    //n;tempmute @user 1s/m/h/d
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`)
    if(tomute.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, não tenho permissão para **mutar** esta pessoa.`);
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não tem permissão para usar este comando.`);
    let muterole = message.guild.roles.find(role => role.name == 'oliviamute');
    //começando a criando o cargo
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "oliviamute",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //terminando de criar o cargo
    let mutetime = args[1];
    if(!mutetime) return message.channel.send(`**${message.author.username}**, está faltando o tempo do mute.`);

    await(tomute.addRole(muterole.id));
    message.channel.send(`**${message.author.username}**, mutou o **${tomute}** por **${ms(ms(mutetime))}**.`);

    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`**${tomute}** , foi desmutado. \nAgora pode falar no chat!`);
    }, ms(mutetime));
  } else {
    message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando. :confused:`)
  }
}
