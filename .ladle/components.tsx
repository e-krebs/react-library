import type { GlobalProvider } from "@ladle/react";
import React from 'react';
import { GitHub } from 'react-feather';
import shadow from 'react-shadow';


import tailwindCss from '../src/tailwind.css?inline';
import './stories.css';

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <header className="flex justify-between w-full mx-auto">
      <h1>React library</h1>
      <a
        href="https://github.com/e-krebs/react-library"
        target="_blank"
        title="GitHub repository"
        className="flex justify-center items-center mt-1.5 w-10 h-10"
      >
        <GitHub className="w-6 h-6" />
      </a>
    </header>
    <shadow.section>
      <style type="text/css">{tailwindCss}</style>
      {children}
    </shadow.section>
  </>
);
