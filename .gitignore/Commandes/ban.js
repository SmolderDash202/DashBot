const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Erreur - Permission manquante : **BAN_MEMBERS**");
    
    if(message.mentions.users.size === 0) {
        return message.channel.send(":x: Erreur - Vous devez mentionner un utilisateur !");
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(":x: Erreur - L'utisateur mentionné n'a pas été trouvé !");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Erreur - Permission du bot manquante : **BAN_MEMBERS**");
    if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(":x: Erreur - Vous ne pouvez pas ban ce membre !").catch(console.error);
    if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(":x: Erreur - Je ne peut pas ban ce membre !").catch(console.error);

    ban.ban().then(member => {
        message.channel.send(`:white_check_mark: ${member.user.username} à bien été banni par ${message.author.username}.`);
    });
};

module.exports.help = {
    name: "ban"
};