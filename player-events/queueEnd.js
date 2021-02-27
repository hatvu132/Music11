module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - Nhạc đã dừng vì không còn yêu cầu !`).then(m => m.delete({ timeout:3000 }))

};