import { useState, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectsData, projectCategories } from '../data/projects';
import CountUp from './CountUp';

function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [titleProjRef, titleProjVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [filterRef, filterVis] = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });
  const [listRef, listVis] = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section section--dark" aria-labelledby="projects-title">
      <div className="section-inner">
        <h2 ref={titleProjRef} id="projects-title" className={`section-title ${titleProjVis ? 'reveal' : ''}`}>Curated Projects</h2>

        <div ref={filterRef} className={`project-filters ${filterVis ? 'reveal' : ''}`} role="tablist" aria-label="Project categories">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`panel-${cat.id}`}
              className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div ref={listRef} className="projects-list" role="tabpanel" id={`panel-${activeCategory}`} aria-label={`${activeCategory} projects`}>
          {filteredProjects.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                className={`project-card spotlight-card ${listVis ? 'reveal' : ''}`}
                style={{ transitionDelay: listVis ? '0ms' : `${idx * 180}ms` }}
                onMouseEnter={handleMouseMove}
                onMouseMove={handleMouseMove}
              >
                <div className={`project-metric ${project.metric.colorClass}`}>
                  {project.metric.isText ? (
                    <span className="number">{project.metric.target}</span>
                  ) : (
                    <CountUp target={project.metric.target} />
                  )}
                  <div className="label">{project.metric.label}</div>
                </div>
                <div className="project-body">
                  <div className="project-card-head">
                    <h3>
                      <ProjectIcon className="project-icon" aria-hidden="true" /> {project.title}
                    </h3>
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-details">
                    {project.details ? (
                      <>
                        <p><strong>Problem:</strong> {project.details.problem}</p>
                        <p><strong>Solution:</strong> {project.details.solution}</p>
                        <p><strong>Result:</strong> {project.details.result}</p>
                      </>
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Repository →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}