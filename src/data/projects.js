import { Server, BarChart3, GitMerge, Cpu } from 'lucide-react';

export const projectsData = [
  {
    id: 'network-daily-report-automation',
    title: 'Network-Daily-Report-Automation',
    icon: Cpu,
    metric: {
      target: '24/7',
      label: 'Systemd Host',
      colorClass: 'project-metric--green',
    },
    category: 'automation',
    tags: ['Python', 'Playwright', 'OpenPyXL', 'Systemd', 'GOWA Gateway', 'Pytest'],
    details: {
      problem:
        'Aggregating daily telemetry across Telkomsel M2M CMP, TelkomCare MRTG, Aruba AirWave switches, Huawei APs, and Orbit modems required manual portal logins, CAPTCHA handling, and disjointed data formats — making consistent daily Excel workbooks and WhatsApp broadcasts unreliable.',
      solution:
        'A master orchestrator daemon on Debian (systemd) with Playwright scrapers for 18 TelkomCare branches + 12 Orbit modems, RouterOS API polling for MikroTik WAN uplinks, Huawei AP polling, and Aruba AirWave API integration. Automated Excel workbook assembly via OpenPyXL and WhatsApp broadcast via GOWA gateway. Full pytest suite with CI.',
      result:
        'Delivers automated daily Excel workbooks (multi-sheet: summary, circuits, switches, APs, modems) and technical WhatsApp broadcasts at 06:00 WIB daily. Zero manual intervention since deployment. Runs 24/7 on Debian host via systemd.',
    },
    repoUrl: 'https://github.com/mriazh/Network-Daily-Report-Automation',
  },
  {
    id: 'mrtg-cmp',
    title: 'MRTG-CMP',
    icon: BarChart3,
    metric: {
      target: 'API',
      label: 'RouterOS Polling',
      colorClass: 'project-metric--cyan',
      isText: true,
    },
    category: 'infrastructure',
    tags: ['FastAPI', 'RouterOS API', 'SQLite WAL', 'Matplotlib', 'Leaflet.js', 'Systemd'],
    details: {
      problem:
        'SNMP-over-UDP polling is lossy, offers no granular time-series storage, and gives no real-time notification when a WAN link drops across 18 TelkomCare branches and 12 Orbit modems.',
      solution:
        'High-frequency RouterOS API polling over dedicated TCP 8728 tunnels, embedded SQLite WAL time-series storage with WAL mode for concurrent readers, authentic RRDtool logarithmic autoscale graphing with nice_ceiling algorithm, authenticated FastAPI dashboard with Leaflet interactive map, and self-healing tunnel watchdogs.',
      result:
        'Delivers granular bandwidth telemetry across sub-15m to 30d windows, exportable to PNG, Excel, and CSV. Live web console with interactive map. Instant WhatsApp downtime alerts. Runs 24/7 as systemd services on Debian.',
    },
    repoUrl: 'https://github.com/mriazh/MRTG-CMP',
  },
  {
    id: 'switch-collector',
    title: 'Switch-Collector',
    icon: Server,
    metric: {
      target: 328,
      label: 'Tests Passing',
      colorClass: 'project-metric--green',
    },
    category: 'infrastructure',
    tags: ['Python', 'Netmiko', 'OpenPyXL', 'PyInstaller', 'Pytest (328 tests)', 'ArubaOS-CX'],
    details: {
      problem:
        'Auditing serial numbers, hardware fan health, PoE budgets, and VSF stack chassis across an enterprise ArubaOS-S / ArubaOS-CX 8400 fleet meant repeated manual CLI sessions, with a real risk of account lockouts mid-audit and no structured CMDB export.',
      solution:
        'Multi-OS Python engine with automatic ArubaOS-S / ArubaOS-CX syntax fallback, physical VSF member unrolling, fan degradation alerts, fail-fast RADIUS/TACACS security checks, Huawei LLDP neighbor extraction, and 16-field Jira Service Management Assets CMDB export. Zero-install portable Windows release via PyInstaller.',
      result:
        'Produces timestamped Excel workbooks and RFC-4180 CSVs ready for Jira bulk import, backed by 328 automated pytest tests. Portable Windows executable requires zero dependencies.',
    },
    repoUrl: 'https://github.com/mriazh/Switch-Collector',
  },
  {
    id: '9router-go',
    title: '9router-go (Contributor)',
    icon: GitMerge,
    metric: {
      target: 'Go',
      label: 'Upstream Core',
      colorClass: 'project-metric--blue',
      isText: true,
    },
    category: 'ai-go',
    tags: ['Go (Golang)', 'SQLite', 'Reverse Proxy', 'Security (SSRF)', 'Compaction'],
    details: {
      problem:
        'High-performance single-binary AI router needed production-grade SSRF protection for outbound dialing, database retention policies with automatic compaction to bound disk growth, and multi-account quota state isolation for fair usage.',
      solution:
        'Contributed upstream PR #284: SSRF-safe dialer with private CIDR blocking, DNS rebinding protection, and allowlist bypass. PR #286: SQLite retention storage profiles with configurable TTL, automatic background compaction, and WAL checkpoint tuning. Multi-account quota isolation with atomic state transitions.',
      result:
        'Merged into 9router-go core. SSRF dialer blocks 100% of private-range bypass attempts. Compaction reduces DB size by 60-80% under load. Quota isolation prevents noisy-neighbor starvation. Used in production AI routing clusters.',
    },
    repoUrl: 'https://github.com/luqman-v1/9router-go/',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'infrastructure', label: 'Infrastructure & Network' },
  { id: 'automation', label: 'Automated Daemons' },
  { id: 'ai-go', label: 'Go & AI Systems' },
];