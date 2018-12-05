exports.run = (Olivia, message, args, play, ops) => {

  if (message.author.id !== ops.ownerID) return message.channel.send(`❌ **| ${message.author.username}**, você não tem permissão para usar esse comando.`)
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.channel.send(`❌ **| ${message.author.username}**, você não colocou o nome do comando para reinicia-lo`);
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
      return message.channel.send(`❌ **| ${message.author.username}**, não consegui encontrar o comando **${args[0]}** para reinicia-lo.`);
  }
  message.channel.send(`<:correto:471853582740619284> **| ${message.author.username}**, o comando **${args[0]}** foi reiniciado.`);
}

/*```js
  if (message.author.id !== 'Seu ID') return message.channel.send(`Você não tem permissão `)
  let cu = args.slice(0).join(' ');
  if (cu.length < 1) return message.reply(`Coloque o nome do comando.`);
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
      return message.channel.send(`Comando ${args[0]} não encontrado`);
  }
  message.channel.send(`Comando ${args[0]} reiniciado.`);
```*/
