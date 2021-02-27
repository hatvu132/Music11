
const cheerio = require('cheerio');
const request = require('request');
module.exports = {
    name: 'random',
    description: 'Send random image from the webl!',
    guildOnly: true,
    args: true,
    aliases: 'rand,rimg,image,rimage',
    usage: 'Sends a random image of the given search you specify!',
    cooldown: 60,
    async execute(message, args) {
        srch = args.join(' ');
        image(message);
    }
}
function image(message){
    var options = {
        url: 'http://results.dogpile.com/serp?qc=images&q=' + srch,
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            'User-Agent': 'Chrome'
        }
        
    };
    request(options, function(error, response, responseBody){
        if (error){
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $('.image a.link');
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));
        console.log(urls);
        if (!urls.length){
            return;
        }
        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });
}