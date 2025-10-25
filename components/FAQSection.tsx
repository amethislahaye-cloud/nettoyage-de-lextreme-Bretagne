import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "protocols",
    title: "Quels protocoles de nettoyage utilisez-vous ?",
    content:
      "Nous appliquons des protocoles stricts adaptés à chaque situation extrême : tri minutieux des déchets, désinfection professionnelle, traitement des nuisibles et remise en état des surfaces. Chaque intervention est réalisée avec des produits certifiés et un équipement de protection conforme aux normes sanitaires en vigueur."
  },
  {
    id: "delays",
    title: "Quels sont les délais d'intervention ?",
    content:
      "Nos équipes sont opérationnelles 24h/24 et 7j/7. Après votre prise de contact, nous organisons une visite d'évaluation sous 24 heures pour définir un plan d'action personnalisé et intervenir dans les meilleurs délais, même en cas d'urgence."
  },
  {
    id: "insurance",
    title: "Êtes-vous couverts par des assurances professionnelles ?",
    content:
      "DIAMANT PROPRETÉ dispose de toutes les assurances professionnelles nécessaires pour garantir la sécurité des lieux et la sérénité de nos clients. Nous fournissons les attestations sur simple demande et accompagnons également les dossiers d'assurance habitation lorsque cela est requis."
  }
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(faqs[0].id);

  const toggleItem = (id: string) => {
    setOpenItem(current => (current === id ? null : id));
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Tout savoir sur nos interventions
          </h2>
          <p className="text-muted-foreground mt-4">
            Découvrez notre façon de travailler, nos délais et les garanties qui accompagnent chacune de nos prestations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(item => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="bg-card border border-border/60 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                >
                  <span className="text-lg font-semibold text-primary">{item.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className={`px-6 pb-6 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-relaxed">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
