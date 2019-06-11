const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://dog.ceo/api/breeds/image/random`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Chat aléatoire",
            description:`Voici le chien que **${message.author.username}** a demandé`,
            image:{
                url: `${body.message}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"dog"
};
