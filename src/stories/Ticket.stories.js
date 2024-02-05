import { Ticket } from "./Ticket";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Ticket",
  component: Ticket,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SampleTicket = {
  args: {
    label: "First Last",
  },
};
