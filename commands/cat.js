const sa = require("superagent");
const { RichEmbed } = require("discord.js")
let colors = "Цвет"
module.exports.run = async (client, message, args) => {
    if(!message.content.startsWith(`?`)) return
  try {
    var { body } = await sa.get(`https://aws.random.cat//meow`);
    message.channel.send(
      new RichEmbed().setColor(colors).setImage(body.file)
    );
  } catch (err) {
    message.channel.send(
      new RichEmbed().setColor("RED").addField("Ашибка", err.message)
    );
    console.log(err.stack);
  }
};
module.exports.help = {
  name: "cat"
};