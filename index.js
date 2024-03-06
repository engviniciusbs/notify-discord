require("dotenv").config();

const Discord = require("discord.js");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Notify!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("voiceStateUpdate", (oldState, newState) => {
  if (!oldState.channel && newState.channel) {
    const textChannel = client.channels.cache.get("1214973000491737109");
    textChannel.send(
      `>>> ${newState.member.user.username} entrou no canal de áudio "${newState.channel.name}".`,
    );
  }
});

client.login(process.env.DISCORD_TOKEN);