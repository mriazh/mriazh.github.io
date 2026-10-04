import { useState, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function TelemetryBar() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <header className="telemetry-bar" role="banner" aria-label="System telemetry">
      <div className="telemetry-inner">
        <div className="telemetry-sys">
          <span className="sys-tag">SYS://</span>
          <span className="sys-env">DEBIAN 13 • GO • PYTHON • FASTAPI • ROUTEROS API</span>
        </div>
        <div className="telemetry-center" aria-live="polite">
          <span className="clock-label">WIB</span>
          <time className="jakarta-clock" dateTime={new Date().toISOString()}>{time}</time>
          <span className="clock-tz">UTC+7</span>
        </div>
        <div className="telemetry-status">
          <span className="status-pulse" aria-hidden="true" />
          <span className="status-text">SYSTEM STATUS: ALL DAEMONS OPERATIONAL</span>
        </div>
      </div>
    </header>
  );
}