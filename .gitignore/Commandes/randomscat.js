const Discord = require("discord.js"),
      random = require('random-cat');

module.exports.run = async(client, message, args) => {

    var url = random.get();
    message.channel.send({
        embed:{
            color:0xffffff,
            title:`Voici le chat que ${message.author.username} a demandé.`,
            image: {
                url: `${url}`
            }
        }
    });
};

module.exports.help = {
    name:"cat"
};