import type { PieceContext } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import { Event } from '../../lib/structures/Event';
export declare class CoreEvent extends Event {
    constructor(context: PieceContext);
    run(message: Message): Promise<void>;
    private getMentionPrefix;
    private getPrefix;
}
//# sourceMappingURL=CoreMessageParser.d.ts.map