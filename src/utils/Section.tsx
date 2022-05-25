import { FC, PropsWithChildren } from 'react';

import { InfoControls } from './InfoControls';

interface SectionProps {
  title: string;
  showInfoControls?: boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  title,
  showInfoControls: infoControls,
  children,
}) => (
  <section className="space-y-6">
    <h1>{title}</h1>
    {infoControls && <InfoControls />}
    {children}
  </section>
);
