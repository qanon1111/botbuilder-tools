"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Models = require("./models");
exports.LuisAuthoringModels = Models;
const Mappers = require("./models/mappers");
exports.LuisAuthoringMappers = Mappers;
const operations = require("./operations");
const luisAuthoringContext_1 = require("./luisAuthoringContext");
class LuisAuthoring extends luisAuthoringContext_1.LuisAuthoringContext {
    /**
     * @class
     * Initializes a new instance of the LuisAuthoring class.
     * @constructor
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
     * {@link https://github.github.io/fetch/#Request Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     */
    constructor(credentials, options) {
        super(credentials, options);
        this.features = new operations.Features(this);
        this.examples = new operations.Examples(this);
        this.model = new operations.Model(this);
        this.apps = new operations.Apps(this);
        this.versions = new operations.Versions(this);
        this.train = new operations.Train(this);
        this.permissions = new operations.Permissions(this);
        this.pattern = new operations.Pattern(this);
    }
}
exports.LuisAuthoring = LuisAuthoring;
//# sourceMappingURL=luisAuthoring.js.map