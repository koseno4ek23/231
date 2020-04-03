const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
  
      if(!message.content.startsWith(`?`)) return

    let ot = ["Это точно", "Это несомненно так", " Без сомнения", "Да — наверняка", "Вы можете положиться на это", "Как я вижу, да", "Скорее всего", "Хорошие перспективы", "Признаки указывают на да", "Да", "Лекго, попробуйте снова", "Спроси позже", "Лучше не скажу вам сейчас", "Я не могу предсказать", "Сосредоточиться и снова задать", "Не рассчитывай на это", "Мой ответ-нет", "Мои источники говорят нет", "Перспективы не очень хорошие", "Очень сомнительно"]
    var rand = Math.floor(Math.random() * ot.length);
    let answer = args.join(" ")
    if (!answer) return;
    let embed = new Discord.RichEmbed()
        .setDescription(`${message.author.tag}`)
        .addField(`:question: Вопрос`, answer)
        .addField(`:8ball: 8ball`, ot[rand]);

    message.channel.send(embed)


};
module.exports.help = {
    name: "8ball"
};