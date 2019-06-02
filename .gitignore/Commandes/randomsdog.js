const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.channel.send({
        embed:{
            color:0xffffff,
            title:`Voici le chien que ${message.author.username} a demandé.`,
            image: {
                url: "https://i.imgur.com/MxeLpuF.jpg"
            },
            footer:{
                text:"?dog est encore en développement !"
            }
        }
    });
};

module.exports.help = {
    name:"dog"
};