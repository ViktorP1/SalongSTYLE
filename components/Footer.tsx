import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xl">✂</span>
              </div>
              <h3 className="font-display text-2xl font-bold">Salong STYLE</h3>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Din destination för professionell hårvård och skönhet i Stockholm.
            </p>
          </div>

          {/* Snabblänkar */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-secondary">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/70 hover:text-secondary transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/priser" className="text-cream/70 hover:text-secondary transition-colors">
                  Priser & Behandlingar
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-cream/70 hover:text-secondary transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/boka" className="text-cream/70 hover:text-secondary transition-colors">
                  Boka Tid
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-secondary">Kontakt</h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li className="flex items-start gap-2">
                <span>Sköntorpsvägen 3<br />120 38 Årsta</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="tel:+46735579738" className="hover:text-secondary transition-colors">                 
                    +46 73 - 557 97 38
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:tatjana@salongstyle.se" className="hover:text-secondary transition-colors">
                  tatjana@salongstyle.se
                </a>
              </li>
            </ul>
          </div>

          {/* Öppettider */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-secondary">Öppettider</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li className="flex justify-between">
                <span>Måndag - Fredag</span>
                <span className="font-medium">Stängt</span>
              </li>
              <li className="flex justify-between">
                <span>Lördag</span>
                <span className="font-medium">10:30 - 15:30</span>
              </li>
              <li className="flex justify-between">
                <span>Söndag</span>
                <span className="font-medium">Stängt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Salong Style. Alla rättigheter reserverade.
          </p>
        </div>
      </div>
    </footer>
  )
}
