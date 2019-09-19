module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel./*send('Pong.');*/send("Pong. Dauer:" + new Date().getTime() - message.createdTimestamp + " ms");
	},
};
