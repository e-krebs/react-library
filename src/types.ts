import { FC, SVGAttributes } from 'react';

export type InputBorder = 'none' | 'bottom' | 'rounded';
export type InputFlow = 'col' | 'row';
export type InputWidth = 'xs' | 's' | 'm' | 'l' | 'xl';

export type IconComponent = FC<SVGAttributes<SVGElement>>;
