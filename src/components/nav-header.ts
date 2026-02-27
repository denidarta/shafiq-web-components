import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
export interface NavBarProps {
  isLoggedIn?: boolean;
}

@customElement("nav-bar")
export class NavBar extends LitElement {
  @property({ type: Boolean }) isLoggedIn = false;

  static styles = css``;

  render() {
    return html``;
  }
}
