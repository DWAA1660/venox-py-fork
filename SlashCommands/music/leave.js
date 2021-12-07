const { Client, CommandInteraction } = require("discord.js");

module.exports = {
  name: "leave",
  description: "leaves the voice channel",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    if (interaction.guild.me.voiceChannel !== undefined) {
      interaction.guild.me.voiceChannel.leave();
      interaction.followUp({content: "Disconnected ✅"});
    } else {
      interaction.followUp({content: "I'm not connected to a voice channel.."});
    }
  },
};
