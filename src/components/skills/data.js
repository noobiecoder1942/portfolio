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