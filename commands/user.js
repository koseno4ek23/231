const Discord = require('discord.js');
let m = require("moment")
exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if(!message.content.startsWith(`?`)) return
	var time = Date.now();
	let member = message.mentions.users.first();
  m.locale("ru")
	//if (!member) return message.reply('Please mention a valid member of this server');
	var user;
	if (!member && !args[0]) {
		user = message.author;
	} else if (args[0] && !member) {
		if (isNaN(args[0])) return message.reply('Not a user ID');
		user = client.users.get(args[0]);
		if (!user) return message.reply('Участник не найден');
	} else {
		user = member;
	}

	console.log(user);

	// TODO: Allow you to check stats of other user
	var game;
	if (!user.presence.game) {
		game = 'Не играет';
	} else {
		game = user.presence.game.name;
	}

	const embed = new Discord.RichEmbed()
		.setColor('RED')
		.setAuthor(user.tag, user.displayAvatarURL)
		.setTitle('Информация')
		.setThumbnail(user.displayAvatarURL)
		.addField(`Участник`, `${user.tag}`, true)
		.addField(`ID`, `${user.id}`, true)
		.addField(`Играет`, `${game}`, true)
		.addField(`Аккаунт создан`, date, true)

	if (message.channel.type !== 'dm') {
		embed.addField(`Зашел на сервер`, `${message.guild.members.get(user.id).joinedAt.toDateString()}`, true)
			.addField(`Роли`, `${message.guild.members.get(user.id).roles.filter(r => r.position !== 0).map(R => R).join(', ') || 'No Roles'}`); // Filter is to filter out @everyone role
	}
	message.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['ui'],
	permLevel: 0
};

exports.help = {
	name: 'userinfo',
	category: 'Miscelaneous',
	description: 'Will give you stats about your (or another guild member\'s) Discord account',
	usage: 'userinfo\n userinfo [user mention]'
};