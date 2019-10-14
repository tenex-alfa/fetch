import fetch from "../../src/index"

const sample = {
    url: "https://registry.npmjs.org/@tenex/body-parser",
    out: "versions>0.0.0>dependencies>@types/qs",

};

(async () => {
    console.log(await fetch(sample))
})()