# Docs

common docs

## ESM

<!-- CODEBLOCK_START {"value": "cat ./dist/esm/index.js", "type": "command", "hideValue": true, "language": "javascript" } -->
<!-- prettier-ignore -->
~~~~~~~~~~javascript
// src/index.ts
import { config } from "@ephemeral/utils";
var docsConfig = {
  commonConfig: config
};
console.log("---------------------------------------------------------------");
docsConfig.commonConfig.quotes.map((quote) => {
  var _a;
  console.log("Quotes");
  console.log("");
  console.log(`By ${quote.author.firstName} ${quote.author.lastName}`);
  console.log("");
  (_a = quote == null ? void 0 : quote.works) == null ? void 0 : _a.map((work) => {
    var _a2;
    console.log(`From ${work.title}:`);
    console.log("");
    (_a2 = work.texts) == null ? void 0 : _a2.map((text) => {
      console.log(`'${text}'`);
    });
  });
});
console.log("---------------------------------------------------------------");
export {
  docsConfig
};
//# sourceMappingURL=index.js.map
~~~~~~~~~~

<!-- CODEBLOCK_END -->

## TS

<!-- CODEBLOCK_START {"value": "cat ./dist/index.d.ts", "type": "command", "hideValue": true, "language": "typescript" } -->
<!-- prettier-ignore -->
~~~~~~~~~~typescript
declare const docsConfig: {
    commonConfig: {
        quotes: {
            author: {
                firstName: string;
                lastName: string;
            };
            works: {
                type: string;
                title: string;
                texts: string[];
            }[];
        }[];
    };
};

export { docsConfig };
~~~~~~~~~~

<!-- CODEBLOCK_END -->
