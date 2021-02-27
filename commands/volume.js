exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong kênh Voice <3 !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc đang phát -_- !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Hãy nhập số !`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Hãy nhập âm lượng (0-100) !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Mức âm lượng là **${args.join(" ")}%** !`);

};
