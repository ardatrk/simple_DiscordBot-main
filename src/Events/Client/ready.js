const { ActivityType } = require("discord.js");

  module.exports = {
	 name: "ready",
	 once: true,
	 async execute(client) {
		client.user.setPresence({
		  activities: [{ name: "arda.xyz", type: ActivityType.Competing }],
		  status: "dnd",
		});
		console.log("Bot Logged in as !")
	 },
  };
  