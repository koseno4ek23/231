const translate = require("translate"); //Модуль.
const { RichEmbed } = require("discord.js") 
const colors = "Цвет для имбеда" 
translate.engine = "yandex"; // Можно указать и google, но тогда и API ключ надо будет другой.
translate.key = "trnsl.1.1.20191110T071138Z.7ceaa25bafe8da5c.cc9016db4735a44249e9e14821b489e28045e040" 
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(`?`)) return
  var args1 = message.content.toLowerCase().split(/ +/g); 
  let RU = ["ru", "русский", "russian"];
  let EN = ["en", "английский", "english"];
  let text = args.slice(1).join(" "); 
  if (!args[0]) return message.channel.send("Напиши с какого языка переводить (ru, en)");
  if(!text) return message.channel.send("Укажите текст для перевода!")
  if (args1.some(a => RU.find(word => word == a))) { 
    translate(text, { from: "ru", to: "en" }).then(text2 => { //Переводим с RU на EN
      message.channel.send(
      new RichEmbed()
      .setColor(colors)
      .addField("Перевод с русского на английского:", text2)
      )
    });
    return
  }
  if (args1.some(a => EN.find(word => word == a))) {
    translate(text, { from: "en", to: "ru" }).then(text => { //Тоже самое, но наоборот.
      message.channel.send(
      new RichEmbed()
      .setColor(colors)
      .addField("Перевод с английского на русский:", text)
      )
    });
    return
  }
  message.channel.send("Я не понял команду!")
};
module.exports.help = {
  name: "translate"
};