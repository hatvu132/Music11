const Discord = require("discord.js")
module.exports = {
    name: "dm",
    description: "DM a user in the guild",
    category: "fun",
    run: async (bot, message, args) => {
      const fuck = new Discord.MessageEmbed()
      .setTitle("👿 | Mày đéo phải chủ tao,chỉ có chủ tao mới được dùng lệnh này |  👿")
      .setColor("RANDOM");
        message.channel.messages.fetch({limit: 1}).then(messages => {
            message.channel.bulkDelete(messages)});
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!args.slice(1).join(" "))
        return message.channel.send("Ngài hãy điền tên người muốn nhắn đến");
      user.user
        if(message.author.username.startsWith("okikki")) return user.send(`Từ ${message.author.username} : `+ args.slice(1).join(" ")).then(() => message.channel.send(`**Đã gửi tin nhắn đến ${user.user.tag}**`)).then(m => m.delete({ timeout: 1500 }))
        message.channel.send(fuck).then(m => m.delete({ timeout: 3000 }))
    },
  };