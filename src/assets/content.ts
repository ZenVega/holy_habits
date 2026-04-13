export type SectionType = {
  title: string;
  id: string;
  blocks: string[];
  image?: ImageType;
};

export type ImageType = {
  src: string;
  alt?: string;
};

export const sectionIds = ["about", "yoga", "coaching", "oils"];

export const content: Record<string, SectionType> = {
  about: {
    title: "I like to move it",
    id: "about",
    image: {
      src: "/images/fotos/about.jpeg",
      alt: "portrait of woman",
    },
    blocks: [
      "Ich bin Nuria und was irgendwann mit einer Yoga- stunde begonnen hat, ist zu einer Leidenschaft und  heute zu meinem Beruf geworden. Neben meinen  Yoga- und Movement- Angeboten, sowie meiner Expertise in der Anwendung von ätherischen Ölen, vereine ich in meinen Coaching die körperliche mit der mentalen Ebene und suche mit Dir zusammen einen ganzheitlichen Weg zu mehr Wohlbefinden.",

      "Die meisten Menschen buchen eine erste Yogastunde, weil sie ein körperliches Anliegen haben. Rückenschmerzen, Stress, innere Unruhe...<br/>Auch der Wunsch ätherische Öle zu benutzen oder ein Coaching zu buchen, entspringt meist einer Situation, die sich nicht gut anfühlt oder verändert werden möchte.<br>Sobald sich diese Tools in den Alltag integrieren, wir spüren, wie gut Bewegung, Selbstbestimmtheit und Klarheit tut, werden aus Notwendigkeiten- gute Angelegenheiten. holy habits.",
    ],
  },
  yoga: {
    title: "Yoga",
    id: "yoga",
    image: {
      src: "/images/fotos/yoga.jpeg",
      alt: "woman doing stretches",
    },
    blocks: [
      "Yoga kann das Leben grundlegend verändern- und zwar im Positiven. Schon nach der ersten Stunde merkst Du, dass Yoga einfach gut tut. Wir werden körperlich und mental flexibler, entwickeln mehr Kraft und Durchhaltevermögen;<br/>die bewusste Atmung bringt Ruhe und Klarheit. — Doch Yoga ist mehr als Körperarbeit — Die Grundlage jeder Yogapraxis ist Achtsamkeit. Wir lernen, den Fokus nach innen zu richten und wahrzunehmen, was eigentlich gerade in uns vorgeht und was unsere eigentlichen Bedürfnisse sind.",
    ],
  },
  coaching: {
    title: "Coaching",
    id: "coaching",
    blocks: [
      "Unsere Situation, unser Glück, unser Leben ist funda mental davon abhängig, <strong>wie</strong> wir die Welt sehen. <i>Wo Bewusstsein hinfließt, kann Veränderung passieren.</i> Coaching ist eine Möglichkeit, den Zusammenhang zwischen körperlichen Empfindungen und psychischen Herausforderungen klarer zu machen. Als Coach kann ich zuhören, spiegeln, sortieren. Wir können gemein- sam beginnen zu hinterfragen, Verhaltensweisen und Glaubenssätze zu erforschen, um deren Ursprung zu  finden und einen neuen, klaren und lösungsorientierten Blick auf die Situation zu legen.<br/><i>Ich unterstüte Deinen Prozess des Bewusstwerdens.</i>",
    ],
  },
  oils: {
    title: "Oils",
    id: "oils",
    image: {
      src: "/images/fotos/oils.jpeg",
      alt: "woman presenting a small bottle",
    },
    blocks: [
      "Ätherische Öle sind ein wunderbares Werkzeug, um tiefer zu gehen. Sie können Momente unterstreichen oder klarer werden lassen, egal ob in der Yogapraxis oder im Alltag. Öle können sanfte Wegweiser sein und gleichzeitig eine kraftvolle Unterstützung, wenn man die AusRichtung ein wenig verloren hat. Für mich war es eine schöne Erkenntnis, dass ich mit Ölen meinen  Alltag mitunter positiver und leichter gestalten, meinen Körper besser wahrnehmen kann, wodurch ich  meine Gesundheit & mein Wohlbefinden unterstütze. Die Entdeckung von ätherischen Ölen ist für mich so wertvoll, deshalb liebe ich es, dieses Wissen zu teilen und diesen duftigen Raum auch für andere zu öffnen.",
    ],
  },
  contact: {
    title: "Contact & Impressum",
    id: "contact",
    blocks: [
      "Du hast Fragen? Oder möchtest gerne mit mir arbeiten? Ich freue mich über Deine Nachricht:",
    ],
  },
};
