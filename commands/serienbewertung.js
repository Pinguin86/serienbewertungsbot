module.exports = {
	name: 'serienbewertung',
	description: 'provide a serienbewertung for a specific tv-series',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'happy') {
			return message.channel.send('```verarbeite: !Pinguin Serienbewertung "HAPPY" \n'+
						    'Serie beinhaltet: Christopher Meloni, Lili Mironjnick (how the fuck do you spell your name?), Christopher Fitzgerald \n'+
						    'Viel Gewalt in der Serie. \n'+
						    'Wurde durch die viele Gewalt viel besser. \n'+
						    'Christopher Meloni spielt einen heruntergekommenen Polizisten der ein gekidnapptes Mädchen retten will.```');
			
		}
		else if (args[0] === 'bar' && args[1]=== 'foo') {
			return message.channel.send('bar bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};
