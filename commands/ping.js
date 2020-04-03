const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 let totalSeconds = (client.uptime / 1000);
 let days = Math.floor(totalSeconds / 86400);
 let hours = Math.floor(totalSeconds / 3600);
 totalSeconds %= 3600;
 let minutes = Math.floor(totalSeconds / 60);
 let seconds = totalSeconds % 60;  
 let uptime = `${days} Дней, ${hours} часов, ${minutes} минут ${seconds} секунд.`; 
let embed = new Discord.RichEmbed()
    .setAuthor("🏓 Pong!", client.user.avatarURL)
    .setThumbnail(`https://static6.depositphotos.com/1003034/633/i/950/depositphotos_6337403-stock-photo-3d-arrow-graph.jpg`)
    .setDescription(`:globe_with_meridians:  **Задежка бота: ${Math.round(client.ping)}МС.\n\
    \n\
     Время запуска:\n\
${uptime}**`)
    .setColor(0x6495ed)
    .setTimestamp(); 
   message.channel.send(embed);
}
 
module.exports.help = {
  name: "ping"
}