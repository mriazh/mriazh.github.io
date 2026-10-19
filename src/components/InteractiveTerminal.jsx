import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const COMMANDS = {
  help: {
    description: 'Available commands:',
    output: [
      '  whoami    — Bio, roles, and current focus',
      '  projects  — List 4 flagship projects with metrics',
      '  skills    — Technical stack by category',
      '  metrics   — Live operational statistics',
      '  contact   — Email, LinkedIn, GitHub, Instagram',
      '  clear     — Clear terminal history',
      '  help      — Show this help message',
    ],
  },
  whoami: {
    description: 'Identity & Roles',
    output: [
      '  Network Support Engineer | Automation, Infrastructure & Applied AI',
      '  Organization: GMF AeroAsia (Aviation Campus/Hangar Infrastructure)',
      '  ',
      '  Core Strengths:',
      '  • Production headless daemons on Debian (systemd, Playwright, GOWA)',
      '  • 24/7 network observability & RouterOS API telemetry (SQLite WAL)',
      '  • Enterprise multi-vendor switch auditing (ArubaOS-CX 8400, 328 tests)',
      '  • Upstream Go contributor (9router-go: SSRF dialer, SQLite compaction)',
      '  • Applied AI & Computer Vision (PaddleOCR + Gemini Vision fallback)',
    ],
  },
  projects: {
    description: 'Flagship Projects',
    output: [
      '  [01 // ORCHESTRATION] Network-Daily-Report-Automation',
      '       Master 24/7 infra orchestrator on Debian. Aggregates Telkomsel M2M,',
      '       TelkomCare MRTG, Aruba AirWave, Huawei APs, Orbit modems →',
      '       daily Excel + WhatsApp via GOWA. Metric: 24/7 | Systemd Host',
      '       ',
      '  [02 // OBSERVABILITY] MRTG-CMP',
      '       24/7 full-stack network telemetry. RouterOS API (TCP 8728) +',
      '       18 TelkomCare branches + 12 Orbit modems. SQLite WAL, RRD graphs,',
      '       Leaflet map. Metric: API | RouterOS Polling',
      '       ',
      '  [03 // AUDIT & CMDB] Switch-Collector',
      '       Enterprise ArubaOS-S/CX 8400 audit. Serials, fan health, PoE,',
      '       Huawei LLDP neighbors → 16-field Jira CMDB export. 328 pytest tests.',
      '       Portable Windows .exe. Metric: 328 | Tests Passing',
      '       ',
    '  [04 // OPEN SOURCE] 9router-go (Active Core Contributor)',
    '       High-concurrency AI/LLM proxy router in Go. 26+ commits merged',
    '       upstream and ongoing: SSRF-safe dialers, distributed tracing,',
    '       SQLite retention & compaction, multi-provider protocol',
    '       translations, and multi-account quota isolation.',
    ],
  },
  skills: {
    description: 'Technical Stack',
    output: [
      '  NETWORKING & INFRASTRUCTURE:',
      '    MikroTik (RouterOS API), Huawei, Cisco, Linux (Debian), FTTH/GPON, Wireless',
      '  ',
      '  PROGRAMMING & BACKEND:',
      '    Go (Golang), Python, FastAPI, SQLite WAL, Pytest',
      '  ',
      '  AUTOMATION & AI TOOLING:',
      '    Playwright, Selenium, Paramiko, PaddleOCR, Gemini Vision API, PySide6',
      '  ',
      '  WEB & TOOLING:',
      '    React 19, JavaScript, Git/GitHub, Excel Automation (OpenPyXL), Vite, PyInstaller',
    ],
  },
  metrics: {
    description: 'Live Operational Statistics',
    output: [
      '  328+     Pytest Suites Passing (Switch-Collector & daemons)',
      '  24/7     Debian Headless Daemons (systemd automation)',
      '  150 Mbps RouterOS API Telemetry (MRTG-CMP live link)',
      '  100%     Automated Daily SLA (Zero Manual Interventions)',
    ],
  },
  contact: {
    description: 'Contact Channels',
    output: [
      '  Email:       mriyadhazhar@gmail.com',
      '  LinkedIn:    https://linkedin.com/in/mriazh',
      '  GitHub:      https://github.com/mriazh',
      '  Instagram:   https://instagram.com/rapzzzzy',
      '  ',
      '  Open to discussions on Network Automation, Applied AI & Infrastructure Tooling',
    ],
  },
  clear: {
    description: '',
    output: [],
    action: 'clear',
  },
};

const QUICK_COMMANDS = ['whoami', 'projects', 'metrics', 'contact'];

export default function InteractiveTerminal() {
  const [termRef, termVis] = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const [history, setHistory] = useState([
    { type: 'welcome', content: 'Welcome to Infrastructure Console v3.2.1' },
    { type: 'welcome', content: 'Type "help" for available commands or click a quick-chip below.' },
    { type: 'prompt', input: '', output: [] },
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const isProcessing = useRef(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd) => {
    if (isProcessing.current) return;
    isProcessing.current = true;

    const command = cmd.toLowerCase().trim();
    const commandData = COMMANDS[command] || {
      description: `Command not found: ${command}`,
      output: ['  Type "help" for available commands.'],
    };

    const newEntry = {
      type: 'command',
      input: command,
      output: commandData.output,
      description: commandData.description,
    };

    if (commandData.action === 'clear') {
      setHistory([
        { type: 'welcome', content: 'Welcome to Infrastructure Console v3.2.1' },
        { type: 'welcome', content: 'Type "help" for available commands or click a quick-chip below.' },
      ]);
    } else {
      setHistory((prev) => [...prev.slice(0, -1), newEntry, { type: 'prompt', input: '', output: [] }]);
    }

    if (command && command !== 'clear') {
      setCommandHistory((prev) => {
        const filtered = prev.filter((c) => c !== command);
        return [...filtered, command].slice(-50);
      });
    }
    setHistoryIndex(-1);

    setInputValue('');
    isProcessing.current = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      executeCommand(inputValue.trim());
    }
  };

  const handleQuickCommand = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInputValue('');
        } else {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <section ref={termRef} className={`interactive-terminal terminal-window ${termVis ? 'reveal' : ''}`} aria-label="Interactive Infrastructure Terminal">
      <div className="terminal-header">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot close" aria-hidden="true" />
            <span className="dot minimize" aria-hidden="true" />
            <span className="dot maximize" aria-hidden="true" />
          </div>
          <span className="terminal-title">arap@infrastructure-host:~$</span>
        </div>
      </div>
      <div className="terminal-body" ref={terminalRef} role="log" aria-live="polite" aria-atomic="false">
        {history.map((entry, idx) => (
          <div key={idx} className={`terminal-line ${entry.type}`}>
            {entry.type === 'welcome' && (
              <span className="welcome-text">{entry.content}</span>
            )}
            {entry.type === 'command' && (
              <>
                <div className="command-block">
                  <span className="prompt-prefix">$</span>
                  <span className="command-input">{entry.input}</span>
                </div>
                {entry.description && <div className="command-description">{entry.description}</div>}
                {entry.output.map((line, li) => (
                  <div key={li} className="output-line">{line}</div>
                ))}
              </>
            )}
            {entry.type === 'prompt' && (
              <form onSubmit={handleSubmit} className="prompt-form">
                <span className="prompt-prefix" aria-hidden="true">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-input"
                  placeholder="Type command..."
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal command input"
                />
                <span className="cursor" aria-hidden="true">▊</span>
              </form>
            )}
          </div>
        ))}
      </div>
      <div className="terminal-chips" role="group" aria-label="Quick commands">
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            className="quick-chip"
            onClick={() => handleQuickCommand(cmd)}
            aria-label={`Run ${cmd} command`}
          >
            [{cmd}]
          </button>
        ))}
      </div>
    </section>
  );
}
