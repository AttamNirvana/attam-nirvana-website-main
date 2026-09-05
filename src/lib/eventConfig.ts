/**
 * Single source of truth for the "A Journey Home to Self" event.
 * Every date-gated UI element (popup, ribbon, nav link, countdown, schema)
 * reads from here so nothing has to be manually turned off after the event.
 */

export const EVENT_SLUG = 'journey-home-to-self'
export const EVENT_PATH = `/${EVENT_SLUG}`
export const EVENT_REGISTER_PATH = `${EVENT_PATH}/register`
export const EVENT_CONFIRMED_PATH = `${EVENT_PATH}/confirmed`

export const EVENT_NAME = 'A Journey Home to Self'

// UK is on British Summer Time (UTC+1) in September.
export const EVENT_EVENINGS = [
  { date: '2026-09-18', label: '18 September' },
  { date: '2026-09-19', label: '19 September' },
  { date: '2026-09-20', label: '20 September' },
] as const

export const EVENT_START = new Date('2026-09-18T19:30:00+01:00')
export const EVENT_END = new Date('2026-09-20T22:00:00+01:00')
export const EVENT_TIME_LABEL = '7:30–10:00 PM UK'

export const JOTFORM_FORM_ID = '262467774474067'
export const JOTFORM_EMBED_URL = `https://form.jotform.com/${JOTFORM_FORM_ID}`

export const ZOOM_JOIN_URL =
  'https://us06web.zoom.us/j/4497790781?pwd=qk1oNGjW2WDRIr0KAxLgMk42vUYabH.1'
export const ZOOM_MEETING_ID = '449 779 0781'
export const ZOOM_PASSCODE = 'INFINITE'

/** True from now until the last evening ends - drives the popup/ribbon/nav link. */
export function isEventPromotable(now: Date = new Date()): boolean {
  return now.getTime() < EVENT_END.getTime()
}

/** Google Calendar "add event" link for one evening (7:30-10:00 PM UK). */
export function googleCalendarUrl(dateISO: string): string {
  const start = new Date(`${dateISO}T19:30:00+01:00`)
  const end = new Date(`${dateISO}T22:00:00+01:00`)
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT_NAME,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: `Live on Zoom. Meeting ID: ${ZOOM_MEETING_ID} | Passcode: ${ZOOM_PASSCODE}\n\n${ZOOM_JOIN_URL}`,
    location: 'Zoom (online)',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
