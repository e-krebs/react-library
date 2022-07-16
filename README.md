# description

A collection of components to be reused across personal projects.
[View live here](https://e-krebs-react-library.vercel.app)

# how to use (⚠️ alpha version ⚠️)
```
yarn add @e-krebs/react-library
```
**Typescript** types are included with the package.

The components can then be imported from the root of the package:
```ts
import { Checkbox, TextInput } from '@e-krebs/react-library'
```

in addition the the components, you can import the tailwindcss preset from the package:
- `tailwind.config.js`
- in which case, don't forget to include this package files in your tailwind content declaration

```js
// tailwind.config.js
const shared = require('@e-krebs/react-library/tailwind.config.js');
module.exports = {
  presets: [shared],
  content: ["./src/**/*.{html,ts,tsx}", "./node_modules/@e-krebs/react-library/dist/**/*.js"],
  theme: {
    extend: {}
  }
}
```

# how to contribute

start by installing dependencies
```
yarn
```

## dev

to run in dev:
```
yarn dev
```
this will:
- watch for changes on the library and continuously build it
- watch for changes on the stories and run the doc website on `localhost:61000`

## production

to run in production mode:
```
yarn build
yarn serve
```
this will:
- first, build the library & the doc
- then, serve the doc site

## publish

to publish a new _documentation_:
- push to **main**
- 🪄 the **Vercel for Github** app  will do the rest!

to publish a new _package_:
- update the **package.json** version on **main** (ex: 1.0.0)
- create a new **tag & release** on github with the same version (ex: v1.0.0)
- 🪄 the GitHub **publish** workflow will do the rest!

# TODO
- [ ] add more components
  - [x] [Button](https://github.com/e-krebs/amaze/blob/main/components/elements/Button.tsx) v0.0.18
  - [ ] [Card](https://github.com/e-krebs/amaze/blob/main/components/elements/Card.tsx)
  - [ ] [DropDown](https://github.com/e-krebs/amaze/blob/main/components/elements/DropDown.tsx)
  - [ ] [KeyCap](https://github.com/e-krebs/amaze/blob/main/components/elements/KeyCap.tsx)
  - [ ] [(external) Link](https://github.com/e-krebs/amaze/blob/main/components/elements/ExternalLink.tsx)
- [ ] reuse those components in:
  - [ ] [pile](https://github.com/e-krebs/pile)
  - [ ] [amaze](https://github.com/e-krebs/amaze)
- [ ] publish beta
- [ ] tests
- [ ] publish stable
