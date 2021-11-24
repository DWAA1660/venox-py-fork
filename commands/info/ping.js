const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    alias: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping}ms!`);
    },
};
