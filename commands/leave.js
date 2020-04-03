exports.run = (client, message, args) => {
    if(message.author.id !== "366202870070116362") return message.channel.send(`**»** ${message.author}, у вас нет прав`);
    let id = args[0];
    if (!id) id = message.guild.id;
    return message.guild.leave(id);
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
  name: 'leave',
  description: 'Leave the server that the bot is in.',
  usage: 'leave'
};
  