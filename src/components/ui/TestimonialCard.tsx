import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { clsx } from 'clsx'

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  image?: string
  rating?: number
  featured?: boolean
}

export default function TestimonialCard({
  quote,
  author,
  title,
  image,
  rating = 5,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={clsx(
        'relative p-8 rounded-2xl transition-all duration-300',
        featured
          ? 'bg-hero-gradient text-white'
          : 'bg-white border border-border-light shadow-purple-sm hover:shadow-purple-md'
      )}
    >
      {/* Quote Icon */}
      <Quote
        className={clsx(
          'w-10 h-10 mb-4',
          featured ? 'text-accent-purple' : 'text-primary-300'
        )}
      />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={clsx(
              'w-4 h-4',
              i < rating
                ? featured
                  ? 'text-accent-gold fill-current'
                  : 'text-accent-gold fill-current'
                : 'text-gray-300'
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className={clsx(
          'text-base leading-relaxed mb-6 italic',
          featured ? 'text-white/90' : 'text-gray-600'
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-400">
            <Image src={image} alt={author} fill className="object-cover" />
          </div>
        )}
        <div>
          <p
            className={clsx(
              'font-semibold font-poppins',
              featured ? 'text-white' : 'text-dark-text'
            )}
          >
            {author}
          </p>
          <p
            className={clsx(
              'text-sm',
              featured ? 'text-accent-purple' : 'text-primary-600'
            )}
          >
            {title}
          </p>
        </div>
      </div>

      {/* Decorative Element */}
      {featured && (
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/30 rounded-full blur-2xl" />
      )}
    </div>
  )
}
