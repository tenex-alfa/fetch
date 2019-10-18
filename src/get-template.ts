import * as fs from "fs";
const path = __dirname + "/tx.json";
export default JSON.parse(fs.readFileSync(path, "utf-8")).template;
