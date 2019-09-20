module.exports = {
	name: 'serienbewertung',
	aliases: ['sb', 'serienb', 'sbewertung'],
	description: 'Gibt eine Serienbewertung von Pinguin für eine von dir gewählte TV-Serie aus',
	args: true,
	usage: '<Name der Serie>',
	execute(message, args) {
		 if (args[0].toLowerCase() === 'happy' || args[0].toLowerCase() === 'happy!' ) {
			return message.channel.send('```verarbeite: !Serienbewertung "HAPPY!" \n'+
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
			return message.channel.send('```verarbeite: !Serienbewertung "Better Than Us" \n'+
						    'Serie beinhaltet: random Russische Schauspieler wie Paulina Andreeva, Kirill Käro, Eldar Kalimulin und Vera Panfilova \n'+
						    'Gute Idee: Sexroboter hat Gefühle, ein Gewissen und denkt selbstständig, findet "Familie" in Form von zwei Kindern, einem Mann und einer Ehefrau die mit ihrem Geliebten flüchten will \n'+
						    'Semigute Umsetzung: Zu wenig Sex mit dem Roboter; obwohl der Sexbot teilweise selbstständig denkt und handelt, kommt die Diskussion "Wie wichtig/hilfreich/gefährlich sind selbstdenkende Roboter" nur nebenbei auf;  \n'+
						    'Nebenhandlungen und Nebencharaktere nicht total dumm \n'+
						    'Daher Empfehlung: Nur eine Staffel verfügbar, kann man sich ansehen solange man nicht zuviel Tiefgang erwartet.  \n'+
						    'Erfüllt nicht die Erwartungen von Pinguin, trotzdem besser als "Blacklist"```');
			
		} else if (args[0].toLowerCase() === 'brooklyn' && args[1].toLowerCase() === '9' && args[2].toLowerCase() === '9' || args[0].toLowerCase() === 'brooklyn' && args[1].toLowerCase() === 'nine' && args[2].toLowerCase() === 'nine' || args[0].toLowerCase() === 'brooklyn' && args[1].toLowerCase() === '99' || args[0].toLowerCase() === 'brooklyn' && args[1].toLowerCase() === 'nine-nine') {
			return message.channel.send('```verarbeite: !Serienbewertung "Brooklyn 99" \n'+
						    'Serie beinhaltet: Andy Samberg, Stephanie Beatriz, Terry Crews (<3) \n'+
						    'Wurde durch Terry Crews ca 10mal so gut wie ohne Terry Crews. \n'+
						    'Wäre auch ohne Terry Crews eine geile Serie. \n'+
						    'Stephanie Beatriz ist verdammt sexy. \n'+
						    'Terry Crews ist verdammt lustig.  \n'+
						    'Andy Samberg ist auch sehr lustig. \n'+
						    'Daher Empfehlung: \n'+
						    'Unbedingt sehen!```');
			
		} else if (args[0].toLowerCase() === 'the' && args[1].toLowerCase() === 'spy') {
			return message.channel.send('```verarbeite: !Serienbewertung "The spy" \n'+
						    'Serie beinhaltet: Sacha Baron Cohen. Wurde mir verleidet Dank Filme wie \n'+
						    '"Borat" \n'+
						    '"Ali G" \n'+
						    'und anderer Möchtegernwitzfiguren die er gespielt hat \n'+
						    'Desweiteren:   \n'+
						    'Serie sieht wie Abklatsch von "The americans" aus \n'+
						    'Abklatsch=Abfall \n'+
						    'Daher Alternativvorschlag: \n'+
						    '"The americans"```');
			
		} else if (args[0].toLowerCase() === 'saber' && args[1].toLowerCase() === 'rider' ||args[0].toLowerCase() === 'saber' && args[1].toLowerCase() === 'rider' && args[2].toLowerCase() === 'and' && args[3].toLowerCase() === 'the' && args[4].toLowerCase() === 'star' && args[5].toLowerCase() === 'sheriffs') {
			return message.channel.send('```verarbeite: !Serienbewertung "Saber Rider and the Star Sheriffs" \n'+
						    'Serie beinhaltet die Stimmen von: Pat Musick, Patrick Fraley, Rob Paulsen, Townsend Coleman und Peter Cullen \n'+
						    'japanischer Anime der 1987 in 52 Folgen in Amerika ausgestrahlt wurde \n'+
						    'schon die ersten zwei Worte des Titels, "Star" und "Sheriffs", deutet an worum es in der Kinderserie geht. \n'+
						    'Ein Weltraumwestern in der Zukunft mit Roboterpferden, Laserrevolvern und Raumschiffen \n'+
						    'Der Plot: Die Menschheit hat sich auf mehrere Planeten im Universum verteilt und wird von den Star Sheriffs beschützt \n'+
						    'Der Bösewicht heißt "Vapor(!!!) Beings" \n'+
						    'In 1987: Vapor = böse \n'+
						    'Heute: Vapen = böse \n'+
						    'Die Serie hat quasi die Zukunft vorhergesagt! \n'+
						    'Daher Empfehlung: \n'+
						    'In Nostalgie schwelgen und sich diesen Weltraumwestern unbedingt anschauen!!!```');
			
		} else if (args[0].toLowerCase() === 'surf' && args[1].toLowerCase() === 'nazis' ||args[0].toLowerCase() === 'surf' && args[1].toLowerCase() === 'nazis' && args[2].toLowerCase() === 'must' && args[3].toLowerCase() === 'die') {
			return message.channel.send('```verarbeite: !Serienbewertung "Surf Nazis Must Die" \n'+
						    'Serie beinhaltet: Barry Brenner, Dawn Wildsmith, Gail Neely, Joel Hile, Michael Sonye und Robert Harden \n'+
						    'US-amerikanischer Low-Budget-Film aus dem Jahr 1987 aus der Kategorie des Exploitationfilms \n'+
						    'Der Titel deutet den Plot schon an. \n'+
						    'Nach einem Erdbeben stirbt ein Teil von Kalifornien aus und eine Bedrohung schlimmer als Tod und Zerstörung sucht Kalifornien heim: \n'+
						    'SURF NAZIS *suspensful music* \n'+
						    'Um die quasi so noch nie gesehene Dramatik noch zu steigern kommt es zum Kampf zwischen den rivalisierenden Gangs der Surf Nazis und der Samurai Surfern \n'+
						    'Beim Kampf stirbt Leroy Washington; seine Mutter will ihn rächen\n'+
						    'Big Mama is killing Nazis, what could possibly go wrong for the Nazis? \n'+
						    'Trailer ist trashig genug um Interesse zu wecken \n'+
						    'Surfenszenen, Gangszenen und Kampfszenen wechseln sich ab und "solanga Mama lebt, werden Surf Nazis sterben!"  \n'+
						    'Daher Empfehlung: \n'+
						    'Der Bot ist verwirrt, aber der Film klingt lustig, daher: Anschauen wenn ihr auf trashige Filme steht!```');
			
		} else if (args[0].toLowerCase() === 'russian' && args[1].toLowerCase() === 'doll') {
			return message.channel.send('```verarbeite: !Serienbewertung "Russian Doll" \n'+
						    'Serie beinhaltet: Natasha Lyonne, Greta Lee, Charlie Barnett, Jeremy Bobb und Rebecca Henderson \n'+
						    'Täglich grüßt das Murmeltier meets die alte aus Orange is the new Black und American Pie \n'+
						    'Spieleentwicklerin Nadia Vulvokov stirbt und erlebt die 24 Stunden seit dem Abend ihres 36. Geburtstages immer und immer wieder \n'+
						    'Jedesmal wacht sie in diesem verdammten Badezimmer auf \n'+
						    'Im Laufe der Serie vergisst sie wie man eine Treppe runterläuft, lässt sich von einem Obdachlosen die Haare schneiden und versucht die Ursache für diesen Murmeltiertag zu finden \n'+
						    'Die Tode sind lustig, die Charaktere interessant, die Sprache spart nicht mit Kraftausdrücken...und Natasha Fucking Lyonne spielt mit! \n'+
						    'Lauter positive Sachen\n'+
						    'Logischerweise gibt es im Verlauf der Serie auch einen Twist, so dass man sich fragt wie es weitergeht. \n'+
						    'Um herauszufinden was das ganze mit Nadias Mutter zu tun hat und warum eine Orange nur außen schlecht ist müsst ihr euch die Serie anschauen \n'+
						    'Daher Empfehlung: \n'+
						    'Unbedingt anschauen!!!```');
			
		}
		 return message.channel.send('Die Serie/der Film wurde noch nicht bewertet! Bitte schicke einen request per !request <Filmname oder Serienname> ab.');
		
	},
};
