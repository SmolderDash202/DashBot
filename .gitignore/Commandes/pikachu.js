const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://some-random-api.ml/pikachuimg`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Image de pikachu aléatoire",
            description:`Voici le pikachu que **${message.author.username}** a demandé`,
            image:{
                url: `${body.link}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"pikachu"
};
