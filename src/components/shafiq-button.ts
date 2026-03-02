import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

type ButtonVariant =
  | "primary-blue"
  | "secondary-blue"
  | "outline-blue"
  | "gold-primary"
  | "danger-primary"
  | "danger-faded"
  | "disabled-filled"
  | "disabled-ghost"
  | "link";

type ButtonSize = "small" | "medium" | "large";

export interface ShafiqButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  icon?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Shafiq UI Kit button component.
 */
@customElement("shafiq-button")
export class ShafiqButton extends LitElement {
  @property({ type: String, reflect: true })
  variant: ButtonVariant = "primary-blue";

  @property({ type: String, reflect: true })
  size: ButtonSize = "medium";

  @property({ type: String })
  label = "Button";

  @property({ type: Boolean })
  icon = true;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  href?: string;

  @property({ type: String })
  target?: string;

  @property({ type: String })
  rel?: string;

  @property({ type: String })
  type: "button" | "submit" | "reset" = "button";

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--sct-font-family-base, "Mulish", sans-serif);
      font-weight: var(--sct-font-weight-stronger, 600);
    }

    .button {
      align-items: center;
      border: 1px solid transparent;
      border-radius: var(--sct-button-radius, 6px);
      color: var(--sct-button-fg, #e8c976);
      cursor: pointer;
      display: inline-flex;
      font-size: var(--sct-button-font-size, var(--sct-font-size-200, 12px));
      gap: 2px;
      justify-content: center;
      line-height: var(--sct-line-height-200, 16px);
      min-width: var(--sct-button-min-width, auto);
      padding: var(--sct-button-py, 8px) var(--sct-button-px, 12px);
      text-decoration: none;
      user-select: none;
      background: var(--sct-button-bg, #23517f);
      transition: background-color 120ms ease, border-color 120ms ease,
        color 120ms ease, border-radius 120ms ease;
    }

    .button:focus-visible {
      outline: 2px solid var(--sct-button-focus, #2e6ba8);
      outline-offset: 2px;
    }

    .button.is-disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    .icon {
      align-items: center;
      display: inline-flex;
      height: 24px;
      justify-content: center;
      width: 24px;
    }

    .icon svg {
      display: block;
      height: 18px;
      width: 18px;
    }

    .size-small {
      --sct-button-font-size: var(--sct-font-size-200, 12px);
      --sct-button-px: 12px;
      --sct-button-py: 6px;
      --sct-button-radius: 6px;
    }

    .size-medium {
      --sct-button-font-size: var(--sct-font-size-300, 14px);
      --sct-button-px: 12px;
      --sct-button-py: 8px;
      --sct-button-radius: 6px;
    }

    .size-large {
      --sct-button-font-size: var(--sct-font-size-300, 14px);
      --sct-button-px: 12px;
      --sct-button-py: 12px;
      --sct-button-radius: 6px;
      --sct-button-min-width: 40px;
    }

    .variant-primary-blue {
      --sct-button-bg: var(--sct-brand-blue-background-strong-rest, #23517f);
      --sct-button-fg: var(--sct-brand-gold-foreground-on-strong, #e8c976);
    }

    .variant-primary-blue:hover {
      --sct-button-bg: var(--sct-brand-blue-background-strong-hover, #183858);
    }

    .variant-primary-blue.size-small {
      --sct-button-radius: 4px;
    }

    .variant-primary-blue.size-small:hover {
      --sct-button-radius: 6px;
    }

    .variant-secondary-blue {
      --sct-button-bg: var(--sct-brand-blue-background-soft-rest, #dfebf6);
      --sct-button-fg: var(--sct-brand-blue-foreground-on-soft, #23517f);
    }

    .variant-secondary-blue:hover {
      --sct-button-bg: var(--sct-brand-blue-background-soft-hover, #b7d1eb);
    }

    .variant-outline-blue {
      --sct-button-bg: transparent;
      --sct-button-fg: var(--sct-brand-blue-foreground-on-soft-2, #2e6ba8);
      border-color: var(--sct-brand-blue-stroke-strong, #2e6ba8);
    }

    .variant-outline-blue:hover {
      --sct-button-bg: var(--sct-brand-blue-background-soft-hover, #b7d1eb);
    }

    .variant-gold-primary {
      --sct-button-bg: var(--sct-brand-gold-background-strong-rest, #e8c976);
      --sct-button-fg: var(--sct-neutral-foreground-primary, #1d293d);
    }

    .variant-gold-primary:hover {
      --sct-button-bg: var(--sct-brand-gold-background-strong-hover, #ccaf62);
    }

    .variant-gold-primary.size-small {
      --sct-button-px: 8px;
    }

    .variant-danger-primary {
      --sct-button-bg: var(--sct-accent-rose-background-strong-rest, #ff2056);
      --sct-button-fg: var(--sct-neutral-foreground-white, #ffffff);
    }

    .variant-danger-primary:hover {
      --sct-button-bg: #c43f4e;
    }

    .variant-danger-faded {
      --sct-button-bg: transparent;
      --sct-button-fg: var(--sct-accent-rose-foreground-on-soft, #c70036);
      border-color: #f64e60;
    }

    .variant-danger-faded:hover {
      --sct-button-bg: var(--sct-accent-rose-background-soft-rest, #ffe4e6);
      border-color: transparent;
    }

    .variant-disabled-filled {
      --sct-button-bg: #e8e8ec;
      --sct-button-fg: var(--sct-neutral-foreground-disabled, #99a1af);
    }

    .variant-disabled-ghost {
      --sct-button-bg: transparent;
      --sct-button-fg: var(--sct-neutral-foreground-disabled, #99a1af);
    }

    .variant-link {
      --sct-button-bg: transparent;
      --sct-button-fg: var(--sct-brand-blue-foreground-on-soft-2, #2e6ba8);
    }

    .variant-link:hover {
      --sct-button-bg: var(--sct-brand-blue-background-soft-hover, #b7d1eb);
    }

    .size-large.variant-danger-primary,
    .size-large.variant-danger-faded {
      --sct-button-py: 10px;
    }
  `;

  private get isDisabledVariant() {
    return this.variant === "disabled-filled" || this.variant === "disabled-ghost";
  }

  private handleDisabledClick(event: Event) {
    if (!this.disabled && !this.isDisabledVariant) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  render() {
    const disabled = this.disabled || this.isDisabledVariant;
    const classes = {
      button: true,
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      "is-disabled": disabled,
    };

    const iconMarkup = this.icon
      ? html`
          <span class="icon" part="icon" aria-hidden="true">
            <slot name="icon">
              <svg viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
                <rect x="2" y="2" width="6" height="6" rx="1"></rect>
                <rect x="10" y="2" width="6" height="6" rx="1"></rect>
                <rect x="2" y="10" width="6" height="6" rx="1"></rect>
                <rect x="10" y="10" width="6" height="6" rx="1"></rect>
              </svg>
            </slot>
          </span>
        `
      : null;

    if (this.href) {
      return html`
        <a
          class=${classMap(classes)}
          href=${ifDefined(disabled ? undefined : this.href)}
          target=${ifDefined(this.target)}
          rel=${ifDefined(this.rel)}
          aria-disabled=${disabled ? "true" : "false"}
          tabindex=${disabled ? -1 : 0}
          part="button"
          @click=${this.handleDisabledClick}
        >
          ${iconMarkup}
          <span class="label" part="label"><slot>${this.label}</slot></span>
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${disabled}
        part="button"
        @click=${this.handleDisabledClick}
      >
        ${iconMarkup}
        <span class="label" part="label"><slot>${this.label}</slot></span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "shafiq-button": ShafiqButton;
  }
}
