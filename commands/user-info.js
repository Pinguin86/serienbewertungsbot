module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		message./*channel*/author.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
