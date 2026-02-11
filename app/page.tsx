import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-cream via-cream to-secondary/10">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-6 animate-fade-in">
              Välkommen till
              <span className="block text-secondary mt-2">Salong STYLE</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 mb-12 leading-relaxed animate-slide-up">
              Din destination för professionell hårvård och skönhet i hjärtat av Stockholm.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/boka"
                className="bg-secondary text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-accent transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Boka din tid nu!
              </Link>
              <Link
                href="/priser"
                className="bg-white text-primary px-10 py-5 rounded-full font-medium text-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-xl"
              >
                Behandlingar & Priser
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-y border-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-2xl">⭐</span>
                ))}
              </div>
              <span className="font-display text-3xl font-bold text-primary">4.9</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-cream"></div>
            
            <p className="text-primary/70 font-medium">
              <span className="text-primary font-semibold">173+</span> nöjda kunder
            </p>
            
            <div className="hidden md:block w-px h-8 bg-cream"></div>
            
            <a 
              href="https://www.bokadirekt.se/places/salong-style-12210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors font-medium flex items-center gap-2"
            >
              <span>BokaDirekt</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-linear-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-primary mb-4">Våra Tjänster</h2>
            <p className="text-xl text-primary/60">Från klippning till färgning - vi tar hand om allt</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Klippning dam', price: 'från 750 kr'},
              { name: 'Färgning', price: 'från 1200 kr'},
              { name: 'Fransar & Bryn', price: 'från 350 kr'},
              { name: 'Paketbehandling', price: 'från 1950 kr'},
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-secondary font-medium text-lg">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/priser"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-accent transition-all transform hover:scale-105 shadow-xl"
            >
              Se Alla Priser
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Redo För En Förändring?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Boka din tid idag och låt oss hjälpa dig uppnå din drömlook
          </p>
          <Link
            href="/boka"
            className="inline-block bg-secondary text-white px-12 py-5 rounded-full font-medium text-xl hover:bg-accent transition-all transform hover:scale-105 shadow-2xl"
          >
            Boka Nu
          </Link>
        </div>
      </section>
    </div>
  )
}
