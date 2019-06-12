const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Lancement du dé...");

    let {body} = await superagent.get(`https://dice-roll-koisusimkz.now.sh/d6`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");
    
    if(body.rolls == 1) {
        message.channel.send({
            embed:{
                color: 0xffffff,
                title:`Résultat du lancé dé : **${body.rolls}**`,
                image:{
                    url:"https://i.imgur.com/JLyJ5my.png"
                }
            }
        });
    }
    if(body.rolls == 2) {
        message.channel.send({
            embed:{
                color: 0xffffff,
                title:`Résultat du lancé dé : **${body.rolls}**`,
                image:{
                    url:"https://i.imgur.com/Uyubnb5.png"
                }
            }
        });
    }
    if(body.rolls == 3) {
        message.channel.send({
            embed:{
                color: 0xffffff,
                title:`Résultat du lancé dé : **${body.rolls}**`,
                image:{
                    url:"https://i.imgur.com/yHaWrTP.png"
                }
            }
        });
    }
    if(body.rolls == 4) {
        message.channel.send({
            embed:{
                color: 0xffffff,
                title:`Résultat du lancé dé : **${body.rolls}**`,
                image:{
                    url:"https://i.imgur.com/SnvTEwD.png"
                }
            }
        });
    }
    if(body.rolls == 5) {
        message.channel.send({
            embed:{
                color: 0xffffff,
                title:`Résultat du lancé dé : **${body.rolls}**`,
                image:{
                    url:"https://i.imgur.com/wg2tUWO.png"
                }
            }
        });
    }
    if(body.rolls == 6) {
        message.channel.send({
            embed:{
                color: 0xffffff,
                title:`Résultat du lancé dé : **${body.rolls}**`,
                image:{
                    url:"https://i.imgur.com/Z6c5VrB.png"
                }
            }
        });
    }
   
    msg.delete();
};

module.exports.help = {
    name:"roll"
};
