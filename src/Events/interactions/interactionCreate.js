module.exports = {
	 name: "interactionCreate",
  
	 execute(interaction, client) {
		if (interaction.isChatInputCommand()) {
		  const command = client.commands.get(interaction.commandName);
  
		  if (!command) {
				interaction.reply({
					content: "outdated command",
					ephemeral: true
			 });
		  }
		  try {
			 command.execute(interaction, client);
		  } catch (error) {
			 interaction.channel.send({content: 
				"**Beim Ausführen des Commands ist ein Fehler aufgetreten!**"
				 }, ephemeral: true);
					return
		  }
		}
	 },
  };
  