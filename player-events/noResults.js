module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - Không có kết quả trên Youtube về ${query} !`).then(m => m.delete({ timeout: 3000 }))

};