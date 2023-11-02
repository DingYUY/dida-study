import { VueWrapper } from "@vue/test-utils";
import { RouterMock } from "vue-router-mock";

declare module "@vue/test-utils" {
  interface VueWrapper<VM, T> {
    router: RouterMock;
  }
}
