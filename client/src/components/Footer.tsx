import { Mail, Phone, MapPin, X, Globe, Share2, MessageCircle } from 'lucide-react'

const socialLinks = [
  { icon: X, href: 'https://twitter.com/kidrove', label: 'X (Twitter)' },
  { icon: Globe, href: 'https://kidrove.com', label: 'Website' },
  { icon: Share2, href: 'https://instagram.com/kidrove', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://youtube.com/kidrove', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-primary-dark via-primary to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg font-bold">
                K
              </div>
              <span className="text-xl font-bold">Kidrove</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-indigo-200">
              Empowering the next generation of innovators through hands-on STEM
              education, workshops, and courses for children.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
              Programs
            </h3>
            <ul className="mt-4 space-y-3">
              {['Workshops', 'Summer Camps', 'Online Courses', 'Robotics Club'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-indigo-100 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@kidrove.com"
                  className="flex items-center gap-2 text-sm text-indigo-100 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hello@kidrove.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-indigo-100 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-indigo-100">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Bangalore, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-indigo-300">
          <p>&copy; {new Date().getFullYear()} Kidrove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
