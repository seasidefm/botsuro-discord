const { config } = require('dotenv')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

config()

const commands = [{
    name: 'hey',
    description: 'Greetings from botsuro!'
}];

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_ID);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.DISCORD_APP_ID, process.env.DISCORD_GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();