import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillsData } from '../data/skills';

function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
}

export default function SkillsSection() {
  const [titleSkillsRef, titleSkillsVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [skillRef1, skillVis1] = useScrollReveal();
  const [skillRef2, skillVis2] = useScrollReveal();
  const [skillRef3, skillVis3] = useScrollReveal();
  const [skillRef4, skillVis4] = useScrollReveal();

  const skillRefs = [
    { ref: skillRef1, vis: skillVis1, delay: '0ms' },
    { ref: skillRef2, vis: skillVis2, delay: '180ms' },
    { ref: skillRef3, vis: skillVis3, delay: '360ms' },
    { ref: skillRef4, vis: skillVis4, delay: '540ms' },
  ];

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-inner">
        <h2 ref={titleSkillsRef} id="skills-title" className={`section-title ${titleSkillsVis ? 'reveal' : ''}`}>Tech Arsenal</h2>
        <div className="skills-bento">
          {skillsData.map((category, idx) => {
            const { ref, vis } = skillRefs[idx];
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                ref={ref}
                className={`neo-card skill-card spotlight-card ${category.cardClass} ${vis ? 'reveal' : ''}`}
                style={{ transitionDelay: `${idx * 180}ms` }}
                onMouseMove={handleMouseMove}
              >
                <div className="skill-card-header">
                  <h3>
                    <CategoryIcon className="skill-icon" aria-hidden="true" /> {category.title}
                  </h3>
                  <span className={`skill-card-badge ${category.badgeDark ? 'skill-card-badge--dark' : ''}`}>
                    {category.badge}
                  </span>
                </div>
                <ul className="skill-list">
                  {category.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.text}>
                        <ItemIcon className="list-icon" aria-hidden="true" /> {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}