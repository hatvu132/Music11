exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong kênh Voice !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc đang phát !`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            fields: [
                { name: 'Kênh', value: track.author, inline: true },
                { name: 'Yêu cầu bởi', value: track.requestedBy.username, inline: true },
                { name: 'Từ danh sách', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Lượt xem', value: track.views, inline: true },
                { name: 'Duration', value: track.duration, inline: true },
                { name: 'Filters activated', value: filters.length, inline: true },

                { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
