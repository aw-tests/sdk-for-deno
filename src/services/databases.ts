import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Databases extends Service {
    /**
     * List Databases
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.CollectionList> {
        let path = '/databases';
        let payload: Payload = {};

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderType !== 'undefined') {
            payload['orderType'] = orderType;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Database
     *
     * @param {string} databaseId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(databaseId: string, name: string): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/databases';
        let payload: Payload = {};

        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Database
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(databaseId: string): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        let path = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Database
     *
     * @param {string} databaseId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(databaseId: string, name: string): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Database
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(databaseId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        let path = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Collections
     *
     * @param {string} databaseId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCollections(databaseId: string, search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.CollectionList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        let path = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
        let payload: Payload = {};

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderType !== 'undefined') {
            payload['orderType'] = orderType;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Collection
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createCollection(databaseId: string, collectionId: string, name: string, permission: string, read: string[], write: string[]): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof permission === 'undefined') {
            throw new AppwriteException('Missing required parameter: "permission"');
        }

        if (typeof read === 'undefined') {
            throw new AppwriteException('Missing required parameter: "read"');
        }

        if (typeof write === 'undefined') {
            throw new AppwriteException('Missing required parameter: "write"');
        }

        let path = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
        let payload: Payload = {};

        if (typeof collectionId !== 'undefined') {
            payload['collectionId'] = collectionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permission !== 'undefined') {
            payload['permission'] = permission;
        }
        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }
        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Collection
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getCollection(databaseId: string, collectionId: string): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Collection
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string} permission
     * @param {string[]} read
     * @param {string[]} write
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateCollection(databaseId: string, collectionId: string, name: string, permission: string, read?: string[], write?: string[], enabled?: boolean): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof permission === 'undefined') {
            throw new AppwriteException('Missing required parameter: "permission"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permission !== 'undefined') {
            payload['permission'] = permission;
        }
        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }
        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Collection
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteCollection(databaseId: string, collectionId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Attributes
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listAttributes(databaseId: string, collectionId: string): Promise<Models.AttributeList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Boolean Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/boolean'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Email Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/email'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Enum Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof elements === 'undefined') {
            throw new AppwriteException('Missing required parameter: "elements"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/enum'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Float Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/float'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Integer Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/integer'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create IP Address Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/ip'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create String Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeString> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/string'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create URL Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/url'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getAttribute(databaseId: string, collectionId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Attribute
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Documents
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string[]} orderAttributes
     * @param {string[]} orderTypes
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[], limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderAttributes?: string[], orderTypes?: string[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderAttributes !== 'undefined') {
            payload['orderAttributes'] = orderAttributes;
        }

        if (typeof orderTypes !== 'undefined') {
            payload['orderTypes'] = orderTypes;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Document
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: object, read?: string[], write?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }
        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Document
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Document
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: object, read?: string[], write?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload: Payload = {};

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof read !== 'undefined') {
            payload['read'] = read;
        }
        if (typeof write !== 'undefined') {
            payload['write'] = write;
        }
        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Document
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Indexes
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIndexes(databaseId: string, collectionId: string): Promise<Models.IndexList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Index
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIndex(databaseId: string, collectionId: string, key: string, type: string, attributes: string[], orders?: string[]): Promise<Models.Index> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof attributes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attributes"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof attributes !== 'undefined') {
            payload['attributes'] = attributes;
        }
        if (typeof orders !== 'undefined') {
            payload['orders'] = orders;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Index
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Index
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteIndex(databaseId: string, collectionId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
}