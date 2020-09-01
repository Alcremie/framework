"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorePrecondition = void 0;
const UserError_1 = require("../lib/errors/UserError");
const Precondition_1 = require("../lib/structures/Precondition");
const Result_1 = require("../lib/utils/Result");
class CorePrecondition extends Precondition_1.Precondition {
    run(message) {
        return message.guild === null ? Result_1.ok() : Result_1.err(new UserError_1.UserError(this.name, 'You cannot run this command outside DMs.'));
    }
}
exports.CorePrecondition = CorePrecondition;
//# sourceMappingURL=DMOnly.js.map