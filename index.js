const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
  } = require("discord.js");
  const { readdirSync } = require("fs");
  const { Guilds, GuildMembers, GuildMessages, MessageContent } =
    GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

  const { loadEvents } = require("ls_bots.js");

  const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
    partials: [User, Message, GuildMember, ThreadMember, Channel],
  });
  client.commands = new Collection();
  const config = require("./config.json");

  console.clear();
  client.login(config.botsettings.token).then(() => {
    client.commands = new Collection();
    loadEvents(client);
  });
  