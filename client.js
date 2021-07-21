// Loading the .env file.

require('dotenv').config();

const { Client, Collection, Intents } = require('discord.js');
const { readdirSync } = require('fs');

// Creating the client

const intents = new Intents()
.add('GUILDS', 'GUILD_MESSAGES');

const client = new Client({
  intents
});

client.commands = new Collection();

Object.defineProperty(client, 'env', {
  value: process.env
});


// EventHandler

readdirSync('./eventos').forEach(eventFile => {
  const event = require(`./eventos/${eventFile}`);
  
  event(client);
});

// CommandHandler

readdirSync('./comandos').forEach(commandFile => {
  const command = require(`./comandos/${commandFile}`);
  
  client.commands.set(command.name, command);
  
  ('aliases' in command ? command.aliases : []).forEach(alias => client.commands.set(alias, command));
});


// Starting the client.

client.login();