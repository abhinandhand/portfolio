import { defineNuxtPlugin } from "#app";
import UiButton from "../components/UiButton";

export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined" && !customElements.get("ui-button")) {
    customElements.define("ui-button", UiButton);
  }
});
