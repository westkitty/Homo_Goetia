// ==========================================
// HOMO GOETIA: INFERNAL TEMPLE CORE JS
// ==========================================

const TST_TENETS = [
  { id: "I", text: "One should strive to act with compassion and empathy toward all creatures in accordance with reason." },
  { id: "II", text: "The struggle for justice is an ongoing and necessary pursuit that should prevail over laws and institutions." },
  { id: "III", text: "One’s body is inviolable, subject to one’s own will alone." },
  { id: "IV", text: "The freedoms of others should be respected, including the freedom to offend. To willfully and unjustly encroach upon the freedoms of another is to waive one's own." },
  { id: "V", text: "Beliefs should conform to one's best scientific understanding of the world. One should take care never to distort scientific facts to fit one's beliefs." },
  { id: "VI", text: "People are fallible. If one makes a mistake, one should do one's best to rectify it and resolve any harm that might have been caused." },
  { id: "VII", text: "Every tenet is a guiding principle designed to inspire nobility in action and thought. The spirit of compassion, wisdom, and justice should always prevail over the written or spoken word." }
];

const TAROT_CARDS = [
  {
    id: 1,
    name: "The Leather Devil",
    num: "XV",
    role: "Devotee of Passion & Liberation",
    glowType: "gold",
    icon: `<svg viewBox="0 0 100 100">
             <path d="M50 10 L30 40 L70 40 Z" fill="none" stroke="currentColor" stroke-width="2"/>
             <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
             <path d="M20 70 C30 80, 70 80, 80 70" fill="none" stroke="currentColor" stroke-width="2"/>
             <path d="M40 50 L50 65 L60 50" fill="none" stroke="currentColor" stroke-width="2"/>
             <line x1="50" y1="65" x2="50" y2="90" stroke="currentColor" stroke-width="2"/>
           </svg>`,
    text: "The Leather Devil represents raw desires, playfulness, and reclaiming bodily liberation. In a scene, it suggests embracing your shadows, setting clear physical intentions, and exploring leather, kink, or sensory bounds with pride and confidence."
  },
  {
    id: 2,
    name: "The Bound Acolyte",
    num: "XII",
    role: "Trust, Consent & Surrender",
    glowType: "purple",
    icon: `<svg viewBox="0 0 100 100">
             <rect x="25" y="25" width="50" height="50" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
             <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" stroke-dasharray="3,3" stroke-width="2"/>
             <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" stroke-dasharray="3,3" stroke-width="2"/>
             <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
             <path d="M50 15 L50 25 M50 75 L50 85" stroke="currentColor" stroke-dasharray="none" stroke-width="2"/>
           </svg>`,
    text: "The Bound Acolyte highlights the power of surrender, active consent, and absolute trust. This card calls for a pause to align boundaries, explore sensory restrictions, blindfolds, or ropes, and appreciate the psychological intimacy of shared submission."
  },
  {
    id: 3,
    name: "The Temple Priest",
    num: "V",
    role: "Willpower, Ritual & Focus",
    glowType: "primary",
    icon: `<svg viewBox="0 0 100 100">
             <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" stroke-width="2"/>
             <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" stroke-width="1.5"/>
             <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="1.5"/>
             <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4,2"/>
           </svg>`,
    text: "The Temple Priest embodies focus, intention, and ritual control. He guides the setting of atmospheres, candles, or soundscapes, and directs roleplay scenarios. Take charge of your rituals; design them intentionally to stimulate empowerment and self-discovery."
  },
  {
    id: 4,
    name: "The Sigil Weaver",
    num: "I",
    role: "Creative manifestation & Intelligence",
    glowType: "purple",
    icon: `<svg viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-dasharray="8,4" stroke-width="2"/>
             <polygon points="50,15 80,70 20,70" fill="none" stroke="currentColor" stroke-width="2"/>
             <polygon points="50,85 80,30 20,30" fill="none" stroke="currentColor" stroke-width="2"/>
           </svg>`,
    text: "The Sigil Weaver represents the alchemy of creation, prompt writing, and translating desire into visual artwork. It indicates that you have the tools to shape your fantasies. Use the Sigil Forge and Prompt Atelier to manifest detailed visuals and narratives."
  },
  {
    id: 5,
    name: "The Sovereign Rebel",
    num: "XXI",
    role: "Pride, Activism & Independence",
    glowType: "gold",
    icon: `<svg viewBox="0 0 100 100">
             <path d="M20 80 L35 20 L50 45 L65 20 L80 80 Z" fill="none" stroke="currentColor" stroke-width="2"/>
             <circle cx="50" cy="65" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
             <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" stroke-width="2"/>
           </svg>`,
    text: "The Sovereign Rebel is a symbol of absolute personal independence, bodily sovereignty, and alignment with TST principles. It reminds you that your identity is sacred. Stand firm in your rights, advocate for consent culture, and build supportive queer alliances."
  }
];

// Journey Simulator Narrative Data
const JOURNEY_STAGES = {
  start: {
    text: "You stand before the heavy, iron-reinforced doors of the Black Chapel. The iron rings are cast in the shapes of Leviathan heads, cold to the touch. A sweet, thick smell of nightshade and sulfur drifts from underneath the threshold. Deep within, a low sub-bass hum vibrates through your boots.",
    choices: [
      { text: "Push open the doors with firm resolve", target: "entry_main" },
      { text: "Examine the glowing sigils carved into the stone archway", check: { type: "willpower", targetScore: 10, success: "runes_success", failure: "runes_fail" } }
    ]
  },
  runes_success: {
    text: "You roll a Willpower check and succeed! The violet runes pulse brightly as you touch them. You decode the inscriptions: 'Sovereignty is the law of the flesh.' A warm sensation of strength floods your mind.",
    statBonus: { stat: "willpower", value: 2 },
    choices: [
      { text: "Cross the threshold into the sanctuary", target: "entry_main" }
    ]
  },
  runes_fail: {
    text: "You roll a Willpower check and fail. As you peer into the interlocking lines, the runes glow with a blinding red flash. A sharp headache pierces your skull, draining your stamina.",
    statBonus: { stat: "resolve", value: -2 },
    choices: [
      { text: "Rub your temples and push past the doors anyway", target: "entry_main" }
    ]
  },
  entry_main: {
    text: "You enter the main sanctuary. Hundreds of black and crimson candles illuminate stone pillars carved with inverted pentagrams. In the center, a massive altar draped in leather and chains dominates the room. A hooded acolyte in velvet robes stands silently, gesturing toward two paths ahead: a staircase rising to the Altar of Fire, or a steep descent into the Crypts.",
    choices: [
      { text: "Ascend the stairs to the Altar of Fire", target: "altar_fire" },
      { text: "Descend into the dark Subterranean Crypts", check: { type: "aesthetics", targetScore: 12, success: "crypt_success", failure: "crypt_fail" } }
    ]
  },
  crypt_success: {
    text: "You roll an Aesthetics check and succeed! You carefully navigate the slippery stone steps. At the bottom, you discover the Vault of Sigils. Massive stone tablets are carved with glowing runic arrays. Your eyes absorb the dark geometry, inspiring your artistic spirit.",
    statBonus: { stat: "aesthetics", value: 3 },
    choices: [
      { text: "Return upstairs to the Altar chamber", target: "altar_fire" }
    ]
  },
  crypt_fail: {
    text: "You roll an Aesthetics check and fail. You lose your footing on the wet stairs, tumbling into a pool of stagnant dark water. The cold shock saps your energy before you scramble back up.",
    statBonus: { stat: "resolve", value: -3 },
    choices: [
      { text: "Cough and walk toward the Altar of Fire instead", target: "altar_fire" }
    ]
  },
  altar_fire: {
    text: "You reach the Altar of Fire. A large iron brazier crackles with glowing green flame. An ancient golden chalice sits on a stone plinth next to the flame, filled with a bubbling black liquid.",
    choices: [
      { text: "Drink the black liquid from the golden chalice", check: { type: "willpower", targetScore: 11, success: "chalice_success", failure: "chalice_fail" } },
      { text: "Pour the chalice contents into the brazier to fuel the flames", target: "brazier_fuel" }
    ]
  },
  chalice_success: {
    text: "You roll a Willpower check and succeed! You drink the bitter brew. A wave of total mental focus washes over you, aligning your mind.",
    statBonus: { stat: "willpower", value: 3 },
    choices: [
      { text: "Proceed to the final chamber for meditation", target: "meditate_end" }
    ]
  },
  chalice_fail: {
    text: "You roll a Willpower check and fail. You gag on the harsh draught, spilling it down your chest. The burning in your throat breaks your focus.",
    statBonus: { stat: "resolve", value: -2 },
    choices: [
      { text: "Wipe your mouth and proceed to the final chamber", target: "meditate_end" }
    ]
  },
  brazier_fuel: {
    text: "The green flames erupt with a brilliant flash as the fluid hits the embers. The chamber glows with dramatic light, casting long shadows. You feel visually inspired by the display.",
    statBonus: { stat: "aesthetics", value: 2 },
    choices: [
      { text: "Kneel before the altar to meditate", target: "meditate_end" }
    ]
  },
  meditate_end: {
    text: "You sit cross-legged on the leather altar steps, breathing in the scent of incense while the sub-bass hum fills your mind. You have navigated the trials of the Black Chapel and re-centered your sovereign self.",
    choices: [
      { text: "Awake and restart the journey", target: "start" }
    ]
  }
};

// Traditional 72 Spirits of the Lesser Key of Solomon (Goetia)
const GOETIA_SPIRITS = [
  { id: 1, name: "Bael", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 66, office: "Provides the power of invisibility and supreme wisdom." },
  { id: 2, name: "Agares", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 31, office: "Causes runaways to return, teaches languages, and brings down spiritual pride." },
  { id: 3, name: "Vassago", rank: "Prince", planet: "Jupiter", element: "Water", metal: "Tin", incense: "Cedar", legions: 26, office: "Declares things past and to come, and discovers lost or hidden things." },
  { id: 4, name: "Samigina", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Teaches liberal sciences and gives accounts of souls that died in sin." },
  { id: 5, name: "Marbas", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 36, office: "Reveals secrets, causes or cures diseases, and teaches mechanical arts." },
  { id: 6, name: "Valefor", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 10, office: "A familiar spirit who tempts one to steal, but guards the home." },
  { id: 7, name: "Amon", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 40, office: "Tells of all things past and to come, and reconciles feuds between friends." },
  { id: 8, name: "Barbatos", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 30, office: "Understands the singing of birds, barks of dogs, and breaks hidden treasures." },
  { id: 9, name: "Paimon", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 200, office: "Teaches arts, sciences, and secret things; binds minds to the conjurer's will." },
  { id: 10, name: "Buer", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 50, office: "Teaches moral and natural philosophy, logic, and the virtues of all herbs." },
  { id: 11, name: "Gusion", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 40, office: "Answers all questions, reconciles friendships, and gives honor and dignity." },
  { id: 12, name: "Sitri", rank: "Prince", planet: "Jupiter", element: "Water", metal: "Tin", incense: "Cedar", legions: 60, office: "Inflames people with passion, lust, and reveals secrets of desires." },
  { id: 13, name: "Beleth", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 85, office: "Causes all kinds of love and passion between partners until the conjurer is satisfied." },
  { id: 14, name: "Leraje", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Governs battles, heals weapon wounds, and breaks down pride." },
  { id: 15, name: "Eligos", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 60, office: "Discovers hidden things, foretells wars, and secures affection of lords." },
  { id: 16, name: "Zepar", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 26, office: "Causes love between partners and shapes desires." },
  { id: 17, name: "Botis", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 60, office: "Tells of things past and to come, and reconciles friends and foes." },
  { id: 18, name: "Bathin", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 30, office: "Teaches the virtues of herbs and precious stones, and transports men swiftly." },
  { id: 19, name: "Sallos", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 30, office: "Promotes love, passion, and deep emotional connections between people." },
  { id: 20, name: "Purson", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 22, office: "Knows hidden things, discovers treasure, and tells of creation." },
  { id: 21, name: "Marax", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 36, office: "Teaches astronomy, sciences, and the virtues of herbs and stones." },
  { id: 22, name: "Ipos", rank: "Prince", planet: "Jupiter", element: "Water", metal: "Tin", incense: "Cedar", legions: 36, office: "Makes men witty, bold, and commands respect and confidence." },
  { id: 23, name: "Aim", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 26, office: "Makes one witty in all ways, and gives true answers to private matters." },
  { id: 24, name: "Naberius", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 19, office: "Restores lost honors, teaches arts, and makes men cunning in speech." },
  { id: 25, name: "Glasya-Labolas", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 36, office: "Teaches all arts and sciences, instigates courage, and reads minds." },
  { id: 26, name: "Bune", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 30, office: "Changes the places of the dead, makes men rich, and wise in speech." },
  { id: 27, name: "Ronove", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 19, office: "Teaches rhetoric, provides good servants, and grants favor with friends." },
  { id: 28, name: "Berith", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 26, office: "Tells of things past, present, and to come, and turns metals into gold." },
  { id: 29, name: "Astaroth", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 40, office: "Gives true answers of things past and present, and teaches liberal sciences." },
  { id: 30, name: "Forneus", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 29, office: "Makes one beloved by friends and enemies alike, and teaches rhetoric." },
  { id: 31, name: "Foras", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 29, office: "Teaches logic, ethics, virtues of herbs and stones; makes men invisible." },
  { id: 32, name: "Asmoday", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 72, office: "Grants the Ring of Virtues, teaches arithmetic and geometry, and reveals treasure." },
  { id: 33, name: "Gaap", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 66, office: "Eases philosophy, causes love or hatred, and carries men across realms." },
  { id: 34, name: "Furfur", rank: "Earl", planet: "Mars", element: "Fire", metal: "Iron", incense: "Dragon's Blood", legions: 26, office: "Sparks love between partners, raises storms, and reveals divine secrets." },
  { id: 35, name: "Marchosias", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "A powerful fighter who gives true answers to all questions." },
  { id: 36, name: "Stolas", rank: "Prince", planet: "Jupiter", element: "Water", metal: "Tin", incense: "Cedar", legions: 26, office: "Teaches astronomy, and the properties of herbs and precious stones." },
  { id: 37, name: "Phenex", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 20, office: "Teaches all sciences, writes poetry, and sings beautiful melodies." },
  { id: 38, name: "Halphas", rank: "Earl", planet: "Mars", element: "Fire", metal: "Iron", incense: "Dragon's Blood", legions: 26, office: "Builds towers, supplies ammunition, and sends warriors to battle." },
  { id: 39, name: "Malphas", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 40, office: "Builds houses and high towers, brings down enemies' plans, and gives familiars." },
  { id: 40, name: "Raum", rank: "Earl", planet: "Mars", element: "Fire", metal: "Iron", incense: "Dragon's Blood", legions: 30, office: "Steals treasures from kings, destroys cities, and tells of all things." },
  { id: 41, name: "Focalor", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 30, office: "Commands the winds and seas, drowns men, and overthrows warships." },
  { id: 42, name: "Vepar", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 29, office: "Governs the waters, guides ships, and infects wounds with severe poison." },
  { id: 43, name: "Sabnock", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 50, office: "Builds fortresses and castles, and inflicts festering wounds on enemies." },
  { id: 44, name: "Shax", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Takes away sight or hearing, steals money from tabernacles, and finds hidden things." },
  { id: 45, name: "Vine", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 36, office: "Discovers hidden things, witches, and tells of past, present, and future." },
  { id: 46, name: "Bifrons", rank: "Earl", planet: "Mars", element: "Fire", metal: "Iron", incense: "Dragon's Blood", legions: 6, office: "Teaches astrology, geometry, and sciences; lights phantom fires on graves." },
  { id: 47, name: "Uvall", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 37, office: "Procures love of friends and enemies, and tells of ancient events." },
  { id: 48, name: "Haagenti", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 33, office: "Makes men wise, transmutes water into wine and base metals into gold." },
  { id: 49, name: "Crocell", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 48, office: "Teaches geometry, warms hot baths, and reveals hidden water springs." },
  { id: 50, name: "Furcas", rank: "Knight", planet: "Saturn", element: "Earth", metal: "Lead", incense: "Myrrh", legions: 20, office: "Teaches philosophy, astronomy, rhetoric, logic, chiromancy, and pyromancy." },
  { id: 51, name: "Balam", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 40, office: "Provides perfect answers on past, present, future; makes men invisible and witty." },
  { id: 52, name: "Alloces", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 36, office: "Teaches astronomy and liberal sciences; gives good familiars." },
  { id: 53, name: "Camio", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 30, office: "A master disputer; understands the voices of animals, birds, and running waters." },
  { id: 54, name: "Murmur", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 30, office: "Teaches philosophy, and compels souls of the dead to answer questions." },
  { id: 55, name: "Orobas", rank: "Prince", planet: "Jupiter", element: "Water", metal: "Tin", incense: "Cedar", legions: 20, office: "Tells of divinity, creation, past and future; guarantees faithful friendships." },
  { id: 56, name: "Gremory", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 26, office: "Discovers hidden treasures, and tells of all things past and present." },
  { id: 57, name: "Ose", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 30, office: "Teaches liberal sciences, reveals secrets, and transforms people's shapes." },
  { id: 58, name: "Amy", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 36, office: "Teaches astrology and liberal sciences; reveals hidden treasures and familiars." },
  { id: 59, name: "Orias", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Teaches virtues of the stars, transforms men, and wins favors of lords." },
  { id: 60, name: "Vapula", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 36, office: "Teaches philosophy, mechanics, and sciences; helps design complex machines." },
  { id: 61, name: "Zagan", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 33, office: "Makes men witty, turns water into wine, wine into blood, and lead into gold." },
  { id: 62, name: "Valac", rank: "President", planet: "Mercury", element: "Air", metal: "Mercury", incense: "Storax", legions: 38, office: "Reveals where hidden treasures are, and shows where serpents may be found." },
  { id: 63, name: "Andras", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Raises discord and conflicts; extremely dangerous to double-cross." },
  { id: 64, name: "Flauros", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 36, office: "Gives true answers of past, present, and future; destroys enemies with fire." },
  { id: 65, name: "Andrealphus", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Teaches geometry, measurement, astronomy, and makes men highly clever." },
  { id: 66, name: "Cimejes", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 20, office: "Teaches grammar, logic, rhetoric; discovers lost items and hidden treasures." },
  { id: 67, name: "Amdusias", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 29, office: "Causes trees to bend at the conjurer's will; commands excellent music." },
  { id: 68, name: "Belial", rank: "King", planet: "Sun", element: "Fire", metal: "Gold", incense: "Frankincense", legions: 80, office: "Provides presentation titles, senatorships, favors, and reconciles friendships." },
  { id: 69, name: "Decarabia", rank: "Marquess", planet: "Moon", element: "Water", metal: "Silver", incense: "Jasmine", legions: 30, office: "Declares properties of herbs and stones; makes birds fly before the caster." },
  { id: 70, name: "Seere", rank: "Prince", planet: "Jupiter", element: "Water", metal: "Tin", incense: "Cedar", legions: 26, office: "Brings to pass things suddenly, carries things across realms." },
  { id: 71, name: "Dantalion", rank: "Duke", planet: "Venus", element: "Earth", metal: "Copper", incense: "Sandalwood", legions: 36, office: "Teaches all arts; reveals private thoughts, and changes minds of others." },
  { id: 72, name: "Andromalius", rank: "Earl", planet: "Mars", element: "Fire", metal: "Iron", incense: "Dragon's Blood", legions: 36, office: "Brings back thieves and stolen goods; punishes all wickedness." }
];

const PENTACLES = [
  { id: "saturn-1", planet: "Saturn", num: "First", title: "First Pentacle of Saturn", virtue: "Compels spirits of Saturn to obey commands." },
  { id: "saturn-2", planet: "Saturn", num: "Second", title: "Second Pentacle of Saturn", virtue: "Repels spiritual adversaries." },
  { id: "saturn-3", planet: "Saturn", num: "Third", title: "Third Pentacle of Saturn", virtue: "Defends against nighttime terrors." },
  { id: "jupiter-1", planet: "Jupiter", num: "First", title: "First Pentacle of Jupiter", virtue: "Discovers hidden treasures." },
  { id: "jupiter-2", planet: "Jupiter", num: "Second", title: "Second Pentacle of Jupiter", virtue: "Brings peace, glory, and honor." },
  { id: "mars-1", planet: "Mars", num: "First", title: "First Pentacle of Mars", virtue: "Invokes courage and strength." },
  { id: "mars-2", planet: "Mars", num: "Second", title: "Second Pentacle of Mars", virtue: "Heals diseases and targets infections." },
  { id: "sun-1", planet: "Sun", num: "First", title: "First Pentacle of the Sun", virtue: "Invokes solar spirits and power." },
  { id: "sun-2", planet: "Sun", num: "Second", title: "Second Pentacle of the Sun", virtue: "Promotes inner nobility." },
  { id: "venus-1", planet: "Venus", num: "First", title: "First Pentacle of Venus", virtue: "Attracts love and builds friendships." },
  { id: "mercury-1", planet: "Mercury", num: "First", title: "First Pentacle of Mercury", virtue: "Executes speedy messages." },
  { id: "moon-1", planet: "Moon", num: "First", title: "First Pentacle of the Moon", virtue: "Opens portals and gates." }
];

const TENET_QUIZ_SCENARIOS = [
  {
    question: "A close friend wishes to undergo a major body modification or physical scene that others deem unsafe, but they are fully cognizant and consenting. How do you advise them?",
    options: [
      { text: "Support their choice completely, as their body is subject to their own will alone.", tenet: "III", feedback: "Aligns with Tenet III: 'One’s body is inviolable, subject to one’s own will alone.' Self-determination over the flesh is absolute." },
      { text: "Urge caution, explaining that we must act with compassion and empathy to prevent harm in accordance with reason.", tenet: "I", feedback: "Aligns with Tenet I: 'One should strive to act with compassion and empathy toward all creatures in accordance with reason.'" }
    ]
  },
  {
    question: "You observe a local regulation that prevents a minoritized group from gathering or expressing their beliefs, though the law is technically valid. What path do you advocate?",
    options: [
      { text: "Protest the regulation, declaring that the struggle for justice must prevail over written laws.", tenet: "II", feedback: "Aligns with Tenet II: 'The struggle for justice is an ongoing and necessary pursuit that should prevail over laws and institutions.'" },
      { text: "Respect the law, but advise people to respect the freedoms of others, including the freedom to offend.", tenet: "IV", feedback: "Aligns with Tenet IV: 'The freedoms of others should be respected...'" }
    ]
  }
];

const GNOSIS_TRIVIA_QUESTIONS = [
  {
    q: "Which spirit of the Lesser Key of Solomon corresponds to ID 9 and commands 200 legions of spirits?",
    a: ["Bael", "Valefor", "Paimon", "Asmoday"],
    correct: 2
  },
  {
    q: "According to the Seven Tenets of TST, which tenet states that 'One's body is inviolable, subject to one's own will alone'?",
    a: ["Tenet I", "Tenet III", "Chalice Rule", "Tenet V"],
    correct: 1
  },
  {
    q: "Under which planetary auspices is the Duke level spirit Agares aligned?",
    a: ["Mars", "Sun", "Venus", "Saturn"],
    correct: 2
  }
];

class InfernalTempleApp {
  constructor() {
    this.activeTab = 'altar';
    this.currentTenetIndex = 2;
    this.grimoireEntries = [];
    this.activeEntryId = null;
    
    // Portal Entrance Ritual State
    this.portalPoints = [];
    this.portalIsDrawing = false;
    this.portalUnlocked = false;
    this.portalFlameFlicker = 0;
    this.portalAnimationId = null;
    
    // Journey Simulator State
    this.journeyCurrentStage = 'start';
    this.journeyStats = { willpower: 10, aesthetics: 10, resolve: 10 };
    this.journeyCreatorPoints = 5;
    this.journeyPendingCheck = null;
    
    // Timer State
    this.timerInterval = null;
    this.timerTimeRemaining = 600;
    this.timerIsRunning = false;
    this.timerAffirmationTimer = null;
    this.timerBreathePhase = 0; 
    this.timerBreatheTimer = null;
    
    // Audio State
    this.audioCtx = null;
    this.synthPlaying = false;
    this.humGainNode = null;
    this.droneGainNode = null;
    this.noiseGainNode = null;
    this.beatGainNode = null;
    this.masterGainNode = null;
    this.analyser = null;
    this.beatIntervalId = null;
    this.visualizerAnimationId = null;
    
    this.humOsc = null;
    this.droneOsc = null;
    this.noiseSource = null;
    
    this.humMuted = false;
    this.droneMuted = false;
    this.noiseMuted = false;
    this.beatMuted = false;

    // Solomonic Explorer State
    this.solomonActiveId = null;
    this.solomonColorOverride = 'default';

    // Transmuter State
    this.activeRecipeHtml = null;

    // Tenet Quiz State
    this.tenetQuizIndex = 0;

    // Banishment State
    this.banishPoints = [];
    this.banishIsDrawing = false;

    // Astrolabe State
    this.astrolabeUnlocked = false;

    // Incense Smoke Particles
    this.smokeParticles = [];
    this.incenseAnimationId = null;
    this.incenseWind = 0;

    // Echoes Acoustic Synthesis
    this.echoesSelectedNodes = [];

    // Shadow Work
    this.shadowPrompts = [
      "What core fear is preventing you from claiming absolute sovereignty over your own physical actions?",
      "In what ways do you allow external societal dogmas to override your own aesthetics and choices?",
      "What private desires or boundaries do you struggle to express?"
    ];
    this.shadowPromptIndex = 0;
    this.mirrorParticles = [];
    this.mirrorAnimationId = null;

    // Charging station
    this.chargeLevel = 0;
    this.chargeIntervalId = null;
    this.chargePitchFrequency = 100;
    this.chargeOsc = null;

    // Scrying mirror
    this.scryerRipples = [];
    this.scryerRunes = [];
    this.scryerAnimationId = null;

    // Trivia Gnosis
    this.triviaIndex = 0;
    this.triviaScoreVal = 0;
    this.triviaTotalVal = 0;
  }

  // ==========================================
  // SAFE ELEMENT ACQUISITION WRAPPER
  // ==========================================
  safeGet(id) {
    return document.getElementById(id);
  }

  safeBind(id, eventName, handler) {
    const el = this.safeGet(id);
    if (el) {
      el.addEventListener(eventName, handler);
    }
  }

  init() {
    this.initPortalEntrance();
    this.initNavigation();
    this.initGrimoire();
    this.initSigilForge();
    this.initDiceRoller();
    this.initTarotOracle();
    this.initJourneySimulator();
    this.initAudioMixer();
    this.initTimer();
    this.initAlchemicalTransmuter();
    this.initSolomonGrimoire();
    this.initTenetQuiz();

    // 11 new panels
    this.initBanishment();
    this.initAstrolabe();
    this.initGoeticGenerator();
    this.initCryptographyCipher();
    this.initBloodPact();
    this.initCenserSmoke();
    this.initAcousticNodes();
    this.initShadowMirror();
    this.initChargingStation();
    this.initDarkScryer();
    this.initTriviaQuiz();
    this.initSmokeChambers();
    this.initSovereignDesires();

    this.cycleTenet();
    this.initVisibilityAPI();
  }

  // ==========================================
  // TAB NAVIGATION & ROUTING
  // ==========================================
  initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sidebar = document.querySelector('.sidebar');
    const overlay = this.safeGet('sidebar-overlay');
    const mobileToggle = this.safeGet('btn-mobile-toggle');

    const closeMobileMenu = () => {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    };

    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        if (sidebar) sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeMobileMenu);
    }

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        this.switchTab(tab);
        closeMobileMenu();
      });
    });
  }

  switchTab(tabId) {
    const updateDOM = () => {
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });

      const activePanel = this.safeGet(`${tabId}-tab`);
      const activeNavItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
      
      if (activePanel) activePanel.classList.add('active');
      if (activeNavItem) activeNavItem.classList.add('active');
      
      this.activeTab = tabId;

      if (tabId === 'forge-sigil') {
        this.drawSigilOnCanvas();
      }
    };

    this.playClickSound();

    if (!document.startViewTransition) {
      updateDOM();
    } else {
      document.startViewTransition(() => updateDOM());
    }
  }

  cycleTenet() {
    this.currentTenetIndex = (this.currentTenetIndex + 1) % TST_TENETS.length;
    const tenet = TST_TENETS[this.currentTenetIndex];
    const container = this.safeGet('daily-tenet-container');
    if (container) {
      container.innerHTML = `
        <div class="tenet-title" style="animation: fade-in 0.3s ease-out;">Tenet ${tenet.id}</div>
        <div class="tenet-text" style="animation: fade-in 0.3s ease-out;">"${tenet.text}"</div>
      `;
    }
  }

  // ==========================================
  // SECURE CRYPTO PRNG UTILITIES
  // ==========================================
  getRandomNumber(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  playClickSound() {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    const time = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, time);
    osc.frequency.exponentialRampToValueAtTime(100, time + 0.12);
    
    // Logarithmic volume
    gainNode.gain.setValueAtTime(0.12, time);
    gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    
    osc.connect(gainNode);
    gainNode.connect(this.masterGainNode || this.audioCtx.destination);
    
    osc.start(time);
    osc.stop(time + 0.15);
  }

  // ==========================================
  // PORTAL ENTRANCE RITUAL
  // ==========================================
  initPortalEntrance() {
    const portalContainer = this.safeGet('portal-container');
    const canvas = this.safeGet('portal-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.addEventListener('mousedown', (e) => {
      this.portalIsDrawing = true;
      this.portalPoints = [getPos(e)];
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!this.portalIsDrawing) return;
      this.portalPoints.push(getPos(e));
    });

    canvas.addEventListener('mouseup', () => {
      if (!this.portalIsDrawing) return;
      this.portalIsDrawing = false;
      this.verifyPortalCircle(canvas);
    });

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
      this.portalIsDrawing = true;
      this.portalPoints = [getPos(e.touches[0])];
      e.preventDefault();
    });
    canvas.addEventListener('touchmove', (e) => {
      if (!this.portalIsDrawing) return;
      this.portalPoints.push(getPos(e.touches[0]));
      e.preventDefault();
    });
    canvas.addEventListener('touchend', () => {
      if (!this.portalIsDrawing) return;
      this.portalIsDrawing = false;
      this.verifyPortalCircle(canvas);
    });

    this.safeBind('btn-portal-skip', 'click', () => {
      this.unlockPortal(portalContainer);
    });

    // Escape Key trigger
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.portalUnlocked) {
        this.unlockPortal(portalContainer);
      }
    });

    const loop = () => {
      if (this.portalUnlocked) return;
      this.portalAnimationId = requestAnimationFrame(loop);
      this.drawPortalScreen(ctx, canvas);
    };
    loop();
  }

  drawPortalScreen(ctx, canvas) {
    ctx.save();
    ctx.fillStyle = '#060506';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Concentric orbits guides
    ctx.strokeStyle = 'rgba(255, 90, 121, 0.03)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, 120, 0, Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 60, 0, Math.PI*2); ctx.stroke();

    // Central flame particle loop
    this.portalFlameFlicker += 0.15;
    const size = 18 + Math.sin(this.portalFlameFlicker) * 4;

    const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, size * 2.5);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.2, '#ff5a79');
    grad.addColorStop(0.6, '#b624ff');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 2.5, 0, Math.PI*2);
    ctx.fill();

    // Trace path drawing
    if (this.portalPoints.length > 1) {
      ctx.strokeStyle = 'var(--primary)';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'var(--primary)';
      ctx.beginPath();
      ctx.moveTo(this.portalPoints[0].x, this.portalPoints[0].y);
      for (let i = 1; i < this.portalPoints.length; i++) {
        ctx.lineTo(this.portalPoints[i].x, this.portalPoints[i].y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  verifyPortalCircle(canvas) {
    const errorMsg = this.safeGet('portal-error-msg');
    if (this.portalPoints.length < 15) {
      this.portalPoints = [];
      return;
    }

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    let radiusSum = 0;
    const quadrants = { q1: false, q2: false, q3: false, q4: false };

    this.portalPoints.forEach(p => {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;

      const dx = p.x - cx;
      const dy = p.y - cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      radiusSum += dist;

      const angle = Math.atan2(dy, dx);
      if (angle >= 0 && angle < Math.PI / 2) quadrants.q1 = true;
      if (angle >= Math.PI / 2 && angle <= Math.PI) quadrants.q2 = true;
      if (angle < 0 && angle >= -Math.PI / 2) quadrants.q4 = true;
      if (angle < -Math.PI / 2 && angle >= -Math.PI) quadrants.q3 = true;
    });

    const avgRadius = radiusSum / this.portalPoints.length;
    const start = this.portalPoints[0];
    const end = this.portalPoints[this.portalPoints.length - 1];
    const endDist = Math.sqrt((start.x - end.x)**2 + (start.y - end.y)**2);

    const enclosed = (minX < cx && maxX > cx && minY < cy && maxY > cy);
    const validRadius = (avgRadius >= 35 && avgRadius <= 250);
    const closed = (endDist < 80);
    const rotated = (quadrants.q1 && quadrants.q2 && quadrants.q3 && quadrants.q4);

    if (enclosed && validRadius && closed && rotated) {
      const guidance = this.safeGet('portal-guidance');
      if (guidance) guidance.style.opacity = '0';

      const reveal = this.safeGet('portal-title-reveal');
      if (reveal) reveal.classList.add('active');

      this.playSacredPortalHum();
      this.portalPoints = [];

      setTimeout(() => {
        this.unlockPortal(this.safeGet('portal-container'));
      }, 2800);
    } else {
      if (errorMsg) {
        if (!enclosed) errorMsg.innerText = "The flame must remain inside the circle.";
        else if (!closed) errorMsg.innerText = "Seal the start and end of the boundary.";
        else errorMsg.innerText = "A closed loop must enclose the core.";
      }
      const guidance = this.safeGet('portal-guidance');
      if (guidance) guidance.style.opacity = '1';
      this.portalPoints = [];
    }
  }

  playSacredPortalHum() {
    try {
      if (!this.audioCtx) {
        this.initializeAudioCtx();
      }
      if (this.audioCtx) {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(65, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(55, this.audioCtx.currentTime + 2.5);
        
        gain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, this.audioCtx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 2.8);
        
        osc.connect(gain);
        gain.connect(this.masterGainNode || this.audioCtx.destination);
        osc.start();
        setTimeout(() => {
          try { osc.stop(); } catch(e) {}
          osc.disconnect();
        }, 3000);
      }
    } catch(e) {
      console.log("Audio failed:", e);
    }
  }

  unlockPortal(container) {
    if (this.portalUnlocked) return;
    this.portalUnlocked = true;
    
    cancelAnimationFrame(this.portalAnimationId);
    if (container) {
      container.classList.add('portal-dissolved');
    }
    
    if (!this.audioCtx) {
      this.initializeAudioCtx();
    }
    this.playClickSound();

    setTimeout(() => {
      if (container) container.style.display = 'none';
    }, 1500);
  }

  // ==========================================
  // SIGIL FORGE
  // ==========================================
  initSigilForge() {
    this.safeBind('btn-forge-sigil', 'click', () => {
      this.drawSigilOnCanvas();
      const canvasEl = this.safeGet('sigil-canvas');
      if (canvasEl) {
        canvasEl.classList.add('canvas-glow-active');
        setTimeout(() => canvasEl.classList.remove('canvas-glow-active'), 1000);
      }
    });

    this.safeBind('btn-download-sigil', 'click', () => {
      const canvas = this.safeGet('sigil-canvas');
      if (canvas) {
        const link = document.createElement('a');
        link.download = `sigil_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    });

    const preset = this.safeGet('sigil-preset');
    const intent = this.safeGet('sigil-intent');

    if (preset && intent) {
      preset.addEventListener('change', () => {
        if (preset.value) {
          intent.value = preset.value;
          this.updateVowelStripper();
          this.drawSigilOnCanvas();
        }
      });
      intent.addEventListener('input', () => {
        preset.value = "";
        this.updateVowelStripper();
        this.drawSigilOnCanvas();
      });
    }
  }

  updateVowelStripper() {
    const container = this.safeGet('sigil-vowel-visualizer');
    const input = this.safeGet('sigil-intent');
    if (!container || !input) return;

    const text = input.value.toUpperCase();
    if (!text.trim()) {
      container.style.display = 'none';
      return;
    }

    container.style.display = 'block';
    
    // Unicode-aware regex handling accented chars (like É, À)
    const letters = text.replace(/[^A-ZÀ-ÖØ-ß]/g, '');
    const vowels = ['A', 'E', 'I', 'O', 'U', 'À', 'È', 'É', 'Ì', 'Ò', 'Ù'];
    
    const uniqueConsonants = [];
    const elementsHtml = [];

    for (let char of letters) {
      if (vowels.includes(char)) {
        elementsHtml.push(`<span class="vowel-box">${char}</span>`);
      } else {
        if (!uniqueConsonants.includes(char)) {
          uniqueConsonants.push(char);
          elementsHtml.push(`<span class="consonant-box">${char}</span>`);
        } else {
          elementsHtml.push(`<span class="vowel-box" style="text-decoration:line-through;">${char}</span>`);
        }
      }
    }

    container.innerHTML = `
      <div class="consonant-row" style="margin-bottom:0.25rem;">
        <span>Isolated: </span>${elementsHtml.join(' ')}
      </div>
      <div style="font-size:0.75rem; color:var(--text-muted);">Consonants isolated: ${uniqueConsonants.join(', ') || 'None'}</div>
    `;
  }

  drawSigilOnCanvas() {
    const canvas = this.safeGet('sigil-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const intent = this.safeGet('sigil-intent').value.trim();
    
    const styleEl = document.querySelector('input[name="sigil-style"]:checked');
    const style = styleEl ? styleEl.value : 'geometric';
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = 90;

    // Draw background aura rings
    ctx.strokeStyle = 'rgba(182, 36, 255, 0.15)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

    if (!intent) {
      ctx.strokeStyle = 'rgba(229, 169, 59, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.stroke();
      return;
    }

    const cleanIntent = intent.toUpperCase().replace(/[^A-ZÀ-ÖØ-ß]/g, '');
    const uniqueChars = [];
    const vowels = ['A', 'E', 'I', 'O', 'U', 'À', 'È', 'É', 'Ì', 'Ò', 'Ù'];
    for (let c of cleanIntent) {
      if (!vowels.includes(c) && !uniqueChars.includes(c)) uniqueChars.push(c);
    }

    const pointsCount = 12;
    const coordinates = [];
    for (let i = 0; i < pointsCount; i++) {
      const angle = (i * Math.PI * 2) / pointsCount - Math.PI / 2;
      coordinates.push({
        x: cx + (r - 20) * Math.cos(angle),
        y: cy + (r - 20) * Math.sin(angle)
      });
    }

    const pathIndices = uniqueChars.map(char => {
      const charCode = char.charCodeAt(0) - 65;
      return Math.abs(charCode) % pointsCount;
    });

    if (pathIndices.length === 0) return;

    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 10;
    
    if (style === 'geometric') {
      ctx.strokeStyle = 'rgba(182, 36, 255, 0.8)';
      ctx.shadowColor = 'rgba(182, 36, 255, 0.6)';
      
      ctx.beginPath();
      const firstPt = coordinates[pathIndices[0]];
      ctx.moveTo(firstPt.x, firstPt.y);
      for (let idx of pathIndices) {
        ctx.lineTo(coordinates[idx].x, coordinates[idx].y);
      }
      ctx.stroke();
    } 
    else if (style === 'runic') {
      ctx.strokeStyle = 'rgba(229, 169, 59, 0.8)';
      ctx.shadowColor = 'rgba(229, 169, 59, 0.6)';
      
      ctx.beginPath();
      ctx.moveTo(cx, cy - 60);
      ctx.lineTo(cx, cy + 60);
      ctx.stroke();
      
      ctx.beginPath();
      pathIndices.forEach((idx, i) => {
        const pt = coordinates[idx];
        const heightFactor = (i / pathIndices.length) * 100 - 50;
        ctx.moveTo(cx, cy + heightFactor);
        ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    } 
    else {
      ctx.strokeStyle = 'rgba(255, 90, 121, 0.85)';
      ctx.shadowColor = 'rgba(255, 90, 121, 0.65)';
      
      ctx.beginPath();
      const startPt = coordinates[pathIndices[0]];
      ctx.moveTo(startPt.x, startPt.y);
      for (let i = 0; i < pathIndices.length - 1; i++) {
        const pt1 = coordinates[pathIndices[i]];
        const pt2 = coordinates[pathIndices[i + 1]];
        const cpx = (pt1.x + pt2.x) / 2 + (cx - (pt1.x + pt2.x) / 2) * 0.4;
        const cpy = (pt1.y + pt2.y) / 2 + (cy - (pt1.y + pt2.y) / 2) * 0.4;
        ctx.quadraticCurveTo(cpx, cpy, pt2.x, pt2.y);
      }
      ctx.stroke();
    }

    const startPt = coordinates[pathIndices[0]];
    const endPt = coordinates[pathIndices[pathIndices.length - 1]];
    
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#f5f3f7';
    ctx.fillStyle = '#060506';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(startPt.x, startPt.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    const dx = endPt.x - cx;
    const dy = endPt.y - cy;
    const len = Math.sqrt(dx*dx + dy*dy) || 1;
    const ux = -dy / len;
    const uy = dx / len;
    ctx.moveTo(endPt.x - ux * 8, endPt.y - uy * 8);
    ctx.lineTo(endPt.x + ux * 8, endPt.y + uy * 8);
    ctx.stroke();
  }

  // ==========================================
  // ALCHEMICAL DICE ROLLER (PBR CRYPTO PRNG)
  // ==========================================
  initDiceRoller() {
    this.safeBind('btn-roll-dice', 'click', () => {
      this.castDicePool();
    });
  }

  castDicePool() {
    const qtyEl = this.safeGet('dice-qty');
    const qty = qtyEl ? parseInt(qtyEl.value) : 3;
    
    const typeEl = document.querySelector('input[name="dice-type"]:checked');
    const type = typeEl ? typeEl.value : 'symbol';

    const diceArena = this.safeGet('dice-arena');
    const btnRoll = this.safeGet('btn-roll-dice');
    
    if (btnRoll) btnRoll.disabled = true;
    if (diceArena) diceArena.innerHTML = '';
    
    const textEl = this.safeGet('dice-outcome-text');
    if (textEl) textEl.innerText = "Casting alchemical lots...";
    
    for (let i = 0; i < qty; i++) {
      const d = document.createElement('div');
      d.className = `dice ${type === 'd20' ? 'dice-d20' : ''} dice-rolling`;
      d.innerText = '?';
      d.setAttribute('tabindex', '0'); // Accessibility
      d.addEventListener('click', () => {
        this.rerollSingleDie(d, type);
      });
      d.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          this.rerollSingleDie(d, type);
        }
      });
      if (diceArena) diceArena.appendChild(d);
    }

    this.playClickSound();

    setTimeout(() => {
      if (diceArena) {
        const diceEls = diceArena.querySelectorAll('.dice');
        diceEls.forEach(el => {
          el.classList.remove('dice-rolling');
          el.innerText = this.getRandomDieValue(type);
        });
      }
      if (btnRoll) btnRoll.disabled = false;
      this.evaluateDiceOutcome(type);
    }, 600);
  }

  getRandomDieValue(type) {
    const symbolDiceFaces = ["🜏", "🜓", "⛧", "🜂", "🝔"];
    if (type === 'symbol') {
      return symbolDiceFaces[this.getRandomNumber(symbolDiceFaces.length)];
    } else {
      return this.getRandomNumber(20) + 1;
    }
  }

  rerollSingleDie(dieEl, type) {
    if (dieEl.classList.contains('dice-rolling')) return;
    
    dieEl.classList.add('dice-rolling');
    dieEl.innerText = "?";
    this.playClickSound();

    setTimeout(() => {
      dieEl.classList.remove('dice-rolling');
      dieEl.innerText = this.getRandomDieValue(type);
      this.evaluateDiceOutcome(type);
    }, 600);
  }

  evaluateDiceOutcome(type) {
    const diceEls = document.querySelectorAll('#dice-arena .dice');
    const results = Array.from(diceEls).map(d => d.innerText).filter(v => v !== '?');
    const outcomeText = this.safeGet('dice-outcome-text');
    
    if (results.length === 0 || !outcomeText) return;

    const symbolMeanings = {
      "🜏": "Leviathan Cross (Sovereignty): Reclaim authority.",
      "🜓": "Brimstone (Willpower): Fuel your inner fire.",
      "⛧": "Inverted Pentagram (Rebellion): Overturn constraints.",
      "🜂": "Fire (Transformation): Catalyst force.",
      "🝔": "Salt (Grounding): Focus on physical bounds."
    };

    if (type === 'symbol') {
      const counts = {};
      results.forEach(r => counts[r] = (counts[r] || 0) + 1);
      
      let explanation = "Cast results: " + results.join(', ') + ". ";
      let maxSym = results[0];
      let maxCount = 0;
      Object.keys(counts).forEach(k => {
        if (counts[k] > maxCount) {
          maxCount = counts[k];
          maxSym = k;
        }
      });
      explanation += `\nDominant element: ${symbolMeanings[maxSym]}`;
      outcomeText.innerText = explanation;
    } else {
      const numericVals = results.map(v => parseInt(v));
      const sum = numericVals.reduce((a, b) => a + b, 0);
      const max = Math.max(...numericVals);
      let outcome = `Rolled check values: ${results.join(', ')} (Sum: ${sum}). `;
      if (max === 20) {
        outcome += "Critical Success! Core forces align.";
      } else if (sum / results.length >= 12) {
        outcome += "High roll check. Focus is sharp.";
      } else {
        outcome += "Standard roll. Ground your thoughts.";
      }
      outcomeText.innerText = outcome;
    }
  }

  // ==========================================
  // TAROT ORACLE
  // ==========================================
  initTarotOracle() {
    const cardsEl = [
      this.safeGet('tarot-card-1'),
      this.safeGet('tarot-card-2'),
      this.safeGet('tarot-card-3')
    ];
    
    const drawBtn = this.safeGet('btn-draw-tarot');
    const saveBtn = this.safeGet('btn-tarot-save-journal');

    if (!drawBtn) return;

    const handleFlip = (el, cardIdx) => {
      if (el.classList.contains('flipped')) return;
      
      const activeCards = document.querySelectorAll('.card-container.flipped');
      const activeIds = Array.from(activeCards).map(c => parseInt(c.getAttribute('data-card-id')));
      
      const available = TAROT_CARDS.filter(c => !activeIds.includes(c.id));
      const card = available[this.getRandomNumber(available.length)];
      
      el.setAttribute('data-card-id', card.id);
      el.classList.add('flipped');

      const frontEl = el.querySelector('.card-front');
      frontEl.className = `card-front revealed-${card.glowType}`;
      
      const idx = el.id.split('-').pop();
      this.safeGet(`card-name-${idx}`).innerText = card.name;
      this.safeGet(`card-art-${idx}`).innerHTML = card.icon;
      
      
      const panel = this.safeGet('tarot-meaning-panel');
      if (panel) {
        panel.style.display = 'block';
        panel.classList.remove('slide-up-entry');
        void panel.offsetWidth; // Trigger reflow
        panel.classList.add('slide-up-entry');
      }
      const spreadRoles = ["Past (Foundation)", "Present (Initiation)", "Future (Resolution)"];
      
      this.safeGet('meaning-card-name').innerText = `${spreadRoles[cardIdx]}: ${card.name}`;
      this.safeGet('meaning-card-role').innerText = card.role;
      this.safeGet('meaning-card-text').innerText = card.text;

      const flippedCount = document.querySelectorAll('.card-container.flipped').length;
      if (flippedCount === 3 && saveBtn) {
        saveBtn.style.display = 'inline-flex';
        saveBtn.classList.remove('slide-up-entry');
        void saveBtn.offsetWidth; // Trigger reflow
        saveBtn.classList.add('slide-up-entry');
      }
    };

    cardsEl.forEach((el, index) => {
      if (el) el.addEventListener('click', () => handleFlip(el, index));
    });

    drawBtn.addEventListener('click', () => {
      cardsEl.forEach(el => {
        if (el) {
          el.classList.remove('flipped');
          el.removeAttribute('data-card-id');
        }
      });
      this.safeGet('tarot-meaning-panel').style.display = 'none';
      if (saveBtn) saveBtn.style.display = 'none';
    });

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const flippedCards = document.querySelectorAll('.card-container.flipped');
        if (flippedCards.length !== 3) return;

        const readingDetails = [];
        const spreadRoles = ["Past / Foundation", "Present / Initiation", "Future / Resolution"];
        
        flippedCards.forEach((cEl, idx) => {
          const cId = parseInt(cEl.getAttribute('data-card-id'));
          const card = TAROT_CARDS.find(item => item.id === cId);
          if (card) {
            readingDetails.push(`• **${spreadRoles[idx]}**: ${card.name} (${card.role})\n_${card.text}_`);
          }
        });

        const newEntry = {
          id: `entry_${Date.now()}`,
          title: `Tarot Oracle spread: ${new Date().toLocaleDateString()}`,
          content: `### Tarot Oracle Reading Logs\n\n${readingDetails.join('\n\n')}`,
          date: new Date().toLocaleDateString()
        };
        
        this.grimoireEntries.unshift(newEntry);
        this.saveGrimoireEntriesToStorage();
        this.renderGrimoireList();
        
        alert("Oracle spread reading saved to grimoire logs!");
        this.switchTab('grimoire-journal');
        this.selectGrimoireEntry(newEntry.id);
      });
    }
  }

  // ==========================================
  // JOURNEY TEXT ADVENTURE SIMULATOR
  // ==========================================
  initJourneySimulator() {
    const btnConfirm = this.safeGet('btn-alloc-confirm');
    const playContainer = this.safeGet('journey-play-container');
    const creatorPanel = this.safeGet('journey-character-creator');
    const logEl = this.safeGet('adventure-log');
    const checkPanel = this.safeGet('journey-dice-box');
    const btnRoll = this.safeGet('btn-journey-roll');

    if (!btnConfirm) return;

    const stats = { willpower: 10, aesthetics: 10, resolve: 10 };
    
    const updateAllocatorUI = () => {
      this.safeGet('alloc-will-val').innerText = stats.willpower;
      this.safeGet('alloc-aes-val').innerText = stats.aesthetics;
      this.safeGet('alloc-res-val').innerText = stats.resolve;
      this.safeGet('allocator-pool').innerText = `Points Remaining: ${this.journeyCreatorPoints}`;
      
      this.safeGet('btn-alloc-will-minus').disabled = stats.willpower <= 10;
      this.safeGet('btn-alloc-aes-minus').disabled = stats.aesthetics <= 10;
      this.safeGet('btn-alloc-res-minus').disabled = stats.resolve <= 10;
      
      const poolEmpty = this.journeyCreatorPoints === 0;
      this.safeGet('btn-alloc-will-plus').disabled = poolEmpty;
      this.safeGet('btn-alloc-aes-plus').disabled = poolEmpty;
      this.safeGet('btn-alloc-res-plus').disabled = poolEmpty;
    };

    const bindStatBtn = (statName, isPlus) => {
      const btn = this.safeGet(`btn-alloc-${statName.slice(0,3)}-${isPlus ? 'plus' : 'minus'}`);
      if (btn) {
        btn.addEventListener('click', () => {
          if (isPlus && this.journeyCreatorPoints > 0) {
            stats[statName]++;
            this.journeyCreatorPoints--;
          } else if (!isPlus && stats[statName] > 10) {
            stats[statName]--;
            this.journeyCreatorPoints++;
          }
          updateAllocatorUI();
        });
      }
    };

    ['willpower', 'aesthetics', 'resolve'].forEach(s => {
      bindStatBtn(s, true);
      bindStatBtn(s, false);
    });

    btnConfirm.addEventListener('click', () => {
      creatorPanel.style.display = 'none';
      if (playContainer) playContainer.style.display = 'block';
      
      this.journeyCurrentStage = 'start';
      this.journeyStats = { willpower: stats.willpower, aesthetics: stats.aesthetics, resolve: stats.resolve };
      if (logEl) logEl.innerHTML = '';
      
      this.loadJourneyStage();
    });

    if (btnRoll) {
      btnRoll.addEventListener('click', () => {
        if (!this.journeyPendingCheck) return;
        
        const d20 = this.safeGet('journey-d20');
        if (d20) d20.classList.add('dice-rolling');
        btnRoll.disabled = true;
        this.playClickSound();

        setTimeout(() => {
          if (d20) d20.classList.remove('dice-rolling');
          
          // Secure Random D20 roll
          const roll = this.getRandomNumber(20) + 1;
          if (d20) d20.innerText = roll;

          const check = this.journeyPendingCheck;
          const statValue = this.journeyStats[check.type] || 0;
          const modifier = Math.floor((statValue - 10) / 2);
          const total = roll + modifier;
          const succeeded = total >= check.targetScore;

          const resultP = document.createElement('p');
          resultP.className = 'dice-roll-result';
          resultP.innerHTML = `🎲 Rolled D20 check: <strong>${roll}</strong> ${modifier >= 0 ? '+' : ''}${modifier} modifier = <strong>${total}</strong> (vs Target: ${check.targetScore}) — <strong>${succeeded ? 'SUCCESS' : 'FAILED'}</strong>`;
          if (logEl) {
            logEl.appendChild(resultP);
            logEl.scrollTop = logEl.scrollHeight;
          }

          this.journeyPendingCheck = null;
          if (checkPanel) checkPanel.style.display = 'none';
          btnRoll.disabled = false;

          this.journeyCurrentStage = succeeded ? check.success : check.failure;
          this.loadJourneyStage();
        }, 600);
      });
    }

    this.safeBind('btn-journey-clear-log', 'click', () => {
      if (logEl) logEl.innerHTML = '';
    });
  }

  loadJourneyStage() {
    if (this.journeyCurrentStage === 'start' && this.journeyCreatorPoints > 0) {
      this.safeGet('journey-character-creator').style.display = 'block';
      this.safeGet('journey-play-container').style.display = 'none';
      return;
    }

    const stage = JOURNEY_STAGES[this.journeyCurrentStage];
    if (!stage) return;

    if (stage.statBonus) {
      const s = stage.statBonus.stat;
      const v = stage.statBonus.value;
      this.journeyStats[s] = Math.max(0, Math.min(15, this.journeyStats[s] + v));
      this.updateJourneyStatsUI();
    }

    const logEl = this.safeGet('adventure-log');
    if (logEl) {
      const titleP = document.createElement('p');
      titleP.className = 'log-highlight';
      titleP.innerText = `— ${this.journeyCurrentStage.toUpperCase().replace('_', ' ')} —`;
      logEl.appendChild(titleP);

      const descP = document.createElement('p');
      descP.innerText = stage.text;
      logEl.appendChild(descP);
      logEl.scrollTop = logEl.scrollHeight;
    }

    const choicesEl = this.safeGet('adventure-choices');
    if (choicesEl) choicesEl.innerHTML = '';

    const checkPanel = this.safeGet('journey-dice-box');
    if (checkPanel) checkPanel.style.display = 'none';

    stage.choices.forEach(opt => {
      if (opt.check) {
        const btn = document.createElement('button');
        btn.className = 'btn choice-check-btn';
        
        const statVal = this.journeyStats[opt.check.type] || 0;
        const mod = Math.floor((statVal - 10) / 2);
        const modStr = mod >= 0 ? `+${mod}` : `${mod}`;
        
        btn.innerHTML = `🎲 <strong>[${opt.check.type.toUpperCase()} Check (Roll ${modStr})]</strong> ${opt.text}`;
        btn.addEventListener('click', () => {
          if (choicesEl) choicesEl.innerHTML = ''; 
          if (checkPanel) checkPanel.style.display = 'block';
          this.safeGet('journey-check-desc').innerText = `D20 ${opt.check.type.toUpperCase()} Check required. Target: ${opt.check.targetScore} (Your modifier: ${modStr})`;
          this.safeGet('journey-d20').innerText = '?';
          this.journeyPendingCheck = opt.check;
        });
        if (choicesEl) choicesEl.appendChild(btn);
      } else {
        const btn = document.createElement('button');
        btn.className = 'btn btn-purple';
        btn.innerText = opt.text;
        btn.addEventListener('click', () => {
          if (opt.target === 'start') {
            this.journeyCreatorPoints = 5;
            this.journeyCurrentStage = 'start';
            this.safeGet('journey-character-creator').style.display = 'block';
            this.safeGet('journey-play-container').style.display = 'none';
          } else {
            this.journeyCurrentStage = opt.target;
            this.loadJourneyStage();
          }
        });
        if (choicesEl) choicesEl.appendChild(btn);
      }
    });

    this.updateJourneyStatsUI();
  }

  updateJourneyStatsUI() {
    const stats = this.journeyStats;
    if (this.safeGet('stat-willpower')) {
      this.safeGet('stat-willpower').innerText = `${stats.willpower} / 15`;
      this.safeGet('bar-willpower').style.width = `${(stats.willpower / 15) * 100}%`;
      
      this.safeGet('stat-aesthetics').innerText = `${stats.aesthetics} / 15`;
      this.safeGet('bar-aesthetics').style.width = `${(stats.aesthetics / 15) * 100}%`;
      
      this.safeGet('stat-resolve').innerText = `${stats.resolve} / 15`;
      this.safeGet('bar-resolve').style.width = `${(stats.resolve / 15) * 100}%`;
    }
  }

  // ==========================================
  // PROGRAMMATIC AUDIO MIXER Drone
  // ==========================================
  initAudioMixer() {
    const btnToggle = this.safeGet('btn-toggle-audio');
    if (!btnToggle) return;
    
    const sliders = {
      hum: this.safeGet('vol-hum'),
      drone: this.safeGet('vol-drone'),
      noise: this.safeGet('vol-noise'),
      beat: this.safeGet('vol-beat')
    };

    const valDisplays = {
      hum: this.safeGet('val-hum'),
      drone: this.safeGet('val-drone'),
      noise: this.safeGet('val-noise'),
      beat: this.safeGet('val-beat')
    };

    const muteBtns = {
      hum: this.safeGet('mute-hum'),
      drone: this.safeGet('mute-drone'),
      noise: this.safeGet('mute-noise'),
      beat: this.safeGet('mute-beat')
    };

    btnToggle.addEventListener('click', () => {
      if (!this.audioCtx) {
        this.initializeAudioCtx();
      }

      if (this.synthPlaying) {
        this.suspendAudio();
        btnToggle.innerText = "▶ Play Ambient Synth";
        btnToggle.classList.remove('btn-purple');
        this.toggleMixerControlsState(false);
        this.safeGet('audio-mixer-status').innerText = "Mixer suspended. Click Play to enable controls.";
      } else {
        this.resumeAudio();
        btnToggle.innerText = "⏸ Pause Ambient Synth";
        btnToggle.classList.add('btn-purple');
        this.toggleMixerControlsState(true);
        this.safeGet('audio-mixer-status').innerText = "Mixer active. Programmatic synthesis running locally.";
      }
    });

    Object.keys(sliders).forEach(key => {
      if (sliders[key]) {
        sliders[key].addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          if (valDisplays[key]) valDisplays[key].innerText = `${Math.round(val * 100)}%`;
          this.updateSynthVolume(key, val);
        });
      }
    });

    Object.keys(muteBtns).forEach(key => {
      if (muteBtns[key]) {
        muteBtns[key].addEventListener('click', () => {
          this[`${key}Muted`] = !this[`${key}Muted`];
          if (this[`${key}Muted`]) {
            muteBtns[key].classList.add('muted');
            this.updateSynthVolume(key, 0);
          } else {
            muteBtns[key].classList.remove('muted');
            const val = parseFloat(sliders[key].value);
            this.updateSynthVolume(key, val);
          }
        });
      }
    });
  }

  toggleMixerControlsState(isEnabled) {
    const channels = ['hum', 'drone', 'noise', 'beat'];
    channels.forEach(ch => {
      const row = this.safeGet(`row-${ch}`);
      const slider = this.safeGet(`vol-${ch}`);
      const muteBtn = this.safeGet(`mute-${ch}`);
      
      if (row && slider && muteBtn) {
        if (isEnabled) {
          row.classList.remove('disabled');
          slider.disabled = false;
          muteBtn.disabled = false;
        } else {
          row.classList.add('disabled');
          slider.disabled = true;
          muteBtn.disabled = true;
        }
      }
    });
  }

  initializeAudioCtx() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContextClass();
    
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 64;
    
    this.masterGainNode = this.audioCtx.createGain();
    this.masterGainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.masterGainNode.connect(this.analyser);
    this.analyser.connect(this.audioCtx.destination);
    
    this.humGainNode = this.audioCtx.createGain();
    this.humGainNode.gain.setValueAtTime(0.5, this.audioCtx.currentTime);
    this.humGainNode.connect(this.masterGainNode);
    this.createHumNodes();

    this.droneGainNode = this.audioCtx.createGain();
    this.droneGainNode.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    this.droneGainNode.connect(this.masterGainNode);
    this.createDroneNodes();

    this.noiseGainNode = this.audioCtx.createGain();
    this.noiseGainNode.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
    this.noiseGainNode.connect(this.masterGainNode);
    this.createNoiseNodes();

    this.beatGainNode = this.audioCtx.createGain();
    this.beatGainNode.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
    this.beatGainNode.connect(this.masterGainNode);
    
    this.beatIntervalId = setInterval(() => {
      this.playHeartbeatPulse();
    }, 1200);

    this.drawMixerVisualizer();
  }

  drawMixerVisualizer() {
    const canvas = this.safeGet('mixer-visualizer');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const bufferLength = this.analyser ? this.analyser.frequencyBinCount : 32;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      this.visualizerAnimationId = requestAnimationFrame(draw);
      
      if (this.analyser && this.synthPlaying) {
        this.analyser.getByteFrequencyData(dataArray);
      } else {
        dataArray.fill(0);
      }

      ctx.fillStyle = '#060506';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgba(255, 90, 121, ${dataArray[i]/255 * 0.85 + 0.15})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
        x += barWidth;
      }
    };

    draw();
  }

  createHumNodes() {
    const humOsc1 = this.audioCtx.createOscillator();
    const humOsc2 = this.audioCtx.createOscillator();
    const lowpass = this.audioCtx.createBiquadFilter();

    humOsc1.type = 'sine';
    humOsc1.frequency.setValueAtTime(55, this.audioCtx.currentTime);

    humOsc2.type = 'triangle';
    humOsc2.frequency.setValueAtTime(110.5, this.audioCtx.currentTime);

    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(120, this.audioCtx.currentTime);

    humOsc1.connect(lowpass);
    humOsc2.connect(lowpass);
    lowpass.connect(this.humGainNode);

    humOsc1.start();
    humOsc2.start();

    this.humOsc = [humOsc1, humOsc2];
  }

  createDroneNodes() {
    const droneOsc = this.audioCtx.createOscillator();
    const bandpass = this.audioCtx.createBiquadFilter();
    const lfo = this.audioCtx.createOscillator();
    const lfoGain = this.audioCtx.createGain();

    droneOsc.type = 'sawtooth';
    droneOsc.frequency.setValueAtTime(220, this.audioCtx.currentTime);

    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    bandpass.Q.setValueAtTime(8, this.audioCtx.currentTime);

    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.08, this.audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(150, this.audioCtx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(bandpass.frequency);
    
    droneOsc.connect(bandpass);
    bandpass.connect(this.droneGainNode);

    droneOsc.start();
    lfo.start();

    this.droneOsc = [droneOsc, lfo];
  }

  createNoiseNodes() {
    const bufferSize = this.audioCtx.sampleRate * 2;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noiseSource = this.audioCtx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    const highpass = this.audioCtx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.setValueAtTime(1000, this.audioCtx.currentTime);

    const bp = this.audioCtx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(2200, this.audioCtx.currentTime);
    bp.Q.setValueAtTime(2, this.audioCtx.currentTime);

    const modGain = this.audioCtx.createGain();
    
    noiseSource.connect(highpass);
    highpass.connect(bp);
    bp.connect(modGain);
    modGain.connect(this.noiseGainNode);

    noiseSource.start();
    this.noiseSource = noiseSource;

    this.crackleTimer = setInterval(() => {
      if (this.audioCtx && this.audioCtx.state === 'running' && !this.noiseMuted) {
        const time = this.audioCtx.currentTime;
        const targetVol = Math.random() * 0.8 + 0.2;
        modGain.gain.setValueAtTime(targetVol, time);
      }
    }, 80);
  }

  playHeartbeatPulse() {
    if (!this.audioCtx || this.audioCtx.state === 'suspended' || this.beatMuted) return;
    
    const now = this.audioCtx.currentTime;
    this.triggerHeartbeatBeat(now, 60, 0.4);
    this.triggerHeartbeatBeat(now + 0.35, 52, 0.25);
  }

  triggerHeartbeatBeat(time, freq, volumeScale) {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(10, time + 0.3);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(80, time);

    const slider = this.safeGet('vol-beat');
    const targetVal = slider ? parseFloat(slider.value) : 0.3;
    const targetGain = targetVal * volumeScale;

    // Logarithmic fade ramp
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(targetGain, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.beatGainNode);

    osc.start(time);
    osc.stop(time + 0.35);
  }

  updateSynthVolume(channel, value) {
    if (!this.audioCtx) return;
    
    if (this[`${channel}Muted`]) value = 0;

    const gainNode = this[`${channel}GainNode`];
    if (gainNode) {
      // Exponential curve ramping
      gainNode.gain.exponentialRampToValueAtTime(Math.max(0.001, value), this.audioCtx.currentTime + 0.1);
    }
  }

  suspendAudio() {
    if (this.audioCtx && this.audioCtx.state === 'running') {
      this.masterGainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.15);
      setTimeout(() => {
        if (this.audioCtx) {
          this.audioCtx.suspend();
          this.synthPlaying = false;
        }
      }, 180);
    }
  }

  resumeAudio() {
    if (this.audioCtx) {
      this.audioCtx.resume();
      this.masterGainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.masterGainNode.gain.exponentialRampToValueAtTime(0.8, this.audioCtx.currentTime + 0.2);
      this.synthPlaying = true;
    }
  }

  // ==========================================
  // FOCUS TIMER & Breathing Sync
  // ==========================================
  initTimer() {
    const btnStart = this.safeGet('btn-timer-start');
    const btnPause = this.safeGet('btn-timer-pause');
    const btnReset = this.safeGet('btn-timer-reset');
    const sliderDuration = this.safeGet('timer-duration');
    const valDuration = this.safeGet('timer-duration-val');

    if (!btnStart) return;

    sliderDuration.addEventListener('input', (e) => {
      const mins = parseInt(e.target.value);
      if (valDuration) valDuration.innerText = `${mins} minute${mins > 1 ? 's' : ''}`;
      if (!this.timerIsRunning) {
        this.timerTimeRemaining = mins * 60;
        this.updateTimerDisplay();
      }
    });

    btnStart.addEventListener('click', () => {
      this.startTimer();
      btnStart.disabled = true;
      if (btnPause) btnPause.disabled = false;
      if (sliderDuration) sliderDuration.disabled = true;
    });

    if (btnPause) {
      btnPause.addEventListener('click', () => {
        this.pauseTimer();
        btnStart.disabled = false;
        btnPause.disabled = true;
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.resetTimer();
        btnStart.disabled = false;
        if (btnPause) btnPause.disabled = true;
        if (sliderDuration) sliderDuration.disabled = false;
      });
    }
  }

  startTimer() {
    if (this.timerIsRunning) return;
    this.timerIsRunning = true;
    
    this.timerInterval = setInterval(() => {
      this.timerTimeRemaining--;
      this.updateTimerDisplay();
      
      if (this.timerTimeRemaining <= 0) {
        this.completeTimer();
      }
    }, 1000);

    this.cycleAffirmations();
    this.timerAffirmationTimer = setInterval(() => {
      this.cycleAffirmations();
    }, 20000);

    this.startBreathingGuide();
  }

  startBreathingGuide() {
    const ring = this.safeGet('breathing-ring');
    if (!ring) return;

    this.timerBreathePhase = 0;
    const breatheCycle = () => {
      const phases = [
        { text: "Inhale", class: "inhale" },
        { text: "Hold", class: "hold-in" },
        { text: "Exhale", class: "exhale" },
        { text: "Hold", class: "hold-out" }
      ];
      
      const current = phases[this.timerBreathePhase];
      ring.innerText = current.text;
      ring.className = `breathing-ring ${current.class}`;
      
      this.timerBreathePhase = (this.timerBreathePhase + 1) % 4;
    };

    breatheCycle();
    this.timerBreatheTimer = setInterval(breatheCycle, 4000);
  }

  pauseTimer() {
    this.timerIsRunning = false;
    clearInterval(this.timerInterval);
    clearInterval(this.timerAffirmationTimer);
    clearInterval(this.timerBreatheTimer);
    this.safeGet('timer-affirmation').innerText = "Focus paused. Re-center and resume.";
    const ring = this.safeGet('breathing-ring');
    if (ring) {
      ring.className = 'breathing-ring';
      ring.innerText = "Focus";
    }
  }

  resetTimer() {
    this.timerIsRunning = false;
    clearInterval(this.timerInterval);
    clearInterval(this.timerAffirmationTimer);
    clearInterval(this.timerBreatheTimer);
    
    const slider = this.safeGet('timer-duration');
    const mins = slider ? parseInt(slider.value) : 10;
    this.timerTimeRemaining = mins * 60;
    this.updateTimerDisplay();
    
    this.safeGet('timer-affirmation').innerText = "Press Start to begin your focus ritual.";
    const ring = this.safeGet('breathing-ring');
    if (ring) {
      ring.className = 'breathing-ring';
      ring.innerText = "Focus";
    }
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timerTimeRemaining / 60);
    const secs = this.timerTimeRemaining % 60;
    const display = this.safeGet('timer-display');
    if (display) {
      display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }

  cycleAffirmations() {
    const timerAffirmations = [
      "My body is inviolable, subject to my own will alone.",
      "In rebellion against authority, I claim my absolute freedom.",
      "I am the master of my focus, my boundaries, and my pleasure.",
      "Focus on the breath. Consent is the sacred law."
    ];
    
    const text = timerAffirmations[this.getRandomNumber(timerAffirmations.length)];
    const box = this.safeGet('timer-affirmation');
    if (box) {
      box.style.opacity = '0';
      setTimeout(() => {
        box.innerText = text;
        box.style.opacity = '1';
      }, 400);
    }
  }

  completeTimer() {
    this.resetTimer();
    this.safeGet('timer-affirmation').innerText = "Focus ritual complete. Step back, ground yourself, and enjoy aftercare.";
    
    if (this.audioCtx) {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(329.63, now);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.5, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2);
      
      osc.connect(gain);
      gain.connect(this.masterGainNode || this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 2.5);
    }
  }

  // ==========================================
  // ALCHEMICAL TRANSMUTER (PROGRESS ANIM)
  // ==========================================
  initAlchemicalTransmuter() {
    const btnTransmute = this.safeGet('btn-transmute');
    const intensitySlider = this.safeGet('transmute-intensity');
    const intensityVal = this.safeGet('transmute-intensity-val');
    const parchment = this.safeGet('transmute-parchment');
    const loader = this.safeGet('transmute-loader');
    const progressBar = this.safeGet('transmute-progress');
    const saveBtn = this.safeGet('btn-transmute-save-journal');

    if (!btnTransmute) return;

    intensitySlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      const roman = ["I", "II", "III", "IV", "V"];
      if (intensityVal) intensityVal.innerText = `Level ${roman[val - 1]}`;
    });

    const toolList = ["Iron Chalice", "Heavy Brass Bellows", "Ritual Athame (Dagger)", "Silver Censer"];
    const incenseList = ["Burning Frankincense", "Crushed Myrrh resin", "Warm Sandalwood embers", "Vapors of Wormwood"];
    const visualList = ["dim crimson shadows", "glowing amber candle outlines", "volumetric violet smoke rings"];

    btnTransmute.addEventListener('click', () => {
      btnTransmute.disabled = true;
      if (saveBtn) saveBtn.style.display = 'none';
      if (loader) loader.style.display = 'block';
      if (progressBar) progressBar.style.width = '0%';
      this.playClickSound();

      let width = 0;
      
      // requestAnimationFrame Progress loop
      const runProgress = () => {
        width += 2.5;
        if (progressBar) progressBar.style.width = `${width}%`;
        if (width < 100) {
          requestAnimationFrame(runProgress);
        } else {
          if (loader) loader.style.display = 'none';
          btnTransmute.disabled = false;
          
          const reagent = this.safeGet('reagent-base').value;
          const catalyst = this.safeGet('reagent-catalyst').value;
          const intensity = parseInt(intensitySlider.value);
          
          const tool1 = toolList[this.getRandomNumber(toolList.length)];
          const tool2 = toolList.filter(t => t !== tool1)[this.getRandomNumber(toolList.length - 1)];
          const incense = incenseList[this.getRandomNumber(incenseList.length)];
          const visual = visualList[this.getRandomNumber(visualList.length)];

          const html = `
            <div class="parchment-title">Rite of the Transmuted Element</div>
            <div class="form-group" style="margin-bottom:0.75rem;">
              <span class="reagent-badge">Base</span> <strong style="color:var(--accent-gold);">${reagent}</strong>
              <span style="color:var(--text-muted); margin:0 0.5rem;">+</span>
              <span class="reagent-badge" style="border-color:var(--accent-purple); color:var(--accent-purple);">Catalyst</span> <strong style="color:var(--accent-purple);">${catalyst}</strong>
            </div>
            <div class="form-group" style="margin-bottom:0.75rem;">
              <label style="font-size:0.75rem; color:var(--accent-gold);">Implements Required</label>
              <p style="font-size:0.9rem; color:var(--text-secondary);">- ${tool1} & ${tool2}<br>- ${incense}<br>- ${visual}</p>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label style="font-size:0.75rem; color:var(--accent-gold);">Transmutation Steps</label>
              <div class="transmute-step">1. Place the <strong>${reagent}</strong> at the center of the altar space.</div>
              <div class="transmute-step">2. Ignite the <strong>${incense}</strong>, filling the room with thick vapors.</div>
              <div class="transmute-step">3. Focus your mind on the target element for ${intensity * 3} minutes.</div>
            </div>
          `;

          if (parchment) {
            parchment.innerHTML = html;
            parchment.scrollTop = 0;
            parchment.classList.remove('slide-up-entry');
            void parchment.offsetWidth; // Trigger reflow
            parchment.classList.add('slide-up-entry');
          }
          this.activeRecipeHtml = html;
          if (saveBtn) {
            saveBtn.style.display = 'inline-flex';
            saveBtn.classList.remove('slide-up-entry');
            void saveBtn.offsetWidth; // Trigger reflow
            saveBtn.classList.add('slide-up-entry');
          }
        }
      };

      runProgress();
    });

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        if (!this.activeRecipeHtml) return;

        const reagent = this.safeGet('reagent-base').value;
        const catalyst = this.safeGet('reagent-catalyst').value;
        const noteTitle = `Rite of Transmutation: ${reagent.split(' ')[0]} + ${catalyst.split(' ')[0]}`;
        
        const newEntry = {
          id: `entry_${Date.now()}`,
          title: noteTitle,
          content: `### Transmuted Ritual Recipe\n\n${this.activeRecipeHtml.replace(/<[^>]*>/g, '')}`,
          date: new Date().toLocaleDateString()
        };
        
        this.grimoireEntries.unshift(newEntry);
        this.saveGrimoireEntriesToStorage();
        this.renderGrimoireList();

        alert("Ritual recipe logged in Grimoire Notebook!");
        this.switchTab('grimoire-journal');
        this.selectGrimoireEntry(newEntry.id);
      });
    }
  }

  // ==========================================
  // GRIMOIRE NOTES (LOCAL STORAGE & SEARCH)
  // ==========================================
  initGrimoire() {
    this.safeBind('btn-grimoire-new', 'click', () => {
      this.clearGrimoireEditor();
    });

    this.safeBind('btn-grimoire-save', 'click', () => {
      this.saveGrimoireEntry();
    });

    this.safeBind('btn-grimoire-delete', 'click', () => {
      this.deleteGrimoireEntry();
    });

    this.safeBind('btn-grimoire-export', 'click', () => {
      this.exportGrimoireJSON();
    });

    this.safeBind('btn-grimoire-import-trigger', 'click', () => {
      const fileImport = this.safeGet('grimoire-import-file');
      if (fileImport) fileImport.click();
    });

    const fileImport = this.safeGet('grimoire-import-file');
    if (fileImport) {
      fileImport.addEventListener('change', (e) => {
        this.importGrimoireJSON(e);
      });
    }

    const searchInput = this.safeGet('grimoire-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.renderGrimoireList();
      });
    }

    this.loadGrimoireEntriesFromStorage();
  }

  loadGrimoireEntriesFromStorage() {
    const raw = localStorage.getItem('hg_grimoire_entries');
    if (raw) {
      try {
        this.grimoireEntries = JSON.parse(raw);
      } catch (err) {
        this.grimoireEntries = [];
      }
    } else {
      this.grimoireEntries = [
        {
          id: 'seed-1',
          title: 'Initiation Reflection',
          content: 'This grimoire is a secure digital vault of my occult thoughts, desires, and reflections.',
          date: new Date().toLocaleDateString()
        }
      ];
      this.saveGrimoireEntriesToStorage();
    }

    this.renderGrimoireList();
    if (this.grimoireEntries.length > 0) {
      this.selectGrimoireEntry(this.grimoireEntries[0].id);
    }
  }

  saveGrimoireEntriesToStorage() {
    localStorage.setItem('hg_grimoire_entries', JSON.stringify(this.grimoireEntries));
  }

  renderGrimoireList() {
    const listEl = this.safeGet('grimoire-entries-list');
    const searchInput = this.safeGet('grimoire-search');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if (!listEl) return;

    listEl.innerHTML = '';

    const filtered = this.grimoireEntries.filter(entry => {
      return entry.title.toLowerCase().includes(query) || entry.content.toLowerCase().includes(query);
    });

    filtered.forEach(entry => {
      const tab = document.createElement('button');
      tab.className = `grimoire-entry-tab ${this.activeEntryId === entry.id ? 'active' : ''}`;
      
      // Search highlighting visual cue
      let titleHtml = entry.title || 'Untitled Entry';
      if (query && titleHtml.toLowerCase().includes(query)) {
        const regex = new RegExp(`(${query})`, 'gi');
        titleHtml = titleHtml.replace(regex, `<mark style="background:var(--accent-gold); color:#000;">$1</mark>`);
      }

      tab.innerHTML = `
        <div class="grimoire-tab-title">${titleHtml}</div>
        <div class="grimoire-tab-date">${entry.date}</div>
      `;
      tab.addEventListener('click', () => {
        this.selectGrimoireEntry(entry.id);
      });
      listEl.appendChild(tab);
    });
  }

  selectGrimoireEntry(id) {
    this.activeEntryId = id;
    const entry = this.grimoireEntries.find(e => e.id === id);
    if (entry) {
      this.safeGet('grimoire-title').value = entry.title || '';
      this.safeGet('grimoire-content').value = entry.content || '';
    }
    this.renderGrimoireList();
  }

  clearGrimoireEditor() {
    this.activeEntryId = null;
    this.safeGet('grimoire-title').value = '';
    this.safeGet('grimoire-content').value = '';
    this.renderGrimoireList();
  }

  saveGrimoireEntry() {
    const title = this.safeGet('grimoire-title').value.trim() || 'Untitled Entry';
    const content = this.safeGet('grimoire-content').value.trim();

    if (!content) {
      alert("Please write something in the entry first.");
      return;
    }

    if (this.activeEntryId) {
      const entry = this.grimoireEntries.find(e => e.id === this.activeEntryId);
      if (entry) {
        entry.title = title;
        entry.content = content;
        entry.date = new Date().toLocaleDateString();
      }
    } else {
      const newEntry = {
        id: `entry_${Date.now()}`,
        title: title,
        content: content,
        date: new Date().toLocaleDateString()
      };
      this.grimoireEntries.unshift(newEntry);
      this.activeEntryId = newEntry.id;
    }

    this.saveGrimoireEntriesToStorage();
    this.renderGrimoireList();
    this.selectGrimoireEntry(this.activeEntryId);
  }

  deleteGrimoireEntry() {
    if (!this.activeEntryId) {
      this.clearGrimoireEditor();
      return;
    }

    // Safety confirm check
    if (confirm("⚠️ Are you sure you want to permanently delete this grimoire entry? This action is irreversible.")) {
      this.grimoireEntries = this.grimoireEntries.filter(e => e.id !== this.activeEntryId);
      this.saveGrimoireEntriesToStorage();
      this.clearGrimoireEditor();
      this.loadGrimoireEntriesFromStorage();
    }
  }

  exportGrimoireJSON() {
    const blob = new Blob([JSON.stringify(this.grimoireEntries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hg_grimoire_backup_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  importGrimoireJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!confirm("⚠️ WARNING: Importing a backup will overwrite current entries. Proceed?")) {
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          this.grimoireEntries = imported;
          this.saveGrimoireEntriesToStorage();
          this.loadGrimoireEntriesFromStorage();
          alert("Backup successfully imported.");
        } else {
          alert("Invalid backup format.");
        }
      } catch (err) {
        alert("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
  }

  // ==========================================
  // SOLOMON KEYS ARCHIVES
  // ==========================================
  initSolomonGrimoire() {
    this.safeBind('solomon-search', 'input', () => this.renderSolomonList());
    this.safeBind('solomon-filter-cat', 'change', () => this.renderSolomonList());

    const colorOverride = this.safeGet('solomon-color-override');
    if (colorOverride) {
      colorOverride.addEventListener('change', () => {
        this.solomonColorOverride = colorOverride.value;
        const active = this.getSolomonActiveItem();
        if (active) this.displaySolomonDetail(active);
      });
    }

    this.safeBind('btn-solomon-download-svg', 'click', () => {
      const active = this.getSolomonActiveItem();
      if (active) {
        const color = this.getSolomonColor(active);
        const svg = this.generateSolomonSVG(active, color);
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `sigil_${active.name}.svg`;
        link.click();
        URL.revokeObjectURL(url);
      }
    });

    this.renderSolomonList();
  }

  getSolomonActiveItem() {
    if (!this.solomonActiveId) return null;
    if (this.solomonActiveId.startsWith('goetia-')) {
      const id = parseInt(this.solomonActiveId.split('-').pop());
      const s = GOETIA_SPIRITS.find(item => item.id === id);
      if (s) return { id: this.solomonActiveId, name: s.name, category: 'goetia', data: s };
    } else {
      const p = PENTACLES.find(item => item.id === this.solomonActiveId);
      if (p) return { id: this.solomonActiveId, name: p.title, category: 'pentacles', data: p };
    }
    return null;
  }

  renderSolomonList() {
    const listEl = this.safeGet('solomon-entries-list');
    if (!listEl) return;

    const query = this.safeGet('solomon-search') ? this.safeGet('solomon-search').value.toLowerCase().trim() : '';
    const cat = this.safeGet('solomon-filter-cat') ? this.safeGet('solomon-filter-cat').value : 'all';

    listEl.innerHTML = '';
    const items = [];

    if (cat === 'all' || cat === 'goetia') {
      GOETIA_SPIRITS.forEach(s => {
        if (s.name.toLowerCase().includes(query) || s.rank.toLowerCase().includes(query)) {
          items.push({ id: `goetia-${s.id}`, name: s.name, sub: `${s.rank} of ${s.planet}`, glyph: this.getPlanetaryGlyph(s.planet), category: 'goetia', data: s });
        }
      });
    }

    if (cat === 'all' || cat === 'pentacles') {
      PENTACLES.forEach(p => {
        if (p.title.toLowerCase().includes(query)) {
          items.push({ id: p.id, name: p.title, sub: p.planet, glyph: this.getPlanetaryGlyph(p.planet), category: 'pentacles', data: p });
        }
      });
    }

    items.forEach(item => {
      const btn = document.createElement('button');
      btn.className = `solomon-item ${this.solomonActiveId === item.id ? 'active' : ''}`;
      btn.innerHTML = `
        <div>
          <div class="solomon-item-name">${item.name}</div>
          <div class="solomon-item-sub">${item.sub}</div>
        </div>
        <div class="solomon-item-glyph">${item.glyph}</div>
      `;
      btn.addEventListener('click', () => {
        this.solomonActiveId = item.id;
        this.renderSolomonList();
        this.displaySolomonDetail(item);
      });
      listEl.appendChild(btn);
    });

    if (!this.solomonActiveId && items.length > 0) {
      this.solomonActiveId = items[0].id;
      this.renderSolomonList();
      this.displaySolomonDetail(items[0]);
    }
  }

  getPlanetaryGlyph(planet) {
    const glyphs = { Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃", Venus: "♀", Saturn: "♄" };
    return glyphs[planet] || "⛧";
  }

  getSolomonColor(entry) {
    if (this.solomonColorOverride !== 'default') {
      const colors = { gold: 'var(--accent-gold)', purple: 'var(--accent-purple)', primary: 'var(--primary)', cyan: 'var(--accent-cyan)' };
      return colors[this.solomonColorOverride] || 'var(--accent-gold)';
    }
    if (entry.category === 'goetia') {
      const ranks = { King: 'var(--accent-gold)', Prince: 'var(--accent-purple)', President: 'var(--accent-purple)', Duke: '#39ff14', Marquess: '#ffffff', Earl: 'var(--primary)' };
      return ranks[entry.data.rank] || 'var(--accent-gold)';
    } else {
      const planets = { Saturn: '#9867ff', Jupiter: 'var(--accent-cyan)', Mars: 'var(--primary)', Sun: 'var(--accent-gold)', Venus: '#3eff5b', Mercury: '#ff8400', Moon: '#ffffff' };
      return planets[entry.data.planet] || 'var(--accent-gold)';
    }
  }

  displaySolomonDetail(item) {
    const pane = this.safeGet('solomon-detail-pane');
    if (!pane) return;

    pane.classList.remove('slide-up-entry');
    void pane.offsetWidth; // Trigger reflow
    pane.classList.add('slide-up-entry');

    const customizer = this.safeGet('solomon-customizer-card');
    if (customizer) {
      customizer.style.display = 'block';
      customizer.classList.remove('slide-up-entry');
      void customizer.offsetWidth; // Trigger reflow
      customizer.classList.add('slide-up-entry');
    }

    const color = this.getSolomonColor(item);
    const svg = this.generateSolomonSVG(item, color);

    if (item.category === 'goetia') {
      const s = item.data;
      pane.innerHTML = `
        <div class="solomon-view">
          <div class="solomon-metadata">
            <h3 style="color:${color}; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; font-size:1.4rem;">${s.name}</h3>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Hierarchical Rank</span><span class="solomon-meta-val">${s.rank}</span></div>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Sphere</span><span class="solomon-meta-val">${s.planet}</span></div>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Legions</span><span class="solomon-meta-val">${s.legions}</span></div>
            <div class="solomon-desc">
              <h4>Office & Powers</h4>
              <p>${s.office}</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div class="solomon-svg-container" style="border-color:${color}; box-shadow:0 0 15px ${color}22;">${svg}</div>
          </div>
        </div>
      `;
    } else {
      const p = item.data;
      pane.innerHTML = `
        <div class="solomon-view">
          <div class="solomon-metadata">
            <h3 style="color:${color}; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; font-size:1.4rem;">${p.title}</h3>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Planet</span><span class="solomon-meta-val">${p.planet}</span></div>
            <div class="solomon-desc">
              <h4>Talisman Virtue</h4>
              <p>${p.virtue}</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div class="solomon-svg-container" style="border-color:${color}; box-shadow:0 0 15px ${color}22;">${svg}</div>
          </div>
        </div>
      `;
    }

    // Scroll to details panel dynamically on mobile
    if (window.innerWidth <= 900) {
      pane.scrollIntoView({ behavior: 'smooth' });
    }
  }

  generateSolomonSVG(item, color) {
    const id = item.id;
    const isGoetia = item.category === 'goetia';
    const inscription = isGoetia ? `✦ GOETIA SPIRIT ${item.data.name.toUpperCase()} ✦` : `✦ GREATER KEY OF SOLOMON ✦`;
    const innerGeom = isGoetia ? this.drawProceduralGoeticSeal(item.data.name, color) : this.drawPlanetaryTalisman(item.data.planet, item.data.num, color);

    return `
      <svg viewBox="0 0 300 300" class="solomon-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="circle-text-path-${id}" d="M 150, 150 m 0, -114 a 114,114 0 1,1 0,228 a 114,114 0 1,1 0,-228" fill="none"/>
        </defs>
        <circle cx="150" cy="150" r="130" stroke="${color}" stroke-width="2.5" fill="none" />
        <circle cx="150" cy="150" r="108" stroke="${color}" stroke-width="1.5" fill="none" />
        <text fill="${color}" font-family="'Cinzel', serif" font-size="8.5" font-weight="700" letter-spacing="1">
          <textPath href="#circle-text-path-${id}" startOffset="50%" text-anchor="middle">
            ${inscription}
          </textPath>
        </text>
        ${innerGeom}
      </svg>
    `;
  }

  drawProceduralGoeticSeal(name, color) {
    let seed = 0;
    for (let i = 0; i < name.length; i++) {
      seed += name.charCodeAt(i) * (i + 1) * 31;
    }
    const prng = () => {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const cx = 150;
    const cy = 150;
    const r = 80;
    let svg = "";

    const numPoints = Math.floor(prng() * 4) + 5;
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i * Math.PI * 2) / numPoints - Math.PI / 2;
      points.push({
        x: cx + r * 0.7 * Math.cos(angle),
        y: cy + r * 0.7 * Math.sin(angle)
      });
    }

    svg += `<polygon points="${points.map(p => `${p.x},${p.y}`).join(' ')}" stroke="${color}" stroke-width="1.5" fill="none" />`;

    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 2; j < numPoints; j++) {
        if (prng() < 0.5) {
          svg += `<line x1="${points[i].x}" y1="${points[i].y}" x2="${points[j].x}" y2="${points[j].y}" stroke="${color}" stroke-width="1.25" />`;
        }
      }
    }

    svg += `<circle cx="${cx}" cy="${cy}" r="15" stroke="${color}" stroke-width="1.5" fill="none" />`;
    svg += `<line x1="${cx - 25}" y1="${cy}" x2="${cx + 25}" y2="${cy}" stroke="${color}" stroke-width="1.5" />`;

    return svg;
  }

  drawPlanetaryTalisman(planet, number, color) {
    const cx = 150;
    const cy = 150;
    let svg = "";

    svg += `<circle cx="${cx}" cy="${cy}" r="75" stroke="${color}" stroke-width="1.5" fill="none" />`;
    svg += `<text x="${cx}" y="${cy + 10}" fill="${color}" font-size="30" font-family="'Cinzel', serif" text-anchor="middle">
      ${this.getPlanetaryGlyph(planet)}
    </text>`;

    return svg;
  }

  // ==========================================
  // SCENARIO ALIGNMENT QUIZ (TST PHILOSOPHY)
  // ==========================================
  initTenetQuiz() {
    this.safeBind('btn-tenet-quiz-next', 'click', () => {
      this.tenetQuizIndex = (this.tenetQuizIndex + 1) % TENET_QUIZ_SCENARIOS.length;
      this.renderTenetQuizScenario();
    });
    this.renderTenetQuizScenario();
  }

  renderTenetQuizScenario() {
    const questionEl = this.safeGet('tenet-quiz-question');
    const optionsEl = this.safeGet('tenet-quiz-options');
    const feedbackEl = this.safeGet('tenet-quiz-feedback');

    if (!questionEl || !optionsEl || !feedbackEl) return;

    const s = TENET_QUIZ_SCENARIOS[this.tenetQuizIndex];
    questionEl.innerText = `Scenario ${this.tenetQuizIndex + 1}: ${s.question}`;
    optionsEl.innerHTML = '';
    feedbackEl.style.display = 'none';

    s.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerText = opt.text;
      btn.addEventListener('click', () => {
        feedbackEl.style.display = 'block';
        feedbackEl.innerHTML = `<strong>Alignment: Tenet ${opt.tenet}</strong><br>${opt.feedback}`;
      });
      optionsEl.appendChild(btn);
    });
  }

  // ==========================================
  // CHAMBER 12: BANISHMENT PENTAGRAM RITUAL
  // ==========================================
  initBanishment() {
    const canvas = this.safeGet('banish-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = 90;

    const points = [
      { x: cx - r * Math.sin(Math.PI * 2 / 5), y: cy + r * Math.cos(Math.PI * 2 / 5), label: "1" },
      { x: cx, y: cy - r, label: "2" },
      { x: cx + r * Math.sin(Math.PI * 2 / 5), y: cy + r * Math.cos(Math.PI * 2 / 5), label: "3" },
      { x: cx - r * Math.sin(Math.PI / 5), y: cy - r * Math.cos(Math.PI / 5), label: "4" },
      { x: cx + r * Math.sin(Math.PI / 5), y: cy - r * Math.cos(Math.PI / 5), label: "5" }
    ];

    const drawCleanBanish = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.stroke();

      points.forEach(p => {
        ctx.fillStyle = '#100e11';
        ctx.strokeStyle = 'var(--accent-gold)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(p.x, p.y, 11, 0, Math.PI*2); ctx.fill(); ctx.stroke();

        ctx.fillStyle = 'var(--text-primary)';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.label, p.x, p.y);
      });
    };

    drawCleanBanish();

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.addEventListener('mousedown', (e) => {
      this.banishIsDrawing = true;
      this.banishPoints = [getPos(e)];
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!this.banishIsDrawing) return;
      this.banishPoints.push(getPos(e));

      drawCleanBanish();
      ctx.strokeStyle = 'var(--primary)';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(this.banishPoints[0].x, this.banishPoints[0].y);
      for (let i = 1; i < this.banishPoints.length; i++) {
        ctx.lineTo(this.banishPoints[i].x, this.banishPoints[i].y);
      }
      ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => {
      if (!this.banishIsDrawing) return;
      this.banishIsDrawing = false;
      this.evaluateBanishmentPath(points);
    });

    this.safeBind('btn-reset-banish', 'click', () => {
      this.banishPoints = [];
      drawCleanBanish();
      this.safeGet('banish-outcome').innerHTML = `<p style="color:var(--text-secondary); font-size:0.95rem;">Draw the star to initiate cleansing.</p>`;
    });
  }

  evaluateBanishmentPath(guidePoints) {
    const outcome = this.safeGet('banish-outcome');
    if (!outcome) return;

    const path = this.banishPoints;
    if (path.length < 10) return;

    const visited = [];
    path.forEach(pt => {
      guidePoints.forEach((gpt, idx) => {
        const dist = Math.sqrt((pt.x - gpt.x)**2 + (pt.y - gpt.y)**2);
        if (dist < 22) {
          if (visited.length === 0 || visited[visited.length - 1] !== idx) {
            visited.push(idx);
          }
        }
      });
    });

    const expected = [0, 1, 2, 3, 4, 0];
    let matched = 0;
    let expIdx = 0;
    visited.forEach(v => {
      if (v === expected[expIdx]) {
        matched++;
        expIdx++;
      }
    });

    if (matched >= 5) {
      outcome.innerHTML = `
        <h4 style="color:#39ff14; font-family:'Cinzel',serif; margin-bottom:0.25rem;">Cleansing Complete</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">Temple energy cleansed. Simulated characters stats restored.</p>
      `;
      this.journeyStats = { willpower: 15, aesthetics: 15, resolve: 15 };
      this.updateJourneyStatsUI();
      this.playClickSound();
    } else {
      outcome.innerHTML = `
        <h4 style="color:var(--primary); font-family:'Cinzel',serif; margin-bottom:0.25rem;">Trace Incomplete</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">Draw starting at 1, going through 2 -> 3 -> 4 -> 5 and back to 1.</p>
      `;
    }
  }

  // ==========================================
  // CHAMBER 13: ASTROLABE
  // ==========================================
  initAstrolabe() {
    const sun = this.safeGet('astrolabe-sun');
    const moon = this.safeGet('astrolabe-moon');
    const saturn = this.safeGet('astrolabe-saturn');

    if (!sun) return;

    const canvas = this.safeGet('astrolabe-canvas');
    const ctx = canvas.getContext('2d');

    const updateDials = () => {
      const sunDeg = parseInt(sun.value);
      const moonDeg = parseInt(moon.value);
      const saturnDeg = parseInt(saturn.value);

      this.safeGet('astrolabe-sun-val').innerText = `${sunDeg}°`;
      this.safeGet('astrolabe-moon-val').innerText = `${moonDeg}°`;
      this.safeGet('astrolabe-saturn-val').innerText = `${saturnDeg}°`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.strokeStyle = 'var(--border-color)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI*2); ctx.stroke();

      const drawPlanetRing = (radius, deg, color, glyph) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI*2); ctx.stroke();

        const rad = (deg * Math.PI) / 180;
        const px = cx + radius * Math.cos(rad);
        const py = cy + radius * Math.sin(rad);

        ctx.fillStyle = color;
        ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill();

        ctx.fillStyle = 'var(--text-primary)';
        ctx.font = '11px sans-serif';
        ctx.fillText(glyph, px - 4, py + 4);
      };

      drawPlanetRing(65, sunDeg, 'var(--accent-gold)', '☉');
      drawPlanetRing(45, moonDeg, 'var(--text-primary)', '☽');
      drawPlanetRing(25, saturnDeg, 'var(--accent-purple)', '♄');

      const diff1 = Math.abs(sunDeg - moonDeg) % 360;
      const diff2 = Math.abs(moonDeg - saturnDeg) % 360;
      const diff3 = Math.abs(sunDeg - saturnDeg) % 360;

      const threshold = 10;
      const conj1 = diff1 <= threshold || diff1 >= 360 - threshold;
      const conj2 = diff2 <= threshold || diff2 >= 360 - threshold;
      const conj3 = diff3 <= threshold || diff3 >= 360 - threshold;

      const reading = this.safeGet('astrolabe-reading');
      if (conj1 && conj2 && conj3) {
        reading.innerHTML = `🌟 <strong>TRIPLE ECLIPSE CONJUNCTION!</strong><br>Planetary focus multiplier active. Synth hum volume augmented.`;
        reading.style.color = '#39ff14';
        this.astrolabeUnlocked = true;
        if (this.audioCtx && this.humGainNode) {
          this.humGainNode.gain.setValueAtTime(0.95, this.audioCtx.currentTime);
        }
      } else {
        reading.innerHTML = `Rotate the Sun, Moon, and Saturn rings to align the spheres and unlock Eclipse Mode.`;
        reading.style.color = 'var(--text-secondary)';
        this.astrolabeUnlocked = false;
        if (this.audioCtx && this.humGainNode) {
          this.humGainNode.gain.setValueAtTime(0.5, this.audioCtx.currentTime);
        }
      }
    };

    [sun, moon, saturn].forEach(s => s.addEventListener('input', updateDials));
    updateDials();
  }

  // ==========================================
  // Summons Pit: Goetic Demon SUMMONER
  // ==========================================
  initGoeticGenerator() {
    const btn = this.safeGet('btn-summon-demon');
    if (!btn) return;

    const namesPrefix = ["Zor", "Phal", "Vex", "Bar", "Amon", "Mal"];
    const namesSuffix = ["oth", "agor", "ion", "akor", "imon", "ith"];
    const offices = ["wealth and monetary treasures", "invisibility and hidden secrets", "languages and intellectual arguments"];

    btn.addEventListener('click', () => {
      this.playClickSound();
      
      const rank = this.safeGet('demon-rank').value;
      const elem = this.safeGet('demon-element').value;
      
      const name = namesPrefix[this.getRandomNumber(namesPrefix.length)] + namesSuffix[this.getRandomNumber(namesSuffix.length)];
      const legions = this.getRandomNumber(80) + 12;
      const office = offices[this.getRandomNumber(offices.length)];

      this.safeGet('demon-output-title').innerText = `Summoned: ${name}`;
      this.safeGet('demon-output-desc').innerHTML = `
        A powerful <strong>${rank}</strong> of the <strong>${elem}</strong> vector.<br>
        He commands <strong>${legions}</strong> legions of sub-spirits.<br>
        <strong>Magical Office:</strong> Provides deep mastery over ${office} and secures sovereignty.
      `;

      const strokeColor = rank === 'King' ? 'var(--accent-gold)' : rank === 'Prince' ? 'var(--accent-purple)' : 'var(--primary)';
      const mockItem = { id: `gen-${name}`, category: 'goetia', data: { name, rank, element: elem } };
      this.safeGet('demon-sigil-container').innerHTML = this.generateSolomonSVG(mockItem, strokeColor);

      const outputCard = this.safeGet('demon-output-card');
      if (outputCard) {
        outputCard.style.display = 'block';
        outputCard.classList.remove('slide-up-entry');
        void outputCard.offsetWidth; // Trigger reflow
        outputCard.classList.add('slide-up-entry');
      }
    });
  }

  // ==========================================
  // PRIVATE CIPHER VAULT (ASCII RESTRICTED)
  // ==========================================
  initCryptographyCipher() {
    const btnEncrypt = this.safeGet('btn-cipher-encrypt');
    const btnDecrypt = this.safeGet('btn-cipher-decrypt');
    const saveBtn = this.safeGet('btn-cipher-save-journal');

    if (!btnEncrypt) return;

    btnEncrypt.addEventListener('click', () => {
      const key = this.safeGet('cipher-key').value.trim() || "TEMPLE";
      const input = this.safeGet('cipher-input').value;
      if (!input) return;

      const encrypted = this.vigenereXORCipher(input, key, true);
      this.safeGet('cipher-output').value = encrypted;
      if (saveBtn) saveBtn.style.display = 'inline-flex';
      this.playClickSound();
    });

    btnDecrypt.addEventListener('click', () => {
      const key = this.safeGet('cipher-key').value.trim() || "TEMPLE";
      const input = this.safeGet('cipher-input').value;
      if (!input) return;

      const decrypted = this.vigenereXORCipher(input, key, false);
      this.safeGet('cipher-output').value = decrypted;
      if (saveBtn) saveBtn.style.display = 'none';
      this.playClickSound();
    });

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const text = this.safeGet('cipher-output').value;
        if (!text) return;

        const newEntry = {
          id: `entry_${Date.now()}`,
          title: `Encrypted Log: ${new Date().toLocaleDateString()}`,
          content: `### Encrypted Grimoire Entry\n\n\`\`\`\n${text}\n\`\`\`\n\nUse the Cipher chamber with your key to unlock.`,
          date: new Date().toLocaleDateString()
        };
        
        this.grimoireEntries.unshift(newEntry);
        this.saveGrimoireEntriesToStorage();
        this.renderGrimoireList();

        alert("Encrypted log locked in Grimoire Notebook!");
        this.switchTab('grimoire-journal');
        this.selectGrimoireEntry(newEntry.id);
      });
    }
  }

  vigenereXORCipher(text, key, isEncrypt) {
    let output = "";
    if (isEncrypt) {
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const keyChar = key.charCodeAt(i % key.length);
        // Shift values in standard printable ASCII bounds (32-126) to prevent overflow control chars
        const shifted = 32 + ((charCode - 32 + keyChar) % 95);
        output += String.fromCharCode(shifted);
      }
      return btoa(unescape(encodeURIComponent(output)));
    } else {
      try {
        const decoded = decodeURIComponent(escape(atob(text)));
        for (let i = 0; i < decoded.length; i++) {
          const charCode = decoded.charCodeAt(i);
          const keyChar = key.charCodeAt(i % key.length);
          const unshifted = 32 + ((charCode - 32 - keyChar + 95 * 1000) % 95);
          output += String.fromCharCode(unshifted);
        }
        return output;
      } catch (err) {
        return "⚠️ Error: Decryption failed. Check key.";
      }
    }
  }

  // ==========================================
  // BLOOD PACT
  // ==========================================
  initBloodPact() {
    const canvas = this.safeGet('pact-canvas');
    const spiritSelect = this.safeGet('pact-spirit');
    const clearBtn = this.safeGet('btn-pact-clear');
    const sealBtn = this.safeGet('btn-pact-seal');

    if (!canvas) return;

    // Populate spirits
    if (spiritSelect) {
      spiritSelect.innerHTML = '';
      GOETIA_SPIRITS.slice(0, 15).forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.name;
        opt.innerText = `${s.name} (${s.rank})`;
        spiritSelect.appendChild(opt);
      });
    }

    const ctx = canvas.getContext('2d');
    let drawing = false;

    ctx.strokeStyle = 'rgba(255, 90, 121, 0.9)';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.addEventListener('mousedown', (e) => {
      drawing = true;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => drawing = false);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }

    if (sealBtn) {
      sealBtn.addEventListener('click', () => {
        const spirit = spiritSelect.value;
        const terms = this.safeGet('pact-terms').value.trim();

        if (!terms) {
          alert("Please write the pledge terms first.");
          return;
        }

        this.playClickSound();

        const newEntry = {
          id: `entry_${Date.now()}`,
          title: `Blood Pact: ${spirit}`,
          content: `### Covenant Pact Sealed\n\n**Witness**: ${spirit}\n**Pledge Terms**:\n\n${terms}\n\n*Signed in blood-red brush locally.*`,
          date: new Date().toLocaleDateString()
        };

        this.grimoireEntries.unshift(newEntry);
        this.saveGrimoireEntriesToStorage();
        this.renderGrimoireList();

        alert(`Pact with ${spirit} successfully sealed!`);
        this.switchTab('grimoire-journal');
        this.selectGrimoireEntry(newEntry.id);
      });
    }
  }

  // ==========================================
  // CENSER SMOKE PARTICLES
  // ==========================================
  initCenserSmoke() {
    const canvas = this.safeGet('incense-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const blendSelect = this.safeGet('incense-blend');
    const densitySlider = this.safeGet('incense-density');

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
    };
    window.addEventListener('resize', resize);
    resize();

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      this.incenseWind = (mx - canvas.width / 2) * 0.005;
    });

    const loop = () => {
      this.incenseAnimationId = requestAnimationFrame(loop);
      ctx.fillStyle = '#060506';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const blend = blendSelect ? blendSelect.value : 'frankincense';
      const density = densitySlider ? parseInt(densitySlider.value) : 3;

      const colors = {
        frankincense: 'rgba(255, 90, 121, ',
        wormwood: 'rgba(182, 36, 255, ',
        amber: 'rgba(229, 169, 59, '
      };

      if (this.activeTab === 'incense') {
        for (let i = 0; i < density; i++) {
          this.smokeParticles.push({
            x: canvas.width / 2 + (Math.random() * 20 - 10),
            y: canvas.height - 20,
            vx: Math.random() * 0.8 - 0.4,
            vy: -(Math.random() * 1.5 + 1.2),
            size: Math.random() * 4 + 4,
            alpha: 1,
            decay: Math.random() * 0.006 + 0.005,
            color: colors[blend] || colors.frankincense
          });
        }
      }

      for (let i = this.smokeParticles.length - 1; i >= 0; i--) {
        const p = this.smokeParticles[i];
        p.x += p.vx + this.incenseWind;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size += 0.07;

        if (p.alpha <= 0) {
          this.smokeParticles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
      }

      ctx.fillStyle = '#100e11';
      ctx.strokeStyle = 'var(--border-color)';
      ctx.beginPath(); ctx.arc(canvas.width / 2, canvas.height - 10, 20, 0, Math.PI, true); ctx.fill(); ctx.stroke();
    };

    loop();
  }

  // ==========================================
  // ACOUSTIC NODES MATRIX
  // ==========================================
  initAcousticNodes() {
    const canvas = this.safeGet('echoes-canvas');
    const playBtn = this.safeGet('btn-echoes-play');
    const clearBtn = this.safeGet('btn-echoes-clear');
    
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = 90;

    const coords = [];
    const freqs = [220, 246.94, 261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25, 587.33, 659.25];

    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
      coords.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle), freq: freqs[i] });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.stroke();

      if (this.echoesSelectedNodes.length > 1) {
        ctx.strokeStyle = 'rgba(182, 36, 255, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const first = coords[this.echoesSelectedNodes[0]];
        ctx.moveTo(first.x, first.y);
        for (let idx of this.echoesSelectedNodes) {
          const pt = coords[idx];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      coords.forEach((c, idx) => {
        const active = this.echoesSelectedNodes.includes(idx);
        ctx.fillStyle = active ? 'var(--primary)' : '#100e11';
        ctx.strokeStyle = active ? 'var(--primary)' : 'var(--border-color)';
        ctx.beginPath(); ctx.arc(c.x, c.y, 8, 0, Math.PI*2); ctx.fill(); ctx.stroke();
      });
    };

    draw();

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      coords.forEach((c, idx) => {
        const dist = Math.sqrt((mx - c.x)**2 + (my - c.y)**2);
        if (dist < 15) {
          const activeIdx = this.echoesSelectedNodes.indexOf(idx);
          if (activeIdx === -1) {
            this.echoesSelectedNodes.push(idx);
            this.playEchoNodeChime(c.freq);
          } else {
            this.echoesSelectedNodes.splice(activeIdx, 1);
          }
          draw();
        }
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.echoesSelectedNodes = [];
        draw();
      });
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (this.echoesSelectedNodes.length === 0) return;
        this.resonateSigilChord(coords);
      });
    }
  }

  playEchoNodeChime(freq) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    
    // Smooth Attack/Decay envelope (prevents clicking)
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
    
    osc.connect(gain);
    gain.connect(this.masterGainNode || this.audioCtx.destination);
    
    osc.start(now);
    osc.stop(now + 0.5);
  }

  resonateSigilChord(coords) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    
    this.echoesSelectedNodes.forEach(idx => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(coords[idx].freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12 / this.echoesSelectedNodes.length, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
      
      osc.connect(gain);
      gain.connect(this.masterGainNode || this.audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 2);
    });

    const status = this.safeGet('echoes-status');
    if (status) status.innerText = `Resonating sigil chords at ${this.echoesSelectedNodes.length} node pitches.`;
  }

  // ==========================================
  // SHADOW WORK MIRROR
  // ==========================================
  initShadowMirror() {
    const next = this.safeGet('btn-mirror-next');
    const dissolve = this.safeGet('btn-mirror-dissolve');
    const response = this.safeGet('mirror-response');
    
    if (!next) return;

    const displayPrompt = () => {
      this.safeGet('mirror-prompt').innerText = this.shadowPrompts[this.shadowPromptIndex];
    };

    next.addEventListener('click', () => {
      this.shadowPromptIndex = (this.shadowPromptIndex + 1) % this.shadowPrompts.length;
      displayPrompt();
      if (response) response.value = '';
    });

    displayPrompt();

    const canvas = this.safeGet('mirror-canvas');
    const ctx = canvas.getContext('2d');
    const placeholder = this.safeGet('mirror-placeholder');

    if (dissolve && response && canvas) {
      dissolve.addEventListener('click', () => {
        if (!response.value.trim()) return;

        this.playClickSound();
        if (placeholder) placeholder.style.display = 'none';
        canvas.style.display = 'block';

        this.mirrorParticles = [];
        for (let i = 0; i < 50; i++) {
          this.mirrorParticles.push({
            x: canvas.width / 2 + (Math.random() * 40 - 20),
            y: canvas.height / 2 + (Math.random() * 40 - 20),
            vx: Math.random() * 6 - 3,
            vy: Math.random() * 6 - 3,
            size: Math.random() * 3 + 2.5,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.01
          });
        }

        response.value = "";

        const run = () => {
          ctx.fillStyle = '#060506';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          let active = 0;
          this.mirrorParticles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            if (p.alpha > 0) {
              active++;
              ctx.fillStyle = `rgba(255, 90, 121, ${p.alpha})`;
              ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
            }
          });

          if (active > 0) {
            this.mirrorAnimationId = requestAnimationFrame(run);
          } else {
            canvas.style.display = 'none';
            if (placeholder) {
              placeholder.style.display = 'flex';
              placeholder.innerText = "Reflected thought dissolved into shadows.";
            }
          }
        };
        run();
      });
    }
  }

  // ==========================================
  // SIGIL CHARGING STATION
  // ==========================================
  initChargingStation() {
    const holdBtn = this.safeGet('btn-charging-hold');
    const saveBtn = this.safeGet('btn-charging-save');
    const levelText = this.safeGet('charging-level');
    const statusText = this.safeGet('charging-status');
    const aura = this.safeGet('charging-aura');

    if (!holdBtn) return;

    const startCharge = (e) => {
      e.preventDefault();
      holdBtn.innerText = "Concentrating Will...";
      if (aura) aura.classList.add('charging-active');

      if (this.audioCtx) {
        this.chargeOsc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        this.chargeOsc.type = 'sawtooth';
        this.chargePitchFrequency = 110;
        this.chargeOsc.frequency.setValueAtTime(this.chargePitchFrequency, this.audioCtx.currentTime);
        
        gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
        this.chargeOsc.connect(gain);
        gain.connect(this.masterGainNode || this.audioCtx.destination);
        this.chargeOsc.start();
      }

      this.chargeIntervalId = setInterval(() => {
        if (this.chargeLevel < 100) {
          this.chargeLevel += 2;
          if (levelText) levelText.innerText = `${this.chargeLevel}%`;
          if (statusText) statusText.innerText = `Charging aura concentration expanding...`;
          
          if (aura) {
            aura.style.width = `${this.chargeLevel * 1.8}px`;
            aura.style.height = `${this.chargeLevel * 1.8}px`;
            aura.style.opacity = this.chargeLevel / 100;
          }

          if (this.chargeOsc) {
            this.chargePitchFrequency += 12;
            this.chargeOsc.frequency.setValueAtTime(this.chargePitchFrequency, this.audioCtx.currentTime);
          }
        } else {
          clearInterval(this.chargeIntervalId);
          if (levelText) {
            levelText.innerText = "100%";
            levelText.style.color = '#39ff14';
          }
          if (statusText) statusText.innerText = "Charging complete! Intention successfully manifested.";
          if (saveBtn) saveBtn.style.display = 'inline-flex';
          this.stopChargeAudio();
        }
      }, 50);
    };

    const stopCharge = () => {
      clearInterval(this.chargeIntervalId);
      holdBtn.innerText = "⚡ Hold to Charge Intention";
      if (aura) aura.classList.remove('charging-active');
      this.stopChargeAudio();
      
      if (this.chargeLevel < 100) {
        this.chargeLevel = 0;
        if (levelText) {
          levelText.innerText = "0%";
          levelText.style.color = 'var(--accent-gold)';
        }
        if (statusText) statusText.innerText = "Focus broke. Charge grounded.";
        if (aura) {
          aura.style.width = '0px';
          aura.style.height = '0px';
          aura.style.opacity = 0;
        }
        if (saveBtn) saveBtn.style.display = 'none';
      }
    };

    holdBtn.addEventListener('mousedown', startCharge);
    holdBtn.addEventListener('mouseup', stopCharge);
    holdBtn.addEventListener('mouseleave', stopCharge);
    holdBtn.addEventListener('touchstart', startCharge);
    holdBtn.addEventListener('touchend', stopCharge);

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const newEntry = {
          id: `entry_${Date.now()}`,
          title: `Charged Intent Log: ${new Date().toLocaleDateString()}`,
          content: `### Sigil Intent Charged to 100%`,
          date: new Date().toLocaleDateString()
        };
        this.grimoireEntries.unshift(newEntry);
        this.saveGrimoireEntriesToStorage();
        this.renderGrimoireList();
        alert("Charged intention logged in notebook!");
        this.switchTab('grimoire-journal');
        this.selectGrimoireEntry(newEntry.id);
      });
    }
  }

  stopChargeAudio() {
    if (this.chargeOsc) {
      try {
        this.chargeOsc.stop();
      } catch (e) {}
      this.chargeOsc.disconnect();
      this.chargeOsc = null;
    }
  }

  // ==========================================
  // DARK SCRYING MIRROR
  // ==========================================
  initDarkScryer() {
    const canvas = this.safeGet('scryer-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const whisper = this.safeGet('scryer-rune-whisper');
    const runesList = ["⛧", "🜏", "ᛉ", "ᛏ", "ᛟ", "🜓"];

    const loop = () => {
      this.scryerAnimationId = requestAnimationFrame(loop);
      ctx.fillStyle = 'rgba(6, 5, 6, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = this.scryerRipples.length - 1; i >= 0; i--) {
        const r = this.scryerRipples[i];
        r.rad += 3;
        r.alpha -= 0.015;

        if (r.alpha <= 0) {
          this.scryerRipples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(182, 36, 255, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(r.x, r.y, r.rad, 0, Math.PI*2); ctx.stroke();
      }

      for (let i = this.scryerRunes.length - 1; i >= 0; i--) {
        const rn = this.scryerRunes[i];
        rn.y -= 0.5;
        rn.alpha -= 0.01;

        if (rn.alpha <= 0) {
          this.scryerRunes.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(229, 169, 59, ${rn.alpha})`;
        ctx.font = '22px Cinzel';
        ctx.fillText(rn.char, rn.x, rn.y);
      }
    };
    loop();

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Cap scrying arrays at 10 items (prevents leaks)
      if (this.scryerRipples.length > 10) this.scryerRipples.shift();
      if (this.scryerRunes.length > 10) this.scryerRunes.shift();

      this.scryerRipples.push({ x: mx, y: my, rad: 5, alpha: 0.8 });
      this.playEchoNodeChime(150 + Math.random() * 80);

      if (Math.random() > 0.4) {
        const rune = runesList[this.getRandomNumber(runesList.length)];
        this.scryerRunes.push({ x: mx - 8, y: my + 5, char: rune, alpha: 0.9 });
        if (whisper) whisper.innerText = "Align your mind with the shadows.";
      }
    });
  }

  // ==========================================
  // GNOSIS TRIVIA QUIZ
  // ==========================================
  initTriviaQuiz() {
    this.safeBind('btn-trivia-next', 'click', () => {
      this.triviaIndex = (this.triviaIndex + 1) % GNOSIS_TRIVIA_QUESTIONS.length;
      this.renderTriviaQuestion();
    });
    this.renderTriviaQuestion();
  }

  renderTriviaQuestion() {
    const questionEl = this.safeGet('trivia-question');
    const optionsEl = this.safeGet('trivia-options');
    const scoreEl = this.safeGet('trivia-score');
    const nextBtn = this.safeGet('btn-trivia-next');

    if (!questionEl || !optionsEl || !scoreEl) return;

    const q = GNOSIS_TRIVIA_QUESTIONS[this.triviaIndex];
    questionEl.innerText = `${this.triviaIndex + 1}. ${q.q}`;
    optionsEl.innerHTML = '';
    if (nextBtn) nextBtn.style.display = 'none';

    q.a.forEach((choice, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerText = choice;
      btn.addEventListener('click', () => {
        const btns = optionsEl.querySelectorAll('button');
        btns.forEach(b => b.disabled = true);

        this.triviaTotalVal++;
        if (idx === q.correct) {
          btn.classList.add('correct-choice');
          this.triviaScoreVal++;
        } else {
          btn.classList.add('incorrect-choice');
          btns[q.correct].classList.add('correct-choice');
        }

        scoreEl.innerText = `${this.triviaScoreVal} / ${this.triviaTotalVal}`;
        if (nextBtn) nextBtn.style.display = 'inline-flex';
        this.playClickSound();
      });
      optionsEl.appendChild(btn);
    });
  }

  initSmokeChambers() {
    const smokeTabs = ['serpent', 'brimstone', 'dragon', 'transmute', 'banish'];
    const colors = {
      serpent: ['rgba(57, 255, 20, ', 'rgba(182, 36, 255, '],
      brimstone: ['rgba(255, 255, 0, ', 'rgba(150, 150, 150, '],
      dragon: ['rgba(255, 90, 121, ', 'rgba(229, 169, 59, '],
      transmute: ['rgba(182, 36, 255, ', 'rgba(0, 240, 255, '],
      banish: ['rgba(0, 240, 255, ', 'rgba(255, 255, 255, ']
    };

    smokeTabs.forEach(tab => {
      const canvas = this.safeGet(`${tab}-canvas`) || this.safeGet(`${tab}-smoke-canvas`);
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const btn = this.safeGet(`btn-exhale-${tab}`);
      let particles = [];
      let wind = 0;

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        wind = (mx - canvas.width / 2) * 0.006;
      });

      if (btn) {
        btn.addEventListener('click', () => {
          this.playClickSound();
          const activeColors = colors[tab] || colors.serpent;
          
          for (let i = 0; i < 45; i++) {
            particles.push({
              x: canvas.width / 2 + (Math.random() * 35 - 17.5),
              y: canvas.height - 10,
              vx: (Math.random() * 5 - 2.5),
              vy: -(Math.random() * 3 + 2.2),
              size: Math.random() * 6 + 5.5,
              alpha: 1,
              decay: Math.random() * 0.009 + 0.007,
              color: activeColors[Math.random() > 0.5 ? 0 : 1]
            });
          }

          if (tab === 'banish') {
            this.journeyStats = { willpower: 15, aesthetics: 15, resolve: 15 };
            this.updateJourneyStatsUI();
          }
        });
      }

      const loop = () => {
        if (this.activeTab === `smoke-${tab}`) {
          ctx.fillStyle = '#060506';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx + wind;
            p.y += p.vy;
            p.alpha -= p.decay;
            p.size += 0.085;

            if (p.alpha <= 0) {
              particles.splice(i, 1);
              continue;
            }

            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }

          // Censer base
          ctx.fillStyle = '#100e11';
          ctx.strokeStyle = 'var(--border-color)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height + 5, 25, Math.PI, 0);
          ctx.fill();
          ctx.stroke();
        }
        requestAnimationFrame(loop);
      };
      loop();
    });
  }

  initSovereignDesires() {
    this.initSovereignBond();
    this.initSovereignShadow();
    this.initSovereignAstrolabe();
    this.initSovereignDevotion();
    this.initSovereignEdging();
  }

  initSovereignBond() {
    const canvas = this.safeGet('bond-canvas-new');
    const p1 = this.safeGet('bond-p1');
    const p2 = this.safeGet('bond-p2');
    const clearBtn = this.safeGet('btn-bond-clear-new');
    const sealBtn = this.safeGet('btn-bond-seal-new');

    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let drawing = false;
    ctx.strokeStyle = 'rgba(255, 90, 121, 0.9)';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.addEventListener('mousedown', (e) => {
      drawing = true;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => drawing = false);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }

    if (sealBtn) {
      sealBtn.addEventListener('click', () => {
        const partner1 = p1 ? p1.value.trim() : "";
        const partner2 = p2 ? p2.value.trim() : "";
        if (!partner1 || !partner2) {
          alert("Please specify the names of both seekers to bind the covenant.");
          return;
        }

        this.playClickSound();
        const newEntry = {
          id: `entry_${Date.now()}`,
          title: `Sovereign Bond: ${partner1} 🔗 ${partner2}`,
          content: `### Bond Covenant Sealed\n\n**Initiator**: ${partner1}\n**Receiver**: ${partner2}\n\n*Signed on the dual-canvas locally.*`,
          date: new Date().toLocaleDateString()
        };

        this.grimoireEntries.unshift(newEntry);
        this.saveGrimoireEntriesToStorage();
        this.renderGrimoireList();

        alert(`Sovereign Bond between ${partner1} and ${partner2} successfully sealed!`);
        this.switchTab('grimoire-journal');
        this.selectGrimoireEntry(newEntry.id);
      });
    }
  }

  initSovereignShadow() {
    const next = this.safeGet('btn-mirror-next') || this.safeGet('btn-desire-shadow-next');
    const dissolve = this.safeGet('btn-desire-shadow-dissolve');
    const response = this.safeGet('desire-shadow-response');
    const canvas = this.safeGet('desire-shadow-canvas');

    if (!next) return;

    next.addEventListener('click', () => {
      this.shadowPromptIndex = (this.shadowPromptIndex + 1) % this.shadowPrompts.length;
      const promptText = this.shadowPrompts[this.shadowPromptIndex];
      this.safeGet('desire-shadow-prompt').innerText = promptText;
      if (response) response.value = '';
    });

    if (dissolve && response && canvas) {
      const ctx = canvas.getContext('2d');
      const placeholder = this.safeGet('desire-shadow-placeholder');

      dissolve.addEventListener('click', () => {
        if (!response.value.trim()) return;

        this.playClickSound();
        if (placeholder) placeholder.style.display = 'none';
        canvas.style.display = 'block';

        this.mirrorParticles = [];
        for (let i = 0; i < 50; i++) {
          this.mirrorParticles.push({
            x: canvas.width / 2 + (Math.random() * 40 - 20),
            y: canvas.height / 2 + (Math.random() * 40 - 20),
            vx: Math.random() * 6 - 3,
            vy: Math.random() * 6 - 3,
            size: Math.random() * 3 + 2.5,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.01
          });
        }

        response.value = "";

        const run = () => {
          ctx.fillStyle = '#060506';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          let active = 0;
          this.mirrorParticles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            if (p.alpha > 0) {
              active++;
              ctx.fillStyle = `rgba(229, 169, 59, ${p.alpha})`;
              ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
            }
          });

          if (active > 0) {
            requestAnimationFrame(run);
          } else {
            canvas.style.display = 'none';
            if (placeholder) {
              placeholder.style.display = 'flex';
              placeholder.innerText = "Sovereign desire reflection integrated.";
            }
          }
        };
        run();
      });
    }
  }

  initSovereignAstrolabe() {
    const mars = this.safeGet('desire-mars-new');
    const saturn = this.safeGet('desire-saturn-new');
    const status = this.safeGet('desire-conjunction-status-new');
    const displayValMars = this.safeGet('desire-mars-val-new');
    const displayValSat = this.safeGet('desire-saturn-val-new');

    if (!mars || !saturn) return;

    const checkConjunction = () => {
      const mV = parseInt(mars.value);
      const sV = parseInt(saturn.value);

      if (displayValMars) displayValMars.innerText = `${mV}°`;
      if (displayValSat) displayValSat.innerText = `${sV}°`;

      const diff = Math.abs(mV - sV);
      if (diff <= 5) {
        if (status) {
          status.innerHTML = `🌟 <strong>MARS-SATURN CONJUNCTION ALIGNED!</strong><br>Erotic energy flow enabled. Edging Loop active.`;
          status.style.color = 'var(--accent-purple)';
        }
      } else {
        if (status) {
          status.innerHTML = `Align Mars (♂) and Saturn (♄) orbits. Difference: ${diff}°.`;
          status.style.color = 'var(--text-secondary)';
        }
        this.stopEdgingOscillators();
      }
    };

    mars.addEventListener('input', checkConjunction);
    saturn.addEventListener('input', checkConjunction);
    checkConjunction();
  }

  initSovereignDevotion() {
    const spirit = this.safeGet('devotion-spirit');
    const vow = this.safeGet('devotion-vow');
    const seal = this.safeGet('btn-seal-devotion');
    const outputCard = this.safeGet('devotion-output-card');
    const output = this.safeGet('devotion-output');

    if (!seal) return;

    seal.addEventListener('click', () => {
      const name = spirit ? spirit.value : "Bael";
      const txt = vow ? vow.value.trim() : "";

      if (!txt) {
        alert("Please write your vow before sealing the devotion.");
        return;
      }

      this.playClickSound();
      this.journeyStats.aesthetics = Math.min(15, this.journeyStats.aesthetics + 2);
      this.updateJourneyStatsUI();

      if (outputCard) outputCard.style.display = 'block';
      if (output) output.innerHTML = `Vow of devotion to <strong>${name}</strong> sealed. Character aesthetics increased by 2 points.`;
      
      const newEntry = {
        id: `entry_${Date.now()}`,
        title: `Devotion: ${name}`,
        content: `### Vow of Devotion\n\n**To Goetic Spirit**: ${name}\n**Vow Details**:\n\n${txt}\n\n*Bound under aesthetics focus.*`,
        date: new Date().toLocaleDateString()
      };
      this.grimoireEntries.unshift(newEntry);
      this.saveGrimoireEntriesToStorage();
      this.renderGrimoireList();
    });
  }

  initSovereignEdging() {
    const start = this.safeGet('btn-edging-start-new');
    const reset = this.safeGet('btn-edging-reset-new');
    const display = this.safeGet('edging-display-new');
    const ring = this.safeGet('edging-guide-ring');
    const status = this.safeGet('edging-status-new');

    let seconds = 300;
    let isRunning = false;
    let edgingInterval = null;
    let tick = 0;

    if (!start) return;

    const stop = () => {
      isRunning = false;
      clearInterval(edgingInterval);
      start.innerText = "▶ Start Loop";
      this.stopEdgingOscillators();
      if (ring) {
        ring.className = 'breathing-ring';
        ring.innerText = "Focus";
      }
    };

    start.addEventListener('click', () => {
      // Check Mars-Saturn orbit alignment
      const mars = this.safeGet('desire-mars-new');
      const saturn = this.safeGet('desire-saturn-new');
      if (mars && saturn) {
        const diff = Math.abs(parseInt(mars.value) - parseInt(saturn.value));
        if (diff > 5) {
          alert("Mars and Saturn orbits must be aligned (conjoined) to initiate the edging loop.");
          return;
        }
      }

      if (isRunning) {
        stop();
      } else {
        isRunning = true;
        start.innerText = "⏸ Pause Loop";

        edgingInterval = setInterval(() => {
          seconds--;
          tick++;

          const m = Math.floor(seconds / 60);
          const s = seconds % 60;
          if (display) display.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

          const isBuild = (Math.floor(tick / 15) % 2) === 0;
          if (isBuild) {
            if (ring) {
              ring.className = 'breathing-ring inhale';
              ring.innerText = "BUILD";
            }
            if (status) status.innerText = `🔥 Tension Phase: Hold and build (Freq: ${100 + (tick % 15) * 8}Hz)`;
            this.resonateEdgingPitch(100 + (tick % 15) * 8);
          } else {
            if (ring) {
              ring.className = 'breathing-ring hold-out';
              ring.innerText = "RELEASE";
            }
            if (status) status.innerText = "💤 Grounding Phase: Exhale and release (Freq: 100Hz)";
            this.resonateEdgingPitch(100);
          }

          if (seconds <= 0) {
            stop();
            seconds = 300;
            if (display) display.innerText = "05:00";
          }
        }, 1000);
      }
    });

    if (reset) {
      reset.addEventListener('click', () => {
        stop();
        seconds = 300;
        tick = 0;
        if (display) display.innerText = "05:00";
      });
    }
  }

  resonateEdgingPitch(freq) {
    if (!this.audioCtx) return;
    if (!this.edgingOsc) {
      this.edgingOsc = this.audioCtx.createOscillator();
      this.edgingGain = this.audioCtx.createGain();
      this.edgingOsc.type = 'sawtooth';
      
      this.edgingOsc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      this.edgingGain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
      
      this.edgingOsc.connect(this.edgingGain);
      this.edgingGain.connect(this.masterGainNode || this.audioCtx.destination);
      this.edgingOsc.start();
    } else {
      this.edgingOsc.frequency.exponentialRampToValueAtTime(freq, this.audioCtx.currentTime + 0.95);
    }
  }

  stopEdgingOscillators() {
    if (this.edgingOsc) {
      try {
        this.edgingOsc.stop();
      } catch (err) {}
      this.edgingOsc.disconnect();
      this.edgingOsc = null;
      this.edgingGain = null;
    }
  }

  // ==========================================
  // SYSTEM WINDOW VISIBILITY API
  // ==========================================
  initVisibilityAPI() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Tab backgrounded -> automatically suspend oscillators to save CPU/battery
        this.suspendAudio();
      }
    });
  }
}

const app = new InfernalTempleApp();
window.addEventListener('DOMContentLoaded', () => {
  app.init();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('Service Worker registered successfully:', reg.scope))
      .catch((err) => console.log('Service Worker registration failed:', err));
  }
});

window.app = app;
