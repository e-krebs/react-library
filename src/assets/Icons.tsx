import { type SVGProps } from 'react';

const icons = ['minus', 'plus', 'check', 'chevron-down', 'x'] as const;

export interface IconProps extends SVGProps<SVGSVGElement> {
  id: (typeof icons)[number];
}

export const Icons = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <symbol
      id="icon-minus"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </symbol>
    <symbol
      id="icon-plus"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </symbol>
    <symbol
      id="icon-check"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </symbol>
    <symbol
      id="icon-chevron-down"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </symbol>
    <symbol
      id="icon-x"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </symbol>
  </svg>
);

export const Icon = ({ id, width, height, ...props }: IconProps) => (
  <svg width={24} height={24} {...props}>
    <use href={`#icon-${id}`} />
  </svg>
);
