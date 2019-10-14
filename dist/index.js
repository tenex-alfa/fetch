"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_template_1 = require("./get-template");
const schema_validate_1 = require("@tenex/schema-validate");
const node_fetch_1 = require("node-fetch");
const getFetchedObject = async (object) => {
    schema_validate_1.validate(object, get_template_1.default);
    const { url, method, body, out } = object;
    const _method = method || body ? "post" : "get";
    const _body = JSON.stringify(body);
    const fetchObject = await node_fetch_1.default(url, {
        method: _method,
        body: _body
    });
    let parsed = fetchObject;
    try {
        parsed = await fetchObject.json();
    }
    catch (_a) {
    }
    let obj = parsed;
    if (out) {
        const path = out.split(/>/g);
        console.log(path);
        for (const str of path) {
            obj = obj[str];
        }
    }
    return obj;
};
exports.default = getFetchedObject;
