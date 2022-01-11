import { config } from 'dotenv'
import {Interaction} from "discord.js";
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

if (process.env.NODE_ENV !== 'production') {
    config()
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
    // TODO: Handle secret commands here
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'hey') {
        await interaction.reply('Hey hey heyyyy!');
    }
});

client.login(process.env.DISCORD_BOT_ID);