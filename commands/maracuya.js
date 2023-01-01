const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("tamoactivopapi")
    .setDescription(" Replies if the mc server is on or off"),
  execute(interaction) {
    if (interaction.client.active) {
      const embed = new EmbedBuilder()
        .setTitle("Tamoactivopapi, vamos a minar la mina");

      return interaction.reply({ embeds: [embed]});
    } else {
      const embed = new EmbedBuilder()
        .setTitle("Estamos cerrando, a la próxima vienes antes, wannabe");
      return interaction.reply({embeds: [embed]} );
    }
  },
};
