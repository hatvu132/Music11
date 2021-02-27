module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('**Hãy nhập số tin nhắn Ngài cần xóa**')

        if(amount > 100) return message.reply(`**Ngài không thể xóa hơn 100 tin nhắn**`)

        if(amount < 1) return message.reply(`**Ngài cần phải xóa it nhất 1 tin nhắn**`)

        await message.channel.messages.fetch({limit:amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(`**🧹 | Đã xóa ${amount} tin nhắn**`).then(m => m.delete({ timeout: 3000 }))

    }
}