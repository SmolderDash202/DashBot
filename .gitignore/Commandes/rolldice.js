const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Lancement du dé...");

    let {body} = await superagent.get(`https://dice-roll-koisusimkz.now.sh/d6`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send(`Voici le resultat du lancé de dé : **${body.rolls}**`);
    msg.delete();
};

module.exports.help = {
    name:"roll"
};
