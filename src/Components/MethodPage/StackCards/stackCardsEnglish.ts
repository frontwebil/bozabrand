export type StackCardSection = { title: string; list: string[] };

export type StackTextCard = { title: string; sections: StackCardSection[] };

export const stackCardsEnglishTitle =
  "We conduct briefings for CEOs and teams.";

/** Desktop ≥700px */
export const stackCardsEnglishDesktop: StackTextCard[] = [
  {
    title: "ADJUST THE SOUND",
    sections: [
      {
        title: "ADVERTISING CAMPAIGN DEVELOPMENT",
        list: [
          "Develop the central idea",
          "Scale the idea to chosen communication formats",
          "Launch targeted advertising",
          "Collaborate with influencers",
          "Monitor the progress of the advertising campaign",
          "Analyze KPIs",
        ],
      },
      {
        title: "RESULT",
        list: [
          "Creatives in required formats",
          "Video concepts",
          "Central visual, activation",
          "Banners",
          "Company presentation",
          "Product presentation",
          "2D/3D Animation",
          "Illustration",
          "Analytical report based on campaign results",
        ],
      },
    ],
  },
  {
    title: "GIVE THE BREATH",
    sections: [
      {
        title: "Launch plan development and Implementation",
        list: [
          "Develop campaign idea",
          "Conduct briefing for all project subcontractors",
          "Create content with the brand's new idea",
          "Develop websites",
          "Create social media strategies and content for Instagram, Facebook, and LinkedIn",
          "Launch targeted advertising",
          "Collaborate with influencers",
          "Analyze KPIs",
        ],
      },
      {
        title: "RESULT",
        list: [
          "Audience introduction content plan for the brand",
          "Creatives for selected communication channels - initial introduction to potential consumers with the brand assets of advertising materials and merchandise ready for launch.",
          "Brand photography",
          "Photo and video production and creatives for selected communication channels",
          "Website development",
          "Corporate presentation",
          "Product presentation",
          "2D/3D Animation",
          "Illustration",
          "Launch performance report",
        ],
      },
    ],
  },
  {
    title: "TUNE THE SOUND",
    sections: [
      {
        title: "COMMUNICATION STRATEGY DEVELOPMENT",
        list: [
          "Conduct consumer behavior research for different target audiences",
          "Develop creative communication ideas for selected channels",
          "Form a media plan",
          "Monitor the implementation of the communication campaign",
          "Analyze KPIs",
        ],
      },
      {
        title: "RESULT",
        list: [
          "Media plan with metric measurement and certain creatives",
          "Ready-made content for selected communication channels",
          "Brand assets of advertising materials and merchandise ready for launch",
          "Creative assets for selected channels",
          "Image photography",
          "Commercial video production",
          "Corporate presentation",
          "Product presentation",
          "2D/3D Animation",
          "Illustration",
        ],
      },
    ],
  },
  {
    title: "DETAIL THE VIEW",
    sections: [
      {
        title: "CORPORATE STYLE DEVELOPMENT",
        list: [
          "Develop layouts for specific corporate products, souvenirs, merchandise",
          "Stay in touch with manufacturing partners",
          "Prepare files for production",
          "Provide supervision of the production process",
        ],
      },
      {
        title: "RESULT",
        list: [
          "Brand assets of advertising materials and merchandise, ready for production",
          "Guideline",
          "Brandbook",
        ],
      },
    ],
  },
  {
    title: "FORM THE VIEW",
    sections: [
      {
        title: "IDENTITY DEVELOPMENT",
        list: [
          "Conduct a design session",
          "Create a personalized mood board",
          "Develop concepts",
          "Create the final identity presentation",
        ],
      },
      {
        title: "RESULT",
        list: [
          "Metaphorical central visual",
          "Brand image",
          "Logo [all possible versions]",
          "Fonts, colors, graphics",
          "Visual techniques",
          "Examples of implementation on exclusive merch ideas mockups",
          "Identity presentation",
        ],
      },
    ],
  },
  {
    title: "SET THE BALANCE",
    sections: [
      {
        title: "BRAND STRATEGY DEVELOPMENT",
        list: [
          "Provide an educational day for the team",
          "Find the brand's \"heart\" (uniqueness) during a brand session",
          "Deeply research the target audience",
          "We conduct in-depth interviews",
          "Explore the category and competitors",
          "Formulate the brand's central idea",
          "Create a corporate character",
          "Create a cohesive brand platform",
        ],
      },
      {
        title: "RESULT",
        list: [
          "Mission",
          "Values, positioning",
          "Target person",
          "Message",
          "Uniqueness",
          "Character: language, vibe, music, image",
        ],
      },
    ],
  },
];

/** Mobile: same as desktop except card 2 (GIVE THE BREATH) RESULT + one shorter line */
export const stackCardsEnglishMobile: StackTextCard[] =
  stackCardsEnglishDesktop.map((card, cardIndex) => {
    if (cardIndex !== 1) return card;

    return {
      ...card,
      sections: card.sections.map((section) => {
        if (section.title !== "RESULT") return section;
        return {
          ...section,
          list: [
            "Audience introduction content plan for the brand",
            "Creatives for selected communication channels",
            "Brand assets of advertising materials and merchandise ready for launch",
            "Brand photography",
            "Photo and video, creatives for communication channels",
            "Website development",
            "Corporate presentation",
            "Product presentation",
            "2D/3D Animation",
            "Illustration",
            "Launch performance report",
          ],
        };
      }),
    };
  });
