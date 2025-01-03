import type { GlobalProvider } from '@ladle/react';
import React, { PropsWithChildren } from 'react';

import { ThemeSelector } from './ThemeSelector';
import { GitHub } from './assets/StoryIcon';

import '../src/tailwind.css';
import './stories.css';

export const Provider: GlobalProvider = ({ children }: PropsWithChildren) => (
  <>
    <header className="mx-auto flex w-full justify-between">
      <h1>React library</h1>
      <a
        href="https://github.com/e-krebs/react-library"
        target="_blank"
        rel="noreferrer"
        title="GitHub repository"
        className="mt-1.5 flex h-10 w-10 items-center justify-center"
      >
        <GitHub className="h-6 w-6" />
      </a>
    </header>

    <section className="flex justify-end">
      <ThemeSelector />
    </section>

    <section>{children}</section>
  </>
);
