import React from 'react'
import NavBar from '@/components/NavBar';
import FeaturedProjects from './FeaturedProjects';

const Projects = () => {
    return (
        <>
          <main className="bg-light dark:bg-dark w-full min-h-screen">
            <NavBar />
            <FeaturedProjects />
          </main>
        </>
      );
}

export default Projects;