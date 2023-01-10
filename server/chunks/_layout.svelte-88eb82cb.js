import { c as create_ssr_component, v as validate_component, b as subscribe, d as add_attribute } from './index-69bb72c3.js';
import { p as page } from './stores-f4ee4b73.js';

const logo = "/_app/immutable/assets/svelte-logo-87df40b8.svg";
const github = "/_app/immutable/assets/github-1ea8d62e.svg";
const css$1 = {
  code: "header.svelte-1u9z1tp.svelte-1u9z1tp{display:flex;justify-content:space-between}.corner.svelte-1u9z1tp.svelte-1u9z1tp{width:3em;height:3em}.corner.svelte-1u9z1tp a.svelte-1u9z1tp{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1u9z1tp img.svelte-1u9z1tp{width:2em;height:2em;object-fit:contain}nav.svelte-1u9z1tp.svelte-1u9z1tp{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1u9z1tp.svelte-1u9z1tp{width:2em;height:3em;display:block}path.svelte-1u9z1tp.svelte-1u9z1tp{fill:var(--background)}ul.svelte-1u9z1tp.svelte-1u9z1tp{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1u9z1tp.svelte-1u9z1tp{position:relative;height:100%}li[aria-current='page'].svelte-1u9z1tp.svelte-1u9z1tp::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1u9z1tp a.svelte-1u9z1tp{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1u9z1tp.svelte-1u9z1tp:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-1u9z1tp"}"><div class="${"corner svelte-1u9z1tp"}"><a href="${"https://kit.svelte.dev"}" class="${"svelte-1u9z1tp"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-1u9z1tp"}"></a></div>

	<nav class="${"svelte-1u9z1tp"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1u9z1tp"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-1u9z1tp"}"></path></svg>
		<ul class="${"svelte-1u9z1tp"}"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="${"svelte-1u9z1tp"}"><a href="${"/"}" class="${"svelte-1u9z1tp"}">Chat</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="${"svelte-1u9z1tp"}"><a href="${"/about"}" class="${"svelte-1u9z1tp"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1u9z1tp"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-1u9z1tp"}"></path></svg></nav>

	<div class="${"corner svelte-1u9z1tp"}"><a href="${"https://github.com/sveltejs/kit"}" class="${"svelte-1u9z1tp"}"><img${add_attribute("src", github, 0)} alt="${"GitHub"}" class="${"svelte-1u9z1tp"}"></a></div>
</header>`;
});
const css = {
  code: ".app.svelte-2wferu{display:flex;flex-direction:column}main.svelte-2wferu{box-sizing:border-box;display:flex;flex-direction:column;margin:0 auto;padding:1rem;width:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-2wferu"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-2wferu"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-88eb82cb.js.map
