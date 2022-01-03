export const config: Config = {
  quotes: [
    {
      author: { firstName: "Carl", lastName: "Sagan" },
      works: [
        {
          type: "book",
          title: "The Demon-Haunted World: Science as a Candle in the Dark",
          texts: [
            `For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.`,
          ],
        },
      ],
    },
  ],
};

export type Config = {
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
}
