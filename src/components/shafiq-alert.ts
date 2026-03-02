import { LitElement, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

export type ShafiqAlertType =
  | "warning"
  | "danger"
  | "neutral"
  | "success"
  | "error-danger";
export type ShafiqAlertFigmaType = "warning" | "error-danger" | "neutral" | "danger";

export interface ShafiqAlertProps {
  type?: ShafiqAlertType;
  figmaType?: ShafiqAlertFigmaType;
  bgColor?: boolean;
  leadIcon?: boolean;
  showIcon?: boolean;
  dismissable?: boolean;
  cta?: boolean;
  title?: string;
  body?: string;
  ctaLabel?: string;
  open?: boolean;
}

interface AlertPalette {
  border: string;
  background: string;
  side: string;
  icon: string;
  cta: string;
}

@customElement("shafiq-alert")
export class ShafiqAlert extends LitElement {
  @property({ type: String, reflect: true })
  type: ShafiqAlertType = "warning";

  @property({ type: String, attribute: "figma-type" })
  figmaType?: ShafiqAlertFigmaType;

  @property({ type: Boolean, attribute: "bg-color" })
  bgColor = false;

  @property({ type: Boolean, attribute: "lead-icon" })
  leadIcon = true;

  @property({ type: Boolean, attribute: "show-icon" })
  showIcon = true;

  @property({ type: Boolean })
  dismissable = false;

  @property({ type: Boolean })
  cta = true;

  @property({ type: String })
  title = "Alert Title";

  @property({ type: String })
  body = "Body description of the alert bar";

  @property({ type: String, attribute: "cta-label" })
  ctaLabel = "See Detail";

  @property({ type: Boolean, reflect: true })
  open = true;

  @state()
  private dismissed = false;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 327px;
      font-family: var(--sct-font-family-base, "Mulish", sans-serif);
    }

    .alert {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: var(--sct-spacing-1, 4px);
      border: 1px solid var(--shafiq-alert-border-color, #fadb14);
      background: var(--shafiq-alert-bg, #ffffff);
      border-radius: 8px;
      padding: var(--sct-spacing-2, 8px) var(--sct-spacing-2, 8px)
        var(--sct-spacing-2, 8px) var(--sct-spacing-3, 12px);
      box-sizing: border-box;
      overflow: hidden;
      width: 100%;
      min-height: 80px;
    }

    .side-border {
      position: absolute;
      top: 7px;
      bottom: 7px;
      left: 3px;
      width: 4px;
      border-radius: 12px;
      background: var(--shafiq-alert-side-color, #fe9a00);
    }

    .icon,
    .dismiss {
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--shafiq-alert-icon-color, #fe9a00);
    }

    .content {
      flex: 1 1 auto;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .title {
      margin: 0;
      color: var(--sct-neutral-foreground-primary, #1d293d);
      font-size: var(--sct-font-size-300, 14px);
      line-height: var(--sct-line-height-300, 20px);
      font-weight: var(--sct-font-weight-stronger, 600);
    }

    .body {
      margin: 0;
      color: var(--shafiq-alert-body-color, #45556c);
      font-size: var(--sct-font-size-300, 14px);
      line-height: var(--sct-line-height-300, 20px);
      font-weight: var(--sct-font-weight-regular, 400);
    }

    .cta {
      border: 0;
      background: transparent;
      padding: 0;
      margin: 0;
      margin-top: 2px;
      color: var(--shafiq-alert-cta-color, #fe9a00);
      font-family: inherit;
      font-size: var(--sct-font-size-300, 14px);
      line-height: var(--sct-line-height-200, 16px);
      font-weight: var(--sct-font-weight-regular, 400);
      cursor: pointer;
      text-align: left;
    }

    .dismiss {
      border: 0;
      background: transparent;
      padding: 0;
      cursor: pointer;
      color: var(--sct-neutral-foreground-primary, #1d293d);
    }

    .dismiss:focus-visible,
    .cta:focus-visible {
      outline: 2px solid var(--sct-brand-blue-background-strong-rest, #23517f);
      outline-offset: 2px;
      border-radius: 4px;
    }

    .icon svg,
    .dismiss svg {
      width: 20px;
      height: 20px;
      display: block;
    }
  `;

  private get normalizedType(): "warning" | "danger" | "neutral" | "success" {
    if (this.figmaType === "danger") {
      return "success";
    }

    if (this.figmaType === "error-danger") {
      return "danger";
    }

    if (this.figmaType === "neutral") {
      return "neutral";
    }

    if (this.figmaType === "warning") {
      return "warning";
    }

    if (this.type === "error-danger") {
      return "danger";
    }

    if (this.type === "danger") {
      return "danger";
    }

    if (this.type === "success") {
      return "success";
    }

    return this.type === "neutral" ? "neutral" : "warning";
  }

  private get palette(): AlertPalette {
    const semanticType = this.normalizedType;

    if (semanticType === "danger") {
      return {
        border: this.bgColor ? "#ffa39e" : "#cd1323",
        background: this.bgColor
          ? "var(--sct-accent-rose-background-soft-rest, #ffe4e6)"
          : "var(--sct-neutral-background-primary-rest, #ffffff)",
        side: this.bgColor
          ? "var(--sct-accent-rose-background-soft-rest, #ffe4e6)"
          : "var(--sct-accent-rose-background-strong-rest, #ff2056)",
        icon: "var(--sct-accent-rose-foreground-on-soft, #c70036)",
        cta: "var(--sct-accent-rose-foreground-on-soft, #c70036)",
      };
    }

    if (semanticType === "neutral") {
      return {
        border: this.bgColor ? "#91d5ff" : "#096dd9",
        background: this.bgColor
          ? "var(--sct-accent-sky-background-soft-rest, #dff2fe)"
          : "var(--sct-neutral-background-primary-rest, #ffffff)",
        side: this.bgColor
          ? "var(--sct-accent-sky-background-soft-rest, #dff2fe)"
          : "var(--sct-accent-sky-foreground-on-soft, #3699ff)",
        icon: "var(--sct-accent-sky-foreground-on-soft, #3699ff)",
        cta: "var(--sct-accent-sky-foreground-on-soft, #3699ff)",
      };
    }

    if (semanticType === "success") {
      return {
        border: this.bgColor ? "#d1fadf" : "#12b669",
        background: this.bgColor
          ? "var(--sct-accent-teal-background-soft-rest, #cbfbf1)"
          : "var(--sct-neutral-background-primary-rest, #ffffff)",
        side: this.bgColor
          ? "var(--sct-accent-teal-background-soft-rest, #cbfbf1)"
          : "var(--sct-accent-teal-foreground-on-soft, #00bba7)",
        icon: "var(--sct-accent-teal-foreground-on-soft, #00bba7)",
        cta: "var(--sct-accent-teal-foreground-on-soft, #00bba7)",
      };
    }

    return {
      border: "#fadb14",
      background: this.bgColor
        ? "var(--sct-accent-amber-background-soft-rest, #fef3c6)"
        : "var(--sct-neutral-background-primary-rest, #ffffff)",
      side: this.bgColor
        ? "var(--sct-accent-amber-background-soft-rest, #fef3c6)"
        : "var(--sct-accent-amber-background-strong-rest, #fe9a00)",
      icon: "var(--sct-accent-amber-foreground-on-soft, #fe9a00)",
      cta: "var(--sct-accent-amber-foreground-on-soft, #fe9a00)",
    };
  }

  private get bodyColor() {
    return this.bgColor
      ? "var(--sct-neutral-foreground-primary, #1d293d)"
      : "var(--sct-neutral-foreground-secondary, #45556c)";
  }

  private handleDismiss() {
    this.dismissed = true;
    this.open = false;

    this.dispatchEvent(
      new CustomEvent("shafiq-alert-dismiss", {
        bubbles: true,
        composed: true,
        detail: {
          type: this.normalizedType,
        },
      }),
    );
  }

  protected updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("open") && this.open) {
      this.dismissed = false;
    }
  }

  private renderLeadIcon() {
    return html`
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle>
          <path
            d="M12 7.5V13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <circle cx="12" cy="16.5" r="1" fill="currentColor"></circle>
        </svg>
      </span>
    `;
  }

  render() {
    if (!this.open || this.dismissed) {
      return nothing;
    }

    const palette = this.palette;

    return html`
      <article
        class="alert"
        style=${`--shafiq-alert-border-color:${palette.border};--shafiq-alert-bg:${palette.background};--shafiq-alert-side-color:${palette.side};--shafiq-alert-icon-color:${palette.icon};--shafiq-alert-cta-color:${palette.cta};--shafiq-alert-body-color:${this.bodyColor};`}
        role="alert"
        aria-live="polite"
      >
        <span class="side-border" aria-hidden="true"></span>

        ${this.showIcon && this.leadIcon ? this.renderLeadIcon() : nothing}

        <div class="content">
          <p class="title">${this.title}</p>
          <p class="body">${this.body}</p>
          ${this.cta
            ? html`<button class="cta" type="button">${this.ctaLabel}</button>`
            : nothing}
        </div>

        ${this.dismissable
          ? html`
              <button
                class="dismiss"
                type="button"
                aria-label="Dismiss alert"
                @click=${this.handleDismiss}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            `
          : nothing}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "shafiq-alert": ShafiqAlert;
  }
}
