const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`http://aws.random.cat/meow`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Image de chat aléatoire",
            description:`Voici le chat que **${message.author.username}** a demandé`,
            image:{
                url: `${body.file}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"cat"
};
