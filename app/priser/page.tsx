import Link from 'next/link'

export const metadata = {
  title: 'Priser & Behandlingar - Salong Style',
  description: 'Se alla våra priser och behandlingar. Klippning, färgning, styling och mer.',
}

export default function Priser() {
  const services = [
    {
      category: 'Klippning',
      items: [
        { name: 'Dam klippning (ink, tvätt & fön)', price: '750 kr', duration: '60 min' },
        { name: 'Herr klippning', price: '650 kr', duration: '60 min' },
        { name: 'Barn klippning (0-9 år)', price: '390 kr', duration: '30 min' },
        { name: 'Maskinklippning', price: '420 kr', duration: '30 min' },
      ],
    },
    {
      category: 'Färgning',
      items: [
        { name: 'Helfärgning', price: '1200 kr', duration: '90 min' },
        { name: 'Toning (lätt färgning, som håller i 10-12 veckor)', price: '940 kr', duration: '60 min' },
      ],
    },
    {
      category: 'Fransar & Bryn',
      items: [
        { name: 'Färgning av fransar', price: '350 kr', duration: '30 min' },
        { name: 'Plockning och färgning av bryn', price: '350 kr', duration: '30 min' },
      ],
    },
    {
      category: 'Paketbehandling',
      items: [
        { name: 'Slingor och klippning', price: '2050 kr', duration: '180 min' },
        { name: 'Färgning och klippning', price: '1950 kr', duration: '150 min' },
      ],
    },
    {
      category: 'Permanent',
      items: [
        { name: 'Permanent', price: '1300 kr', duration: '120 min' },
      ],
    },
    {
      category: 'Slingor',
      items: [
        { name: 'Folieslingor', price: '1300 kr', duration: '120 min' },
      ],
    },
    {
      category: 'Uppsättning',
      items: [
        { name: 'Uppsättning', price: '600 kr', duration: '60 min' },
      ],
    },
    {
      category: 'Övrigt',
      items: [
        { name: 'Ett hål (ink.örhänge)', price: '360 kr', duration: '15 min' },
        { name: 'Två hål (ink.örhänge)', price: '450 kr', duration: '30 min' },
        { name: 'Tvätt och läggning', price: '480 kr', duration: '45 min' },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <div className="bg-linear-to-br from-secondary/10 to-accent/10 py-20 mb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-7xl font-bold text-primary mb-6">
            Priser & Behandlingar
          </h1>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av hårvårdstjänster anpassade efter dina behov
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-display text-3xl font-bold text-primary">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-4 border-b border-cream last:border-0 hover:bg-cream/30 px-4 rounded-lg transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-primary mb-1">{item.name}</h3>
                      <p className="text-sm text-primary/50">{item.duration}</p>
                    </div>
                    <span className="font-display text-xl font-semibold text-secondary">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-primary/70 mb-6">
            Är du redo att boka din nästa behandling?
          </p>
          <Link
            href="/boka"
            className="inline-block bg-secondary text-white px-12 py-5 rounded-full font-medium text-xl hover:bg-accent transition-all transform hover:scale-105 shadow-xl"
          >
            Boka Tid Nu
          </Link>
        </div>
      </div>
    </div>
  )
}
