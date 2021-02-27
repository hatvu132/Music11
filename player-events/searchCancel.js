module.exports = (client, message, query, tracks) => {

    message.channel.send(`${client.emotes.error} - Hãy nhập lại lệnh !`).then(m => m.delete({ timeout: 3000 }))

};