'use client';
import Image from "next/image";
import Link from "next/link";

/**
 * Hero — Client Component
 * Image-first, accessible hero for JVTO
 */
export type HeroProps = {
  title: string;
  tagline?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  rating?: number;
  nib?: string;
  magmaStatus?: string;
};

export default function Hero({
  title,
  tagline,
  ctaPrimaryLabel = "Book a private tour",
  ctaPrimaryHref = "/contact",
  ctaSecondaryLabel = "Browse tours",
  ctaSecondaryHref = "/tours",
  heroImageSrc = "/images/hero-default.jpg",
  heroImageAlt = "Java volcanic landscape",
  rating,
  nib,
  magmaStatus = "MAGMA: Normal",
}: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="relative w-full" role="region">
      <div className="relative h-[60vh] md:h-[80vh]">
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="absolute inset-0 container-width flex items-center">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-hero font-display font-bold leading-tight">
              {title}
            </h1>
            {tagline && <p className="mt-4 text-subhead">{tagline}</p>}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={ctaPrimaryHref}
                className="bg-jvto-white text-black px-8 py-4 rounded-[var(--radius-md)] text-base font-medium"
                aria-label={ctaPrimaryLabel}
              >
                {ctaPrimaryLabel}
              </Link>

              <Link
                href={ctaSecondaryHref}
                className="border-2 border-jvto-white text-jvto-white px-6 py-4 rounded-[var(--radius-md)] text-base font-medium"
                aria-label={ctaSecondaryLabel}
              >
                {ctaSecondaryLabel}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm" aria-hidden>
              <div className="flex items-center gap-2 text-jvto-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.79 1.402 8.17L12 18.896 4.664 23.17l1.402-8.17L.132 9.21l8.2-1.192z" />
                </svg>
                <span className="text-white/90">{rating} / 5</span>
              </div>

              <div className="text-white/80">NIB {nib}</div>

              <div className="px-3 py-1 rounded-md bg-jvto-verify text-black font-medium">{magmaStatus}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
