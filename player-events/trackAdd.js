module.exports = (client, message, queue, track) => {

    message.channel.send(`${client.emotes.music} - ${track.title} Đã được yêu cầu !`).then(m => m.delete({ timeout: 7000 }))

};