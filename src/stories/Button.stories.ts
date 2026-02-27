// src/stories/Button.stories.ts
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../components/shafiq-button";
import type { ShafiqButtonProps } from "../components/shafiq-button";

const meta: Meta<ShafiqButtonProps> = {
  title: "Components/ShafiqButton",
  component: "shafiq-button",
  args: {
    variant: "primary-blue",
    size: "medium",
    label: "Button",
    icon: true,
    disabled: false,
    href: "",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary-blue",
        "secondary-blue",
        "outline-blue",
        "gold-primary",
        "danger-primary",
        "danger-faded",
        "disabled-filled",
        "disabled-ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    href: { control: "text" },
    target: { control: "text" },
    rel: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
  render: (args) => html`
    <shafiq-button
      .variant=${args.variant}
      .size=${args.size}
      .label=${args.label}
      .icon=${args.icon}
      .disabled=${args.disabled}
      .href=${args.href || undefined}
      .target=${args.target}
      .rel=${args.rel}
      .type=${args.type}
    ></shafiq-button>
  `,
};

export default meta;

type Story = StoryObj<ShafiqButtonProps>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => html`
    <style>
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
      }
      .group {
        display: grid;
        gap: 12px;
      }
      .label {
        font-family: "Mulish", sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #5b667a;
      }
    </style>
    <div class="grid">
      <div class="group">
        <div class="label">Primary Blue</div>
        <shafiq-button variant="primary-blue" size="large"></shafiq-button>
        <shafiq-button variant="primary-blue" size="medium"></shafiq-button>
        <shafiq-button variant="primary-blue" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Secondary Blue</div>
        <shafiq-button variant="secondary-blue" size="large"></shafiq-button>
        <shafiq-button variant="secondary-blue" size="medium"></shafiq-button>
        <shafiq-button variant="secondary-blue" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Outline Blue</div>
        <shafiq-button variant="outline-blue" size="large"></shafiq-button>
        <shafiq-button variant="outline-blue" size="medium"></shafiq-button>
        <shafiq-button variant="outline-blue" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Gold Primary</div>
        <shafiq-button variant="gold-primary" size="large"></shafiq-button>
        <shafiq-button variant="gold-primary" size="medium"></shafiq-button>
        <shafiq-button variant="gold-primary" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Danger Primary</div>
        <shafiq-button variant="danger-primary" size="large"></shafiq-button>
        <shafiq-button variant="danger-primary" size="medium"></shafiq-button>
        <shafiq-button variant="danger-primary" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Danger Faded</div>
        <shafiq-button variant="danger-faded" size="large"></shafiq-button>
        <shafiq-button variant="danger-faded" size="medium"></shafiq-button>
        <shafiq-button variant="danger-faded" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Disabled</div>
        <shafiq-button variant="disabled-filled" size="large"></shafiq-button>
        <shafiq-button variant="disabled-filled" size="medium"></shafiq-button>
        <shafiq-button variant="disabled-filled" size="small"></shafiq-button>
        <shafiq-button variant="disabled-ghost" size="large"></shafiq-button>
        <shafiq-button variant="disabled-ghost" size="medium"></shafiq-button>
        <shafiq-button variant="disabled-ghost" size="small"></shafiq-button>
      </div>
      <div class="group">
        <div class="label">Link</div>
        <shafiq-button variant="link" size="large"></shafiq-button>
        <shafiq-button variant="link" size="medium"></shafiq-button>
        <shafiq-button variant="link" size="small"></shafiq-button>
      </div>
    </div>
  `,
};

export const WithoutIcon: Story = {
  args: {
    icon: false,
  },
};

export const AsLink: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    variant: "link",
  },
};
