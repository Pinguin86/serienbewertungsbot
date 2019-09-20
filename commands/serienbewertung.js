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
			
		} else if (args[0].toLowerCase() === 'the' && args[1].toLowerCase() === 'expanse') {
			return message.channel.send('```verarbeite: !Serienbewertung "The Expanse" \n'+
						    'Serie beinhaltet: Steven Strait, Dominique Tipper, Cas Anvar, Wes Chatham und Shohreh Aghdashloo (Gesundheit!) \n'+
						    'Serienadaption zur gleichnamigen Buchreihe von Daniel Abraham \n'+
						    'Die Menschheit hat Teile des Universums besidelt \n'+
						    'Amerika ist zur Weltregierung aufgestiegen \n'+
						    'Wir werden alle sterben \n'+
						    '... \n'+
						    'Kleiner Witz :D\n'+
						    'Politische Spannungen, viele Arbeitslose, ein unabhängiger Mars und der andauernde Konflikt zwischen dem Mars, den Vereinten Nationen und der Outer Planet Alliance werden in der Serie näher beleuchtet  \n'+
						    'Außerdem zu sehen: Sex in Schwerelosigkeit \n'+
						    'Desweiteren: FEDORA aufm Kopf!!! \n'+
						    'Allein deswegen sollte man sich die Serie anschauen!\n'+
						    'Daher Empfehlung: \n'+
						    'Unbedingt anschauen und danach die Bücher lesen!!!```');
			
		} else if (args[0].toLowerCase() === 'prinz' && args[1].toLowerCase() === 'von' && args[2].toLowerCase() === 'bel-air' 
			   || args[0].toLowerCase() === 'prinz' && args[1].toLowerCase() === 'von' && args[2].toLowerCase() === 'bel' && args[3].toLowerCase() === 'air' 
			   || args[0].toLowerCase() === 'der' && args[1].toLowerCase() === 'prinz' && args[2].toLowerCase() === 'von' && args[3].toLowerCase() === 'bel-air' 
			   || args[0].toLowerCase() === 'der' && args[1].toLowerCase() === 'prinz' && args[2].toLowerCase() === 'von' && args[3].toLowerCase() === 'belair' 
			   || args[0].toLowerCase() === 'der' && args[1].toLowerCase() === 'prinz' && args[2].toLowerCase() === 'von' && args[3].toLowerCase() === 'bel' && args[3].toLowerCase() === 'air' 
			   || args[0].toLowerCase() === 'fresh' && args[1].toLowerCase() === 'prince' && args[2].toLowerCase() === 'of' && args[3].toLowerCase() === 'bel-air'  
			   || args[0].toLowerCase() === 'fresh' && args[1].toLowerCase() === 'prince' && args[2].toLowerCase() === 'of' && args[3].toLowerCase() === 'belair' 
			   || args[0].toLowerCase() === 'fresh' && args[1].toLowerCase() === 'prince' && args[2].toLowerCase() === 'of' && args[3].toLowerCase() === 'bel' && args[4].toLowerCase() === 'air' 
			   || args[0].toLowerCase() === 'the' && args[1].toLowerCase() === 'fresh' && args[2].toLowerCase() === 'prince' && args[3].toLowerCase() === 'of' && args[4].toLowerCase() === 'bel-air'  
			   || args[0].toLowerCase() === 'the' && args[1].toLowerCase() === 'fresh' && args[2].toLowerCase() === 'prince' && args[3].toLowerCase() === 'of' && args[4].toLowerCase() === 'belair'  
			   || args[0].toLowerCase() === 'the' && args[1].toLowerCase() === 'fresh' && args[2].toLowerCase() === 'prince' && args[3].toLowerCase() === 'of' && args[4].toLowerCase() === 'bel' && args[5].toLowerCase() === 'air' 
			   || args[0].toLowerCase() === 'the'  && args[1].toLowerCase() === 'prince' && args[2].toLowerCase() === 'of' && args[3].toLowerCase() === 'bel-air'  
			   || args[0].toLowerCase() === 'the'  && args[1].toLowerCase() === 'prince' && args[2].toLowerCase() === 'of' && args[3].toLowerCase() === 'belair' 
			   || args[0].toLowerCase() === 'the' &&  args[1].toLowerCase() === 'prince' && args[2].toLowerCase() === 'of' && args[3].toLowerCase() === 'bel' && args[4].toLowerCase() === 'air' 
			   || args[0].toLowerCase() === 'prince' && args[1].toLowerCase() === 'of' && args[2].toLowerCase() === 'bel-air' 
			   || args[0].toLowerCase() === 'prince' && args[1].toLowerCase() === 'of' && args[2].toLowerCase() === 'belair' 
			   || args[0].toLowerCase() === 'prince' && args[1].toLowerCase() === 'of' && args[2].toLowerCase() === 'bel' && args[3].toLowerCase() === 'air') {
			return message.channel.send('```verarbeite: !Serienbewertung "The fresh prince of Bel-air" \n'+
						    'Serie beinhaltet: Will Smith, James Avery, Alfonso Ribeiro, Karyn Parsons, Tatyana Ali, Joseph Marcell, Ross Bagley und viele Gastauftritte von berühmten Menschen \n'+
						    '*rap* Now this is a story all about how \n'+
						    'my life got flipped turned upside down \n'+
						    'and I`d like to take a minute just sit right there \n'+
						    'I`ll tell you how I become the prince of a town called Bel Air \n'+
						    'in west Philadelphia born and raised \n'+
						    'on the playground is where I spent most of my days\n'+
						    'chillin` out maxin` relaxin` all cool  \n'+
						    'and all shootin` some b ball outside of the school \n'+
						    'when a couple of guys who were up to no good \n'+
						    'started makin` trouble in my neighborhood\n'+
						    'I got in one little fight and my mon scared \n'+
						    'and said you`re movin` with your auntie and uncle in Bel-Air \n'+
						    'I whistled for a cab and when it came near \n'+
						    'the licensce plate said fresh and it had dice in the mirror \n'+
						    'if anything I could say that this cab was rare \n'+
						    'but I thought man forget it yo homes to Bel-Air \n'+
						    'I pulled up to the house about 7 or 8 \n'+
						    'and I yelled to the cabbie yo homes smell ya later \n'+
						    'looked at my kingdom I was finally there \n'+
						    'to sit on my throne as the prince of Bel-Air \n'+
						    'US-amerikanische Sitcom über den jungen Will Smith der zu seinem Onkel und seiner Tante nach Los Angeles zieht und dort allerlei Ärger und Dummheiten verursacht\n'+
						    'Denkwürdige Momente: Calton tanzt, Will vs Carlton, Will bringt Ashley Selbstverteidigung bei oder Jazz wird rausgeworfen \n'+
						    'Daher Empfehlung: \n'+
						    'Unbedingt anschauen!!!```');
			
		} else if (args[0].toLowerCase() === 'stargate' && args[1].toLowerCase() === 'sg' && args[2].toLowerCase() === '1' 
			   || args[0].toLowerCase() === 'stargate' && args[1].toLowerCase() === 'sg1'
			   || args[0].toLowerCase() === 'brooklyn' && args[1].toLowerCase() === '99' || args[0].toLowerCase() === 'brooklyn' && args[1].toLowerCase() === 'nine-nine') {
			return message.channel.send('```verarbeite: !Serienbewertung "Brooklyn 99" \n'+
						    'Serie beinhaltet: Andy Samberg, Stephanie Beatriz, Terry Crews (<3) \n'+
						    'Wurde durch Terry Crews ca 10mal so gut wie ohne Terry Crews. \n'+
						    'Wäre auch ohne Terry Crews eine geile Serie. \n'+
						    'Stephanie Beatriz ist verdammt sexy. \n'+
						    'Terry Crews ist verdammt lustig.  \n'+
						    'Andy Samberg ist auch sehr lustig. \n'+
						    'Daher Empfehlung: \n'+
						    'Unbedingt sehen!```');
		 return message.channel.send('Die Serie/der Film wurde noch nicht bewertet! Bitte schicke einen request per !request <Filmname oder Serienname> ab.');
		
	},
};
