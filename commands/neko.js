const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
    if(!message.content.startsWith(`?`)) return
          if (!message.channel.nsfw) {
            message.react('💢');
            return
        }
      if (!args[0]) return message.channel.send(`Необходимо указать тег каритнки`); 

    
    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/${args[0]}`);

    let embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setColor("e4b400")
    message.channel.send(embed)
};
module.exports.help = {
    name: "neko",
    category: '-',
    aliases: ['h']
};