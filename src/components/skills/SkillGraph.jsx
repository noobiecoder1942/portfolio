import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ForceGraph3D with no SSR
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false });
import SpriteText from 'three-spritetext';

const SkillsGraph = () => {
  const fgRef = useRef();

  useEffect(() => {
    const fg = fgRef.current;
    if (fg) {
      fg.d3Force('link').distance(link => {
        // Set custom distance based on nodes' groups
        return link.source.group === link.target.group ? 50 : 100;
      });
    }
  }, []);

  const data = {
    nodes: [
      { id: 'JavaScript', group: 1 },
      { id: 'React', group: 1 },
      { id: 'Node.js', group: 1 },
      { id: 'Express', group: 1 },
      { id: 'MongoDB', group: 2 },
      { id: 'HTML', group: 3 },
      { id: 'CSS', group: 3 },
      { id: 'GraphQL', group: 4 },
      // Add more skills
    ],
    links: [
      { source: 'JavaScript', target: 'React' },
      { source: 'JavaScript', target: 'Node.js' },
      { source: 'Node.js', target: 'Express' },
      { source: 'Node.js', target: 'MongoDB' },
      { source: 'React', target: 'GraphQL' },
      { source: 'HTML', target: 'CSS' },
      // Add more links
    ],
  };

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      nodeAutoColorBy="group"
      nodeLabel={node => node.id}
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={d => d.value * 0.001}
      nodeThreeObject={node => {
        const sprite = new SpriteText(node.id);
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      }}
    />
  );
};

export default SkillsGraph;
