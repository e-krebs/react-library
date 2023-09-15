## TODO

- migrate components:
  - [x] `Button`
  - [x] `Checkbox`
  - [ ] `NumberInput`
  - [x] `TextInput`
  - [ ] `Modal`
  - [ ] `Select`
- [ ] svg sprites
  - [ ] one for newly themed components
  - [ ] one for ladle custom UI
- [ ] update README by documenting how to theme
  - [x] ~~document group/??? on newly themed components when/if relevant~~ (revisit [once named groups are supported](https://github.com/adobe/react-spectrum/issues/5085) by `tailwindcss-react-aria-components`)

## Tips

- add _**animations**_ & don't forget `motion-reduce:transition-none`
  - [react-aria recommendations](https://react-spectrum.adobe.com/react-aria/styling.html#animation)
- `className` & `cx`
  - use attributes based on data- instead of `cx` for conditional classnames (isSelected, ...)
    - those do come from the [official plugin](https://react-spectrum.adobe.com/react-aria/styling.html#tailwind-css)
  - ⚠️ don't forget the `focus:` state (keyboard selection) ⚠️
  - replace `classnames` by `tailwind-merge` for merging with `className` property
  - don't hesitate to override the `className` property provided by `react-aria-component` with `className?: string` as with `tailwindCss` & react-aria's attributes based on data- we shouldn't need state-dependant classNames
- don't use the ~~`zinc`~~ color but `gray` instead
- for background colors:
  - replace ~~`white`~~ by `bg-th` (and `hover:bg-th-hover` when needed)
  - replace ~~`dark:bg-gray-900`~~ by `dark:bg-th-dark` (and `dark:hover:bg-th-dark-hover` when needed)
- for text colors:
  - replace ~~`text-gray-500`~~ by `text-th`
  - replace ~~`dark:text-gray-400`~~ by `dark:text-th-dark`
  - also available: `text-th-reversed` & `text-th-dark-reversed`
- for border colors:
  - replace ~~`border-gray-700`~~ by `border-th`
  - replace ~~`dark:border-gray-300`~~ by `dark:border-th-dark`
- for primary colors use `...-th-primary` or `...-th-dark-primary`
- for sizes (width & height)
  - replace ~~`w-4 h-4`~~ by `w-icon h-icon`
  - replace ~~`h-9`~~ by `h-input`
- for opacity
  - replace ~~`opacity-40`~~ by `opacity-disabled`
- for line height
  - replace ~~`leading-9`~~ by `leading-th`
- for **red** colors
  - use `*-error` & `*-error-dark` variants (for text, border & ring)

## tools

- run `yarn theme` to generate theme values from tailwindCss colors
