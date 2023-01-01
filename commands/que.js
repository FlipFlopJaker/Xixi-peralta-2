const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
  .setName("que")
  .setDescription("que"),
    async execute(interaction){
      const goku = new MessageAttachment('https://cdn.discordapp.com/attachments/664187293451419678/1034078773928267876/image0.jpg');
      interaction.followUp({ files: [goku] });
    },
};
