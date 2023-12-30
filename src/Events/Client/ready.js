const { ActivityType } = require("discord.js");

  module.exports = {
	 name: "ready",
	 once: true,
	 async execute(client) {
		client.user.setPresence({
		  activities: [{ name: "https://arda-dev.xyz/", type: ActivityType.Competing }],
		  status: "dnd",
		});
		console.log("Bot Logged in as !")
	 },
  };
  