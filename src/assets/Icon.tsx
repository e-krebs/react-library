import { type SVGProps } from 'react';

const icons = ['minus', 'plus', 'check', 'chevron-down', 'x'] as const;

export interface IconProps extends SVGProps<SVGSVGElement> {
  id: (typeof icons)[number];
}

export const Icon = ({ id, width = 24, height = 24, ...props }: IconProps) => (
  <svg width={width} height={height} {...props}>
    <use href={`#icon-${id}`} />
  </svg>
);
