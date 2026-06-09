import Link from 'next/link'
import Logo from '@/components/Logo'
import { nav } from '@/lib/content'

// Server component — no interactive children remain.
export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Logo height={72} />

        {/* Center links — hidden below 1000px via CSS */}
        <div className="nav-links">
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
