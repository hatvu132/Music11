const Discord = require('discord.js')
module.exports = {
    async run (bot, message, args) {
        let mess = args.slice(0).join(" ");
        message.channel.messages.fetch({limit: 1}).then(messages => {
            message.channel.bulkDelete(messages)});
            const says = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Từ okikki : ${mess}`)
            if(message.author.username.startsWith('okikki')) return(message.channel.send(says))
        const ml = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(" 👿 | Mày đéo phải chủ tao,chỉ có chủ tao mới được dùng lệnh này |  👿")
        message.channel.send(ml)
    }
}