module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel./*send('Pong.');*/send(new Date().getTime() - message.createdTimestamp + " ms...btw: Pong.");
	},
};
