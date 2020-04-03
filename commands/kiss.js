const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
      if(!message.content.startsWith(`?`)) return


    let user = message.mentions.users.first();
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send("Нельзя целовать воздух!");
    if (user.id === client.user.id) return message.channel.send("Ня~~")
    if (user.id === message.author.id) return message.channel.send("Нельзя себя поцеловать!");


    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** ***поцеловал*** **${message.mentions.users.first().username}!**`)
        .setImage(body.url)
        .setColor("e4b400")
    message.channel.send(embed)
};
module.exports.help = {
    name: "kiss",
    category: '-',
    aliases: ['k']
};