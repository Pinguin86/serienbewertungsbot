var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

/*const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});
*/
// THIS  MUST  BE  THIS  WAY
//client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
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
                });
            break;
         }
     }
});

//DAS MUSS MIT REIN
client.login(process.env.BOT_TOKEN);
