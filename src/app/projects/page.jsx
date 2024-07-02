import React from 'react'
import NavBar from '@/components/NavBar';
import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects';

const Projects = () => {
    return (
        <>
          <main className="bg-light dark:bg-dark w-full min-h-screen">
            <NavBar />
            <div className="bg-light dark:bg-dark w-full h-[calc(100vh-6rem)]">
              <div className="text-center w-full text-4xl pt-5 pb-10 mt-5 mb-5">
                Featured Projects
              </div>
              <FeaturedProjects />
              <div className="text-center w-full text-4xl pt-5 pb-5 mt-5">
                Other Projects
              </div>
              <OtherProjects />
            </div>
            
          </main>
        </>
      );
}

export default Projects;