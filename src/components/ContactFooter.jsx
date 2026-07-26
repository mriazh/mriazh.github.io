import { Mail, Briefcase, GitBranch, Camera } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactFooter() {
  const [footerRef, footerVis] = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });

  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div ref={footerRef} className={`footer-inner ${footerVis ? 'reveal' : ''}`}>
        <h2 className="footer-title">Let's Optimize<br />Your Network.</h2>
        <p className="footer-subtitle">Always open to discussing networking, automation, or new opportunities.</p>
        <div className="footer-links">
          <a href="mailto:mriyadhazhar@gmail.com" className="footer-link">
            <Mail className="footer-icon" aria-hidden="true" /> Email
          </a>
          <a href="https://www.linkedin.com/in/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">
            <Briefcase className="footer-icon" aria-hidden="true" /> LinkedIn
          </a>
          <a href="https://github.com/mriazh" target="_blank" rel="noopener noreferrer" className="footer-link">
            <GitBranch className="footer-icon" aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.instagram.com/rapzzzzy" target="_blank" rel="noopener noreferrer" className="footer-link">
            <Camera className="footer-icon" aria-hidden="true" /> Instagram
          </a>
        </div>
        <p className="footer-copy">© 2026 M Riyadh Azhar. Built with React + Vite.</p>
      </div>
    </footer>
  );
}
