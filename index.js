const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  ActivityType
} = require("discord.js");
const { token } = require("./config.json");
const client = new Client({
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("Tus muertos Iván!");
});
//personalidad del bot
client.on("ready", () => {
  client.user.setPresence({
    activities: [
      {
        name: " follarme  a tu madre",
        type: ActivityType.Playing,
      }, ],
    status: "online",
  });
});


//comandos
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was am error while suking my dick",
      ephemeral: true,
    });
  }
});

//answer the deleted message
//
//client.on('messageDelete', (missatge) => {
//   if (missatge.author.bot ) return;
//   // missatge.channel.send(missatge.attachments.first().attachment);
// missatge.channel.send(`${missatge.author.username} ha dicho "${missatge.content}"`);

/* decir que*/
/*
client.on("ready", async () => {
  await client.channels
})
      .fetch("1009185013666943068")
      .then((quedice) => {
     quedice.messages
          .fetch({limit: 1 })
          .then((quebueno) => {
      })
      });
if (quebueno.first().id == "1057692416414601308") {
quebueno.channel.send("https://cdn.discordapp.com/attachments/664187293451419678/1034078773928267876/image0.jpg");
} else {
  return;
};*/




client.on("messageCreate", (quebueno)=> {
      if (quebueno.guild.id === "666042655259754497" && quebueno.content == "que") {
        quebueno.channel.send("https://cdn.discordapp.com/attachments/664187293451419678/1034078773928267876/image0.jpg");
        } else {
        };
});
/*
client.on("ready", async () => {
  await client.channels
        .fetch("1004687240787660911")
        .then((fullMessage) => {
    fullMessage.messages
                .fetch({ limit: 1 })
                .then((data) => {
                })
      if (data.first().author.id == "993185256150671531") {
        if (
          data.first().embeds[0].data.title ==
          "El server se ha iniciado, panda de wannabes"
        ) {
          client.active = true;
        } else {
          client.active = false;
        }
      }
    });
  */
  client.active = false;
client.on("messagecreate", (bot) => {
  if (
    bot.channelId == "1004687240787660911" &&
    bot.author.id == "993185256150671531"
  ) {
    if (
      bot.embeds[0].data.title == "El server se ha iniciado, panda de wannabes"
    ) {
      client.active = true;
    } else {
      client.active = false;
    }
  }
  console.log(client.active);
  console.log(bot.embeds);
});

client.login(token);
