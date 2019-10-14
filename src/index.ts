import template from "./get-template"
import { validate } from "@tenex/schema-validate"
import fetch from "node-fetch";

const getFetchedObject = async (object: any) => {
    validate(object, template);

    const { url, method, body, out } = object;
    const _method = method || body ? "post" : "get";
    const _body = JSON.stringify(body);

    const fetchObject = await fetch(url, {
        method: _method,
        body: _body
    });

    let parsed: any = fetchObject;
    try {
        parsed = await fetchObject.json()
    } catch{

    }

    let obj = parsed;
    if (out) {
        const path = out.split(/>/g);

        console.log(path)
        for (const str of path) {
            obj = obj[str];
        }

    }
    return obj;
}

export default getFetchedObject; 