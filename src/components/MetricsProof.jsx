import { useScrollReveal } from '../hooks/useScrollReveal';
import CountUp from './CountUp';

const metrics = [
  {
    target: 328,
    suffix: '+',
    label: 'Pytest Suites Passing',
    sublabel: 'Switch-Collector & Daemons',
    accentColor: 'var(--accent-primary)',
    iconClass: 'metric-icon--green',
  },
  {
    target: 190,
    suffix: '+',
    label: 'Hosts Monitored',
    sublabel: 'LibreNMS & PRTG Telemetry',
    accentColor: 'var(--accent-cyan)',
    iconClass: 'metric-icon--cyan',
  },
  {
    target: 150,
    suffix: ' Mbps',
    label: 'RouterOS API Telemetry',
    sublabel: 'MRTG-CMP Live Uplink',
    accentColor: 'var(--accent-blue)',
    iconClass: 'metric-icon--blue',
  },
  {
    target: 18,
    suffix: '+',
    label: 'TelkomCare Sites Audited',
    sublabel: 'Daily Cron & Health Checks',
    accentColor: 'var(--accent-amber)',
    iconClass: 'metric-icon--amber',
  },
];

function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
}

export default function MetricsProof() {
  const [titleRef, titleVis] = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });
  const [gridRef, gridVis] = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section className="metrics-proof" aria-labelledby="metrics-title">
      <div className="section-inner">
        <h2 ref={titleRef} id="metrics-title" className={`section-title ${titleVis ? 'reveal' : ''}`}>Live Production Proof</h2>
        <div className="metrics-grid" ref={gridRef} role="list">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`metric-card spotlight-card ${gridVis ? 'reveal' : ''} ${metric.iconClass}`}
              style={{ transitionDelay: `${idx * 180}ms` }}
              role="listitem"
              onMouseEnter={handleMouseMove}
              onMouseMove={handleMouseMove}
            >
              <div className="metric-icon" style={{ borderColor: metric.accentColor }} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: metric.accentColor }}>
                  {metric.iconClass === 'metric-icon--green' && (
                    <>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </>
                  )}
                  {metric.iconClass === 'metric-icon--cyan' && (
                    <>
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                    </>
                  )}
                  {metric.iconClass === 'metric-icon--blue' && (
                    <>
                      <path d="M21 12.79A9 9 0 1 1 14.21 3" />
                      <path d="M21 3v5h-5" />
                    </>
                  )}
                  {metric.iconClass === 'metric-icon--amber' && (
                    <>
                      <path d="M12 2v20" />
                      <path d="M2 12h20" />
                      <circle cx="12" cy="12" r="4" />
                    </>
                  )}
                </svg>
              </div>
              <div className="metric-value" style={{ color: metric.accentColor }}>
                <CountUp target={metric.target} suffix={metric.suffix} duration={1800} delay={idx * 200} />
              </div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-sublabel">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
