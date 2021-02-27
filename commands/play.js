exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong kênh Voice !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Làm ơn hãy nhập tên bài hát <3 !`);

    client.player.play(message, args.join(" "));

};
