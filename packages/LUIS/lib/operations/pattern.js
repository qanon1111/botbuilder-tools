"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Mappers = require("../models/patternMappers");
const Parameters = require("../models/parameters");
/** Class representing a Pattern. */
class Pattern {
    /**
     * Create a Pattern.
     * @param {LuisAuthoringContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @summary Adds one pattern to the specified application.
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {PatternRuleCreateObject} pattern The input pattern.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    addPatternWithHttpOperationResponse(azureRegion, appId, versionId, pattern, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            pattern,
            options
        }, addPatternOperationSpec);
    }
    /**
     * @summary Returns an application version's patterns.
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {PatternGetPatternsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getPatternsWithHttpOperationResponse(azureRegion, appId, versionId, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            options
        }, getPatternsOperationSpec);
    }
    /**
     * @summary Updates patterns
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {PatternRuleUpdateObject[]} patterns An array represents the patterns.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updatePatternsWithHttpOperationResponse(azureRegion, appId, versionId, patterns, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            patterns,
            options
        }, updatePatternsOperationSpec);
    }
    /**
     * @summary Adds a batch of patterns to the specified application.
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {PatternRuleCreateObject[]} patterns A JSON array containing patterns.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    batchAddPatternsWithHttpOperationResponse(azureRegion, appId, versionId, patterns, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            patterns,
            options
        }, batchAddPatternsOperationSpec);
    }
    /**
     * @summary Deletes the patterns with the specified IDs.
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {string[]} patternIds The patterns IDs.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deletePatternsWithHttpOperationResponse(azureRegion, appId, versionId, patternIds, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            patternIds,
            options
        }, deletePatternsOperationSpec);
    }
    /**
     * @summary Updates a pattern
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {string} patternId The pattern ID.
     *
     * @param {PatternRuleUpdateObject} pattern An object representing a pattern.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updatePatternWithHttpOperationResponse(azureRegion, appId, versionId, patternId, pattern, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            patternId,
            pattern,
            options
        }, updatePatternOperationSpec);
    }
    /**
     * @summary Deletes the pattern with the specified ID.
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {string} patternId The pattern ID.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deletePatternWithHttpOperationResponse(azureRegion, appId, versionId, patternId, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            patternId,
            options
        }, deletePatternOperationSpec);
    }
    /**
     * @summary Returns patterns to be retrieved for the specific intent.
     *
     * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
     * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
     * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
     *
     * @param {string} appId The application ID.
     *
     * @param {string} versionId The version ID.
     *
     * @param {string} intentId The intent classifier ID.
     *
     * @param {PatternGetIntentPatternsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getIntentPatternsWithHttpOperationResponse(azureRegion, appId, versionId, intentId, options) {
        return this.client.sendOperationRequest({
            azureRegion,
            appId,
            versionId,
            intentId,
            options
        }, getIntentPatternsOperationSpec);
    }
    addPattern(azureRegion, appId, versionId, pattern, options, callback) {
        return msRest.responseToBody(this.addPatternWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, pattern, options, callback);
    }
    getPatterns(azureRegion, appId, versionId, options, callback) {
        return msRest.responseToBody(this.getPatternsWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, options, callback);
    }
    updatePatterns(azureRegion, appId, versionId, patterns, options, callback) {
        return msRest.responseToBody(this.updatePatternsWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, patterns, options, callback);
    }
    batchAddPatterns(azureRegion, appId, versionId, patterns, options, callback) {
        return msRest.responseToBody(this.batchAddPatternsWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, patterns, options, callback);
    }
    deletePatterns(azureRegion, appId, versionId, patternIds, options, callback) {
        return msRest.responseToBody(this.deletePatternsWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, patternIds, options, callback);
    }
    updatePattern(azureRegion, appId, versionId, patternId, pattern, options, callback) {
        return msRest.responseToBody(this.updatePatternWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, patternId, pattern, options, callback);
    }
    deletePattern(azureRegion, appId, versionId, patternId, options, callback) {
        return msRest.responseToBody(this.deletePatternWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, patternId, options, callback);
    }
    getIntentPatterns(azureRegion, appId, versionId, intentId, options, callback) {
        return msRest.responseToBody(this.getIntentPatternsWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, intentId, options, callback);
    }
}
exports.Pattern = Pattern;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addPatternOperationSpec = {
    httpMethod: "POST",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrule",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0
    ],
    requestBody: {
        parameterPath: "pattern",
        mapper: Object.assign({}, Mappers.PatternRuleCreateObject, { required: true })
    },
    responses: {
        201: {
            bodyMapper: Mappers.PatternRuleInfo
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const getPatternsOperationSpec = {
    httpMethod: "GET",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrules",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0
    ],
    queryParameters: [
        Parameters.skip,
        Parameters.take
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PatternRuleInfo"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const updatePatternsOperationSpec = {
    httpMethod: "PUT",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrules",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0
    ],
    requestBody: {
        parameterPath: "patterns",
        mapper: {
            required: true,
            serializedName: "patterns",
            type: {
                name: "Sequence",
                element: {
                    type: {
                        name: "Composite",
                        className: "PatternRuleUpdateObject"
                    }
                }
            }
        }
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PatternRuleInfo"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const batchAddPatternsOperationSpec = {
    httpMethod: "POST",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrules",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0
    ],
    requestBody: {
        parameterPath: "patterns",
        mapper: {
            required: true,
            serializedName: "patterns",
            type: {
                name: "Sequence",
                element: {
                    type: {
                        name: "Composite",
                        className: "PatternRuleCreateObject"
                    }
                }
            }
        }
    },
    responses: {
        201: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PatternRuleInfo"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const deletePatternsOperationSpec = {
    httpMethod: "DELETE",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrules",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0
    ],
    requestBody: {
        parameterPath: "patternIds",
        mapper: {
            required: true,
            serializedName: "patternIds",
            type: {
                name: "Sequence",
                element: {
                    type: {
                        name: "Uuid"
                    }
                }
            }
        }
    },
    responses: {
        200: {
            bodyMapper: Mappers.OperationStatus
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const updatePatternOperationSpec = {
    httpMethod: "PUT",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrules/{patternId}",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0,
        Parameters.patternId1
    ],
    requestBody: {
        parameterPath: "pattern",
        mapper: Object.assign({}, Mappers.PatternRuleUpdateObject, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.PatternRuleInfo
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const deletePatternOperationSpec = {
    httpMethod: "DELETE",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/patternrules/{patternId}",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0,
        Parameters.patternId1
    ],
    responses: {
        200: {
            bodyMapper: Mappers.OperationStatus
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
const getIntentPatternsOperationSpec = {
    httpMethod: "GET",
    path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/intents/{intentId}/patternrules",
    urlParameters: [
        Parameters.azureRegion,
        Parameters.appId,
        Parameters.versionId0,
        Parameters.intentId
    ],
    queryParameters: [
        Parameters.skip,
        Parameters.take
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PatternRuleInfo"
                        }
                    }
                }
            }
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    serializer
};
//# sourceMappingURL=pattern.js.map