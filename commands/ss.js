const discord = require('discord.js');
const request = require('request-promise');
module.exports = {
    run: async(bot,message,args) => {
        if(!args[0]) return;
        var headers = { website: args[0]}
        var res = await  request('http://magmachain.herokuapp.com/api/v1', {headers: headers, json: true});
        message.channel.send(new discord.RichEmbed().setColor('random').setTitle(res.website).setImage(res.snapshot));
    },
    help: {
        name: 'ss'
    }
}