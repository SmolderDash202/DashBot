const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(':x: Erreur - Permissions manquante : **ADMINISTRATOR**');
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES" && "ADD_REACTIONS" && "SEND_MESSAGES")) return message.channel.send(':x: Erreur - Permissions manquante du bot : **MANAGES_MESSAGE** et **ADD_REACTIONS** et **SEND_MESSAGES**');

    let membre = message.author.id;
    message.channel.bulkDelete(1);
    
    if(!args[0]) return message.channel.send(":x: Erreur - Veuillez entrer une question");
    let question = args.join(" ").slice();

    message.channel.send({
        embed:{
            title:"Sondage :interrobang:",
            color:0xffffff,
            description:`> **${question}**`
        }
    }).then(message => {
        message.react('✅');
        setTimeout(function(){
            message.react('❌');
        }, 100);     
    });
};

module.exports.help = {
    name:"sondage"
};