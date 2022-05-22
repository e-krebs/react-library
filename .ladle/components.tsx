import type { GlobalProvider } from "@ladle/react";

import './stories.css';

export const Provider: GlobalProvider = ({ children }) => (
  <main className='prose dark:prose-invert'>
    {children}
  </main>
);
