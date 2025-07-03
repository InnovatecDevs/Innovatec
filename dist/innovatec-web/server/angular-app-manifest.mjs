
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Innovatec/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Innovatec"
  },
  {
    "renderMode": 2,
    "route": "/Innovatec/servicios"
  },
  {
    "renderMode": 2,
    "route": "/Innovatec/contacto"
  },
  {
    "renderMode": 2,
    "route": "/Innovatec/register"
  },
  {
    "renderMode": 2,
    "route": "/Innovatec/perfil"
  },
  {
    "renderMode": 2,
    "route": "/Innovatec/login"
  },
  {
    "renderMode": 2,
    "route": "/Innovatec/admin"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Innovatec",
    "route": "/Innovatec/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 53715, hash: '8958105b426f6b8eb6d35f2f5280a8c6ba49d00c825e4e561ac24acd4f3c9021', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6985, hash: 'dc24cf5dc6c3a79824011800ce9118ea09f847c7a6072837c612e5dbc9530750', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 109410, hash: '356a1020d6528a6f91c4f5985c5ad7a1ad95f05fd6df5108b3e72e85cf1c0b84', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 107304, hash: '680051605f5a1693ce0bc7da212d8b06c7e1739872e44f369b16ed3fc26db743', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 99684, hash: '9beead3d2ae6ef2915da438ffc72ce36c34824de9c274b637c6e9186e1214e3e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133885, hash: '095469fb09e011e1849678f7bb53039d2c782d0b322ac1c06b740f6f04cef344', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 147848, hash: 'e0592fb2a57eb64b9d3b4c28dbffda468d6f6b5c20eaf749b7d50311095b648b', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 147848, hash: 'e0592fb2a57eb64b9d3b4c28dbffda468d6f6b5c20eaf749b7d50311095b648b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 147848, hash: 'e0592fb2a57eb64b9d3b4c28dbffda468d6f6b5c20eaf749b7d50311095b648b', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'styles-3BOOWEL6.css': {size: 88446, hash: 'HCAqz/dou0s', text: () => import('./assets-chunks/styles-3BOOWEL6_css.mjs').then(m => m.default)}
  },
};
