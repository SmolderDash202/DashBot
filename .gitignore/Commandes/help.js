const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.channel.send({
        embed:{
            color: 0xffffff,
            title: "Liste des commandes disponible",
            description:"Le prefix du bot est `?`\n\n**:shield: Modération**\n`purge` efface un nombre de message\n`kick` kick un membre\n`ban` ban un membre\n`mute` mute un membre\n`unmute` Unmute un joueur mute\n`sondage` crér un sondange\n\n**:ferris_wheel: Fun**\n`cat`affiche une immage aléatoire de chat\n`dog`Affiche une image aléatoire de chien\n`8ball` permet de poser une question au bot\n\n**:satellite: Utile**\n`help` affiche l'aide\n`ping` affiche la latence du bot\n`stats` affiche les stats d'un joueur",
            footer:{
                text:"©Tout droit résérvé à vcoding#4488 et SmolderDash202#8101 - Version 1.0"
            }
        }
    });
};

module.exports.help = {
    name:"help"
}