const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../config.json");
 
module.exports.run = async (bot, message, args) => {
      if(!message.content.startsWith(`?`)) return
 
 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:1603_Animated_Cross:660100310005710888>`|У вас нет прав`");

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("<a:1603_Animated_Cross:660100310005710888>`|Укажите пользователя`");
  if(tomute.hasPermission("MANAGE_GUILD")) return message.reply("У меня нет прав");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("<a:1603_Animated_Cross:660100310005710888>`|Укажите причину`");
 
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("<a:1603_Animated_Cross:660100310005710888>`|Укажите время`");
 
  message.delete().catch(O_o=>{});
 
  try{
    await tomute.send(`Вы были отключены на ${mutetime}.`)
 }catch(e){
   message.channel.send(`Пользователь отключен ... но его DM заблокированы. Они будут отключены для ${mutetime}`)
 }
 
 let muteembed = new Discord.RichEmbed()
 .setDescription(`Администратор ${message.author}`)
 .setColor("#00edff")
 .addField("Участник", tomute)
 .addField("Замьючен", message.channel)
 .addField("Причина", mutetime)
 .addField("Время", reason);
  message.channel.send(muteembed)
 
 
 await(tomute.addRole(muterole.id));
 
 setTimeout(function(){
   tomute.removeRole(muterole.id);
   message.channel.send(`<@${tomute.id}> Был размучен`);
 }, ms(mutetime));
 
 
//end of module
}
 
module.exports.help = {
 name: "mute"
}