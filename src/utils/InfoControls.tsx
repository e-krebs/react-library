import { Controls } from '@ladle/react/lib/app/src/icons';

export const InfoControls = () => (
  <p className="flex items-center space-x-2 pl-2 border-l-4 border-blue-500">
    <span>You can change the input parameters using the controls icon below</span>
    <Controls />
  </p>
);
