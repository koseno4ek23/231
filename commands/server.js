const discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.content.startsWith(`?`)) return
  
    const map = { "eu-central": "Центральная Европа ", "singapore" : "Сингапур", "russia": "Российская Федерация", "eu-west" : "Западная Европа", "us-west" : "Запад Соединеных Штатов Америки", "us-east" : "Восток Соединеных Штатов Америки", "us-central" : "Центральная Америка", "us-south" : "Юг Соединеных Штатов Америки", "southafrica" : "Южная Африка", "japan" : "Япония", "hongkong" : "Хонг Конд", "sydney" : "Сидни", "brazil" : "Бразилия", "india" : "Индия","europe":"Европа"}
    const map1 = { "0" : "Отсутствует", "1" : "Низкий", "2" : "Средний", "3" : "Высокий", "4" : "Максимальный"}
    let embed = new discord.RichEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.avatarURL)
        .setThumbnail(message.guild.avatarURL)
        .addField('Владелец:' , message.guild.owner, true)
        .addField('ID:' ,message.guild.id, true)
        .addField('🌎|Регион:', map[message.guild.region], true)
        .addField('Каналов:', `\n\
Текстовых ${message.guild.channels.filter(c => c.type == 'text').size} | Голосовых ${message.guild.channels.filter(c => c.type == 'voice').size}`, true)
         .addField('👬|Количество участников:', ` Всего ${message.guild.memberCount} |Ботов ${message.guild.members.filter(m => m.user.bot).size}\n\
<a:5886_online:660713871798960158>|Онлайн: ${message.guild.members.filter(m => m.user.presence.status === 'online').size}\n\
<a:3359_dnd:660713871085928477>|Не беспокоить: ${message.guild.members.filter(m => m.user.presence.status === 'dnd').size}\n\
<a:1656_idle:660713870905704469>|Не активен(АФК): ${message.guild.members.filter( m => m.user.presence.status === 'idle').size}\n\
<a:8500_offline:660713870939258904>|Не в сети: ${message.guild.members.filter(m => m.user.presence.status === 'offline').size}`, false)
        .addField('🎭|Роли:',message.guild.roles.first(20).join(' ')|| 'No Roles')
          .addField('Эмодзи:', message.guild.emojis.first(20).join(' ')|| 'No Emojis')
          .setFooter('Сервер создан')
        .setTimestamp(new Date(message.guild.createdTimestamp))
        .setColor(0x9966cc)
    await message.channel.send(embed)
}

module.exports.help = {
    name: 'server'
}