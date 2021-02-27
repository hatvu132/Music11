exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong kênh Voice @@ !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc đang phát !`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - Bài hát ${client.player.getQueue(message).playing.title} Dừng lại !`);

};
