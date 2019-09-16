const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on(‘message’, function(msg){
var prefix = "!pinguin"; // Setzt den Prefix

if(!msg.content.startsWith(prefix)) return; // Checkt ob die Nachricht mit dem Prefix anfängt

const args = msg.content.slice(1).trim().split(/ +/g); // Damit wir später Argumente benutzen können
const command = args.shift().toLowerCase(); // Damit wir wissen, welcher Command es ist

if(command === "hallo"){ // Wenn jemand den Befehl “hallo” ausführt..
msg.channel.send("Hallo Welt!") // ..sage Hallo Welt!
}
if(command === "befehl2"){ // und so weiter..
msg.channel.send("Ich bin Befehl 2!")
}
if(command === "befehl3"){
msg.channel.send("Ich bin Befehl 3!")
}
});

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


//DAS MUSS MIT REIN
bot.login(process.env.BOT_TOKEN);
