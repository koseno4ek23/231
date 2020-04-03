const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
      if(!message.content.startsWith(`?`)) return


    let user = message.mentions.users.first();
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send("Ты не можешь так делать");
    if (user.id === client.user.id) return message.channel.send("Ня~~")
    if (user.id === message.author.id) return message.channel.send("у тебя нет друзей(");


    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/cuddle`);

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** ***обнял*** **${message.mentions.users.first().username}!**`)
        .setImage(body.url)
        .setColor("e4b400")
    message.channel.send(embed)
};
module.exports.help = {
    name: "cuddle",
    category: '-',
    aliases: ['c']
};