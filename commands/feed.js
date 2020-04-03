const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
      if(!message.content.startsWith(`?`)) return
  


    let user = message.mentions.users.first();
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send("Нельзя кормить воздух!");
    if (user.id === client.user.id) return message.channel.send("Ня~~")
    if (user.id === message.author.id) return message.channel.send("Себя нельзя кормить");


    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/feed`);

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** ***покормил*** **${message.mentions.users.first().username}!**`)
        .setImage(body.url)
        .setColor("e4b400")
    message.channel.send(embed)
};
module.exports.help = {
    name: "feed",
    category: '-',
    aliases: ['f']
};