module.exports = {
	name: 'serienbewertung',
	description: 'provide a serienbewertung for a specific tv-series',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'happy') {
			return message.channel.send('```verarbeite: !Pinguin S\n```'+
						    '```testtest```');
			
		}
		else if (args[0] === 'bar' && args[1]=== 'foo') {
			return message.channel.send('bar bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};
