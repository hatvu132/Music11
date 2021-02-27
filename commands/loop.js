exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trog kênh Voice <3 !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có bài hát nào đang phát :D !`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${client.emotes.success} - Chế độ lặp lại: Tắt !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${client.emotes.success} - Chế độ lặp lại: Bật !`);
    };

};
