const fs = require('fs');
const Discord = require('discord.js'); // require the discord.js module
const config  = require('./config.json'); // require config.json

const bot = new Discord.Client();  // create a new Discord client
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require('./commands/${file}');
	client.commands.set(command.name, command);
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
	const command = args.shift().toLowerCase();
	
	if(command === 'ping') {
		bot.commands.get('ping').execute(message, args);
	
	}
});
	// using the new `command` variable, this makes it easier to manage!
	// you can switch your other commands to this format as well
	//if (command === 'args-info') {
	//	if (!args.length) {
	//		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	//	}
	//	else if (args[0] === 'foo') {
	//	return message.channel.send('bar');
	//}

	//message.channel.send(`First argument: ${args[0]}`);
	//}
		//message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	//}

//});

/*
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!serienbewertung`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping1
            case 'ping1':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
			case 'ping2':
                bot.sendMessage({
                    to: channelID,
                    message: '```verarbeite: !Pinguin Serienbewertung "HAPPY" \nSerie beinhaltet: Christopher Meloni, Lili Mironjnick (how the fuck do you spell your name?), Christopher Fitzgerald \nViel Gewalt in der Serie. \nWurde durch die viele Gewalt viel besser. \nChristopher Meloni spielt einen heruntergekommenen Polizisten der ein gekidnapptes Mädchen retten will.```'
/* 
Gekidnappte Menschen müssen gerettet werden.
Gute Story
Lili THEFUCKISYOURNAME ist auch sexy und eine verdammt toughe Polizistin.
Christopher Fitzgerald als Sonny Shine in Spandex mit übertrieben viel Makeup muss man gesehen haben
Daher Empfehlung:
Unbedingt sehen!
```' */
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
