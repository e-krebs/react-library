import { type SVGProps } from 'react';

type icons = readonly ['minus', 'plus', 'check', 'chevron-down', 'x'];

export interface IconProps extends SVGProps<SVGSVGElement> {
  id: icons[number];
}

export const Icon = ({ id, width = 24, height = 24, ...props }: IconProps) => (
  <svg width={width} height={height} {...props}>
    <use href={`#icon-${id}`} />
  </svg>
);
