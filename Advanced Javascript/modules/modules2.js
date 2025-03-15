import { message, user } from "./modules.js";

console.log(message);
document.body.innerHTML = message;
user();

// if we use export default function(){}; it represents the default export of the module