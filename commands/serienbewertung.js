module.exports = {
	name: 'serienbewertung',
	description: 'provide a serienbewertung for a specific tv-series',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0].toLowerCase() === 'happy' || args[0].toLowerCase() === 'happy!' ) {
			return message.channel.send('```verarbeite: !Pinguin Serienbewertung "HAPPY!" \n'+
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
			
		} else if (args[0].toLowerCase() === 'better' && args[1].toLowerCase() === 'than' && args[2].toLowerCase() === 'us') {
			return message.channel.send('```verarbeite: !Pinguin Serienbewertung "Better Than Us" \n'+
						    'Serie beinhaltet: random Russische Schauspieler wie Paulina Andreeva, Kirill Käro, Eldar Kalimulin und Vera Panfilova \n'+
						    'Gute Idee: Sexroboter hat Gefühle, ein Gewissen und denkt selbstständig, findet "Familie" in Form von zwei Kindern, einem Mann und einer Ehefrau die mit ihrem Geliebten flüchten will \n'+
						    'Semigute Umsetzung: Zu wenig Sex mit dem Roboter; obwohl der Sexbot teilweise selbstständig denkt und handelt, kommt die Diskussion "Wie wichtig/hilfreich/gefährlich sind selbstdenkende Roboter" nur nebenbei auf;  \n'+
						    'Nebenhandlungen und Nebencharaktere nicht total dumm \n'+
						    'Daher Empfehlung: Nur eine Staffel verfügbar, kann man sich ansehen solange man nicht zuviel Tiefgang erwartet.  \n'+
						    'Erfüllt nicht die Erwartungen von Pinguin, trotzdem besser als "Blacklist"```');
			
		}
	},
};
