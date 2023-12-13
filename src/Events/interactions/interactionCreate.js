const {} = require("discord.js")

module.exports = {
	 name: "interactionCreate",
  
	 execute(interaction, client) {
		if (interaction.isChatInputCommand()) {
		  const command = client.commands.get(interaction.commandName);
  
		  if (!command) {
			 interaction.reply({
				content: "outdated command",
			 });
		  }
		  try {
			 command.execute(interaction, client);
		  } catch (error) {
			 message.channel.send(
				"**Beim Ausführen des Commands ist ein Fehler aufgetreten!**"
			 );
		  }
		}
	 },
  };
  