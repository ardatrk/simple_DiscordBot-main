const config = require("../../../config.json");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",

  async execute(interaction) {
    const channel = interaction.guild.channels.cache.get(
      config.welcome.channelid
    );

    const embed = new EmbedBuilder().setColor(config.welcome.embed.color);
    if (config.welcome.embed.title) {
      embed.setTitle(
        config.welcome.embed.title.replace("%user%", interaction.user.username)
      );
    }
    if (config.welcome.embed.description) {
      embed.setDescription(
        config.welcome.embed.description.replace(
          "%user%",
          interaction.user
        )
      );
    }
    if (config.welcome.embed.image) {
      embed.setImage(config.welcome.embed.image);
    }
    if (config.welcome.embed.thumbnail) {
      embed.setThumbnail(config.welcome.embed.thumbnail);
    }
    if (config.welcome.embed.timestamp === true) {
      embed.setTimestamp();
    }
    if (
      config.welcome.embed.author.name &&
      config.welcome.embed.author.iconURL
    ) {
      embed.setAuthor({
        name: config.welcome.embed.author.name,
        iconURL: config.welcome.embed.author.iconURL,
      });
    }
    if (
      config.welcome.embed.footer.text &&
      config.welcome.embed.footer.iconURL
    ) {
      embed.setFooter({
        text: config.welcome.embed.footer.text,
        iconURL: config.welcome.embed.footer.iconURL,
      });
    }
    channel.send({ embeds: [embed] });
  },
};
