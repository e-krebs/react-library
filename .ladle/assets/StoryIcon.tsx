import { type SVGProps } from 'react';

type Icons = 'github' | 'anchor' | 'aperture';

export interface StoryIconProps extends SVGProps<SVGSVGElement> {
  id: Icons[number];
}

const StoryIcon = ({ id, width = 24, height = 24, ...props }: StoryIconProps) => (
  <svg width={width} height={height} {...props}>
    <use href={`#icon-${id}`} />
  </svg>
);

export const Anchor = (props: Omit<StoryIconProps, 'id'>) => <StoryIcon {...props} id="anchor" />;
export const Aperture = (props: Omit<StoryIconProps, 'id'>) => <StoryIcon {...props} id="aperture" />;
export const GitHub = (props: Omit<StoryIconProps, 'id'>) => <StoryIcon {...props} id="github" />;
