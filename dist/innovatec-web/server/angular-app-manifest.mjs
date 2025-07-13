
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/innovatec-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/innovatec-web"
  },
  {
    "renderMode": 2,
    "route": "/innovatec-web/servicios"
  },
  {
    "renderMode": 2,
    "route": "/innovatec-web/contacto"
  },
  {
    "renderMode": 2,
    "route": "/innovatec-web/register"
  },
  {
    "renderMode": 2,
    "route": "/innovatec-web/perfil"
  },
  {
    "renderMode": 2,
    "route": "/innovatec-web/login"
  },
  {
    "renderMode": 2,
    "route": "/innovatec-web/admin"
  },
  {
    "renderMode": 2,
    "redirectTo": "/innovatec-web",
    "route": "/innovatec-web/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 53719, hash: '6396416079c716fba65804b226f018b1c23d48d1b8fcbcea6a1d1c2622a55ac6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6989, hash: 'ee85db93294e8c60bee65ccd262a57e06cf8e91c51d78f96ebc374944a0dd10d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 133917, hash: 'aff8a9f7510382275bb3cd1b3550a3a1a98071190066cda205ba9a1a6d089c54', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 99712, hash: 'e26c3475ba4ed01c4b6b8dd5c5c27aab1134126c356d04f0a9be581db633ffd0', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 107348, hash: '72f6ebfb8f94aa380295da257a57534bd7668600f3a9b620729541ad177da082', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 109438, hash: '9f62a47723ddce83a67989630fcd469337677286d5e5115e74055457e1f5202c', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 147852, hash: 'e98f79783031534fef597c9aade5d0f9ce1658367a3eb44d6e7656ede6db89f8', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 147852, hash: 'e98f79783031534fef597c9aade5d0f9ce1658367a3eb44d6e7656ede6db89f8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 147852, hash: 'e98f79783031534fef597c9aade5d0f9ce1658367a3eb44d6e7656ede6db89f8', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'styles-3BOOWEL6.css': {size: 88446, hash: 'HCAqz/dou0s', text: () => import('./assets-chunks/styles-3BOOWEL6_css.mjs').then(m => m.default)}
  },
};
