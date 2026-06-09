import Image from 'next/image'
import Link from 'next/link'

// Both PNGs are 500×500. height prop controls display size; width scales auto.
export default function Logo({ height = 72 }: { height?: number }) {
  return (
    <Link href="/" className="logo" aria-label="SKIOLO — Set the System">
      <span className="logo-wrap">
        {/* Light logo — visible on dark theme */}
        <Image
          src="/logos/skiolo-logo-light.png"
          alt="SKIOLO — Set the System"
          width={500}
          height={500}
          style={{ width: 'auto', height: `${height}px` }}
          priority
          className="logo-img-light"
        />
        {/* Dark logo — visible on light theme */}
        <Image
          src="/logos/skiolo-logo-dark.png"
          alt=""
          aria-hidden="true"
          width={500}
          height={500}
          style={{ width: 'auto', height: `${height}px` }}
          priority
          className="logo-img-dark"
        />
      </span>
    </Link>
  )
}
