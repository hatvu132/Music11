exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không ở trong kênh chat !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc đang phát !`);

    client.player.clearQueue(message);

    message.channel.send(`${client.emotes.success} - Yêu cầu bị hủy bỏ !`);

};
