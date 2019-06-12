const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.channel.send({
        embed:{
            color: 0xffffff,
            title: "Liste des commandes disponible",
            description:"Le prefix du bot est `?`\n\n**:shield: Modération**\n`clear` efface un nombre de message\n`kick` kick un membre\n`ban` ban un membre\n`mute` mute un membre\n`unmute` unmute un joueur mute\n`sondage` crée un sondange\n\n**:ferris_wheel: Fun**\n`cat` affiche une immage aléatoire de chat\n`dog` affiche une image aléatoire de chien\n`fox` affiche une image aléatoire de renard\n`pikachu` affiche une image aléatoire de pikachu\n`panda` affiche une image aléatoire de panda\n`8ball` permet de poser une question au bot\n`roll` lance un dé et donne le résultat\n\n**:satellite: Utile**\n`help` affiche l'aide\n`ping` affiche la latence du bot\n`stats` affiche les stats d'un joueur",
            footer:{
                text:"©Tout droit résérvé à vcoding#4488 et SmolderDash202#8101 - Version 1.1"
            }
        }
    });
};

module.exports.help = {
    name:"help"
}
