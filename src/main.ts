import { IExternalVars } from "./externalVars.js";
import { flickerP } from "./interval.js";

declare global {
  interface Window {
    testGlobalVars: IExternalVars;
  }
}

console.log('Hello World');
console.log('External vars:', window.testGlobalVars);

flickerP();
