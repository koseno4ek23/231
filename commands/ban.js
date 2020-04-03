const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(`?`)) return
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:1603_Animated_Cross:660100310005710888>`|У вас недостаточно прав для выполнения этой команды`")
    else if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:1603_Animated_Cross:660100310005710888>`|У меня нету прав!`")

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member) return message.channel.send(`Необходимо упомянуть пользователя`)
    else if (member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:1603_Animated_Cross:660100310005710888>`|Я не могу забанить этого пользователя, у вас с ним баланс разрешений.`")

    let reason = args.slice(1).join(' ') || 'Причина не указана - By Shizuma'

    await member.ban(reason)
    const embed = new Discord.RichEmbed()
    .setColor(0xFFFF00)
    .setTimestamp()
    .addField('Действие:', 'Бан')
    .addField('Участник:', `<@${member.id}>`)
    .addField('Администратор:', `<@${message.author.id}>`)
    .addField('Причина', `${reason}`)
      message.channel.send(embed)
  

}

module.exports.help = {
    name: 'ban'
}