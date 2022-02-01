https://tailwindcss.com/docs/guides/nextjs


1.npm i styled-components twin.macro
#ref https://www.npmjs.com/package/twin.macro
#ref https://www.npmjs.com/package/styled-components

2.npm i babel-plugin-styled-components babel-plugin-twin
##ref https://www.npmjs.com/package/babel-plugin-styled-components
##ref https://www.npmjs.com/package/babel-plugin-twin

3.set up _document.js
##ref https://nextjs.org/docs/advanced-features/custom-document
##ref https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js

4.create file .babelrc
{
  "presets": ["next/babel"],
  "plugins": [
    ["styled-components", { "ssr": true }],
    ["babel-plugin-twin", { "debug": true }],
    "babel-plugin-macros"
  ]
}


5. add cuss to global
@tailwind base;
@tailwind components;
@tailwind utilities;

ref youtube : https://www.youtube.com/watch?v=do3LSqK929Q&t=592s