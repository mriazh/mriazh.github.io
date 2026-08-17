import { BarChart3, Wifi, Rocket } from 'lucide-react';

export const projectsData = [
  {
    id: 'mrtg-poncab',
    title: 'MRTG-Poncab',
    icon: BarChart3,
    metric: {
      target: 'API',
      label: 'RouterOS Polling',
      colorClass: 'project-metric--yellow',
      isText: true,
    },
    statusBadge: null,
    tags: ['Python', 'RouterOS API', 'SQLite', 'FastAPI', 'Matplotlib'],
    details: {
      problem: 'Tracking WAN bandwidth across useful historical windows without relying on SNMP can require separate collection, storage, and reporting tools.',
      solution: 'MRTG-Poncab polls RouterOS API counters, stores time-series traffic data in SQLite with WAL enabled, and serves an authenticated dashboard with flexible date ranges and autoscaled MRTG-style graphs.',
      result: 'Engineers can review current and historical traffic and export graphs or data as PNG, Excel, or CSV from one system.',
    },
    repoUrl: 'https://github.com/mriazh/MRTG-Poncab',
  },
  {
    id: 'automated-wac-huawei-crawl-data',
    title: 'Automated WAC Huawei Crawl Data',
    icon: Wifi,
    metric: {
      target: 'CSV',
      label: 'LLDP Mapping',
      colorClass: 'project-metric--green',
      isText: true,
    },
    statusBadge: null,
    tags: ['Python', 'PySide6', 'SSH', 'LLDP', 'Windows'],
    details: {
      problem: 'Collecting LLDP neighbor data across many managed access points through repeated SSH sessions is slow and error-prone.',
      solution: 'This PySide6 tool runs read-only LLDP queries through a Huawei WAC, resolves switch names to IP addresses, and writes AP-to-switch mappings to CSV.',
      result: 'Windows installer and portable releases support resumable crawls, SSH auto-reconnect, and graceful saves of partial results after interruption.',
    },
    repoUrl: 'https://github.com/mriazh/Automated-WAC-Huawei-Crawl-Data',
  },
  {
    id: 'gmf-cmp-automation',
    title: 'GMF CMP Automation',
    icon: Rocket,
    metric: {
      target: 31,
      label: 'Day Tabs',
      colorClass: 'project-metric--blue',
    },
    statusBadge: null,
    tags: ['Python', 'Playwright', 'Firefox', 'IMAPS', 'Excel'],
    details: {
      problem: 'Repeating the CMP Daily Usage Query, downloading the report, and updating the correct workbook day was a manual browser-and-Excel workflow.',
      solution: 'The automation uses a persistent Firefox profile with direct IMAPS OTP retrieval, follows the strict Daily Usage Query flow, exports XLSX, captures dashboard data, and updates the configured day tab.',
      result: 'Same-day reruns replace only that day, finite date ranges update each day independently, and an optional bounded VPN readiness boundary avoids implicit network changes.',
    },
    repoUrl: 'https://github.com/mriazh/GMF-CMP-Automation',
  },
];
