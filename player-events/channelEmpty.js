module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - Nhạc dừng vì chả có ai nghe cả :( !`).then(m => m.delete({ timeout: 5000 }))

};