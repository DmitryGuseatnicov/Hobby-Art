import React from 'react';

const scrollToTop = () => {
  document.querySelector('html')?.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollTo = (position: number) => {
  document.querySelector('html')?.scrollTo({ top: position, behavior: 'smooth' });
};

const scrollToAnchor = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

export { scrollToTop, scrollToAnchor, scrollTo };
