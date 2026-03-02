import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import {
  registerShafiqTransactionOverview,
  type ShafiqTransactionOverviewProps,
  type TransactionOverviewBreakpoint,
  type TransactionOverviewType,
} from "../components/shafiq-transaction-overview";

registerShafiqTransactionOverview();

const typeOptions: TransactionOverviewType[] = ["Bid", "Offer"];
const breakpointOptions: TransactionOverviewBreakpoint[] = ["Desktop", "Mobile"];

const renderOverview = (args: ShafiqTransactionOverviewProps) => html`
  <shafiq-transaction-overview
    type=${args.type ?? "Bid"}
    breakpoint=${args.breakpoint ?? "Desktop"}
    saldo-dompet-aktif=${args.saldoDompetAktif ?? ""}
    saldo-dompet-dalam-proses=${args.saldoDompetDalamProses ?? ""}
    bid-pending=${args.bidPending ?? ""}
    bid-match=${args.bidMatch ?? ""}
    bid-settled=${args.bidSettled ?? ""}
    offer-pending=${args.offerPending ?? ""}
    offer-match=${args.offerMatch ?? ""}
    offer-settled=${args.offerSettled ?? ""}
  ></shafiq-transaction-overview>
`;

const meta: Meta<ShafiqTransactionOverviewProps> = {
  title: "Components/ShafiqTransactionOverview",
  component: "shafiq-transaction-overview",
  args: {
    type: "Bid",
    breakpoint: "Desktop",
    saldoDompetAktif: "Rp. 16.500.000",
    saldoDompetDalamProses: "Rp. 16.500.000",
    bidPending: "Rp. 1.500.000",
    bidMatch: "Rp. 412.500.000",
    bidSettled: "Rp. 100.500.000",
    offerPending: "Rp. 1.500.000",
    offerMatch: "Rp. 412.500.000",
    offerSettled: "Rp. 100.500.000",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: typeOptions,
    },
    breakpoint: {
      control: { type: "select" },
      options: breakpointOptions,
    },
    saldoDompetAktif: { control: "text" },
    saldoDompetDalamProses: { control: "text" },
    bidPending: { control: "text" },
    bidMatch: { control: "text" },
    bidSettled: { control: "text" },
    offerPending: { control: "text" },
    offerMatch: { control: "text" },
    offerSettled: { control: "text" },
  },
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component:
          "Transaction Overview component from Figma. Use `type` and `breakpoint` to render Bid/Offer and Desktop/Mobile variants.",
      },
    },
  },
  render: renderOverview,
};

export default meta;

type Story = StoryObj<ShafiqTransactionOverviewProps>;

export const Playground: Story = {};

export const BidDesktop: Story = {
  args: {
    type: "Bid",
    breakpoint: "Desktop",
  },
};

export const BidMobile: Story = {
  args: {
    type: "Bid",
    breakpoint: "Mobile",
  },
};

export const OfferDesktop: Story = {
  args: {
    type: "Offer",
    breakpoint: "Desktop",
  },
};

export const OfferMobile: Story = {
  args: {
    type: "Offer",
    breakpoint: "Mobile",
  },
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => html`
    <style>
      .variants {
        display: grid;
        gap: 16px;
      }

      .mobile-pair {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }
    </style>
    <div class="variants">
      ${renderOverview({ ...args, type: "Bid", breakpoint: "Desktop" })}
      ${renderOverview({ ...args, type: "Offer", breakpoint: "Desktop" })}
      <div class="mobile-pair">
        ${renderOverview({ ...args, type: "Bid", breakpoint: "Mobile" })}
        ${renderOverview({ ...args, type: "Offer", breakpoint: "Mobile" })}
      </div>
    </div>
  `,
};
