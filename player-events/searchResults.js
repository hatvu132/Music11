module.exports = (client, message, query, tracks) => {
message.channel.messages.fetch({limit: 1}).then(messages => {
        message.channel.bulkDelete(messages)});
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Đây là kết quả của (${query}) - Tự động xóa sau 7s `},
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    }).then(m => m.delete({ timeout: 7000 })).then(message.channel.messages.fetch({limit: 1}).then(messages => {
        message.channel.bulkDelete(messages)}));
};