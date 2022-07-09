import { FC } from 'react';

// import { Controls } from '@ladle/react/lib/app/src/icons';
const Controls: FC = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx={14} cy={6} r={2}></circle>
      <line x1={4} y1={6} x2={12} y2={6}></line>
      <line x1={16} y1={6} x2={20} y2={6}></line>
      <circle cx={8} cy={12} r={2}></circle>
      <line x1={4} y1={12} x2={6} y2={12}></line>
      <line x1={10} y1={12} x2={20} y2={12}></line>
      <circle cx={17} cy={18} r={2}></circle>
      <line x1={4} y1={18} x2={15} y2={18}></line>
      <line x1={19} y1={18} x2={20} y2={18}></line>
    </svg>
  );
};

export const InfoControls = () => (
  <p className="space-x-2 -space-y-px border-l-4 border-blue-500 pl-2">
    <span>You can change the input parameters using the controls icon below</span>
    <Controls />
  </p>
);
