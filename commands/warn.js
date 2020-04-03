const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms"); 

exports.run = async (client, message, args) => {
        if(!message.content.startsWith(`?`)) return
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  //let logchannel = message.guild.channels.find('name', 'logs');
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:6093_Animated_Checkmark:660100212068581396>`|У тебя нет прав`");
  if (message.mentions.users.size < 1) return message.reply('<a:6093_Animated_Checkmark:660100212068581396>`|Необходимо упомянуть кого-то, чтобы предупредить их.`').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('<a:6093_Animated_Checkmark:660100212068581396>`|Я не могу позволить тебе сделать, что членовредительство-это плохо`');
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (reason.length < 1) reason = 'Причина не указана';
  
  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Действие:', 'Варн')
  .addField('Участник:', `${user.username}#${user.discriminator}`)
  .addField('Администратор:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Причина', reason)
    message.channel.send(embed)



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["smolyeet"],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
