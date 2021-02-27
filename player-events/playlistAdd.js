module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} đã được thêm vào ${playlist.items.length} !`).then(m => m.delete({ timeout: 3000 }))

};