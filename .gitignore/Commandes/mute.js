const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES" && "MANAGE_ROLES")) return message.channel.send(":x: Erreur - Permissions manquantes : **MANAGE_MESSAGES** et **MANAGE_ROLES**").catch(console.error);
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES" && "MANAGE_ROLES")) return message.channel.send(":x: Erreur - Permissions manquantes du bot : **MANAGE_MESSAGES** et **MANAGE_ROLES**").catch(console.error);

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(':x: Erreur - Membre introuvable !');
    if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(":x: Erreur - Vous ne pouvez pas mute se membre").catch(console.error);
    if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(":x: Erreur - Je ne peut pas mute ce membre !").catch(console.error);
    
    let muterole = message.guild.roles.find(role => role.name === 'Muted');
    if(muterole) {
        member.addRole(muterole);
        message.channel.send(`:white_check_mark: L'utilisateur **${member}** à bien été mute !`);
    }else{
        message.guild.createRole({name: "Muted", permissions : 0}).then((role) => {
            message.guild.channels.filter(channel => channel.type === "text").forEach(channel => {
                channel.overwritePermissions(role,{
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
            member.addRole(role);
            message.channel.send(`:white_check_mark: L'utilisateur **${member}** à bien été mute !`);
        });
    };
};

module.exports.help = {
    name:"mute"
};