// Edytuj tylko tę listę. Każdy obiekt = jeden projekt (karta w karuzeli + osobna strona).
const PROJECTS = [
  {
    id: "slay-the-nightmares",
    category: "Academic 2.5D Project",
    title: "Slay The Nightmares",
    short: "A 2.5D beat ’em up where a unicorn survives ten escalating waves using a transforming horn with unique weapon forms, where I was tasked with making a fitting soundtrack for this dark themed game.",
    summary: "A 2.5D beat ’em up where a unicorn survives ten intense enemy waves using a horn that transforms into different weapon forms with distinct combat mechanics.",
    image: "assets/icons/hero.png",
    download: "https://drive.google.com/file/d/1l3MenLzGk-uRcAHtDR4FoLd5JQhvmLb3/view?usp=sharing",
    overview: "Slay The Nightmares is a fast-paced 2.5D beat ’em up focused on wave-based survival.",
    tools: ["Unity (URP)", "Reaper"],
    role: "I was responsible for doing soundtrack for this game.",
    responsibilities: ["Song Composition", "Mixing and mastering audio for music"],
    gallery: ["assets/icons/slay-g1.jpg", "assets/icons/slay-g2.jpg", "assets/icons/slay-g3.jpg"],
    versions: [
      { label: "0.0.8V - 05.02.2025", image: "assets/icons/slay-v1.jpg" },
      { label: "0.1.5V - 15.03.2025", image: "assets/icons/slay-v2.jpg" },
      { label: "0.4.3V - 20.05.2025", image: "assets/icons/slay-v3.jpg" },
      { label: "0.5.9V - 15.08.2025", image: "assets/icons/slay-v4.jpg" }
    ]
  },
  {
    id: "boogie-broom",
    category: "Academic 2D Project",
    title: "Boogie Broom",
    short: "2D rythmical metroidvania with DDR elements, where your rythmic timing decides how good your actions will do Where I was responsible for the whole Audio design and soundtrack, with FMOD implementation.",
    summary: "2D rythmical metroidvania with DDR elements, where your rythmic timing decides how good your actions will do.",
    image: "assets/icons/BoogieBroom.png",
    download: "https://krecikowicz.itch.io/boogie-broom",
    overview: "Boogie Broom is a hand-drawn, rhythm-based 2D Metroidvania set in a gloomy world inspired by Victorian-metal aesthetics. You play as an eccentric hero armed with a multifunctional guitar-broom, whose mission is to cleanse the cursed world, both literally and figuratively. By combining dynamic rhythm-based mechanics with in-depth exploration, the game offers a unique experience designed to put the player in a state of flow. It’s an atmospheric journey in which every cursed basement you sweep and every new metal track draws you deeper and deeper into madness.",
    tools: ["Unity (URP)", "Visual Studio", "FMOD", "Reaper", "Shader Graph"],
    role: "I was responsible for making audio, every single sound and soundtrack for this game alongside making few subtle VFX effects that enchanced overall feel of the game.",
    responsibilities: ["VFX", "Audio", "Compositor"],
    gallery: [],
    versions: []
  },
  {
    id: "ToyConvoy",
    category: "Academic 3D Project",
    title: "ToyConvoy",
    short: "3D third person shooter with tower defense elements, where every being is a toy and you need to protect your pilllow fort from the bad toys by shooting and building defenses against their relentless charge.",
    summary: "3D third person shooter with tower defense elements, where every being is a toy and you need to protect your pilllow fort from the bad toys by shooting and building defenses against their relentless charge.",
    image: "assets/icons/project3-cover.jpg",
    download: "",
    overview: "3D third person shooter with tower defense elements, where every being is a toy and you need to protect your pilllow fort from the bad toys by shooting and building defenses against their relentless ", 
    tools: ["Unity (URP)", "FMOD", "Shader Graph", "Reaper"], 
    role: "Audio Designer and VFX artist", 
    responsibilities: ["VFX", "Tech Art", "Audio Design", "Music Composition"], 
    gallery: ["assets/video/Aura.mp4"], 
    versions: []
  }
];
