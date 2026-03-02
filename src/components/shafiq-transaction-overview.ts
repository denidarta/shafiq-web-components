import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export type TransactionOverviewType = "Bid" | "Offer";
export type TransactionOverviewBreakpoint = "Desktop" | "Mobile";

export interface ShafiqTransactionOverviewProps {
  type?: TransactionOverviewType;
  breakpoint?: TransactionOverviewBreakpoint;
  saldoDompetAktif?: string;
  saldoDompetDalamProses?: string;
  bidPending?: string;
  bidMatch?: string;
  bidSettled?: string;
  offerPending?: string;
  offerMatch?: string;
  offerSettled?: string;
}

interface OverviewItem {
  label: string;
  value: string;
  isSettled?: boolean;
}

const DEFAULT_TAG_NAME = "shafiq-transaction-overview";

/**
 * Transaction overview card from Figma component set:
 * - Type: Bid | Offer
 * - Breakpoint: Desktop | Mobile
 *
 * This component is intentionally not auto-registered so consuming apps can
 * decide how and when to hydrate/register it.
 */
export class ShafiqTransactionOverview extends LitElement {
  @property({ type: String, reflect: true })
  type: TransactionOverviewType = "Bid";

  @property({ type: String, reflect: true })
  breakpoint: TransactionOverviewBreakpoint = "Desktop";

  @property({ type: String, attribute: "saldo-dompet-aktif" })
  saldoDompetAktif = "Rp. 16.500.000";

  @property({ type: String, attribute: "saldo-dompet-dalam-proses" })
  saldoDompetDalamProses = "Rp. 16.500.000";

  @property({ type: String, attribute: "bid-pending" })
  bidPending = "Rp. 1.500.000";

  @property({ type: String, attribute: "bid-match" })
  bidMatch = "Rp. 412.500.000";

  @property({ type: String, attribute: "bid-settled" })
  bidSettled = "Rp. 100.500.000";

  @property({ type: String, attribute: "offer-pending" })
  offerPending = "Rp. 1.500.000";

  @property({ type: String, attribute: "offer-match" })
  offerMatch = "Rp. 412.500.000";

  @property({ type: String, attribute: "offer-settled" })
  offerSettled = "Rp. 100.500.000";

  static styles = css`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-family: var(--sct-font-family-base, "Mulish", sans-serif);
    }

    .overview {
      width: 100%;
      box-sizing: border-box;
      border-radius: var(--sct-corner-radius-3, 6px);
      background: var(--sct-neutral-background-secondary-rest, #f8fafc);
    }

    .overview--desktop {
      max-width: var(--shafiq-transaction-overview-desktop-width, 784px);
      min-height: 104px;
      display: flex;
      align-items: stretch;
      padding: var(--sct-spacing-4, 16px) var(--sct-spacing-1, 4px);
    }

    .overview--mobile {
      max-width: var(--shafiq-transaction-overview-mobile-width, 324.8px);
      min-height: 220px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: var(--sct-spacing-2, 8px);
    }

    .section {
      min-height: 72px;
      box-sizing: border-box;
      padding: var(--sct-spacing-2, 8px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: var(--sct-spacing-1, 4px);
    }

    .overview--desktop .section {
      flex: 1 1 0;
    }

    .overview--desktop .section + .section {
      border-left: 1px solid var(--sct-neutral-foreground-tertiary, #90a1b9);
    }

    .section--mobile-settled {
      grid-column: 1 / -1;
      background: var(--sct-neutral-background-tertiary-rest, #f1f5f9);
      border-radius: var(--sct-corner-radius-3, 6px);
      gap: var(--sct-spacing-2, 8px);
    }

    .label {
      margin: 0;
      color: var(--sct-neutral-foreground-secondary, #45556c);
      font-size: var(--sct-font-size-200, 12px);
      line-height: var(--sct-line-height-200, 16px);
      font-weight: var(--sct-font-weight-stronger, 600);
    }

    .value {
      margin: 0;
      color: var(--sct-neutral-foreground-primary, #182230);
      font-size: var(--sct-font-size-300, 14px);
      line-height: var(--sct-line-height-300, 20px);
      font-weight: var(--sct-font-weight-stronger, 600);
    }
  `;

  private get normalizedType(): TransactionOverviewType {
    return this.type === "Offer" ? "Offer" : "Bid";
  }

  private get normalizedBreakpoint(): TransactionOverviewBreakpoint {
    return this.breakpoint === "Mobile" ? "Mobile" : "Desktop";
  }

  private renderSection(item: OverviewItem, settledClass = false) {
    return html`
      <section class="section ${settledClass ? "section--mobile-settled" : ""}">
        <p class="label">${item.label}</p>
        <p class="value">${item.value}</p>
      </section>
    `;
  }

  private get desktopItems(): OverviewItem[] {
    if (this.normalizedType === "Offer") {
      return [
        { label: "Saldo Dompet (Aktif)", value: this.saldoDompetAktif },
        { label: "Saldo Dompet (Dalam Proses)", value: this.saldoDompetDalamProses },
        { label: "Offer (Pending)", value: this.offerPending },
        { label: "Offer (Match)", value: this.offerMatch },
        { label: "Offer (Settled)", value: this.offerSettled },
      ];
    }

    return [
      { label: "Saldo Dompet (Aktif)", value: this.saldoDompetAktif },
      { label: "Saldo Dompet (Dalam Proses)", value: this.saldoDompetDalamProses },
      { label: "Bid (Pending)", value: this.bidPending },
      { label: "Bid (Match)", value: this.bidMatch },
      { label: "Bid (Settled)", value: this.bidSettled },
    ];
  }

  private get mobileItems() {
    if (this.normalizedType === "Offer") {
      return {
        active: { label: "Saldo Dompet (Aktif)", value: this.saldoDompetAktif },
        inProgress: { label: "Saldo Dompet (Dalam Proses)", value: this.saldoDompetDalamProses },
        pending: { label: "Offer (Pending)", value: this.offerPending },
        match: { label: "Offer (Match)", value: this.offerMatch },
        settled: { label: "Offer (Settled)", value: this.offerSettled, isSettled: true },
      };
    }

    return {
      active: { label: "Saldo Dompet (Aktif)", value: this.saldoDompetAktif },
      inProgress: { label: "Saldo Dompet (Dalam Proses)", value: this.saldoDompetDalamProses },
      pending: { label: "Bid (Pending)", value: this.bidPending },
      match: { label: "Bid (Match)", value: this.bidMatch },
      settled: { label: "Bid (Settled)", value: this.bidSettled, isSettled: true },
    };
  }

  render() {
    if (this.normalizedBreakpoint === "Mobile") {
      const mobile = this.mobileItems;

      return html`
        <article class="overview overview--mobile">
          ${this.renderSection(mobile.active)}
          ${this.renderSection(mobile.inProgress)}
          ${this.renderSection(mobile.pending)}
          ${this.renderSection(mobile.match)}
          ${this.renderSection(mobile.settled, true)}
        </article>
      `;
    }

    return html`
      <article class="overview overview--desktop">
        ${this.desktopItems.map((item) => this.renderSection(item))}
      </article>
    `;
  }
}

export const registerShafiqTransactionOverview = (tagName = DEFAULT_TAG_NAME) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, ShafiqTransactionOverview);
  }

  return tagName;
};

declare global {
  interface HTMLElementTagNameMap {
    "shafiq-transaction-overview": ShafiqTransactionOverview;
  }
}
