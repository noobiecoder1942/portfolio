import React, { useEffect, useRef } from 'react';

const GlowBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      
      if (blobRef.current) {
        blobRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: 'forwards' });
      }
    };

    const contentElement = document.getElementById('highlight-content');

    if (contentElement) {
        contentElement.addEventListener('pointermove', handlePointerMove);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('pointermove', handlePointerMove);
      }
    };
  }, []);

  return (
    <div
      ref={blobRef}
      style={{
        position: 'absolute',
        aspectRatio: '1',
        left: '50%',
        top: '50%',
        height: '34vmax',
        backgroundColor: 'white',
        background: 'linear-gradient(to right, aquamarine, mediumpurple)',
        animation: 'rotate(20s, infinite)',
        borderRadius: '50%',
        // pointerEvents: 'none',
        aspectRatio: '1',
        mixBlendMode: 'screen',
        transform: 'translate(-50%, -50%)',
      }}
    ></div>
  );
};

export default GlowBlob;
