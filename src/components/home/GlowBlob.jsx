import React, { useEffect, useRef } from 'react';

const GlowBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
        const { clientX, clientY } = event;
        const blobWidth = blobRef.current.offsetWidth;
        const blobHeight = blobRef.current.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
  
        // Calculate adjusted positions to keep blob within viewport
        let adjustedX = clientX;
        let adjustedY = clientY;
  
        if (clientX + blobWidth / 2 > windowWidth) {
          adjustedX = windowWidth - blobWidth / 2;
        }
        if (clientY + blobHeight / 2 > windowHeight) {
          adjustedY = windowHeight - blobHeight / 2;
        }
  
        if (blobRef.current) {
          blobRef.current.style.left = `${adjustedX}px`;
          blobRef.current.style.top = `${adjustedY}px`;
        }
    };

    document.addEventListener('pointermove', handlePointerMove);

    return () => {
        document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      style={{
        position: 'fixed',
        aspectRatio: '1',
        left: '50%',
        top: '50%',
        height: '25vmax',
        backgroundColor: 'white',
        background: 'linear-gradient(to right, green, blue)',
        animation: 'rotate(20s, infinite)',
        borderRadius: '50%',
        pointerEvents: 'none',
        aspectRatio: '1',
        mixBlendMode: 'screen',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(10vmax)',
      }}
    ></div>
  );
};

export default GlowBlob;
