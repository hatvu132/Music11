exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Hướng dẫn,bảng lệnh' },
            fields: [
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
                { name: 'Commands', value: '`ban`,`kick`,`image`,`clear`,`avatar`'},
                { name: 'okikki command', value:'`say`,`dm`'},
            ],
            timestamp: new Date(),
        },
    });

};
