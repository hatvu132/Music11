module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - Nhạc dừng,em phải rời đi rồi <3 !`).then(m => m.delete({ timeout: 7000 }))

};
