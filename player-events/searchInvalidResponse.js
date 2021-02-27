module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Bạn phải nhập số 1 - ${tracks.length} !`);

};