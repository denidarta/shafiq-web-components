import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../components/shafiq-alert";
import type { ShafiqAlertProps } from "../components/shafiq-alert";

type AlertStoryArgs = Omit<ShafiqAlertProps, "figmaType"> & {
  figmaType?: ShafiqAlertProps["figmaType"] | "none";
};

const typeOptions: NonNullable<ShafiqAlertProps["type"]>[] = [
  "warning",
  "danger",
  "neutral",
  "success",
  "error-danger",
];
const figmaTypeOptions = ["none", "warning", "error-danger", "neutral", "danger"];

const meta: Meta<AlertStoryArgs> = {
  title: "Components/ShafiqAlert",
  component: "shafiq-alert",
  args: {
    type: "warning",
    figmaType: "none",
    bgColor: false,
    leadIcon: true,
    showIcon: true,
    dismissable: true,
    cta: true,
    title: "Alert Title",
    body: "Body description of the alert bar",
    ctaLabel: "See Detail",
    open: true,
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: typeOptions,
      description:
        "Semantic type. `error-danger` is a backward-compatible alias for `danger`.",
    },
    figmaType: {
      control: { type: "select" },
      options: figmaTypeOptions,
      description:
        "Original Figma variant type. When set, this overrides `type` mapping.",
    },
    bgColor: { control: "boolean", description: "Filled/soft background style." },
    leadIcon: { control: "boolean" },
    showIcon: { control: "boolean" },
    dismissable: { control: "boolean" },
    cta: { control: "boolean" },
    title: { control: "text" },
    body: { control: "text" },
    ctaLabel: { control: "text" },
    open: { control: "boolean" },
  },
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component:
          "Alert component from Figma variants. Supports persistent (`dismissable=false`) and dismissable states with semantic colors: neutral, success, warning, and danger.",
      },
    },
  },
  render: (args) => html`
    <shafiq-alert
      .type=${args.type}
      .figmaType=${args.figmaType === "none" ? undefined : args.figmaType}
      .bgColor=${args.bgColor ?? false}
      .leadIcon=${args.leadIcon ?? true}
      .showIcon=${args.showIcon ?? true}
      .dismissable=${args.dismissable ?? true}
      .cta=${args.cta ?? true}
      .title=${args.title ?? "Alert Title"}
      .body=${args.body ?? "Body description of the alert bar"}
      .ctaLabel=${args.ctaLabel ?? "See Detail"}
      .open=${args.open ?? true}
    ></shafiq-alert>
  `,
};

export default meta;

type Story = StoryObj<AlertStoryArgs>;

export const Playground: Story = {};

export const PersistentAlert: Story = {
  args: {
    dismissable: false,
  },
};

export const DismissableAlert: Story = {
  args: {
    dismissable: true,
  },
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 12px 16px;
      }

      .stack {
        display: grid;
        gap: 8px;
      }

      .label {
        font-family: "Mulish", sans-serif;
        font-size: 12px;
        line-height: 16px;
        color: #45556c;
        margin-bottom: 2px;
      }
    </style>

    <div class="grid">
      <div class="stack">
        <div class="label">Warning</div>
        <shafiq-alert type="warning"></shafiq-alert>
        <shafiq-alert type="warning" bg-color></shafiq-alert>
      </div>

      <div class="stack">
        <div class="label">Danger</div>
        <shafiq-alert type="danger"></shafiq-alert>
        <shafiq-alert type="danger" bg-color></shafiq-alert>
      </div>

      <div class="stack">
        <div class="label">Neutral</div>
        <shafiq-alert type="neutral"></shafiq-alert>
        <shafiq-alert type="neutral" bg-color></shafiq-alert>
      </div>

      <div class="stack">
        <div class="label">Success</div>
        <shafiq-alert type="success"></shafiq-alert>
        <shafiq-alert type="success" bg-color></shafiq-alert>
      </div>
    </div>
  `,
};
