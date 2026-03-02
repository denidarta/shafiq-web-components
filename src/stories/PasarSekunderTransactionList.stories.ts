import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../components/shafiq-pasar-sekunder-transaction-list";
import type {
  PasarSekunderStatus,
  ShafiqPasarSekunderTransactionListProps,
} from "../components/shafiq-pasar-sekunder-transaction-list";

const statusOptions: PasarSekunderStatus[] = [
  "Pending",
  "Expired",
  "Canceled",
  "Matched",
  "Partial Matched",
  "Partial Mach",
  "Settled",
];

const renderCard = (args: ShafiqPasarSekunderTransactionListProps) => html`
  <shafiq-pasar-sekunder-transaction-list
    .status=${args.status}
    .kodeTransaksi=${args.kodeTransaksi}
    .kodeEfek=${args.kodeEfek}
    .tanggalTransaksi=${args.tanggalTransaksi}
    .jumlahLembar=${args.jumlahLembar}
    .hargaPerlembar=${args.hargaPerlembar}
    .nominalTransaksi=${args.nominalTransaksi}
  ></shafiq-pasar-sekunder-transaction-list>
`;

const meta: Meta<ShafiqPasarSekunderTransactionListProps> = {
  title: "Components/ShafiqPasarSekunderTransactionList",
  component: "shafiq-pasar-sekunder-transaction-list",
  args: {
    status: "Pending",
    kodeTransaksi: "#12345",
    kodeEfek: "KMNC",
    tanggalTransaksi: "17-2-2024",
    jumlahLembar: "200",
    hargaPerlembar: "Rp. 100.000",
    nominalTransaksi: "Rp. 1.000.000.000",
  },
  argTypes: {
    status: {
      control: { type: "select" },
      options: statusOptions,
    },
    kodeTransaksi: { control: "text" },
    kodeEfek: { control: "text" },
    tanggalTransaksi: { control: "text" },
    jumlahLembar: { control: "text" },
    hargaPerlembar: { control: "text" },
    nominalTransaksi: { control: "text" },
  },
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component:
          "Pasar sekunder transaction list card from Figma, with status variants and conditional footer states.",
      },
    },
  },
  render: renderCard,
};

export default meta;

type Story = StoryObj<ShafiqPasarSekunderTransactionListProps>;

export const Playground: Story = {};

export const Pending: Story = {
  args: {
    status: "Pending",
  },
};

export const Expired: Story = {
  args: {
    status: "Expired",
  },
};

export const Canceled: Story = {
  args: {
    status: "Canceled",
  },
};

export const Matched: Story = {
  args: {
    status: "Matched",
  },
};

export const PartialMatched: Story = {
  args: {
    status: "Partial Matched",
  },
};

export const Settled: Story = {
  args: {
    status: "Settled",
  },
};

export const AllStatuses: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: (args) => html`
    <style>
      .stack {
        display: grid;
        gap: 8px;
        max-width: 531px;
      }
    </style>
    <div class="stack">
      ${statusOptions.map(
        (status) => html`
          ${renderCard({ ...args, status })}
        `,
      )}
    </div>
  `,
};
