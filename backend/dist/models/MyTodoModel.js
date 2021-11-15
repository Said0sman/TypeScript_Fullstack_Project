"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbCollection = process.env.MONGODB_COLLECTION;
const schema = new mongoose_1.Schema({
    text: { type: String, required: true },
    day: { type: String, required: true },
}, { timestamps: true });
const TodoModel = (0, mongoose_1.model)(dbCollection, schema);
exports.default = TodoModel;
//# sourceMappingURL=MyTodoModel.js.map