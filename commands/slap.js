const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
        if(!message.content.startsWith(`?`)) return


    let user = message.mentions.users.first();
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send("Нельзя бить воздух!");
    if (user.id === client.user.id) return message.channel.send("Нельзя меня шлепать!!!")
    if (user.id === message.author.id) return message.channel.send("Ты не можешь ударить себя");


    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/slap`);

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** ***ударил*** **${message.mentions.users.first().username}!**`)
        .setImage(body.url)
        .setColor("e4b400")
    message.channel.send(embed)
};
module.exports.help = {
    name: "slap",
    category: '-',
    aliases: ['s']
};