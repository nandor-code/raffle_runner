import { EntrantList } from "./EntrantList";

export default {
  title: "Example/EntrantList",
  component: EntrantList,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    entrantArray: [],
  },
};

export const EntrantListPrimary = {
  args: {
    entrantArray: [{ name: "Test Name", number_of_tickets: 11 }],
  },
};
