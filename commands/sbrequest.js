module.exports = {
	name: 'sbrequest',
	aliases: ['request'],
	description: 'Sendet eine Nachricht an Pinguin86 mit der Serie die bewertet werden soll.',
	args: true,
	usage: '<Name der Serie>',
	execute(message, args) {
 	 //message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	//	bot.users.get("YOUR ID HERE").sendMessage
 	message.bot.fetchUser("144189617061494784").then((user) => {
		user.send(`Die von ${message.author} gewünschte Serie lautet: ${args}`);
	})},
};
