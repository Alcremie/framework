"use strict";
// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandStore = void 0;
const BaseAliasStore_1 = require("./base/BaseAliasStore");
const Command_1 = require("./Command");
/**
 * Stores all Command pieces
 * @since 1.0.0
 */
class CommandStore extends BaseAliasStore_1.BaseAliasStore {
    constructor(client) {
        // @ts-expect-error Abstract classes are not assignable to Ctor<T>.
        super(client, Command_1.Command);
    }
}
exports.CommandStore = CommandStore;
//# sourceMappingURL=CommandStore.js.map