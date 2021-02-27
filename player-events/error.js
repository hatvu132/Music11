module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Không có nhạc trong kênh Voice !`).then(m => m.delete({ timeout: 3000 }))
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Ngài đang không kết nói vào kênh Voice <3 !`).then(m => m.delete({ timeout: 3000 }))
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Em không có quyền để truy cập vào kênh Voice,hãy chỉnh lại quyền của em nhé !`).then(m => m.delete({ timeout: 3000 }))
            break;
        default:
            message.channel.send(`${client.emotes.error} - Em bị lỗi rồi : ${error}`).then(m => m.delete({ timeout: 3000 }))
    };

};
