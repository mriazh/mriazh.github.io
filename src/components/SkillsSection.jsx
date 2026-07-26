import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillsData } from '../data/skills';

export default function SkillsSection() {
  const [titleSkillsRef, titleSkillsVis] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [skillRef1, skillVis1] = useScrollReveal();
  const [skillRef2, skillVis2] = useScrollReveal();
  const [skillRef3, skillVis3] = useScrollReveal();

  const skillRefs = [
    { ref: skillRef1, vis: skillVis1, delay: '0ms' },
    { ref: skillRef2, vis: skillVis2, delay: '150ms' },
    { ref: skillRef3, vis: skillVis3, delay: '300ms' },
  ];

  return (
    <section id="skills" className="section section--yellow" aria-labelledby="skills-title">
      <div className="section-inner">
        <h2 ref={titleSkillsRef} id="skills-title" className={`section-title ${titleSkillsVis ? 'reveal' : ''}`}>Tech Arsenal</h2>
        <div className="skills-bento">
          {skillsData.map((category, idx) => {
            const { ref, vis, delay } = skillRefs[idx];
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                ref={ref}
                className={`neo-card skill-card ${category.cardClass} ${vis ? 'reveal' : ''}`}
                style={{ transitionDelay: delay }}
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
