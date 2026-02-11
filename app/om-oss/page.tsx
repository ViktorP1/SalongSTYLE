import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Om Oss - Salong Style',
  description: 'Lär känna oss på Salong Style och vår passion för hårvård.',
}

export default function OmOss() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Vår Historia
              </h2>
              <div className="space-y-4 text-lg text-primary/80 leading-relaxed">
                <p>
                  Salong Style grundades 2014 med en vision om att skapa en plats där hårvård möter konst. 
                  Vi ville erbjuda mer än bara en frisörsalong – vi ville skapa en upplevelse där varje 
                  besök lämnar dig med både ett vackert hår och ett leende på läpparna.
                </p>
                <p>
                  Vår filosofi är enkel: varje kund är unik och förtjänar en personlig upplevelse. 
                  Vi lyssnar på dina önskemål, ger professionell rådgivning och skapar tillsammans din 
                  perfekta look.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/salong.jpg"
                  alt="Salong Style interiör"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden ring-8 ring-secondary/20 shadow-xl">
                    <Image
                      src="/images/tatjana.jpg"
                      alt="Ägare - Salong Style"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="font-display text-4xl font-bold text-primary mb-3">
                    Tatjana Pavlova
                  </h3>
                  <p className="text-secondary text-xl font-medium mb-6">
                    Grundare & Frisör
                  </p>
                  
                  <div className="space-y-4 text-primary/70 leading-relaxed mb-6">
                    <p>
                      Med över 20 års erfarenhet inom hårvård och en passion för att få människor att 
                      känna sig vackra, grundade jag Salong Style för att skapa en plats där kvalitet 
                      och personlig service står i fokus.
                    </p>
                    <p>
                      Min drivkraft är att se 
                      glädje i kundens ögon när vi tillsammans hittar den perfekta looken.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-cream">
                    <div>
                      <p className="text-sm text-primary/50 font-medium mb-1">Specialitet</p>
                      <p className="text-accent font-semibold">Slingning & Klippning</p>
                    </div>
                    <div>
                      <p className="text-sm text-primary/50 font-medium mb-1">Erfarenhet</p>
                      <p className="text-accent font-semibold">20+ år</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}