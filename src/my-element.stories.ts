import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "./my-element";

const meta: Meta = {
  title: "Example/MyElement",
  component: "my-element",
  argTypes: {
    docsHint: { control: "text" },
    count: { control: "number" },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    docsHint: "Click on the Vite and Lit logos to learn more",
    count: 0,
  },
  render: (args) => html`
    <my-element .docsHint=${args.docsHint} .count=${args.count}>
      <h1>Vite + Lit</h1>
    </my-element>
  `,
};

export const CustomHint: Story = {
  args: {
    docsHint: "This is a custom hint!",
    count: 10,
  },
  render: (args) => html`
    <my-element .docsHint=${args.docsHint} .count=${args.count}>
      <h1>Customized!</h1>
    </my-element>
  `,
};
