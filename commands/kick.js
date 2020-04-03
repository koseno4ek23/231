const Discord = require('discord.js');
exports.run = (client, message, args) => {
      if(!message.content.startsWith(`?`)) return
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('<a:1603_Animated_Cross:660100310005710888>`|Вы должны упомянуть кого-то, чтобы кикнуть их.`').catch(console.error);
  if (user.id === message.author.id) return message.reply("<a:1603_Animated_Cross:660100310005710888>`|Я не могу позволить тебе сделать это, вредить себе вредно`");
  if (user.id === client.user.id) return message.reply("Вы, любитель, как вы можете использовать бота, чтобы пнуть себя?");
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("<a:1603_Animated_Cross:660100310005710888>`|У вас нет разрешения **Kick Members**!`");
  
  if (reason.length < 1) reason = 'No reason supplied';

  if (!message.guild.member(user).kickable) return message.reply('<a:1603_Animated_Cross:660100310005710888>`|Я не могу кикнуть этого человека`');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Действие:', 'Кик')
    .addField('Участник:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Администратор:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Причина', reason)
  message.channel.send(embed)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yeet"],
  permLevel: 0
};

exports.help = {
  name: 'kick'
};
