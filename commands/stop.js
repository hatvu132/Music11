exports.run = async (client, message) => {
    message.channel.messages.fetch({limit: 1}).then(messages => {
        message.channel.bulkDelete(messages)});
    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong kênh Voice !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc đang phát !`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`${client.emotes.success} - Nhạc đã dừng !`);

};
