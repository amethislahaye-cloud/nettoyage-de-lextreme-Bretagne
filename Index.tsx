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
      image: "🏚️"
    },
    {
      title: "Logement Insalubre",
      description: "Remise en état de logements présentant des risques sanitaires",
      href: "/services/logement-insalubre",
      image: "⚠️"
    },
    {
      title: "Remise en État Appartement",
      description: "Nettoyage approfondi et rénovation de biens immobiliers",
      href: "/services/remise-en-etat-appartement",
      image: "✨"
    },
    {
      title: "Nettoyage Après Location",
      description: "État des lieux de sortie et remise en état locative",
      href: "/services/nettoyage-apres-location",
      image: "🔑"
    },
    {
      title: "Nettoyage Fin de Chantier",
      description: "Nettoyage professionnel post-travaux et post-rénovation",
      href: "/services/nettoyage-fin-de-chantier",
      image: "🏗️"
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
                    className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
                  >
                    <div className="text-5xl mb-4">{service.image}</div>
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
