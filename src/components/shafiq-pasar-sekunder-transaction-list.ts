import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export type PasarSekunderStatus =
  | "Pending"
  | "Expired"
  | "Canceled"
  | "Matched"
  | "Partial Matched"
  | "Partial Mach"
  | "Settled";

export interface ShafiqPasarSekunderTransactionListProps {
  status?: PasarSekunderStatus;
  kodeTransaksi?: string;
  kodeEfek?: string;
  tanggalTransaksi?: string;
  jumlahLembar?: string;
  hargaPerlembar?: string;
  nominalTransaksi?: string;
}

@customElement("shafiq-pasar-sekunder-transaction-list")
export class ShafiqPasarSekunderTransactionList extends LitElement {
  @property({ type: String, reflect: true })
  status: PasarSekunderStatus = "Pending";

  @property({ type: String, attribute: "kode-transaksi" })
  kodeTransaksi = "#12345";

  @property({ type: String, attribute: "kode-efek" })
  kodeEfek = "KMNC";

  @property({ type: String, attribute: "tanggal-transaksi" })
  tanggalTransaksi = "17-2-2024";

  @property({ type: String, attribute: "jumlah-lembar" })
  jumlahLembar = "200";

  @property({ type: String, attribute: "harga-perlembar" })
  hargaPerlembar = "Rp. 100.000";

  @property({ type: String, attribute: "nominal-transaksi" })
  nominalTransaksi = "Rp. 1.000.000.000";

  static styles = css`
    :host {
      display: block;
      font-family: var(--sct-font-family-base, "Mulish", sans-serif);
      width: 100%;
      max-width: 531px;
      color: #1d293d;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      background: #ffffff;
      padding: 17px;
      box-sizing: border-box;
      width: 100%;
    }

    .header {
      min-height: 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .kode-transaksi {
      font-weight: var(--sct-font-weight-stronger, 600);
      font-size: var(--sct-font-size-400, 16px);
      line-height: var(--sct-line-height-400, 22px);
      margin: 0;
      white-space: nowrap;
    }

    .kode-efek-badge {
      background: #f1f5f9;
      border-radius: 6px;
      padding: 4px 12px;
      color: #2e6ba8;
      font-weight: var(--sct-font-weight-stronger, 600);
      font-size: var(--sct-font-size-200, 12px);
      line-height: 18px;
      white-space: nowrap;
    }

    .status-badge {
      border-radius: 6px;
      padding: 4px 12px;
      font-weight: var(--sct-font-weight-stronger, 600);
      font-size: var(--sct-font-size-200, 12px);
      line-height: var(--sct-line-height-200, 16px);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .status-pending {
      background: #fef3c6;
      color: #fe9a00;
    }

    .status-expired,
    .status-canceled {
      background: #ffe4e6;
      color: #c70036;
    }

    .status-matched,
    .status-partial-matched {
      background: #dfebf6;
      color: #23517f;
    }

    .status-settled {
      background: #cbfbf1;
      color: #00bba7;
    }

    .divider {
      height: 1px;
      width: 100%;
      background: #e5e7eb;
    }

    .body {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      column-gap: 0;
      row-gap: 8px;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }

    .label {
      color: #45556c;
      font-size: var(--sct-font-size-200, 12px);
      line-height: var(--sct-line-height-200, 16px);
      font-weight: var(--sct-font-weight-strong, 500);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .value {
      margin: 0;
      color: #1d293d;
      line-height: 20px;
    }

    .value-date {
      font-size: var(--sct-font-size-300, 14px);
      font-weight: var(--sct-font-weight-stronger, 600);
    }

    .value-strong {
      font-size: var(--sct-font-size-300, 14px);
      font-weight: var(--sct-font-weight-stronger, 600);
    }

    .icon-info {
      width: 12px;
      height: 12px;
      color: #45556c;
      flex-shrink: 0;
    }

    .footer {
      min-height: 33px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      width: 100%;
    }

    .button {
      border-radius: 6px;
      padding: 8px 12px;
      border: 1px solid transparent;
      background: transparent;
      font-family: inherit;
      font-size: var(--sct-font-size-300, 14px);
      line-height: var(--sct-line-height-200, 16px);
      font-weight: var(--sct-font-weight-stronger, 600);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      cursor: pointer;
    }

    .button-amend {
      background: #dfebf6;
      color: #23517f;
    }

    .button-cancel {
      border-color: #f64e60;
      color: #c70036;
    }

    .button-receipt {
      border-color: #23517f;
      color: #23517f;
      background: #ffffff;
    }

    .icon-download {
      width: 16px;
      height: 16px;
      color: currentColor;
      flex-shrink: 0;
    }

    @media (max-width: 640px) {
      .body {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 10px;
      }

      .kode-transaksi {
        font-size: 16px;
      }

      .header {
        align-items: flex-start;
      }

      .footer {
        flex-wrap: wrap;
      }
    }
  `;

  private get normalizedStatus(): "Pending" | "Expired" | "Canceled" | "Matched" | "Partial Matched" | "Settled" {
    switch (this.status) {
      case "Expired":
        return "Expired";
      case "Canceled":
        return "Canceled";
      case "Matched":
        return "Matched";
      case "Partial Mach":
      case "Partial Matched":
        return "Partial Matched";
      case "Settled":
        return "Settled";
      case "Pending":
      default:
        return "Pending";
    }
  }

  private get shouldShowFooter() {
    return this.normalizedStatus === "Pending" || this.normalizedStatus === "Settled";
  }

  private get statusClass() {
    switch (this.normalizedStatus) {
      case "Expired":
        return "status-expired";
      case "Canceled":
        return "status-canceled";
      case "Matched":
        return "status-matched";
      case "Partial Matched":
        return "status-partial-matched";
      case "Settled":
        return "status-settled";
      case "Pending":
      default:
        return "status-pending";
    }
  }

  render() {
    const statusText = this.normalizedStatus;

    return html`
      <article class="card">
        <header class="header">
          <div class="header-left">
            <p class="kode-transaksi">${this.kodeTransaksi}</p>
            <span class="kode-efek-badge">${this.kodeEfek}</span>
          </div>
          <span class="status-badge ${this.statusClass}">${statusText}</span>
        </header>

        <div class="divider"></div>

        <section class="body">
          <div class="field">
            <p class="label">Ditambah</p>
            <p class="value value-date">${this.tanggalTransaksi}</p>
          </div>
          <div class="field">
            <p class="label">Jumlah Lembar</p>
            <p class="value value-strong">${this.jumlahLembar}</p>
          </div>
          <div class="field">
            <p class="label">Harga/Lembar</p>
            <p class="value value-strong">${this.hargaPerlembar}</p>
          </div>
          <div class="field">
            <p class="label">
              Total Nominal
              <svg class="icon-info" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5.25" stroke="currentColor" stroke-width="1.5"></circle>
                <circle cx="6" cy="3.55" r="0.75" fill="currentColor"></circle>
                <path d="M6 5.2V8.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </p>
            <p class="value value-strong">${this.nominalTransaksi}</p>
          </div>
        </section>

        ${this.shouldShowFooter
          ? html`
              <div class="divider"></div>
              <footer class="footer">
                ${this.normalizedStatus === "Pending"
                  ? html`
                      <button class="button button-amend" type="button">Amend</button>
                      <button class="button button-cancel" type="button">Cancel</button>
                    `
                  : html`
                      <button class="button button-receipt" type="button">
                        <svg class="icon-download" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="M8 2.5V9.5M8 9.5L5.5 7M8 9.5L10.5 7M3.5 12.5H12.5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        Bukti Potong Pajak
                      </button>
                    `}
              </footer>
            `
          : null}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "shafiq-pasar-sekunder-transaction-list": ShafiqPasarSekunderTransactionList;
  }
}
