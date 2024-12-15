import { $ } from 'bun';

await Promise.all([$`bun run dev:library`, $`bun run dev:doc`]);
