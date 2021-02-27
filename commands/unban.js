const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Ngài không có quyền**!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('**Hãy nhập ID người unbaned!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('**Người dùng không xác định**').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'Không lí do';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Unbaned ${user.user.tag}`)
                    .setColor('RANDOM')
                    .addField('ID', user.user.id, true)
                    .addField('Lí do bị ban', user.reason != null ? user.reason : 'Không lí do')
                    .addField('Lí do được unbaned', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`${member.tag} không bị ban`)
                    .setColor('RAMDOM')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('**Bị lỗi**')
        });

    }
}