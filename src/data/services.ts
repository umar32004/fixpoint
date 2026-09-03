import {
  BatteryCharging,
  Plug,
  EarOff,
  VolumeX,
  Bluetooth,
  PackageSearch,
  Droplets,
  Fingerprint,
  Mic,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'battery-replacement',
    title: 'Battery Replacement',
    description:
      'Diagnosis and replacement for earbuds that no longer hold a charge or drain unusually fast.',
    icon: BatteryCharging,
  },
  {
    id: 'charging-problems',
    title: 'Charging Problems',
    description:
      'Troubleshooting for earbuds or cases that won’t charge, charge intermittently, or won’t power on.',
    icon: Plug,
  },
  {
    id: 'one-earbud',
    title: 'One Earbud Not Working',
    description:
      'Diagnosis for a single earbud that has gone silent, disconnected, or stopped responding.',
    icon: EarOff,
  },
  {
    id: 'no-low-sound',
    title: 'No Sound / Low Sound',
    description:
      'Inspection of speaker drivers and audio paths for muffled, quiet, or missing sound.',
    icon: VolumeX,
  },
  {
    id: 'bluetooth-connectivity',
    title: 'Bluetooth & Connectivity Issues',
    description:
      'Support for pairing failures, dropped connections, and unstable Bluetooth performance.',
    icon: Bluetooth,
  },
  {
    id: 'charging-case',
    title: 'Charging Case Problems',
    description:
      'Repair support for cases with faulty lids, indicator lights, or internal charging circuits.',
    icon: PackageSearch,
  },
  {
    id: 'water-damage',
    title: 'Water / Moisture Damage',
    description:
      'Careful inspection and cleaning for earbuds exposed to sweat, rain, or accidental submersion.',
    icon: Droplets,
  },
  {
    id: 'button-touch',
    title: 'Button / Touch Issues',
    description:
      'Diagnosis for unresponsive touch controls, physical buttons, or misbehaving tap gestures.',
    icon: Fingerprint,
  },
  {
    id: 'microphone',
    title: 'Microphone Problems',
    description:
      'Troubleshooting for call quality issues, muffled mic audio, or non-functioning microphones.',
    icon: Mic,
  },
  {
    id: 'general-diagnostics',
    title: 'General Earbud Diagnostics',
    description:
      'Not sure what’s wrong? We’ll inspect your earbuds and identify the actual fault.',
    icon: Stethoscope,
  },
]
