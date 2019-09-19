module.exports = {
	name: 'sbrequest',
	aliases: ['request', 'sbr','serienbewertungrequest'],
	description: 'Sendet eine Nachricht an Pinguin86 mit der Serie die bewertet werden soll.',
	args: true,
	usage: '<Name der Serie>',
	execute( message, args, bot) {
	
 	//return message.channel.send(`Die von ${message.author} gewünschte Serie lautet: ${args}`),
		bot.fetchUser(message.author.id, true).then(u => {
			bot.fetchUser("144189617061494784", true).then(v => {
				//console.log(bot.users);
				return message.channel.send('Vielen Dank, ihr request wurde in Empfang genommen.');
				return bot.users.get("144189617061494784").send(`Die von ${message.author} gewünschte Serie lautet: ${args}`);
			})
		});
	},
};
