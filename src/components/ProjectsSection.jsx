import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectsData } from '../data/projects';
import CountUp from './CountUp';

export default function ProjectsSection() {
  const [titleProjRef, titleProjVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [projRef1, projVis1] = useScrollReveal();
  const [projRef2, projVis2] = useScrollReveal();
  const [projRef3, projVis3] = useScrollReveal();

  const projRefs = [
    { ref: projRef1, vis: projVis1, delay: '0ms' },
    { ref: projRef2, vis: projVis2, delay: '200ms' },
    { ref: projRef3, vis: projVis3, delay: '400ms' },
  ];

  return (
    <section id="projects" className="section section--dark" aria-labelledby="projects-title">
      <div className="section-inner">
        <h2 ref={titleProjRef} id="projects-title" className={`section-title ${titleProjVis ? 'reveal' : ''}`}>Featured Projects</h2>
        <div className="projects-list">
          {projectsData.map((project, idx) => {
            const { ref, vis, delay } = projRefs[idx];
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                ref={ref}
                className={`project-card ${vis ? 'reveal' : ''}`}
                style={{ transitionDelay: delay }}
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
                    {project.statusBadge && (
                      <span className="project-status">{project.statusBadge}</span>
                    )}
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
