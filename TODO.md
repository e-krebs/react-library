## TODO
- migrate components:
  - [ ] `Button`
  - [x] `Checkbox`
  - [ ] `NumberInput`
  - [ ] `TextInput`
  - [ ] `Modal`
  - [ ] `Select`
- [ ] update README by documenting how to theme

## Tips
- add _**animations**_ & don't forget `motion-reduce:transition-none`
- `className` & `cx`
  - use `data-...` attributes instead of `cx` for conditional classnames (isSelected, ...)
  - ⚠️ don't forget the `data-focused` state (keyboard selection) ⚠️
  - replace `classnames` by `tailwind-merge` for merging with `className` property
  - don't hesitate to override the `className` property provided by `react-aria-component` with `className?: string` as with `tailwindCss` & react-aria's `data-...` attributes we shouldn't  need state-dependant classNames
- for background colors:
  - replace `white` by `th-bg`
  - replace `dark:...-gray-900` by `dark:...th-dark-bg`
- for text colors:
  - replace `gray-500` by `th-text`
  - replace `dark:...-gray-400` by `dark:...th-dark-text`
- for border colors:
  - replace `gray-700` by `th-border`
  - replace `dark:...-gray-300` by `dark:...th-dark-border`
- for primary colors:
  - `...-th-primary` & `dark:...-th-dark-primary`
