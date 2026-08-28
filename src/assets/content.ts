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

export type SectionId =
  | "about"
  | "yoga"
  | "coaching"
  | "oils"
  | "offers"
  | "contact";

export const content: Record<SectionId, SectionType> = {
  about: {
    title: "I like to move it",
    id: "about",
    image: {
      src: "/images/fotos/about.jpeg",
      alt: "portrait of woman",
    },
    blocks: [
      "Ich bin Nuria und was irgendwann mit einer Yogastunde begonnen hat, ist zu einer Leidenschaft und heute zu meinem Beruf geworden. Neben meinen Yoga- und Movementangeboten, sowie meiner Expertise in der Anwendung von ätherischen Ölen, vereine ich in meinen Coachings, die körperliche mit der mentalen Ebene und suche mit Dir zusammen einen ganzheitlichen Weg zu mehr Wohlbefinden.",

      "Die meisten Menschen buchen eine erste Yogastunde, weil sie ein körperliches Anliegen haben. Rückenschmerzen, Stress, innere Unruhe...<br/>Auch der Wunsch ätherische Öle zu benutzen oder ein Coaching zu buchen, entspringt meist einer Situation, die sich nicht gut anfühlt oder verändert werden möchte.<br/>Sobald sich diese Tools in den Alltag integrieren, wir spüren, wie gut Bewegung, Selbstbestimmtheit und Klarheit tut, werden aus Notwendigkeiten gute Angewohnheiten. <br/>holy habits.",
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
      "Unsere Situation, unser Glück, unser Leben ist fundamental davon abhängig, WIE wir die Welt sehen.<br/>Wo Bewusstsein hinfließt, kann Veränderung passieren.<br/>Coaching ist eine Möglichkeit, den Zusammenhang zwischen körperlichen Empfindungen und psychischen Herausforderungen klarer zu machen. Als Coach kann ich zuhören, spiegeln, sortieren. Wir können gemeinsam beginnen zu hinterfragen, Verhaltensweisen und Glaubenssätze zu erforschen, um deren Ursprung zu finden und einen neuen, klaren und lösungsorientierten Blick auf die Situation zu legen.<br/>Ich unterstütze Deinen Prozess des Bewusstwerdens.",
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
      "Ätherische Öle sind ein wunderbares Werkzeug, um tiefer zu gehen. Sie können Momente unterstreichen oder klarer werden lassen, egal ob in der Yogapraxis oder im Alltag.<br/>Öle könne sanfte Wegweiser sein und gleichzeitig eine kraftvolle Unterstützung, wenn man die (Aus)Richtung ein wenig verloren hat.<br/>Für mich war es eine schöne Erkenntnis, dass ich mit Ölen meinen Alltag mitunter positiver und leichter gestalten, meinen Körper besser wahrnehmen kann, wodurch ich meine Gesundheit und mein Wohlbefinden unterstütze.<br/>Die Entdeckung von ätherischen Ölen ist für mich so wertvoll, deshalb liebe ich es, dieses Wissen zu teilen und diesen duftigen Raum auch für andere zu öffnen.",
    ],
  },
  offers: {
    title: "Offers",
    id: "offers",
    image: {
      src: "/images/fotos/oils.jpeg",
      alt: "woman presenting a small bottle",
    },
    blocks: [
      "To connect with our bodies is to learn<br/>to trust ourselves,<br/>and from that comes power.<br/><br/>Mirka Knast",
      "Ich unterrichte regelmäßig in verschiedenen Sportstudios in Diez und Elz. Wenn Du eine Probestunde besuchen möchtest, schreib mir gern.<br/>Darüber hinaus biete ich Einzelstunden an, die bei Dir zu Hause oder in einem der Studios stattfinden können.<br/>Wenn Du Yoga in der Tiefe kennenlernen möchtest, intensiv arbeiten oder ein bestimmtes Anliegen hast, sind Einzelstunden eine großartige Möglichkeit der Zusammenarbeit.<br/>60 min/ 95 EUR, 10er Karte 900 EUR<br/><br/>Holy Habits ist zertifiziert über die Prüfstelle für Prävention, sodass in diesem Rahmen auch Präventionskurse abgerechnet werden können.",
    ],
  },
  contact: {
    title: "Contact & Impressum",
    id: "contact",
    blocks: [
      "Du hast Fragen? Oder möchtest gerne mit mir arbeiten? <br/> Ich freue mich über Deine Nachricht:",
    ],
  },
};
