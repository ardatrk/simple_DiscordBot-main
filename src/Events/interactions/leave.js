const { EmbedBuilder } = require("discord.js");
const config = require("../../../config.json");

module.exports = {
  name: "guildMemberRemove",

  async execute(interaction) {
    const channel = interaction.guild.channels.cache.get(
      config.leave.channelid
    );

    const embed = new EmbedBuilder().setColor(config.leave.embed.color);
    if (config.leave.embed.title) {
      embed.setTitle(
        config.leave.embed.title.replace("%user%", interaction.user.username)
      );
    }
    if (config.leave.embed.description) {
      embed.setDescription(
        config.leave.embed.description.replace(
          "%user%",
          interaction.user.username
        )
      );
    }
    if (config.leave.embed.image) {
      embed.setImage(config.leave.embed.image);
    }
    if (config.leave.embed.thumbnail) {
      embed.setThumbnail(config.leave.embed.thumbnail);
    }
    if (config.leave.embed.timestamp === true) {
      embed.setTimestamp();
    }
    if (
      config.leave.embed.author.name &&
      config.leave.embed.author.iconURL
    ) {
      embed.setAuthor({
        name: config.leave.embed.author.name,
        iconURL: config.leave.embed.author.iconURL,
      });
    }
    if (
      config.leave.embed.footer.text &&
      config.leave.embed.footer.iconURL
    ) {
      embed.setFooter({
         text: config.leave.embed.footer.text,
        iconURL: config.leave.embed.footer.iconURL,
      });
    }
    channel.send({embeds: [embed]})
  },
};
