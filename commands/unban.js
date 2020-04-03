const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(!message.content.startsWith(`?`)) return
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:1603_Animated_Cross:660100310005710888>`|У Вас недостаточно прав `')
let member = args.join(" ");
if(!member) return message.channel.send("<a:1603_Animated_Cross:660100310005710888>`|Вы не указали ID пользователя или ID пользователя неправильный.`");
if(member) {
    message.guild.unban(member);
    const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Действие:', 'Разбан')
  .addField('Участник:', member)
  .addField('Администратор:', `${message.author.username}#${message.author.discriminator}`)
    await message.channel.send(embed);
}
};
module.exports.help = {
    name: "unban"
};