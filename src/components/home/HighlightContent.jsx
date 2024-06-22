"use client";

import React, { useRef, useEffect } from 'react'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HighlightContent = () => {

    const contentRef = useRef(null);
    const engineerRef = useRef(null);
    const developerRef = useRef(null);
    const coderRef = useRef(null);

    useEffect(() => {
        const handleMouseOver = () => {
          [engineerRef.current, developerRef.current, coderRef.current].forEach((element) => {
            let iteration = 0;
            const originalText = element.dataset.value;
    
            clearInterval(element.interval);
    
            element.interval = setInterval(() => {
              element.innerText = originalText
                .split("")
                .map((letter, index) => {
                  if (index < iteration) {
                    return originalText[index];
                  }
                  return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
    
              if (iteration >= originalText.length) {
                clearInterval(element.interval);
              }
    
              iteration += 1 / 3;
            }, 30);
          });
        };

        const ContentElement = contentRef.current;

        if (ContentElement) {
            ContentElement.addEventListener('mouseover', handleMouseOver);
        }
    
        // Cleanup event listeners on component unmount
        return () => {
        //   if (ContentElement) {
        //     ContentElement.removeEventListener('mouseover', handleMouseOver);
        //   }
        };
      }, []);


  return (
    <div ref={contentRef} className="flex-1 p-4 flex flex-col justify-center items-end">
        <span ref={engineerRef} data-value="ENGINEER." className="mb-2 text-7xl">ENGINEER.</span>
        <span ref={developerRef} data-value="DEVELOPER." className="mb-2 mt-2 text-7xl">DEVELOPER.</span>
        <span ref={coderRef} data-value="CODER." className="mt-2 text-7xl">CODER.</span>
  </div>
  )
}

export default HighlightContent;