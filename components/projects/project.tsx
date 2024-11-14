import React from 'react';
import { ProjectCard } from '@/components/projects/project-card';

export const Project = () => {
  return (
    <ProjectCard
      title="Quinta dos Carvalhais"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum natus ipsa porro culpa quia quae sit ex corporis. Ducimus."
      imageLink="/logo-quinta-white.svg"
    >
      {/* Additional children content can go here if needed */}
    </ProjectCard>
  );
};
