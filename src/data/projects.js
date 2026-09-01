import { Server, BarChart3, Cpu } from 'lucide-react';

export const projectsData = [
  {
    id: 'switch-collector',
    title: 'Unified Switch Collector',
    icon: Server,
    metric: {
      target: 255,
      label: 'Tests Passed',
      colorClass: 'project-metric--green',
    },
    statusBadge: null,
    tags: ['Python', 'Netmiko', 'Pytest (255 tests)', 'ArubaOS-CX', 'Jira CMDB', 'PyInstaller'],
    details: {
      problem:
        'Auditing serial numbers, hardware fan health, PoE budgets, and VSF stack chassis across an enterprise switch fleet meant repeated manual CLI sessions, with a real risk of account lockouts mid-audit.',
      solution:
        'A multi-OS Python engine with automatic ArubaOS-S / ArubaOS-CX syntax fallback, physical VSF member unrolling, fan degradation alerts, fail-fast RADIUS/TACACS security checks, and a 16-field Jira Assets (CMDB) export.',
      result:
        'Produces timestamped Excel workbooks and RFC-4180 CSVs ready for Jira bulk import, backed by 255 automated tests and a zero-install portable Windows distribution.',
    },
    repoUrl: 'https://github.com/mriazh/Switch-Collector',
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
    statusBadge: null,
    tags: ['Python', 'RouterOS API', 'SQLite WAL', 'FastAPI', 'Matplotlib', 'WhatsApp Alert'],
    details: {
      problem:
        'SNMP-over-UDP polling is lossy, offers no granular time-series storage, and gives no real-time notification when a WAN link drops.',
      solution:
        'High-frequency RouterOS API polling over a dedicated TCP tunnel, embedded SQLite WAL time-series storage, authentic RRDtool logarithmic autoscale graphing with nice_ceiling, and an authenticated FastAPI dashboard.',
      result:
        'Delivers granular bandwidth telemetry across sub-15m to 30d windows, exportable to PNG, Excel, and CSV, with self-healing tunnel watchdogs and instant WhatsApp downtime alerts.',
    },
    repoUrl: 'https://github.com/mriazh/MRTG-CMP',
  },
  {
    id: 'mrtg-telkomcare-report-automation',
    title: 'MRTG TelkomCare Report Automation',
    icon: Cpu,
    metric: {
      target: 'Dual',
      label: 'OCR + Gemini AI',
      colorClass: 'project-metric--blue',
      isText: true,
    },
    statusBadge: null,
    tags: ['Python', 'PaddleOCR', 'Gemini Vision API', 'PySide6', 'Selenium', 'openpyxl'],
    details: {
      problem:
        'Compiling monthly SLA bandwidth reports required manual portal logins, CAPTCHA solving, graph scraping, and hand-transcribing visual legends across dozens of circuits.',
      solution:
        'An end-to-end automation pipeline with automated CAPTCHA resolution, Google Authenticator TOTP injection, local PaddleOCR extraction, and a multimodal Gemini Vision fallback for low-confidence legend values.',
      result:
        'Generates formatted monthly Excel workbooks in unattended runs, packaged as a standalone desktop GUI with an Inno Setup installer and portable releases.',
    },
    repoUrl: 'https://github.com/mriazh/MRTG-TelkomCare-Report-Automation',
  },
];