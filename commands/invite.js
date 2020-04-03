const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    if(!message.content.startsWith(`?`)) return
    let rUser = message.author;
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} | Приглашение бота.`, message.author.avatarURL)
    .setTimestamp(bot.createdAt)
    .setDescription(`\n\
[ПРИГЛАСИТЬ](https://discordapp.com/oauth2/authorize?client_id=604900716624216066&scope=bot&permissions=8) | [ТЕХНИЧЕСКАЯ ПОДДЕРЖКА](https://discord.gg/Ud2QTax)`)
    .setColor(0xFFFF00)
    rUser.send(embed)
}

module.exports.help = {
    name:"invite"
}   