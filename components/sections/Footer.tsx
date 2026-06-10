import Logo from '@/components/Logo'
import { footer, siteConfig } from '@/lib/content'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* About column */}
          <div className="footer-col footer-col-about">
            <Logo height={56} />
            <div className="footer-about">
              <p>{footer.about}</p>
            </div>
          </div>

          {/* Services column */}
          <div className="footer-col">
            <p className="footer-col-title">Services</p>
            {footer.services.map((item) => (
              <a key={item.label} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Connect column */}
          <div className="footer-col">
            <p className="footer-col-title">Connect</p>
            {footer.connect.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="footer-link"
                {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Office column */}
          <div className="footer-col">
            <p className="footer-col-title">Office</p>
            {footer.office.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <p className="footer-bottom-tag">{footer.tag}</p>
        </div>
      </div>
    </footer>
  )
}
