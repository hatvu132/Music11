exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong kênh chat >_< !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc đang phát >_<!`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} Dừng !`);

};
