# description

A collection of components to be reused across personal projects.
[View live here](https://e-krebs-react-library.vercel.app)

# use (⚠️ not published yet ⚠️)

in addition the the components, you can import the following from the package:
- `tailwind.config.js` → a base tailwind config file that can be used as a preset

# contributing

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

to run in production:
```
yarn build
yarn serve
```
this will:
- first, build the library & the doc
- then, serve the doc site

## publish

TBD