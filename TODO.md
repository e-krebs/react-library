## TODO
- migrate components:
  - [ ] `Button`
  - [x] `Checkbox`
  - [ ] `NumberInput`
  - [ ] `TextInput`
  - [ ] `Modal`
  - [ ] `Select`
- [ ] update README by documenting how to theme
  - [ ] document group/??? on newly themed components when/if relevant

## Tips
- add _**animations**_ & don't forget `motion-reduce:transition-none`
- `className` & `cx`
  - use `data-...` attributes instead of `cx` for conditional classnames (isSelected, ...)
  - ⚠️ don't forget the `data-focused` state (keyboard selection) ⚠️
  - replace `classnames` by `tailwind-merge` for merging with `className` property
  - don't hesitate to override the `className` property provided by `react-aria-component` with `className?: string` as with `tailwindCss` & react-aria's `data-...` attributes we shouldn't  need state-dependant classNames
- don't use the ~~`zinc`~~ color but `gray` instead
- for background colors:
  - replace ~~`white`~~ by `bg-th`
  - replace ~~`dark:bg-gray-900`~~ by `dark:bg-th-dark`
- for text colors:
  - replace ~~`text-gray-500`~~ by `text-th`
  - replace ~~`dark:text-gray-400`~~ by `dark:text-th-dark`
- for border colors:
  - replace ~~`border-gray-700`~~ by `border-th`
  - replace ~~`dark:border-gray-300`~~ by `dark:border-th-dark`
- for primary colors:
  - `...-th-primary` & `dark:...-th-dark-primary`
