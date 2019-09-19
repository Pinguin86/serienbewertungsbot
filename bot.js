const fs = require('fs');
const Discord = require('discord.js'); // require the discord.js module
const config  = require('./config.json'); // require config.json

const bot = new Discord.Client();  // create a new Discord client
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('I am ready!');
});
//DAS MUSS MIT REIN
//login to discord with Heroku
bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
	//Exit if message is empty or other bot uses prefix
    	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	const args = message.content.slice(config.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	const command = bot.commands.get(commandName)
	|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	
	if (!command) return;
	
	if(command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	 }

	try {
	command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
}

});
	


/*                });
            break;
         }
     }
}); */



//if (message.content.startsWith(config.prefix + "ping")) {
        //message.reply('pong');
  //      message.channel.send("pong");
    //} else
	//    if(message.content.startsWith(config.prefix + "serienbewertung")) {
	//	    message.channel.send("```test```"); 
		    //bot.users.get("621696474723385344").send("```test```");
	  //  }
	//else
	  //  if(message.content.startsWith(config.prefix + "serienbewertung" + "request")) {
	//	    message.author.send("```test2```"); 
	    //}
