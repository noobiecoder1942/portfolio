"use client";

import React from 'react';
import HighlightContent from './HighlightContent';
import SecondaryContent from './SecondaryContent';

const Hero = () => {
  return (
    <div className="text-dark bg-light dark:bg-dark dark:text-light flex w-full h-[calc(100vh-6rem)]">
      <div className="flex flex-1 items-center justify-end h-full">
        <HighlightContent />
      </div>
      <div className="bg-dark dark:bg-light w-1"></div>
      <div className="flex flex-1 items-center h-full">
        <SecondaryContent />
      </div>
    </div>
  )
};

export default Hero;