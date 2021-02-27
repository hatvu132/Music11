const Discord = require('discord.js')
module.exports = {
    name: "infobot",
    description: "DM a user in the guild",
    category: "fun",
    run: async (bot, message, args) => {
        message.channel.messages.fetch({limit: 1}).then(messages => {
        message.channel.bulkDelete(messages)});
        const Embed = new Discord.MessageEmbed()
        .setTitle('----------Info Okikki Bot----------')
        .setColor("RED")
        .addField('Name : Okikki Bot-chan','**Date of manufacture : 21/2/2021**')
        .addField('Boss : Okikki','**Nickname : Chúa tể ăn hại**')
        .addField('Sở thích : Làm Dj và uống rượu mỗi ngày','**Khả năng : Phát nhạc,làm các quyền...**')
        .setImage("https://i.ibb.co/qRZtKSw/151194580-1127672977677978-5254921277761792471-n.jpg?size:512")
        message.channel.send(Embed)
    }}