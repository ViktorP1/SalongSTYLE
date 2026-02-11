export const metadata = {
  title: 'Hitta Oss - Salong Style',
  description: 'Besök oss på Sköntorpsvägen 3 i Årsta. Öppettider, kontaktinfo och vägbeskrivning.',
}

export default function HittaOss() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="bg-gradient-to-br from-secondary/10 to-accent/10 py-20 mb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-7xl font-bold text-primary mb-3">
            Hitta Oss
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-2xl p-10 shadow-lg mb-8">
              <h2 className="font-display text-3xl font-bold text-primary mb-8">
                Kontaktinformation
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Adress</h3>
                    <p className="text-primary/70">
                      Sköntorpsvägen 3<br />
                      120 38 Årsta<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Telefon</h3>
                    <a
                      href="tel:+46735579738"
                      className="text-primary/70 hover:text-secondary transition-colors"
                    >
                      073 - 557 97 38
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
                    <a
                      href="mailto:tatjana@salongstyle.se"
                      className="text-primary/70 hover:text-secondary transition-colors"
                    >
                      tatjana@salongstyle.se
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-accent text-white rounded-2xl p-10 shadow-lg">
              <h2 className="font-display text-3xl font-bold mb-6">Öppettider</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="font-medium">Måndag - Fredag</span>
                  <span className="text-lg">Stängt</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="font-medium">Lördag</span>
                  <span className="text-lg">10:30 - 15:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Söndag</span>
                  <span className="text-lg">Stängt</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-white/90">
                  💡 <strong>Tips:</strong> Ring gärna innan ditt besök för att säkerställa att 
                  vi har tid att ta emot drop-ins.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Karta</h2>
                
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.135521453574!2d18.067518377569474!3d59.29842551349366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f778bbbb16d93%3A0x265e114d1417ef50!2zU2vDtm50b3Jwc3bDpGdlbiAzLCAxMjAgMzggw4Vyc3Rh!5e0!3m2!1ssv!2sse!4v1770832161303!5m2!1ssv!2sse"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />
                </div>

                <div className="mt-6 space-y-3">
                    <a
                    href="https://www.google.com/maps/search/?api=1&query=Sköntorpsvägen+3+Årsta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-secondary text-white text-center px-6 py-4 rounded-full font-medium hover:bg-accent transition-all transform hover:scale-105"
                    >
                    Öppna i Google Maps
                    </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
