const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;
client.config = require('./config/bot.json');
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new Discord.Collection();
const randomanime = require("random-anime")

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});
fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});
fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName}`);
        client.commands.set(commandName, props);
    });
});


const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Ping Received.`);
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end("Watch And Have Fun!")
});

app.get("/vdo", (request, response) => {
  let vdo = request.query.url
  if(!vdo) return response.send("Something Wrong :/")
  response.set('Content-Type', 'text/html');
  response.send(Buffer.from(`<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
video {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body style="text-align:center;">
<video width="400" controls>
 <source src="${vdo}" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
<p>Join my discord plz :v https://withwin.in/dbd</p>
</body>
</html>
`));
})

const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});

require("./anime.js")
// 


client.on("message", async message => {

  
  if (message.content === ".ra") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }
  /* Embed Image (D.JS Version 12) */
  if (message.content === ".rm") {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});

























client.login('ODEzNjkzMzA4MTM5OTk1MTM2.YDTA8g.HIC2EKZcEayGxqrmM-Cj7A6ZsWg');
