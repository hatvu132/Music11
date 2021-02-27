module.exports = {
    name: 'command',
    description: "This is an example",
    execute(message, args){
        message.channel.send("Loading...", { embed });
    }
  }
  
  const embed = {
    "title": "title",
    "description": "here is a cool embed",
    "color": 11219587,
    "footer": {
      "icon_url": "randomurl.com",
      "text": "Footer text"
    },
    "image": {
      "url": "mainimageurl.com"
    },
    "fields": [
      {
        "name": "Field example",
        "value": "Your text here"
      }
    ]
  };