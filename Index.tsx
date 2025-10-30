import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import ProcessSection from "@/components/ProcessSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const services = [
    {
      title: "Syndrome de Diogène",
      description: "Nettoyage et désencombrement de logements avec accumulation pathologique",
      href: "/services/syndrome-diogene",
      image: {
        src: "https://img.icons8.com/external-flaticons-flat-flat-icons/96/external-hoarder-addictions-flaticons-flat-flat-icons.png",
        alt: "Icône représentant un logement encombré"
      }
    },
    {
      title: "Logement Insalubre",
      description: "Remise en état de logements présentant des risques sanitaires",
      href: "/services/logement-insalubre",
      image: {
        src: "https://img.icons8.com/fluency/96/hazard-cleanup.png",
        alt: "Icône de nettoyage de zone dangereuse"
      }
    },
    {
      title: "Remise en État Appartement",
      description: "Nettoyage approfondi et rénovation de biens immobiliers",
      href: "/services/remise-en-etat-appartement",
      image: {
        src: "https://img.icons8.com/color/96/maintenance.png",
        alt: "Icône de rénovation d'intérieur"
      }
    },
    {
      title: "Nettoyage Après Location",
      description: "État des lieux de sortie et remise en état locative",
      href: "/services/nettoyage-apres-location",
      image: {
        src: "https://img.icons8.com/fluency/96/key-exchange.png",
        alt: "Icône d'échange de clés"
      }
    },
    {
      title: "Nettoyage Fin de Chantier",
      description: "Nettoyage professionnel post-travaux et post-rénovation",
      href: "/services/nettoyage-fin-de-chantier",
      image: {
        src: "https://img.icons8.com/color/96/construction-worker-skin-type-1.png",
        alt: "Icône d'ouvrier de chantier"
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>DIAMANT PROPRETÉ | Nettoyage de l'Extrême en Bretagne - Intervention 24/7</title>
        <meta 
          name="description" 
          content="Spécialiste du nettoyage extrême en Bretagne : syndrome de Diogène, logements insalubres, fin de chantier. Intervention discrète 24/7. Devis gratuit."
        />
        <meta name="keywords" content="nettoyage extrême Bretagne, syndrome Diogène, logement insalubre, nettoyage Rennes, nettoyage Lorient" />
        <link rel="canonical" href="https://diamant-proprete.fr/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DIAMANT PROPRETÉ | Nettoyage de l'Extrême en Bretagne" />
        <meta property="og:description" content="Intervention rapide et discrète pour situations extrêmes. Disponible 24/7 dans toute la Bretagne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diamant-proprete.fr/" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DIAMANT PROPRETÉ",
            "description": "Spécialiste du nettoyage de l'extrême en Bretagne",
            "url": "https://diamant-proprete.fr",
            "telephone": "+33123456789",
            "email": "contact@diamant-proprete.fr",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Bretagne",
              "addressCountry": "FR"
            },
            "areaServed": ["Rennes", "Lorient", "Vannes", "Brest", "Saint-Nazaire"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage extrême",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <USPSection />
          
          {/* Services Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Nos Services de Nettoyage Extrême
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Des solutions professionnelles adaptées à chaque situation, même les plus complexes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur bg-card/70 border border-white/10 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(15,23,42,0.5)] hover:border-primary/40"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/20" />
                    <div className="relative">
                      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/80 shadow-inner shadow-white/40 ring-1 ring-primary/10">
                        <img
                          src={service.image.src}
                          alt={service.image.alt}
                          loading="lazy"
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-hover transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link to="/services">
                    Découvrir tous nos services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <ProcessSection />
          <FAQSection />

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-hero text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  "Intervention d'urgence",
                  "Disponible 24/7",
                  "Devis 100% gratuit"
                ].map((badge, badgeIndex) => (
                  <span
                    key={badgeIndex}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.6)] backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Besoin d'une intervention urgente ?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences.
                Contactez-nous maintenant pour un devis gratuit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 shadow-2xl"
                >
                  <a href="tel:+33123456789" className="gap-3">
                    <Phone className="w-6 h-6" />
                    <span className="font-bold">01 23 45 67 89</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="diamond"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Link to="/contact">Demander un devis gratuit</Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/10">
                  <Link to="/planifier-visite">Planifier une visite</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/10">
                  <a href="/brochure.pdf" download>
                    Télécharger la brochure
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
