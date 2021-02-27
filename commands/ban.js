const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",

    async run (bot, message, args,) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('**Ngài Không Thể Dùng Lệnh Này**').then(m => m.delete({ timeout: 5000 }))
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**Em cần có quyền!**").then(m => m.delete({ timeout: 5000 }))
        let toban = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if(message.author.bot || message.channel.type === "dm") return;

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        message.channel.messages.fetch({limit: 1}).then(messages => {
            message.channel.bulkDelete(messages)});
        if (!reason) reason = "Không lí do";
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Bạn đã bị ban khỏi ${message.guild.name}**`)
        .setDescription(`Lí do: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())
        if (!args[0]) return message.channel.send("**Ngài hãy nhập tên người cần BAN**").then(m => m.delete({ timeout: 5000 }))

        if(!mentionMember) return message.channel.send("**Người này không có trong Server**").then(m => m.delete({ timeout: 5000 }))
const embeds = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription("**Đã ban:** " + mentionMember.user.tag)

        if(!mentionMember.bannable) return message.channel.send("**Em không thể BAN người này").then(m => m.delete({ timeout: 5000 }))

        await mentionMember.send(embed).then(m => m.delete({ timeout: 5000 }))
        toban.ban({
            reason: reason
        }).then(() => message.channel.send(embeds)).then(m => m.delete({ timeout: 5000 }))
    }
}

