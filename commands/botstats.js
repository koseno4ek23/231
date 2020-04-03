const { version } = require("discord.js");
const moment = require("moment");
const Discord = require("discord.js");


module.exports.run = async(client, message, args) => {
    if(!message.content.startsWith(`?`)) return

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;   
    let uptime = `${days} Дней, ${hours} часов, ${minutes} минут ${seconds} секунд.`;
    let embed = new Discord.RichEmbed()
        .setAuthor(`Статистика бота ${client.user.tag}`, client.user.avatarURL)
        .setThumbnail(client.user.avatarUrl)
        .setColor(0x6495ed)
        .setFooter('Бот был создан:')
        .setTimestamp(client.user.createdAt)
        .addField("⭕ | Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
        .addField("🕑 | Время запуска", `${uptime}`, true)
        .addField("〽 | Задержка бота с DiscordAPI", `${Math.round(client.ping)}ms.`)
        .addField("👥 | Пользователей", `${client.users.size.toLocaleString()}`, true)
        .addField("🌐 | Количество серверов", `${client.guilds.size.toLocaleString()}`, true)
        .addField("🗨 | Количество всех каналов", `${client.channels.size.toLocaleString()}`, true)
        .addField("⚙ | Количество команд", `${client.commands.size.toLocaleString()}`, true)
        .addField("💡 | Версия Discord.js", `v${version}`, true)
       .addField("Разработчики","<@366202870070116362>")
 
    message.channel.send(embed);
};

module.exports.help = {
name: "botstats"
}