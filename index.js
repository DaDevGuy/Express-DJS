const express = require ("express");
const app = express();

app.listen(3000, () => {
  console.log("Bot Is Online");
})

app.get("/", (req, res) => {
  res.send("Hello World")
})

const Discord = require ("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
})

client.login(process.env.token)

//Coded By Technical Ehan
