const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(`?`)) return

  
    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
      if(!sayMessage) return message.channel.send("<a:1603_Animated_Cross:660100310005710888> `| Укажите баг`").then(msg => {msg.delete(5000)});

let contact = new Discord.RichEmbed()
.setColor("#ff0f00")

.setThumbnail(Sender.displayAvatarURL)
.setDescription(`[${message.guild.name}](${Invite.url})`)
.setTitle("Сервер:")
.addField("Отправитель", Sender, true)
.addField("ID отправителя: ", Sender.id, true)
.addField("Баг: ", sayMessage)
.setTimestamp()

    bot.users.get("366202870070116362").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("<a:6093_Animated_Checkmark:660100212068581396> `| Баг успешно отправлен!`")
    .addField("Запрошено", Sender)
    .addField("Баг: ", sayMessage)
    .setFooter("Мы рассмотрим вашу проблему")

    message.channel.send(embed);


    }
module.exports.help = {
    name: "bug",
    aliases: ["баг"]
}