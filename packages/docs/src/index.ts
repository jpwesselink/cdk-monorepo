import { config } from "@ephemeral/utils";

export const docsConfig = {
  commonConfig: config,
};

console.log(
  "---------------------------------------------------------------------"
);
docsConfig.commonConfig.quotes.map((quote) => {
  console.log("Quotes");
  console.log("");
  console.log(`By ${quote.author.firstName} ${quote.author.lastName}`);
  console.log("");
  quote?.works?.map((work) => {
    console.log(`From ${work.title}:`);
    console.log("");
    work.texts?.map((text) => {
      console.log(`'${text}'`);
    });
  });
});

console.log(
  "---------------------------------------------------------------------"
);
