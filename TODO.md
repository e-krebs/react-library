## TODO

- migrate components:
  - [x] `Button`
  - [x] `Checkbox`
  - [ ] `NumberInput`
  - [ ] `TextInput`
  - [ ] `Modal`
  - [ ] `Select`
- [ ] svg sprites
  - [ ] one for newly themed components
  - [ ] one for ladle custom UI
- [ ] update README by documenting how to theme
  - [ ] document group/??? on newly themed components when/if relevant

## Tips

- add _**animations**_ & don't forget `motion-reduce:transition-none`
- `className` & `cx`
  - use `data-...` attributes instead of `cx` for conditional classnames (isSelected, ...)
  - ⚠️ don't forget the `data-focused` state (keyboard selection) ⚠️
  - replace `classnames` by `tailwind-merge` for merging with `className` property
  - don't hesitate to override the `className` property provided by `react-aria-component` with `className?: string` as with `tailwindCss` & react-aria's `data-...` attributes we shouldn't need state-dependant classNames
- don't use the ~~`zinc`~~ color but `gray` instead
- for background colors:
  - replace ~~`white`~~ by `bg-th` (and `hover:bg-th-hover` when needed)
  - replace ~~`dark:bg-gray-900`~~ by `dark:bg-th-dark` (and `dark:hover:bg-th-dark-hover` when needed)
- for text colors:
  - replace ~~`text-gray-500`~~ by `text-th`
  - replace ~~`dark:text-gray-400`~~ by `dark:text-th-dark`
- for border colors:
  - replace ~~`border-gray-700`~~ by `border-th`
  - replace ~~`dark:border-gray-300`~~ by `dark:border-th-dark`
- for primary colors:
  - `...-th-primary` & `dark:...-th-dark-primary`
- for sizes (width & height)
  - replace ~~`w-4 h-4`~~ by `w-icon h-icon`
  - replace ~~`h-9`~~ by `h-input`
- for opacity
  - replace ~~`opacity-40`~~ by `opacity-disabled`
