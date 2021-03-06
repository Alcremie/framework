import { isVoiceChannel } from '@sapphire/discord.js-utilities';
import type { PieceContext } from '@sapphire/pieces';
import type { GuildChannel, VoiceChannel } from 'discord.js';
import type { ArgumentResult } from '../lib/structures/Argument';
import { ExtendedArgument, ExtendedArgumentContext } from '../lib/structures/ExtendedArgument';

export class CoreArgument extends ExtendedArgument<'guildChannel', VoiceChannel> {
	public constructor(context: PieceContext) {
		super(context, {
			name: 'voiceChannel',
			baseArgument: 'guildChannel'
		});
	}

	public handle(channel: GuildChannel, context: ExtendedArgumentContext): ArgumentResult<VoiceChannel> {
		return isVoiceChannel(channel)
			? this.ok(channel)
			: this.error({
					parameter: context.parameter,
					identifier: 'ArgumentVoiceChannelInvalidChannel',
					message: 'The argument did not resolve to a voice channel.',
					context
			  });
	}
}
