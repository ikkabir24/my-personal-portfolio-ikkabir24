import { ExternalLink, Github } from 'lucide-react';
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 min-h-100'>
            <div className="relative h-45 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-scale-down'
                />

                <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    {project.liveURL && (
                        <a
                            target='_blank'
                            href={project.liveURL}
                            rel='noopener noreferrer'
                            className='p-2.5 bg-black/60 backdrop-blur-md rounded-lg border border-primary/20 hover:bg-primary/90 hover:border-primary/50 transition-all duration-300 hover:scale-110'
                            title='View Demo'
                        >
                            <ExternalLink className='w-4 h-4 text-white' />
                        </a>
                    )}
                    {project.github && (
                        <a
                            target='_blank'
                            href={project.github}
                            rel='noopener noreferrer'
                            className='p-2.5 bg-black/60 backdrop-blur-md rounded-lg border border-primary/20 hover:bg-primary/90 hover:border-primary/50 transition-all duration-300 hover:scale-110'
                            title='View Code'
                        >
                            <Github className='w-4 h-4 text-white' />
                        </a>
                    )}
                </div>

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-black/60 backdrop-blur-sm border border-white/20 rounded-full">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-4 space-y-4 text-left">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Expandable description */}
                    <p
                        className={`text-sm text-white/60 leading-relaxed transition-all duration-300 ${expanded ? '' : 'line-clamp-2'}`}
                    >
                        {project.description}
                    </p>
                    {project.description?.length > 100 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="mt-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            {expanded ? 'Show less' : 'Read more'}
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;