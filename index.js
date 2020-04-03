const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const db = require('quick.db');
client.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if (err) console.log (err);

    let jsfile = files.filter(f => f.split ('.').pop() === 'js')
    if (jsfile.length <= 0) return console.log(`Я не нахожу никаких команд`)
        
    console.log(`Кол-во команд: ${jsfile.length}`)
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        client.commands.set(props.help.name, props)
    })
})


if(command === `avatar`){
	if(msg.channel.type === 'dm') return msg.channel.send("Nope Nope!! u can't use avatar command in DMs (:")
        let mentions = msg.mentions.members.first()
        if(!mentions) {
          let sicon = msg.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(msg.author.avatarURL)
          .setColor("#5074b3")
          msg.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          msg.channel.send({embed})
        }
    };



client.on('message', async message => {
    let prefix = config.prefix
    let messageArray = message.content.split(' ')
    let command = messageArray[0]
    let args = messageArray.slice(1)

    let command_file = client.commands.get(command.slice(prefix.length))
    if (command_file) command_file.run(client, message, args)       
    })


client.login(config.token);
client.on('ready', () => {
    console.log(`Идёт посчет данных...`)
    console.log(`Авторизирован пользователь ${client.user.tag}`)
    console.log(`Гильдий на момент загрузки: ${client.guilds.size}`)
    console.log(`Пользователей на момент загрузки: ${client.users.size}`)
    var i = 0;
    var timer = client.setInterval(function () {    
        var gamePresence = [`Сервера: ${client.guilds.size}`,`?help`,`${client.users.size} участников`];
        client.user.setPresence({ game: { name: gamePresence[i%gamePresence.length], type: "streaming" , url: "https://www.twitch.tv/%none%"} });
        i++;
    },7500)
})