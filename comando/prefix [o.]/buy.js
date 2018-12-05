var database = require("../../database.js")
const ownerID = '316989384077475841';

exports.run = (Olivia, message, args) => {   
    
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    //if(message.author.id !== ownerID) return message.channel.send('Comando em manutenção.')
    let razao = args.slice(1).join(' ');

  database.Users.findOne({
    "_id": message.author.id
}, function(erro, documento) {

    database.Users.findOne({
        "_id": "315263840268976128"
    }, function(errou, docs) {

        database.Guilds.findOne({
            "_id": message.guild.id
        }, function(erro, documendo) {  

  if (documento) {

      if(documendo) {
        var prefix = documendo.prefixo

        if (message.content.startsWith(prefix+'buy comum')) {        

            if (parseInt(args[1]) > 0) {
    
                if (500 * parseInt(args[1]) < documento.coins) {
    
                    documento.coins -= 500 * parseInt(args[1]) 
                    documento.comum += parseInt(args[1]) 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou **${args[1]}** caixas **Comum**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
    
            } else {
    
                if (500 < documento.coins) {
    
                    documento.coins -= 500 
                    documento.comum += 1 
                    documento.save();
                     message.channel.send(`**${nomeeapelido}**, Você comprou uma caixa **Comum**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
            } 
        }
    
        if (message.content.startsWith(prefix+'buy rara')) {        
    
            if (parseInt(args[1]) > 0) {
                
                if (1500 * parseInt(args[1]) < documento.coins) {
    
                    documento.coins -= 1500 * parseInt(args[1]) 
                    documento.raro += parseInt(args[1]) 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou **${args[1]}** caixas **Rara**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
    
            } else {
    
                if (1500 < documento.coins) {
    
                    documento.coins -= 1500 
                    documento.raro += 1 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou uma caixa **Rara**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
            } 
        }
    
        if (message.content.startsWith(prefix+'buy epica')) {        
    
            if (parseInt(args[1]) > 0) {
                
                if (3000 * parseInt(args[1]) < documento.coins) {
    
                    documento.coins -= 3000 * parseInt(args[1]) 
                    documento.epico += parseInt(args[1]) 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou **${args[1]}** caixas **Epica**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
    
            } else {
    
                if (3000 < documento.coins) {
    
                    documento.coins -= 3000 
                    documento.epico += 1 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou uma caixa **Epica**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
            } 
        }
    
        if (message.content.startsWith(prefix+'buy lendaria')) {        
    
            if (parseInt(args[1]) > 0) {
                
                if (6000 * parseInt(args[1]) < documento.coins) {
    
                    documento.coins -= 6000 * parseInt(args[1]) 
                    documento.lendario += parseInt(args[1]) 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou **${args[1]}** caixas **Lendaria**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
    
            } else {
    
                if (6000 < documento.coins) {
    
                    documento.coins -= 6000 
                    documento.lendario += 1 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou uma caixa **Lendaria**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
            } 
        }
    
        if (message.content.startsWith(prefix+'buy suprema')) {        
    
            if (parseInt(args[1]) > 0) {
                
                if (9000 * parseInt(args[1]) < documento.coins) {
    
                    documento.coins -= 9000 * parseInt(args[1]) 
                    documento.suprema += parseInt(args[1]) 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou **${args[1]}** caixas **Suprema**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
    
            } else {
    
                if (9000 < documento.coins) {
    
                    documento.coins -= 9000
                    documento.suprema += 1 
                    documento.save();
                    message.channel.send(`**${nomeeapelido}**, Você comprou uma caixa **Suprema**.`)
        
                } else {
        
                    message.channel.send(`**${nomeeapelido}**, Você não tem dinheiro suficiente.`);
        
                }
            } 
        }
      } else {
        var servidor = new database.Guilds({
            _id: message.guild.id,
            prefix_on: false,
            prefixo: "o."
        })
        servidor.save()
      }
  } else { 

    var pessoa = new database.Users({
        _id: message.author.id,
        comum: 0,
        raro: 0,
        epico: 0,
        lendario: 0,
        suprema: 0,
        background: "https://i.imgur.com/J3GPYFM.jpg",
        ban: false,
        frase: "Nenhuma"
    })

  pessoa.save()

  }

})
})
})
}