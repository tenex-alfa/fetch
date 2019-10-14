import fetch from "../../src/index"

const sample = {
    url: "https://api.github.com/orgs/tenex-alfa",
    out: "public_repos"
};

(async () => {
    console.log(await fetch(sample))
})()