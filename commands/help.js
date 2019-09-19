const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Liste der Befehle für den Serienbewertungsbot oder Informationen über einen bestimmten Befehl.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Dies ist eine Liste mit allen Befehlen:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nBenutze \`${prefix}help [command name]\` um Informationen über einen bestimmten Befehl zu bekommen!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Ich habe dir eine DM mit allen Befehlen geschickt!');
				})
				.catch(error => {
					console.error(`Konnte keine Hilfs-DM an ${message.author.tag} schicken.\n`, error);
					message.reply('Sieht so aus als ob ich dir keine DM schicken kann!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Unbekannter Befehl!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Beschreibung:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};
