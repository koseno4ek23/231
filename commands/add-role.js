const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
    if(!message.content.startsWith(`?`)) return
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
 .setColor(0x9966cc)                                                                                  
.setDescription("<a:1603_Animated_Cross:660100310005710888> `| У Вас недостаточно прав для выполнения этой команды`"))
var role = message.mentions.roles.first();
var member = message.mentions.members.first();
var arg = new Array()
arg[0] = member
arg[1] = role
if(!arg[0]) return message.channel.send(new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
 .setColor(0x9966cc)                                       
.setDescription("<a:1603_Animated_Cross:660100310005710888> `| Укажите участника`"))
if(!arg[1])return message.channel.send(new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(0x9966cc)
.setDescription("<a:1603_Animated_Cross:660100310005710888> `|Укажите роль`"))
member.addRole(role)
message.channel.send(new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(0x9966cc)                     
.setDescription("<a:6093_Animated_Checkmark:660100212068581396>`| Роль выдана`"))
}
module.exports.help = {
    name: 'addrole'
}