const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kick command",

    async run (bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Ngài không thể dùng lệnh này!**")
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Không có lí do";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`**Bạn đã bị kick khỏi ${message.guild.name}**`)
        .setDescription(`Lí do: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("**Ngài phải chỉ định người bị KICK**");

        if(!mentionMember) return message.channel.send("**Người dùng này không có ở trong server**");

        if(!mentionMember.kickable) return message.channel.send("**Em không thể KICK người này**");


        const kickembeds = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(mentionMember.user.tag + "** Đã bị kick khỏi đây**")
        .setDescription(`Lí do : ${reason}`)



    
         await mentionMember.send(kickembed);
         await message.channel.send(kickembeds);
        





        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("**Em không thể KICK người này**")
        }
    }
}