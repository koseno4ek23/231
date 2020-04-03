const { inspect } = require('util');
const Discord = require("discord.js")
let owners = ["366202870070116362"]


module.exports.run = async (client, message, args) => {
  if(!message.content.startsWith(`?`)) return
    message.delete()
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} | Отказ.`, message.author.avatarURL)
    .setColor(0xcc6668)
    .setDescription("<a:1603_Animated_Cross:660100310005710888>`|Вы не имейте права использовать эту команду`")

if (!owners.some(e => message.author.id.includes(e))) return message.channel.send(embed).then(message => message.delete(6000))
     else {
        let evaled;
        try {
          evaled = await eval(args.join(' '));
          let embed = new Discord.RichEmbed()
          .setDescription(`${evaled}`)
          .setColor(0x9966cc)
          message.channel.send(embed).then(message => message.delete(5000))
          console.log(inspect(evaled));
        }
        catch (error) {
          console.error(error);
          let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag} | Что-то произошло не так.`, message.author.avatarURL)
            .setDescription(`Ошибка при выполнении: ${error}`)
            .setColor("RANDOM")
            message.channel.send(embed).then(message => message.delete(5000))
        }
            }  
                }
                    

module.exports.help = {
    name: "eval"
}