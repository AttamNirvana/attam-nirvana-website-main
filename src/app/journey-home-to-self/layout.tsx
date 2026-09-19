import { notFound } from 'next/navigation'
import { EVENT_ENABLED } from '@/lib/eventConfig'

/** Hides /journey-home-to-self, /register and /confirmed (404) while
 *  EVENT_ENABLED is false in src/lib/eventConfig.ts. */
export default function EventLayout({ children }: { children: React.ReactNode }) {
  if (!EVENT_ENABLED) notFound()
  return <>{children}</>
}
