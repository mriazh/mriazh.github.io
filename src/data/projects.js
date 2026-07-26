import { BarChart3, Wifi, Rocket } from 'lucide-react';

export const projectsData = [
  {
    id: 'mrtg-report-automation',
    title: 'MRTG TelkomCare Report Automation',
    icon: BarChart3,
    metric: {
      target: 'E2E',
      label: 'Full Pipeline',
      colorClass: 'project-metric--yellow',
    },
    statusBadge: null,
    tags: ['Python', 'PySide6', 'PaddleOCR', 'Gemini', 'openpyxl'],
    details: {
      problem: 'Collecting TelkomCare MRTG graphs, extracting bandwidth values, and compiling monthly Excel reports was repetitive and time-consuming.',
      solution: 'An end-to-end Python pipeline that supports authenticated portal login, persistent sessions, graph scraping, image validation, PaddleOCR-based extraction, Gemini fallback or optional validation, and formatted Excel report generation.',
      result: 'When the required environment configuration and API credentials are available, the workflow supports unattended execution from login through final report generation. It also supports retries, resume-on-failure, GUI/CLI workflows, and packaged distribution.',
    },
    repoUrl: 'https://github.com/mriazh/MRTG-TelkomCare-Report-Automation',
  },
  {
    id: 'wac-huawei-crawler',
    title: 'WAC Huawei LLDP Crawler',
    icon: Wifi,
    metric: {
      target: 451,
      label: 'APs Crawled',
      colorClass: 'project-metric--green',
    },
    statusBadge: null,
    tags: ['Python', 'SSH', 'Paramiko', 'Huawei'],
    details: {
      problem: 'Manually checking LLDP neighbors on 451 Access Points via SSH is impossible to do by hand — would take days.',
      solution: 'Automated SSH crawler that connects to Huawei WAC, stelnet into each AP, extracts LLDP data, maps neighbors to switch IPs, and outputs CSV.',
      result: 'Full AP-to-Switch mapping in one run. Auto-reconnect, resume after interruption, and zero config changes (read-only).',
    },
    repoUrl: 'https://github.com/mriazh/Automated-WAC-Huawei-Crawl-Data',
  },
  {
    id: 'gmf-cmp-automation',
    title: 'GMF CMP Automation',
    icon: Rocket,
    metric: {
      target: 'Dev',
      label: 'In Progress',
      colorClass: 'project-metric--blue',
      isText: true,
    },
    statusBadge: 'Active Development',
    tags: ['Python', 'Playwright', 'IMAP', 'Excel'],
    description: 'A Python and Playwright workflow that automates CMP portal login, IMAP-based OTP retrieval, product export, dashboard capture, and Excel report generation.',
    repoUrl: 'https://github.com/mriazh/GMF-CMP-Automation',
  },
];
