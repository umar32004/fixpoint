import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export interface RepairSelection {
  brand?: string
  model?: string
  problem?: string
  details?: string
}

interface RepairSelectionContextValue {
  selection: RepairSelection
  selectAndScroll: (next: RepairSelection) => void
}

const RepairSelectionContext = createContext<RepairSelectionContextValue | null>(null)

export function RepairSelectionProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<RepairSelection>({})

  const selectAndScroll = useCallback((next: RepairSelection) => {
    setSelection((prev) => ({ ...prev, ...next }))
    const target = document.getElementById('repair-form')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const value = useMemo(() => ({ selection, selectAndScroll }), [selection, selectAndScroll])

  return <RepairSelectionContext.Provider value={value}>{children}</RepairSelectionContext.Provider>
}

export function useRepairSelection() {
  const ctx = useContext(RepairSelectionContext)
  if (!ctx) throw new Error('useRepairSelection must be used within RepairSelectionProvider')
  return ctx
}
