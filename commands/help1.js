const { version } = require("discord.js");
const moment = require("moment");
const Discord = require("discord.js");


module.exports.run = async(client, message, args) => {
    if(!message.content.startsWith(`?`)) return

    if (args[0] == "ban") {
        let ban = new Discord.RichEmbed()
        .setColor(CD5C5C)
        .setTitle(`**Команда "ban"**`)
        .addField("Описание команды","Забанить пользователя", true)
        .addField("Категория","Модерация", true)
        .addField("Использование", "`ban @пользователь причина`")
        .addField("Права для команды", "BAN_MEMBERS", true)
        message.channel.send(ban)
        return
        };

        if (args[0] == "warn") {
            let warn = new Discord.RichEmbed()
            .setColor(F08080)
            .setTitle(`**Команда "warn"**`)
            .addField("Описание команды","Предупреждение пользователя", true)
            .addField("Категория","Модерация", true)
            .addField("Использование", "`warn @пользователь причина`")
            .addField("Права для команды", "MANAGE_MESSAGES", true)
            message.channel.send(warn)
            return
            };

            if (args[0] == "kick") {
                let kick = new Discord.RichEmbed()
                .setColor(FA8072)
                .setTitle(`**Команда "kick"**`)
                .addField("Описание команды","Кик пользователя", true)
                .addField("Категория","Модерация", true)
                .addField("Использование", "`kick @пользователь причина`")
                .addField("Права для команды", "KICK_MEMBERS", true)
                message.channel.send(kick)
                return
                };

                if (args[0] == "mute") {
                    let mute = new Discord.RichEmbed()
                    .setColor(E9967A)
                    .setTitle(`**Команда "mute"**`)
                    .addField("Описание команды","Мут пользователя", true)
                    .addField("Категория","Модерация", true)
                    .addField("Использование", "`mute @пользователь причина`")
                    .addField("Права для команды", "MANAGE_MESSAGES", true)
                    message.channel.send(mute)
                    return
                    };

                    if (args[0] == "addrole") {
                        let addrole = new Discord.RichEmbed()
                        .setColor(FFA07A)
                        .setTitle(`**Команда "addrole"**`)
                        .addField("Описание команды","Выдать роль пользователю", true)
                        .addField("Категория","Модерация", true)
                        .addField("Использование", "`addrole @пользователь роль`")
                        .addField("Права для команды", "MANAGE_ROLES", true)
                        message.channel.send(addrole)
                        return
                        };

                        if (args[0] == "clear") {
                            let clear = new Discord.RichEmbed()
                            .setColor(DC143C)
                            .setTitle(`**Команда "clear"**`)
                            .addField("Описание команды","Очистить чат", true)
                            .addField("Категория","Модерация", true)
                            .addField("Использование", "`clear кол-во сообщения`")
                            .addField("Права для команды", "MANAGE_MESSAGES", true)
                            message.channel.send(clear)
                            return
                            };

                            if (args[0] == "avatar") {
                                let avatar = new Discord.RichEmbed()
                                .setColor(FFC0CB)
                                .setTitle(`**Команда "avatar"**`)
                                .addField("Описание команды","Просмотр аватарки", true)
                                .addField("Категория","Информация", true)
                                .addField("Использование", "`avatar`")
                                .addField("Права для команды", "Не нужны", true)
                                message.channel.send(avatar)
                                return
                                };


                                    if (args[0] == "ping") {
                                        let ping = new Discord.RichEmbed()
                                        .setColor(FF1493)
                                        .setTitle(`**Команда "ping"**`)
                                        .addField("Описание команды","Просмотр задержки бота", true)
                                        .addField("Категория","Информация", true)
                                        .addField("Использование", "`ping`")
                                        .addField("Права для команды", "Не нужны", true)
                                        message.channel.send(ping)
                                        return
                                        };

                                        if (args[0] == "role-info") {
                                            let roleinfo = new Discord.RichEmbed()
                                            .setColor(C71585)
                                            .setTitle(`**Команда "role-info"**`)
                                            .addField("Описание команды","Информация о роли", true)
                                            .addField("Категория","Информация", true)
                                            .addField("Использование", "`role-info роль`")
                                            .addField("Права для команды", "Не нужны", true)
                                            message.channel.send(ping)
                                            return
                                            };

                                            if (args[0] == "server") {
                                                let server = new Discord.RichEmbed()
                                                .setColor(DB7093)
                                                .setTitle(`**Команда "server"**`)
                                                .addField("Описание команды","Информация о сервере", true)
                                                .addField("Категория","Информация", true)
                                                .addField("Использование", "`server`")
                                                .addField("Права для команды", "Не нужны", true)
                                                message.channel.send(server)
                                                return
                                                };
                                                
                                                if (args[0] == "userinfo") {
                                                    let userinfo = new Discord.RichEmbed()
                                                    .setColor(FFA07A)
                                                    .setTitle(`**Команда "userinfo"**`)
                                                    .addField("Описание команды","Информация о сервере", true)
                                                    .addField("Категория","Информация", true)
                                                    .addField("Использование", "`server`")
                                                    .addField("Права для команды", "Не нужны", true)
                                                    message.channel.send(userinfo)
                                                    return
                                                    };

                                                    if (args[0] == "saper") {
                                                        let saper = new Discord.RichEmbed()
                                                        .setColor(FF7F50)
                                                        .setTitle(`**Команда "saper"**`)
                                                        .addField("Описание команды","Играть в сапера", true)
                                                        .addField("Категория","Развлечения", true)
                                                        .addField("Использование", "`saper`")
                                                        .addField("Права для команды", "Не нужны", true)
                                                        message.channel.send(saper)
                                                        return
                                                        };

                                                        if (args[0] == "ss") {
                                                            let ss = new Discord.RichEmbed()
                                                            .setColor(FF6347)
                                                            .setTitle(`**Команда "ss"**`)
                                                            .addField("Описание команды","Сделать скриншот сайта", true)
                                                            .addField("Категория","Развлечения", true)
                                                            .addField("Использование", "`ss сайт`")
                                                            .addField("Права для команды", "Не нужны", true)
                                                            message.channel.send(ss)
                                                            return
                                                            };

                                                            if (args[0] == "translate") {
                                                                let translate = new Discord.RichEmbed()
                                                                .setColor(FF4500)
                                                                .setTitle(`**Команда "translate"**`)
                                                                .addField("Описание команды","Перевести с русского/англиского на русский/англиский", true)
                                                                .addField("Категория","Развлечения", true)
                                                                .addField("Использование", "`translate cat en/кошка ru`")
                                                                .addField("Права для команды", "Не нужны", true)
                                                                message.channel.send(translate)
                                                                return
                                                                };

                                                                if (args[0] == "cuddle") {
                                                                    let cuddle = new Discord.RichEmbed()
                                                                    .setColor(FF8C00)
                                                                    .setTitle(`**Команда "cuddle"**`)
                                                                    .addField("Описание команды","Обнять пользователя", true)
                                                                    .addField("Категория","RP", true)
                                                                    .addField("Использование", "`cuddle @пользователь`")
                                                                    .addField("Права для команды", "Не нужны", true)
                                                                    message.channel.send(cuddle)
                                                                    return
                                                                    };

                                                                    if (args[0] == "hug") {
                                                                        let hug = new Discord.RichEmbed()
                                                                        .setColor(FFD700)
                                                                        .setTitle(`**Команда "hug"**`)
                                                                        .addField("Описание команды","Обнять пользователя", true)
                                                                        .addField("Категория","RP", true)
                                                                        .addField("Использование", "`hug @пользователь`")
                                                                        .addField("Права для команды", "Не нужны", true)
                                                                        message.channel.send(hug)
                                                                        return
                                                                        };

                                                                        if (args[0] == "kiss") {
                                                                            let kiss = new Discord.RichEmbed()
                                                                            .setColor(FFFF00)
                                                                            .setTitle(`**Команда "kiss"**`)
                                                                            .addField("Описание команды","поцеловать пользователя", true)
                                                                            .addField("Категория","RP", true)
                                                                            .addField("Использование", "`kiss @пользователь`")
                                                                            .addField("Права для команды", "Не нужны", true)
                                                                            message.channel.send(kiss)
                                                                            return
                                                                            };

                                                                            if (args[0] == "poke") {
                                                                                let poke = new Discord.RichEmbed()
                                                                                .setColor(FFFACD)
                                                                                .setTitle(`**Команда "poke"**`)
                                                                                .addField("Описание команды","Тронуть пользователя", true)
                                                                                .addField("Категория","RP", true)
                                                                                .addField("Использование", "`poke @пользователь`")
                                                                                .addField("Права для команды", "Не нужны", true)
                                                                                message.channel.send(poke)
                                                                                return
                                                                                };

                                                                                if (args[0] == "shoot") {
                                                                                    let shoot = new Discord.RichEmbed()
                                                                                    .setColor(FAFAD2)
                                                                                    .setTitle(`**Команда "shoot"**`)
                                                                                    .addField("Описание команды","Выстрельнуть в пользователя", true)
                                                                                    .addField("Категория","RP", true)
                                                                                    .addField("Использование", "`shoot @пользователь`")
                                                                                    .addField("Права для команды", "Не нужны", true)
                                                                                    message.channel.send(shoot)
                                                                                    return
                                                                                    };

                                                                                    if (args[0] == "neko") {
                                                                                        let neko = new Discord.RichEmbed()
                                                                                        .setColor(FFEFD5)
                                                                                        .setTitle(`**Команда "neko"**`)
                                                                                        .addField("Описание команды","Порнушка", true)
                                                                                        .addField("Категория","NSFW", true)
                                                                                        .addField("Использование", "`neko тег(только в nsfw каналах)`")
                                                                                        .addField("Права для команды", "Не нужны", true)
                                                                                        message.channel.send(neko)
                                                                                        return
                                                                                        };

                                                                                        if (args[0] == "invite") {
                                                                                            let invite = new Discord.RichEmbed()
                                                                                            .setColor(FFDAB9)
                                                                                            .setTitle(`**Команда "invite"**`)
                                                                                            .addField("Описание команды","Пригласить бота на сервер", true)
                                                                                            .addField("Категория","Поддержка", true)
                                                                                            .addField("Использование", "`invite`")
                                                                                            .addField("Права для команды", "Не нужны", true)
                                                                                            message.channel.send(invite)
                                                                                            return
                                                                                            };

                                                                                            if (args[0] == "bug") {
                                                                                                let bug = new Discord.RichEmbed()
                                                                                                .setColor(EEE8AA)
                                                                                                .setTitle(`**Команда "bug"**`)
                                                                                                .addField("Описание команды","Отправить баг создателю бота", true)
                                                                                                .addField("Категория","Поддержка", true)
                                                                                                .addField("Использование", "`bug описание бага`")
                                                                                                .addField("Права для команды", "Не нужны", true)
                                                                                                message.channel.send(bug)
                                                                                                return
                                                                                                };

                                                                                                if (args[0] == "play") {
                                                                                                    let play = new Discord.RichEmbed()
                                                                                                    .setColor(F0E68C)
                                                                                                    .setTitle(`**Команда "play"**`)
                                                                                                    .addField("Описание команды","Возпроизвести музыку", true)
                                                                                                    .addField("Категория","Музыка", true)
                                                                                                    .addField("Использование", "`play название песни`")
                                                                                                    .addField("Права для команды", "Не нужны", true)
                                                                                                    message.channel.send(play)
                                                                                                    return
                                                                                                    };

                                                                                                    if (args[0] == "stop") {
                                                                                                        let stop = new Discord.RichEmbed()
                                                                                                        .setColor(BDB76B)
                                                                                                        .setTitle(`**Команда "stop"**`)
                                                                                                        .addField("Описание команды","Остановить музыку", true)
                                                                                                        .addField("Категория","Музыка", true)
                                                                                                        .addField("Использование", "`stop`")
                                                                                                        .addField("Права для команды", "Не нужны", true)
                                                                                                        message.channel.send(stop)
                                                                                                        return
                                                                                                        };

                                                                                                        if (args[0] == "pause") {
                                                                                                            let pause = new Discord.RichEmbed()
                                                                                                            .setColor(E6E6FA)
                                                                                                            .setTitle(`**Команда "pause"**`)
                                                                                                            .addField("Описание команды","Поставить музыку на паузу", true)
                                                                                                            .addField("Категория","Музыка", true)
                                                                                                            .addField("Использование", "`pause`")
                                                                                                            .addField("Права для команды", "Не нужны", true)
                                                                                                            message.channel.send(pause)
                                                                                                            return
                                                                                                            };

                                                                                                            if (args[0] == "resume") {
                                                                                                                let resume = new Discord.RichEmbed()
                                                                                                                .setColor(D8BFD8)
                                                                                                                .setTitle(`**Команда "resume"**`)
                                                                                                                .addField("Описание команды","Продолжить проигрывать музыку", true)
                                                                                                                .addField("Категория","Музыка", true)
                                                                                                                .addField("Использование", "`resume`")
                                                                                                                .addField("Права для команды", "Не нужны", true)
                                                                                                                message.channel.send(resume)
                                                                                                                return
                                                                                                                };





    let embed = new Discord.RichEmbed()
        .setTitle(`Команда помощи`)
        .setThumbnail(client.user.avatarUrl)
        .setColor(0x6495ed)
        .addField("Модерация","`ban` `warn` `kick` `mute` `addrole` `clear`")
        .addField("Информация","`avatar` `ping` `role-info` `server` `user-info`")
        .addField("Развлчение", "`cat` `saper` `ss` `translate`")
        .addField("RP", "`slap` `cuddle` `hug` `kiss` `poke` `shoot`")
        .addField("Nsfw", "`neko`")
        .addField("Поддержка", "`invite` `bug`")
        .addField("Музыка", "`play` `stop` `pause` `resume`")
        .addField("Разработчикам", "`botstats` `eval`")
        .setDescription("**Что-бы посмотреть подробнее о команде help(команда)")
 
    message.channel.send(embed);
};

module.exports.help = {
name: "help"
}