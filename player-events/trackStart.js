module.exports = (client, message, track) => {
    message.channel.messages.fetch({limit: 1}).then(messages => {
        message.channel.bulkDelete(messages)});
    message.channel.send(`${client.emotes.music} - Hiện đang phát ${track.title} ở ${message.member.voice.channel.name} `).then(m => m.delete({ timeout: 7000 }))

};