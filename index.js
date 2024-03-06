require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('voiceStateUpdate', (oldState, newState) => {
  if (!oldState.channel && newState.channel) {
    
    const textChannel = client.channels.cache.get('1214973000491737109');
    textChannel.send(`>>> ${newState.member.user.username} entrou no canal de áudio "${newState.channel.name}".`);
  }
});

client.login(process.env.DISCORD_TOKEN);