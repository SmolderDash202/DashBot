module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "?help liste des commandes"
        }
    });
};