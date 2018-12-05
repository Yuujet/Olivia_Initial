var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("[YOUR_DB_MONGOSE]",{ useNewUrlParser: true },(err)=>{if(err){
    console.log("Falha ao conectar ao Banco de Dados!")
}else{console.log("Database conectada!")}})

var User = new Schema({
    _id: {
        type: String
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    rep :{
        type: Number,
        default: 0
    },
    comum :{
        type: Number,
        default: 0
    },
    raro :{
        type: Number,
        default: 0
    },
    epico :{
        type: Number,
        default: 0
    },
    lendario :{
        type: Number,
        default: 0
    },
    suprema :{
        type: Number,
        default: 0
    },
    udaily: {
      type: Number,
      default: 0
    },
    rdaily: {
      type: Number,
      default: 0
    },
    background: {
        type: String,
        default: "https://i.imgur.com/PBv5FMm.jpg"
    },
    ddaily: {
        type: Number,
        default: 0
    },
    casado: {
        type: Boolean,
        default: 0
    },
    casadoq: {
        type: String,
        default: "Ninguem."
    },
    casadoid: {
        type: String,
        default: "Ninguem."
    },
    casadoava: {
        type: String,
        default: "https://cdn.discordapp.com/attachments/464270386943623188/495574810806714368/Discord.png"
    },
    evento: {
        type: Number,
        default: 0
    },
    vipbronze: {
        type: Boolean,
        default: false
    }
})

var Guild = new Schema({
    _id: {
        type: String
    },
    welcome: {
        type: Boolean,
        default: false
    },
    welcomechannel: {
        type: String,
        default: "Nenhum"
    },
    welcomemsg: {
        type: String,
        default: "Nenhuma"
    },
    byebye: {
        type: Boolean,
        default: false
    },
    byebyechannel: {
        type: String,
        default: "Nenhum"
    },
    byebyemsg: {
        type: String,
        default: "Nenhuma"
    },
    autorole: {
        type: Boolean,
        default: false
    },
    autoroleid: {
        type: String,
        dafault: "Nenhum"
    },
    leveis: {
        type: Boolean,
        default: true
    },
    coins: {
        type: Boolean,
        default: true
    },
    box: {
        type: Boolean,
        default: true
    },
    caixa: {
        type: Boolean,
        default: false
    },
    caixatipo: {
        type: String,
        default: "Comum"
    },
    levelupchannel: {
        type: String,
        default: "Nenhum"
    },
    levelupmsg: {
        type: String,
        default: "Nenhuma"
    },
    levelup: {
        type: Boolean,
        default: false
    },
    webhook: {
        type: Boolean,
        default: false
    },
    semwebhook: {
        type: Boolean,
        default: false
    },
    prefixo: {
        type: String,
        default: "o."
    },
    prefixon: {
        type: Boolean,
        default: false
    },
    fechado: {
        type: Boolean,
        default: false
    }
})

var Users = mongoose.model("Users", User);
var Guilds = mongoose.model("Guilds", Guild);
exports.Users = Users
exports.Guilds = Guilds
