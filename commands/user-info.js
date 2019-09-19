module.exports = {
	name: 'user-info',
	description: 'Zeigt dir deinen Username und deine ID in einer PM an.',
	execute(message) {
		message./*channel*/author.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
