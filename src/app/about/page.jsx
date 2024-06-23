"use client";

import NavBar from '@/components/NavBar';
import SkillGraph from '@/components/skills/SkillGraph';
import React from 'react';

const About = () => {
  return (
    <>
      <main className="bg-light dark:bg-dark w-full min-h-screen">
        <NavBar />
        <SkillGraph />
      </main>
    </>
  );
};

export default About;
