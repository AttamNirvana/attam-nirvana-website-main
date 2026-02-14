import { clsx } from 'clsx'

interface SectionHeaderProps {
  overline?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      {overline && (
        <span
          className={clsx(
            'section-overline inline-block',
            light ? 'text-accent-purple' : 'text-primary-600'
          )}
        >
          {overline}
        </span>
      )}
      <h2
        className={clsx(
          'section-title',
          light ? 'text-white' : 'text-dark-text'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'section-subtitle',
            centered && 'mx-auto',
            light ? 'text-white/90' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
