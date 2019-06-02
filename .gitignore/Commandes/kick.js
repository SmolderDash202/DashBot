const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Erreur - Permissions manquante : **KICK_MEMBERS**");
    
    if(message.mentions.users.size === 0) {
        return message.channel.send(":x: Erreur - Vous devez mentionner un utilisateur !");
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send(":x: Erreur - L'utisateur mentionné n'a pas été trouvé !");
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Erreur - Permissions du bot manquante : **KICK_MEMBERS**");
    if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(":x: Erreur - Vous ne pouvez pas kick cet utilisateur !").catch(console.error);
    if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(":x: Erreur - Je ne pas kick cet utilisateur !").catch(console.error);


    kick.kick().then(member => {
        message.channel.send(`:white_check_mark: ${member.user.username} à bien été kick par ${message.author.username}.`);
    });
};

module.exports.help = {
    name: "kick"
};