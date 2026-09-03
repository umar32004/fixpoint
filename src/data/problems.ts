import {
  EarOff,
  Cable,
  Scale,
  Volume1,
  Radio,
  VolumeX,
  Plug,
  BatteryCharging,
  PackageSearch,
  BatteryLow,
  BatteryWarning,
  OctagonX,
  Bluetooth,
  Unlink,
  Mic,
  PhoneOff,
  Fingerprint,
  ToggleLeft,
  Droplets,
  ShieldAlert,
  Zap,
  PackageX,
  Power,
  PowerOff,
  Link2Off,
  Cpu,
  SearchCheck,
  type LucideIcon,
} from 'lucide-react'

/** Canonical options for the repair inquiry form's "Problem" field. */
export const PROBLEM_OPTIONS = [
  'Battery Problem',
  'Not Charging',
  'One Side Not Working',
  'No Sound',
  'Low Sound',
  'Bluetooth Problem',
  'Charging Case Problem',
  'Water Damage',
  'Touch/Button Problem',
  'Microphone Problem',
  'Physical Damage',
  'Other',
] as const

export type ProblemOption = (typeof PROBLEM_OPTIONS)[number]

interface ProblemEntry {
  name: string
  icon: LucideIcon
  /** Closest matching option in PROBLEM_OPTIONS, used to pre-fill the repair form. */
  formProblem: ProblemOption
}

export interface ProblemCategory {
  id: string
  title: string
  problems: ProblemEntry[]
}

export const problemCategories: ProblemCategory[] = [
  {
    id: 'sound',
    title: 'Sound & Audio',
    problems: [
      { name: 'Left / Right Earbud Not Working', icon: EarOff, formProblem: 'One Side Not Working' },
      { name: 'One Earbud Not Connecting', icon: Cable, formProblem: 'One Side Not Working' },
      { name: 'Sound Balance Issue', icon: Scale, formProblem: 'Low Sound' },
      { name: 'Low Volume', icon: Volume1, formProblem: 'Low Sound' },
      { name: 'Distorted / Crackling Sound', icon: Radio, formProblem: 'Low Sound' },
      { name: 'No Sound', icon: VolumeX, formProblem: 'No Sound' },
    ],
  },
  {
    id: 'charging-battery',
    title: 'Charging & Battery',
    problems: [
      { name: 'Charging Problem', icon: Plug, formProblem: 'Not Charging' },
      { name: 'Earbuds Not Charging', icon: BatteryCharging, formProblem: 'Not Charging' },
      { name: 'Charging Case Not Charging', icon: PackageSearch, formProblem: 'Charging Case Problem' },
      { name: 'Battery Draining Quickly', icon: BatteryLow, formProblem: 'Battery Problem' },
      { name: 'Poor Battery Backup', icon: BatteryWarning, formProblem: 'Battery Problem' },
      { name: 'Battery Failure', icon: OctagonX, formProblem: 'Battery Problem' },
      { name: 'Charging Pin / Contact Problem', icon: Zap, formProblem: 'Not Charging' },
    ],
  },
  {
    id: 'connectivity',
    title: 'Bluetooth & Connectivity',
    problems: [
      { name: 'Bluetooth / Pairing Problem', icon: Bluetooth, formProblem: 'Bluetooth Problem' },
      { name: 'Earbud Keeps Disconnecting', icon: Unlink, formProblem: 'Bluetooth Problem' },
      { name: 'Both Earbuds Not Pairing Together', icon: Link2Off, formProblem: 'Bluetooth Problem' },
    ],
  },
  {
    id: 'calls-controls',
    title: 'Calls & Controls',
    problems: [
      { name: 'Microphone / Calling Problem', icon: Mic, formProblem: 'Microphone Problem' },
      { name: 'Poor Call Quality', icon: PhoneOff, formProblem: 'Microphone Problem' },
      { name: 'Touch Controls Not Working', icon: Fingerprint, formProblem: 'Touch/Button Problem' },
      { name: 'Button / Control Problem', icon: ToggleLeft, formProblem: 'Touch/Button Problem' },
    ],
  },
  {
    id: 'physical-power',
    title: 'Physical, Power & Software',
    problems: [
      { name: 'Water / Moisture Damage', icon: Droplets, formProblem: 'Water Damage' },
      { name: 'Physical Damage', icon: ShieldAlert, formProblem: 'Physical Damage' },
      { name: 'Earbud Case Damage', icon: PackageX, formProblem: 'Physical Damage' },
      { name: 'Earbud Not Turning On', icon: Power, formProblem: 'Other' },
      { name: 'Earbud Not Turning Off', icon: PowerOff, formProblem: 'Other' },
      { name: 'Firmware / Software Related Issue', icon: Cpu, formProblem: 'Other' },
      { name: 'General Earbud Diagnosis', icon: SearchCheck, formProblem: 'Other' },
    ],
  },
]
