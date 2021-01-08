const Discord = require("discord.js"),
client = new Discord.Client();
const config = require("../config.js");
const prefix = config.prefix;
module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if(!message.content.startsWith(prefix)) return;
  let help = new Discord.MessageEmbed()
  .setAuthor("Angel Çekiliş Sistemi")
  .setColor("YELLOW")
  .setTitle("Komut Listesi")
  .addField("🎁 Giveaway 🎁","start [kanal] [süre] [kazananlar] [Ödül]\nend [çekiliş ID]")
  .addField("Örnek", "g!start #çekiliş 5m 1 Nitro\ng!end Çekiliş ID")
  .setTimestamp()
  .setFooter(`Komutu kullanan ${message.author.tag}`, client.user.displayAvatarURL());
  message.channel.send("**DM adresini kontrol et! 💌**").then(x => x.delete({timeout: 10000}));
  return message.author.send(help);
};

exports.config = {
  name: "çekiliş-sistemi",
  guildOnly: true,
  aliases: ["çekiliş-sistemi"],
};