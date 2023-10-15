import React from 'react';

import { Icon, IconProps } from '../src/assets/Icons';

type Props = Omit<IconProps, 'id'>;

export const Minus = (props: Props) => <Icon id="minus" {...props} />;
export const Plus = (props: Props) => <Icon id="plus" {...props} />;
