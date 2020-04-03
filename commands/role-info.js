const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if(!message.content.startsWith(`?`)) return
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args.join(' '));

    if (!role) role = message.member.highestRole;
        const roleinfo = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField('Участники', role.members.size, true)
        .addField('Цвет', role.hexColor, true)
        .addField('Создана', role.createdAt.toDateString(), true)
        .addField('ID', role.id, true);
        message.channel.send(roleinfo) 
};


module.exports.help = {
    name: 'role-info',
    enabled: true
}