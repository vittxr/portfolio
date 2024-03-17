import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { r as registerLocaleLoader, i as init, $ as $isLoading, w as waitLocale } from "../../chunks/runtime.js";
const defaultLocale = "pt";
registerLocaleLoader("en", () => import("../../chunks/en.js"));
registerLocaleLoader("pt", () => import("../../chunks/pt.js"));
init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading$1, $$unsubscribe_isLoading;
  $$unsubscribe_isLoading = subscribe($isLoading, (value) => $isLoading$1 = value);
  const load = async () => {
    await waitLocale();
  };
  console.log("isLoading", $isLoading$1);
  if ($$props.load === void 0 && $$bindings.load && load !== void 0)
    $$bindings.load(load);
  $$unsubscribe_isLoading();
  return `${$isLoading$1 ? `Please wait...` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
