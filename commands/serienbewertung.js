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
						    'Christopher Meloni spielt einen heruntergekommenen Polizisten der ein gekidnapptes Mädchen retten will. \n'+
						    'Gekidnappte Menschen müssen gerettet werden. \n'+
						    'Gute Story \n'+
						    'Lili THEFUCKISYOURNAME ist auch sexy und eine verdammt toughe Polizistin. \n'+
						    'Christopher Fitzgerald als Sonny Shine in Spandex mit übertrieben viel Makeup muss man gesehen haben \n'+
					            'Daher Empfehlung: \n'+
				                    'Unbedingt sehen!```');
			
		}
		else if (args[0] === 'bar' && args[1]=== 'foo') {
			return message.channel.send('bar bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};
