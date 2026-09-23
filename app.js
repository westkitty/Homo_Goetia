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
  // SATURN (7 Pentacles)
  { id: "saturn-1", planet: "Saturn", num: "First", title: "First Pentacle of Saturn", virtue: "Compels spirits of Saturn to obey commands." },
  { id: "saturn-2", planet: "Saturn", num: "Second", title: "Second Pentacle of Saturn", virtue: "Repels spiritual adversaries and counters curses." },
  { id: "saturn-3", planet: "Saturn", num: "Third", title: "Third Pentacle of Saturn", virtue: "Defends against nighttime terrors and phantom intrusions." },
  { id: "saturn-4", planet: "Saturn", num: "Fourth", title: "Fourth Pentacle of Saturn", virtue: "Executes destruction and banishment of hostile forces." },
  { id: "saturn-5", planet: "Saturn", num: "Fifth", title: "Fifth Pentacle of Saturn", virtue: "Guards against restless spirits and astral entities." },
  { id: "saturn-6", planet: "Saturn", num: "Sixth", title: "Sixth Pentacle of Saturn", virtue: "Invokes earth spirits and binds chaotic elements." },
  { id: "saturn-7", planet: "Saturn", num: "Seventh", title: "Seventh Pentacle of Saturn", virtue: "Causes cosmic resonance and structural tremors." },

  // JUPITER (7 Pentacles)
  { id: "jupiter-1", planet: "Jupiter", num: "First", title: "First Pentacle of Jupiter", virtue: "Discovers hidden treasures and unearths lost knowledge." },
  { id: "jupiter-2", planet: "Jupiter", num: "Second", title: "Second Pentacle of Jupiter", virtue: "Brings peace, glory, dignity, and spiritual honor." },
  { id: "jupiter-3", planet: "Jupiter", num: "Third", title: "Third Pentacle of Jupiter", virtue: "Defends against enemy attacks and malicious intent." },
  { id: "jupiter-4", planet: "Jupiter", num: "Fourth", title: "Fourth Pentacle of Jupiter", virtue: "Grants wealth, abundance, and material prosperity." },
  { id: "jupiter-5", planet: "Jupiter", num: "Fifth", title: "Fifth Pentacle of Jupiter", virtue: "Grants divine vision and cosmic revelations." },
  { id: "jupiter-6", planet: "Jupiter", num: "Sixth", title: "Sixth Pentacle of Jupiter", virtue: "Protects against earthly dangers and physical harm." },
  { id: "jupiter-7", planet: "Jupiter", num: "Seventh", title: "Seventh Pentacle of Jupiter", virtue: "Guards against poverty and restores lost resources." },

  // MARS (7 Pentacles)
  { id: "mars-1", planet: "Mars", num: "First", title: "First Pentacle of Mars", virtue: "Invokes martial courage, strength, and warrior spirits." },
  { id: "mars-2", planet: "Mars", num: "Second", title: "Second Pentacle of Mars", virtue: "Heals severe diseases, fevers, and targets infections." },
  { id: "mars-3", planet: "Mars", num: "Third", title: "Third Pentacle of Mars", virtue: "Overcomes hostile enemies and settles fierce disputes." },
  { id: "mars-4", planet: "Mars", num: "Fourth", title: "Fourth Pentacle of Mars", virtue: "Grants victory in battle and spiritual warfare." },
  { id: "mars-5", planet: "Mars", num: "Fifth", title: "Fifth Pentacle of Mars", virtue: "Terrifies foes and compels total submission." },
  { id: "mars-6", planet: "Mars", num: "Sixth", title: "Sixth Pentacle of Mars", virtue: "Grants invulnerability and turns enemy weapons aside." },
  { id: "mars-7", planet: "Mars", num: "Seventh", title: "Seventh Pentacle of Mars", virtue: "Raises storms, lightning, and elemental thunder." },

  // SUN (7 Pentacles)
  { id: "sun-1", planet: "Sun", num: "First", title: "First Pentacle of the Sun", virtue: "Invokes solar spirits and solar majesty." },
  { id: "sun-2", planet: "Sun", num: "Second", title: "Second Pentacle of the Sun", virtue: "Promotes inner nobility, warmth, and leadership." },
  { id: "sun-3", planet: "Sun", num: "Third", title: "Third Pentacle of the Sun", virtue: "Brings fame, renown, and public acclaim." },
  { id: "sun-4", planet: "Sun", num: "Fourth", title: "Fourth Pentacle of the Sun", virtue: "Reveals hidden secrets of nature and alchemy." },
  { id: "sun-5", planet: "Sun", num: "Fifth", title: "Fifth Pentacle of the Sun", virtue: "Transports the caster across spiritual realms." },
  { id: "sun-6", planet: "Sun", num: "Sixth", title: "Sixth Pentacle of the Sun", virtue: "Grants spiritual invisibility when sought by foes." },
  { id: "sun-7", planet: "Sun", num: "Seventh", title: "Seventh Pentacle of the Sun", virtue: "Releases prisoners and breaks astral chains." },

  // VENUS (5 Pentacles)
  { id: "venus-1", planet: "Venus", num: "First", title: "First Pentacle of Venus", virtue: "Attracts love, affection, and builds lasting friendships." },
  { id: "venus-2", planet: "Venus", num: "Second", title: "Second Pentacle of Venus", virtue: "Inflames desire, passion, and erotic attraction." },
  { id: "venus-3", planet: "Venus", num: "Third", title: "Third Pentacle of Venus", virtue: "Attracts lovers and harmonious companions." },
  { id: "venus-4", planet: "Venus", num: "Fourth", title: "Fourth Pentacle of Venus", virtue: "Compels obedience and devotion in desire." },
  { id: "venus-5", planet: "Venus", num: "Fifth", title: "Fifth Pentacle of Venus", virtue: "Grants magnetic charm, beauty, and grace." },

  // MERCURY (5 Pentacles)
  { id: "mercury-1", planet: "Mercury", num: "First", title: "First Pentacle of Mercury", virtue: "Executes speedy messages, travel, and swift communication." },
  { id: "mercury-2", planet: "Mercury", num: "Second", title: "Second Pentacle of Mercury", virtue: "Grants eloquence, logic, and persuasive rhetoric." },
  { id: "mercury-3", planet: "Mercury", num: "Third", title: "Third Pentacle of Mercury", virtue: "Discovers hidden knowledge, codes, and ciphers." },
  { id: "mercury-4", planet: "Mercury", num: "Fourth", title: "Fourth Pentacle of Mercury", virtue: "Reveals secret sciences and alchemical arts." },
  { id: "mercury-5", planet: "Mercury", num: "Fifth", title: "Fifth Pentacle of Mercury", virtue: "Opens locked doors, vaults, and secret passages." },

  // MOON (6 Pentacles)
  { id: "moon-1", planet: "Moon", num: "First", title: "First Pentacle of the Moon", virtue: "Opens portals, gateways, and astral pathways." },
  { id: "moon-2", planet: "Moon", num: "Second", title: "Second Pentacle of the Moon", virtue: "Protects travelers on water and nighttime journeys." },
  { id: "moon-3", planet: "Moon", num: "Third", title: "Third Pentacle of the Moon", virtue: "Prevents illusions, phantasms, and deceptive visions." },
  { id: "moon-4", planet: "Moon", num: "Fourth", title: "Fourth Pentacle of the Moon", virtue: "Protects against evil sorcery and harmful spells." },
  { id: "moon-5", planet: "Moon", num: "Fifth", title: "Fifth Pentacle of the Moon", virtue: "Grants prophetic dreams, visions, and scrying insights." },
  { id: "moon-6", planet: "Moon", num: "Sixth", title: "Sixth Pentacle of the Moon", virtue: "Raises heavy rains, mists, and tides." }
];

const SHEM_ANGELS = Array.from({ length: 72 }, (_, i) => {
  const names = [
    "Vehuiah", "Jeliel", "Sitael", "Elemiah", "Mahasiah", "Lelahel", "Achaiah", "Cahetel", "Haziel", "Aladiah",
    "Lauviah", "Hahaiah", "Jezalel", "Mebahel", "Hariel", "Hakamiah", "Lauviah", "Caliel", "Leuviah", "Pahaliah",
    "Nelchael", "Jeiaiuel", "Melahel", "Haheuiah", "Nith-Haiah", "Haaiah", "Yerathel", "Seheiah", "Reiyel", "Omael",
    "Lecabel", "Vasariah", "Yehuiah", "Lehahiah", "Chavakiah", "Menadel", "Aniel", "Haamiah", "Rehael", "Ieiazel",
    "Hahahel", "Mikael", "Veuliah", "Yelahiah", "Sealiah", "Ariel", "Asaliah", "Mihael", "Vehuel", "Daniel",
    "Hahasiah", "Imamiah", "Nanael", "Nithael", "Mebahiah", "Poiel", "Nemamiah", "Jeialel", "Harahel", "Mitzrael",
    "Umabel", "Iah-Hel", "Anauel", "Mehiel", "Damabiah", "Manakel", "Eyael", "Habuhiah", "Rochel", "Jabamiah",
    "Haiaiuel", "Mumiah"
  ];
  const orders = ["Seraphim", "Cherubim", "Thrones", "Dominions", "Powers", "Virtues", "Principalities", "Archangels"];
  return {
    id: `shem-${i + 1}`,
    num: i + 1,
    name: names[i % names.length],
    order: orders[i % orders.length],
    verse: `Psalm ${((i * 3) % 150) + 1}:${(i % 10) + 1}`,
    goetiaCounterId: i + 1,
    virtue: `Divine illumination counter-balancing Goetic Spirit #${i + 1} (${GOETIA_SPIRITS[i]?.name || 'Spirit'}).`
  };
});

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

// ==========================================
// 1. NATIVE WEB CRYPTO VAULT (PBKDF2 + AES-GCM)
// ==========================================
class HomoGoetiaVault {
  constructor(app) {
    this.app = app;
    this.isUnlocked = false;
    this.cachedKey = null;
    this.currentSaltBase64 = null;
    this.currentIterations = 100000;
  }

  bufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  base64ToBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  async deriveKey(passphrase, saltBuffer, iterations = 100000) {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      enc.encode(passphrase),
      'PBKDF2',
      false,
      ['deriveKey']
    );

    return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: saltBuffer,
        iterations: iterations,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async initializeVault(passphrase) {
    if (!passphrase || passphrase.length < 4) {
      throw new Error("Master passphrase must be at least 4 characters.");
    }
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iterations = 100000;
    const key = await this.deriveKey(passphrase, salt, iterations);

    const canaryIv = window.crypto.getRandomValues(new Uint8Array(12));
    const enc = new TextEncoder();
    const canaryCipher = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: canaryIv },
      key,
      enc.encode("HOMO_GOETIA_VAULT_VALID")
    );

    const vaultMeta = {
      id: "vault_meta",
      version: 1,
      kdf: "PBKDF2",
      hash: "SHA-256",
      iterations: iterations,
      salt: this.bufferToBase64(salt),
      canaryIv: this.bufferToBase64(canaryIv),
      canaryCipher: this.bufferToBase64(canaryCipher),
      updatedAt: Date.now()
    };

    await this.app.storage.saveVaultMeta(vaultMeta);
    this.cachedKey = key;
    this.currentSaltBase64 = vaultMeta.salt;
    this.currentIterations = iterations;
    this.isUnlocked = true;
    this.updateUI();
    return true;
  }

  async unlock(passphrase) {
    const vaultMeta = await this.app.storage.getVaultMeta();
    if (!vaultMeta) {
      return await this.initializeVault(passphrase);
    }

    const salt = this.base64ToBuffer(vaultMeta.salt);
    const iterations = vaultMeta.iterations || 100000;
    const key = await this.deriveKey(passphrase, salt, iterations);

    try {
      const canaryIv = this.base64ToBuffer(vaultMeta.canaryIv);
      const canaryCipher = this.base64ToBuffer(vaultMeta.canaryCipher);
      const dec = new TextDecoder();
      const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: canaryIv },
        key,
        canaryCipher
      );
      if (dec.decode(decrypted) !== "HOMO_GOETIA_VAULT_VALID") {
        throw new Error("Invalid password");
      }
    } catch (e) {
      throw new Error("Invalid master passphrase or corrupted vault record.");
    }

    this.cachedKey = key;
    this.currentSaltBase64 = vaultMeta.salt;
    this.currentIterations = iterations;
    this.isUnlocked = true;
    this.updateUI();
    return true;
  }

  lock() {
    this.isUnlocked = false;
    this.cachedKey = null;
    this.updateUI();
    const plaintextEl = this.app.safeGet('vault-plaintext-input');
    if (plaintextEl) plaintextEl.value = '';
    const passEl = this.app.safeGet('vault-password-input');
    if (passEl) passEl.value = '';
  }

  async encrypt(plaintext) {
    if (!this.isUnlocked || !this.cachedKey) {
      throw new Error("Vault is locked. Unlock with master passphrase first.");
    }
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const enc = new TextEncoder();
    const ciphertextBuffer = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      this.cachedKey,
      enc.encode(plaintext)
    );

    return {
      version: 1,
      kdf: "PBKDF2",
      hash: "SHA-256",
      iterations: this.currentIterations,
      salt: this.currentSaltBase64,
      iv: this.bufferToBase64(iv),
      ciphertext: this.bufferToBase64(ciphertextBuffer),
      tagLength: 128,
      timestamp: Date.now()
    };
  }

  async decrypt(envelopeInput, overridePassphrase = null) {
    let envelope = typeof envelopeInput === 'string' ? JSON.parse(envelopeInput) : envelopeInput;
    if (!envelope || !envelope.ciphertext || !envelope.iv || !envelope.salt) {
      throw new Error("Invalid encrypted envelope format.");
    }

    let key = this.cachedKey;
    if (overridePassphrase) {
      const salt = this.base64ToBuffer(envelope.salt);
      key = await this.deriveKey(overridePassphrase, salt, envelope.iterations || 100000);
    } else if (!this.isUnlocked || !key) {
      throw new Error("Vault is locked. Unlock vault or provide passphrase.");
    }

    try {
      const iv = this.base64ToBuffer(envelope.iv);
      const ciphertext = this.base64ToBuffer(envelope.ciphertext);
      const dec = new TextDecoder();
      const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        ciphertext
      );
      return dec.decode(decrypted);
    } catch (err) {
      throw new Error("Decryption failed: Incorrect key or corrupted ciphertext.");
    }
  }

  updateUI() {
    const badge = this.app.safeGet('vault-status-badge');
    const feedback = this.app.safeGet('vault-auth-feedback');
    if (badge) {
      if (this.isUnlocked) {
        badge.textContent = "UNLOCKED";
        badge.className = "badge-provenance badge-personal";
        badge.style.color = "var(--accent-gold)";
        badge.style.borderColor = "var(--accent-gold)";
      } else {
        badge.textContent = "LOCKED";
        badge.className = "badge-provenance badge-forged";
        badge.style.color = "";
        badge.style.borderColor = "";
      }
    }
    if (feedback) {
      feedback.textContent = this.isUnlocked
        ? "✓ Vault active and unlocked in volatile memory."
        : "Vault locked. Enter master passphrase to encrypt or decrypt.";
    }
  }

  async handleUnlock() {
    const passInput = this.app.safeGet('vault-password-input');
    const pass = passInput ? passInput.value.trim() : '';
    if (!pass) {
      alert("Please enter a passphrase.");
      return;
    }
    try {
      await this.unlock(pass);
      this.app.showToast("Vault unlocked successfully.");
    } catch (err) {
      alert(err.message);
    }
  }

  handleLock() {
    this.lock();
    this.app.showToast("Vault locked.");
  }

  async handleInitialize() {
    const passInput = this.app.safeGet('vault-password-input');
    const pass = passInput ? passInput.value.trim() : '';
    if (!pass) {
      alert("Enter a master passphrase to set.");
      return;
    }
    try {
      await this.initializeVault(pass);
      this.app.showToast("Master key initialized and vault unlocked.");
    } catch (err) {
      alert(err.message);
    }
  }

  async handleEncryptInput() {
    const textEl = this.app.safeGet('vault-plaintext-input');
    const outEl = this.app.safeGet('vault-envelope-output');
    if (!textEl || !outEl) return;
    const text = textEl.value.trim();
    if (!text) {
      alert("Enter sensitive text to encrypt.");
      return;
    }
    try {
      const envelope = await this.encrypt(text);
      outEl.value = JSON.stringify(envelope, null, 2);
      this.app.showToast("Authenticated AES-GCM envelope generated.");
    } catch (err) {
      alert(err.message);
    }
  }

  async handleDecryptInput() {
    const outEl = this.app.safeGet('vault-envelope-output');
    const textEl = this.app.safeGet('vault-plaintext-input');
    if (!outEl || !textEl) return;
    const raw = outEl.value.trim();
    if (!raw) {
      alert("Paste an encrypted envelope JSON into the output box to decrypt.");
      return;
    }
    try {
      const decrypted = await this.decrypt(raw);
      textEl.value = decrypted;
      this.app.showToast("Envelope decrypted successfully.");
    } catch (err) {
      alert(err.message);
    }
  }

  async exportEncryptedArchive() {
    if (!this.isUnlocked) {
      alert("Unlock the vault first to generate an encrypted export.");
      return;
    }
    try {
      const rituals = await this.app.storage.getAllRituals();
      const artifacts = await this.app.storage.getAllArtifacts();
      const journal = await this.app.storage.getAllJournalEntries();

      const payload = JSON.stringify({
        exportedAt: Date.now(),
        app: "Homo Goetia",
        version: 2,
        data: { rituals, artifacts, journal }
      });

      const encryptedEnvelope = await this.encrypt(payload);
      const blob = new Blob([JSON.stringify(encryptedEnvelope, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `homo-goetia-encrypted-vault-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.app.showToast("Encrypted vault archive exported.");
    } catch (err) {
      alert("Export failed: " + err.message);
    }
  }

  async importEncryptedArchive(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const envelope = JSON.parse(e.target.result);
        let decryptedJson = null;
        if (this.isUnlocked) {
          try {
            decryptedJson = await this.decrypt(envelope);
          } catch (err) {
            decryptedJson = null;
          }
        }
        if (!decryptedJson) {
          const pass = prompt("Enter passphrase to decrypt this vault archive:");
          if (!pass) return;
          decryptedJson = await this.decrypt(envelope, pass);
        }

        const parsed = JSON.parse(decryptedJson);
        if (parsed.data) {
          if (Array.isArray(parsed.data.rituals)) {
            for (const r of parsed.data.rituals) await this.app.storage.saveRitual(r);
          }
          if (Array.isArray(parsed.data.artifacts)) {
            for (const a of parsed.data.artifacts) await this.app.storage.saveArtifact(a);
          }
          if (Array.isArray(parsed.data.journal)) {
            for (const j of parsed.data.journal) await this.app.storage.saveJournalEntry(j);
          }
        }
        await this.app.refreshAllGrimoireViews();
        this.app.showToast("Encrypted archive successfully restored.");
      } catch (err) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }
}

// ==========================================
// 2. STRUCTURED PERSISTENCE & MIGRATION (INDEXEDDB + FALLBACK)
// ==========================================
class HomoGoetiaStorage {
  constructor(app) {
    this.app = app;
    this.dbName = "HomoGoetiaDB";
    this.dbVersion = 1;
    this.db = null;
    this.isIndexedDBAvailable = typeof indexedDB !== 'undefined';
  }

  async init() {
    if (this.isIndexedDBAvailable) {
      try {
        this.db = await this.openDB();
      } catch (e) {
        console.warn("IndexedDB initialization failed, falling back to localStorage:", e);
        this.db = null;
      }
    }
    await this.checkAndMigrateLegacyData();
  }

  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("rituals")) {
          db.createObjectStore("rituals", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("artifacts")) {
          db.createObjectStore("artifacts", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("journal")) {
          db.createObjectStore("journal", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("vault")) {
          db.createObjectStore("vault", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("settings")) {
          db.createObjectStore("settings", { keyPath: "key" });
        }
      };
    });
  }

  async checkAndMigrateLegacyData() {
    try {
      const rawLegacy = localStorage.getItem('hg_grimoire_entries');
      if (rawLegacy) {
        const legacyEntries = JSON.parse(rawLegacy);
        if (Array.isArray(legacyEntries) && legacyEntries.length > 0) {
          const currentJournal = await this.getAllJournalEntries();
          const existingIds = new Set(currentJournal.map(e => e.id));
          
          let migratedCount = 0;
          for (const item of legacyEntries) {
            const entryId = item.id || ('legacy-' + (item.date || Date.now()));
            if (!existingIds.has(entryId)) {
              await this.saveJournalEntry({
                id: entryId,
                title: item.title || 'Untitled Entry',
                content: item.content || item.body || '',
                date: item.date || new Date().toLocaleDateString(),
                createdAt: item.createdAt || Date.now(),
                provenance: 'PERSONAL',
                migratedFrom: 'hg_grimoire_entries'
              });
              migratedCount++;
            }
          }
          if (migratedCount > 0) {
            console.log(`Successfully migrated ${migratedCount} legacy entries into Grimoire.`);
          }
        }
      }
    } catch (err) {
      console.warn("Legacy migration error:", err);
    }
  }

  async getStoreItems(storeName, fallbackKey) {
    if (this.db) {
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction(storeName, "readonly");
          const store = tx.objectStore(storeName);
          const req = store.getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => {
            const raw = localStorage.getItem(fallbackKey);
            resolve(raw ? JSON.parse(raw) : []);
          };
        } catch (e) {
          const raw = localStorage.getItem(fallbackKey);
          resolve(raw ? JSON.parse(raw) : []);
        }
      });
    } else {
      const raw = localStorage.getItem(fallbackKey);
      return raw ? JSON.parse(raw) : [];
    }
  }

  async putStoreItem(storeName, fallbackKey, item) {
    try {
      const raw = localStorage.getItem(fallbackKey);
      const items = raw ? JSON.parse(raw) : [];
      const idx = items.findIndex(i => (i.id && i.id === item.id) || (i.key && i.key === item.key));
      if (idx >= 0) items[idx] = item;
      else items.unshift(item);
      localStorage.setItem(fallbackKey, JSON.stringify(items));
    } catch (e) {}

    if (this.db) {
      return new Promise((resolve, reject) => {
        try {
          const tx = this.db.transaction(storeName, "readwrite");
          const store = tx.objectStore(storeName);
          const req = store.put(item);
          req.onsuccess = () => resolve(true);
          req.onerror = () => reject(req.error);
        } catch (e) {
          resolve(true);
        }
      });
    }
    return true;
  }

  async deleteItem(storeName, id) {
    const fallbackKeys = {
      rituals: 'hg_rituals_v2',
      artifacts: 'hg_artifacts_v2',
      journal: 'hg_journal_v2',
      vault: 'hg_vault_v2',
      settings: 'hg_settings_v2'
    };
    const fbKey = fallbackKeys[storeName] || `hg_${storeName}_v2`;
    if (storeName === 'journal') {
      try {
        const legacyRaw = localStorage.getItem('hg_grimoire_entries');
        if (legacyRaw) {
          const legacy = JSON.parse(legacyRaw).filter(e => e.id !== id);
          localStorage.setItem('hg_grimoire_entries', JSON.stringify(legacy));
        }
      } catch (e) {}
    }
    return await this.deleteStoreItem(storeName, fbKey, id);
  }

  async deleteStoreItem(storeName, fallbackKey, id) {
    try {
      const raw = localStorage.getItem(fallbackKey);
      if (raw) {
        const items = JSON.parse(raw).filter(i => (i.id !== id && i.key !== id));
        localStorage.setItem(fallbackKey, JSON.stringify(items));
      }
    } catch (e) {}

    if (this.db) {
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction(storeName, "readwrite");
          const store = tx.objectStore(storeName);
          const req = store.delete(id);
          req.onsuccess = () => resolve(true);
          req.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    }
    return true;
  }

  async getAllRituals() {
    const list = await this.getStoreItems("rituals", "hg_rituals_v2");
    return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }
  async getSealedRituals() {
    const list = await this.getAllRituals();
    return list.filter(r => r.status === 'sealed');
  }
  async saveRitual(ritual) {
    return await this.putStoreItem("rituals", "hg_rituals_v2", ritual);
  }

  async getAllArtifacts() {
    const list = await this.getStoreItems("artifacts", "hg_artifacts_v2");
    return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }
  async saveArtifact(artifact) {
    return await this.putStoreItem("artifacts", "hg_artifacts_v2", artifact);
  }

  async getAllJournalEntries() {
    const list = await this.getStoreItems("journal", "hg_journal_v2");
    return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }
  async saveJournalEntry(entry) {
    try {
      const legacyRaw = localStorage.getItem('hg_grimoire_entries');
      const legacy = legacyRaw ? JSON.parse(legacyRaw) : [];
      const idx = legacy.findIndex(e => e.id === entry.id);
      if (idx >= 0) legacy[idx] = entry;
      else legacy.unshift(entry);
      localStorage.setItem('hg_grimoire_entries', JSON.stringify(legacy));
    } catch (e) {}
    return await this.putStoreItem("journal", "hg_journal_v2", entry);
  }
  async deleteJournalEntry(id) {
    try {
      const legacyRaw = localStorage.getItem('hg_grimoire_entries');
      if (legacyRaw) {
        const legacy = JSON.parse(legacyRaw).filter(e => e.id !== id);
        localStorage.setItem('hg_grimoire_entries', JSON.stringify(legacy));
      }
    } catch (e) {}
    return await this.deleteStoreItem("journal", "hg_journal_v2", id);
  }

  async getVaultMeta() {
    const items = await this.getStoreItems("vault", "hg_vault_v2");
    return items.find(i => i.id === "vault_meta") || null;
  }
  async saveVaultMeta(meta) {
    return await this.putStoreItem("vault", "hg_vault_v2", meta);
  }
}

// ==========================================
// 3. THE LIVING SEAL DETERMINISTIC ENGINE
// ==========================================
class LivingSealEngine {
  constructor(app) {
    this.app = app;
    this.svgContainer = null;
    this.sealedRituals = [];
    this.maxLayers = 0;
    this.currentScrubIndex = 0;
    this.activeFilter = "all";
    this.isolatedRitualId = null;
  }

  async init() {
    this.svgContainer = this.app.safeGet('living-seal-svg');
    await this.refresh();
  }

  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return Math.abs(hash);
  }

  createPRNG(seed) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return function() {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  async refresh() {
    this.sealedRituals = await this.app.storage.getSealedRituals();
    this.sealedRituals.sort((a, b) => (a.sealedAt || a.createdAt || 0) - (b.sealedAt || b.createdAt || 0));
    
    this.maxLayers = this.sealedRituals.length;
    this.currentScrubIndex = this.maxLayers;

    const scrubber = this.app.safeGet('seal-scrubber');
    const scrubVal = this.app.safeGet('seal-scrubber-val');
    const scrubMax = this.app.safeGet('seal-scrubber-max');
    if (scrubber) {
      scrubber.max = this.maxLayers;
      scrubber.value = this.maxLayers;
    }
    if (scrubVal) scrubVal.textContent = this.maxLayers;
    if (scrubMax) scrubMax.textContent = this.maxLayers;

    this.render();
  }

  onScrub(val) {
    this.currentScrubIndex = parseInt(val, 10);
    const scrubVal = this.app.safeGet('seal-scrubber-val');
    if (scrubVal) scrubVal.textContent = this.currentScrubIndex;
    this.render();
  }

  setFilter(tag) {
    this.activeFilter = tag;
    this.render();
  }

  isolateRitual(ritualId) {
    this.isolatedRitualId = ritualId;
    this.render();
  }

  resetIsolation() {
    this.isolatedRitualId = null;
    this.activeFilter = "all";
    const filterSelect = this.app.safeGet('seal-filter-tag');
    if (filterSelect) filterSelect.value = "all";
    this.render();
  }

  render() {
    if (!this.svgContainer) this.svgContainer = this.app.safeGet('living-seal-svg');
    if (!this.svgContainer) return;

    const cx = 250;
    const cy = 250;

    let visibleRituals = this.sealedRituals.slice(0, this.currentScrubIndex);
    if (this.isolatedRitualId) {
      visibleRituals = visibleRituals.filter(r => r.id === this.isolatedRitualId);
    } else if (this.activeFilter !== "all") {
      visibleRituals = visibleRituals.filter(r => r.compositionId === this.activeFilter || (r.tags && r.tags.includes(this.activeFilter)));
    }

    let innerSVG = `
      <defs>
        <radialGradient id="sealCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#d61c38" stop-opacity="0.35" />
          <stop offset="60%" stop-color="#8014b3" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#050405" stop-opacity="0" />
        </radialGradient>
        <filter id="sealLayerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="${cx}" cy="${cy}" r="220" fill="url(#sealCenterGlow)" />

      <!-- BASE SACRED FOUNDATION (Layer 0) -->
      <g class="living-seal-base" stroke="var(--border-color)" fill="none">
        <circle cx="${cx}" cy="${cy}" r="235" stroke="#2b1c28" stroke-width="2" />
        <circle cx="${cx}" cy="${cy}" r="225" stroke="#d61c38" stroke-width="1.2" stroke-dasharray="4,6" opacity="0.6" />
        <circle cx="${cx}" cy="${cy}" r="215" stroke="#c8963e" stroke-width="1" opacity="0.4" />
        <circle cx="${cx}" cy="${cy}" r="50" stroke="#8014b3" stroke-width="1.5" opacity="0.5" />
        <line x1="${cx}" y1="20" x2="${cx}" y2="480" stroke="#2b1c28" stroke-width="1" stroke-dasharray="2,4" />
        <line x1="20" y1="${cy}" x2="480" y2="${cy}" stroke="#2b1c28" stroke-width="1" stroke-dasharray="2,4" />
        <polygon points="${cx},${cy - 45} ${cx + 39},${cy + 22.5} ${cx - 39},${cy + 22.5}" stroke="#d61c38" stroke-width="1" opacity="0.5" />
        <polygon points="${cx},${cy + 45} ${cx + 39},${cy - 22.5} ${cx - 39},${cy - 22.5}" stroke="#c8963e" stroke-width="1" opacity="0.4" />
      </g>
    `;

    visibleRituals.forEach((ritual, idx) => {
      const layerIndex = idx + 1;
      const seedString = `${ritual.id}-${ritual.intention || ''}-${ritual.compositionId || ''}-${ritual.createdAt || 0}`;
      const seed = this.hashString(seedString);
      const prng = this.createPRNG(seed);

      const radius = 60 + ((idx * 27 + Math.floor(prng() * 15)) % 145);
      const rotationDeg = Math.floor(prng() * 360);
      const strokeWidth = 1.2 + (prng() * 0.8);
      
      let strokeColor = "#d61c38";
      if (ritual.compositionId === 'invoke') strokeColor = "#c8963e";
      else if (ritual.compositionId === 'descent') strokeColor = "#8014b3";
      else if (ritual.compositionId === 'sovereign') strokeColor = "#d61c38";
      else if (ritual.compositionId === 'custom') strokeColor = "#00b4d8";
      else {
        const colors = ["#d61c38", "#c8963e", "#8014b3", "#00b4d8"];
        strokeColor = colors[Math.floor(prng() * colors.length)];
      }

      let numPoints = 5;
      if (ritual.compositionId === 'sever') numPoints = 6;
      else if (ritual.compositionId === 'invoke') numPoints = 7;
      else if (ritual.compositionId === 'descent') numPoints = 8;
      else if (ritual.compositionId === 'sovereign') numPoints = 5;
      else numPoints = 4 + (Math.floor(prng() * 6));

      const points = [];
      const innerPoints = [];
      const innerRadius = radius * (0.35 + prng() * 0.25);

      for (let p = 0; p < numPoints; p++) {
        const angle = (p * 2 * Math.PI) / numPoints - (Math.PI / 2) + (rotationDeg * Math.PI / 180);
        points.push({
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle)
        });
        const halfAngle = angle + (Math.PI / numPoints);
        innerPoints.push({
          x: cx + innerRadius * Math.cos(halfAngle),
          y: cy + innerRadius * Math.sin(halfAngle)
        });
      }

      const starCoords = [];
      for (let p = 0; p < numPoints; p++) {
        starCoords.push(`${points[p].x.toFixed(1)},${points[p].y.toFixed(1)}`);
        starCoords.push(`${innerPoints[p].x.toFixed(1)},${innerPoints[p].y.toFixed(1)}`);
      }

      const nodePips = points.map(pt => `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3" fill="${strokeColor}" />`).join('');

      innerSVG += `
        <g class="living-seal-layer" data-ritual-id="${ritual.id}" data-layer-idx="${layerIndex}" data-intent="${encodeURIComponent(ritual.intention || '')}" data-title="${encodeURIComponent(ritual.title || 'Ritual')}" data-date="${ritual.sealedAt ? new Date(ritual.sealedAt).toLocaleDateString() : ''}" data-comp="${ritual.compositionId || 'custom'}" style="outline:none;">
          <circle cx="${cx}" cy="${cy}" r="${radius}" stroke="${strokeColor}" stroke-width="0.8" stroke-dasharray="${prng() > 0.5 ? '4,4' : 'none'}" fill="none" opacity="0.45" />
          <polygon points="${starCoords.join(' ')}" stroke="${strokeColor}" stroke-width="${strokeWidth.toFixed(1)}" fill="none" opacity="0.85" filter="url(#sealLayerGlow)" />
          ${nodePips}
        </g>
      `;
    });

    this.svgContainer.innerHTML = innerSVG;
    this.attachLayerInteractivity();
  }

  attachLayerInteractivity() {
    const layers = this.svgContainer.querySelectorAll('.living-seal-layer');
    const card = this.app.safeGet('seal-inspector-card');
    const titleEl = this.app.safeGet('seal-inspect-title');
    const dateEl = this.app.safeGet('seal-inspect-date');
    const intentEl = this.app.safeGet('seal-inspect-intent');
    const viewGrimoireBtn = this.app.safeGet('btn-seal-view-grimoire');

    layers.forEach(layer => {
      layer.addEventListener('pointerenter', () => {
        layer.classList.add('highlighted');
        const title = decodeURIComponent(layer.getAttribute('data-title') || '');
        const date = layer.getAttribute('data-date') || '';
        const intent = decodeURIComponent(layer.getAttribute('data-intent') || '');
        const comp = layer.getAttribute('data-comp') || '';

        if (card) {
          card.style.display = 'block';
          if (titleEl) titleEl.textContent = `Layer: ${title} (${comp.toUpperCase()})`;
          if (dateEl) dateEl.textContent = date;
          if (intentEl) intentEl.textContent = intent ? `"${intent}"` : "No statement declared.";
          if (viewGrimoireBtn) {
            viewGrimoireBtn.onclick = () => {
              this.app.switchTab('grimoire-journal');
              this.app.setGrimoireView('sessions');
            };
          }
        }
      });

      layer.addEventListener('pointerleave', () => {
        layer.classList.remove('highlighted');
      });

      layer.addEventListener('click', (e) => {
        e.stopPropagation();
        const ritualId = layer.getAttribute('data-ritual-id');
        this.isolateRitual(ritualId);
      });
    });
  }

  getExportSVG() {
    if (!this.svgContainer) this.svgContainer = this.app.safeGet('living-seal-svg');
    return this.svgContainer ? new XMLSerializer().serializeToString(this.svgContainer) : '';
  }

  exportSVG() {
    if (!this.svgContainer) return;
    const svgData = new XMLSerializer().serializeToString(this.svgContainer);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `homo-goetia-living-seal-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    this.app.showToast("Living Seal exported as SVG vector.");
  }

  exportPNG() {
    if (!this.svgContainer) return;
    const svgData = new XMLSerializer().serializeToString(this.svgContainer);
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.fillStyle = '#050405';
      ctx.fillRect(0, 0, 1000, 1000);
      ctx.drawImage(img, 0, 0, 1000, 1000);
      URL.revokeObjectURL(url);
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `homo-goetia-living-seal-${Date.now()}.png`;
      a.click();
      this.app.showToast("Living Seal exported as high-res PNG.");
    };
    img.src = url;
  }
}

// ==========================================
// 4. RITUAL SESSION ENGINE & COMPOSITIONS
// ==========================================
class RitualSessionEngine {
  constructor(app) {
    this.app = app;
    this.activeRitual = null;
    this.compositions = {
      sever: {
        title: "Severance & Void Banishment",
        stages: [
          { toolId: "astrolabe", title: "Black Sun Astrolabe (Planetary Alignment)" },
          { toolId: "banish", title: "Banishing Pentagram (Cleanse Sanctum)" },
          { toolId: "library-tarot", title: "Tarot Oracle (Severance Inquest)" },
          { toolId: "forge-sigil", title: "Sigil Forge (Sigil of Severing)" },
          { toolId: "sanctum-mixer", title: "Soundscape Focus (Resonant Dissolution)" }
        ],
        tags: ["banishment", "severance", "saturn"]
      },
      invoke: {
        title: "Invocation & Sovereign Will",
        stages: [
          { toolId: "library-solomon", title: "Solomonic Keys (Daemon Alignment)" },
          { toolId: "forge-sigil", title: "Sigil Forge (Synthesize Talisman)" },
          { toolId: "charging", title: "Charging Station (Will Induction)" },
          { toolId: "sanctum-mixer", title: "Soundscape Mixer (Chamber Frequency)" },
          { toolId: "grimoire-journal", title: "Grimoire Vow (Invocatory Log)" }
        ],
        tags: ["invocation", "will", "goetia"]
      },
      descent: {
        title: "Descent into the Shadow Crypt",
        stages: [
          { toolId: "mirror", title: "Shadow Mirror (Introspection)" },
          { toolId: "library-tarot", title: "Tarot Oracle (Subconscious Query)" },
          { toolId: "scryer", title: "Dark Scryer (Obsidian Pool)" },
          { toolId: "library-journey", title: "Descent Journey (Crypt Trials)" },
          { toolId: "grimoire-journal", title: "Grimoire Integration (Truth Ledger)" }
        ],
        tags: ["shadow", "scrying", "descent"]
      },
      sovereign: {
        title: "Sovereign Possession & Bodily Autonomy",
        stages: [
          { toolId: "library-tenets", title: "TST Tenets (Autonomy Reflection)" },
          { toolId: "forge-sigil", title: "Sigil Forge (Sovereign Mark)" },
          { toolId: "sanctum-timer", title: "Focus & Edge Timer (Will Cultivation)" },
          { toolId: "pact", title: "Blood Pact (Covenant of Self-Rule)" },
          { toolId: "grimoire-journal", title: "Grimoire Ledger (Sovereign Seal)" }
        ],
        tags: ["sovereignty", "autonomy", "pact"]
      }
    };
  }

  async init() {
    const rituals = await this.app.storage.getAllRituals();
    const active = rituals.find(r => r.status === 'active' || r.status === 'paused');
    if (active) {
      this.activeRitual = active;
      this.renderActiveBanner();
    }
  }

  async startComposition(compId, customIntent = null) {
    const comp = this.compositions[compId];
    if (!comp) return;

    const intentInput = this.app.safeGet('input-ritual-intent');
    const intent = customIntent || (intentInput ? intentInput.value.trim() : '') || "I declare my sovereign intention.";

    const session = {
      id: "ritual-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      schemaVersion: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      sealedAt: null,
      title: comp.title,
      intention: intent,
      compositionId: compId,
      status: "active",
      currentStageIndex: 0,
      stages: comp.stages.map((st, i) => ({
        id: `stage-${i + 1}`,
        toolId: st.toolId,
        title: st.title,
        status: i === 0 ? "current" : "pending",
        result: null,
        artifactId: null
      })),
      artifacts: [],
      tags: comp.tags || [],
      relationships: [],
      notes: "",
      provenance: "PERSONAL"
    };

    this.activeRitual = session;
    await this.app.storage.saveRitual(session);
    this.renderActiveBanner();
    this.app.showToast(`Ritual started: ${session.title}`);
    this.goToCurrentStage();
  }

  async startFromInputIntent() {
    const intentInput = this.app.safeGet('input-ritual-intent');
    const intent = intentInput ? intentInput.value.trim() : '';
    if (!intent) {
      alert("Please declare your primary intention statement first.");
      return;
    }
    await this.startComposition('sever', intent);
  }

  openCustomRitualBuilder() {
    const modal = this.app.safeGet('custom-ritual-modal');
    const listEl = this.app.safeGet('custom-ritual-chamber-selector');
    if (!modal || !listEl) return;

    listEl.innerHTML = '';
    this.app.chamberPalette.chambers.forEach(c => {
      const row = document.createElement('label');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '0.5rem';
      row.style.fontSize = '0.85rem';
      row.style.cursor = 'pointer';
      row.innerHTML = `
        <input type="checkbox" value="${c.id}" data-title="${c.name}">
        <span>${c.name} <em style="font-size:0.75rem; color:var(--text-muted);">(${c.domain.toUpperCase()})</em></span>
      `;
      listEl.appendChild(row);
    });

    modal.classList.add('open');
  }

  closeCustomRitualBuilder() {
    const modal = this.app.safeGet('custom-ritual-modal');
    if (modal) modal.classList.remove('open');
  }

  async startCustomRitual() {
    const titleInput = this.app.safeGet('custom-ritual-name');
    const intentInput = this.app.safeGet('custom-ritual-intent');
    const checkboxes = document.querySelectorAll('#custom-ritual-chamber-selector input[type="checkbox"]:checked');

    const title = titleInput ? titleInput.value.trim() : 'Custom Ritual';
    const intent = intentInput ? intentInput.value.trim() : 'Sovereign custom ceremony.';
    
    if (checkboxes.length === 0) {
      alert("Please select at least one chamber for your ritual flow.");
      return;
    }

    const stages = Array.from(checkboxes).map((cb, idx) => ({
      id: `stage-${idx + 1}`,
      toolId: cb.value,
      title: cb.getAttribute('data-title') || cb.value,
      status: idx === 0 ? "current" : "pending",
      result: null,
      artifactId: null
    }));

    const session = {
      id: "ritual-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      schemaVersion: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      sealedAt: null,
      title: title || "Custom Ceremony",
      intention: intent,
      compositionId: "custom",
      status: "active",
      currentStageIndex: 0,
      stages: stages,
      artifacts: [],
      tags: ["custom", "ceremony"],
      relationships: [],
      notes: "",
      provenance: "PERSONAL"
    };

    this.activeRitual = session;
    await this.app.storage.saveRitual(session);
    this.closeCustomRitualBuilder();
    this.renderActiveBanner();
    this.app.showToast("Custom ritual assembled.");
    this.goToCurrentStage();
  }

  goToCurrentStage() {
    if (!this.activeRitual) return;
    const stage = this.activeRitual.stages[this.activeRitual.currentStageIndex];
    if (stage) {
      this.app.switchTab(stage.toolId);
    }
  }

  async completeCurrentStage(resultSummary = null) {
    if (!this.activeRitual) return;
    const idx = this.activeRitual.currentStageIndex;
    const stage = this.activeRitual.stages[idx];
    if (stage) {
      stage.status = "completed";
      stage.result = resultSummary || "Completed";
    }

    if (idx + 1 < this.activeRitual.stages.length) {
      this.activeRitual.currentStageIndex++;
      this.activeRitual.stages[this.activeRitual.currentStageIndex].status = "current";
      await this.app.storage.saveRitual(this.activeRitual);
      this.renderActiveBanner();
      this.app.showToast(`Stage ${idx + 1} completed. Proceeding to Stage ${idx + 2}.`);
      this.goToCurrentStage();
    } else {
      await this.app.storage.saveRitual(this.activeRitual);
      this.renderActiveBanner();
      this.app.showToast("All ritual stages finished! Seal the ceremony to forge its layer.");
      this.app.switchDomain('altar');
    }
  }

  async skipCurrentStage() {
    if (!this.activeRitual) return;
    const idx = this.activeRitual.currentStageIndex;
    if (this.activeRitual.stages[idx]) {
      this.activeRitual.stages[idx].status = "skipped";
    }
    if (idx + 1 < this.activeRitual.stages.length) {
      this.activeRitual.currentStageIndex++;
      this.activeRitual.stages[this.activeRitual.currentStageIndex].status = "current";
      await this.app.storage.saveRitual(this.activeRitual);
      this.renderActiveBanner();
      this.goToCurrentStage();
    } else {
      await this.app.storage.saveRitual(this.activeRitual);
      this.renderActiveBanner();
      this.app.switchDomain('altar');
    }
  }

  async togglePause() {
    if (!this.activeRitual) return;
    if (this.activeRitual.status === 'active') {
      this.activeRitual.status = 'paused';
      this.app.showToast("Ritual paused.");
    } else {
      this.activeRitual.status = 'active';
      this.app.showToast("Ritual resumed.");
    }
    await this.app.storage.saveRitual(this.activeRitual);
    this.renderActiveBanner();
  }

  async sealActiveRitual() {
    if (!this.activeRitual) return;
    this.activeRitual.status = "sealed";
    this.activeRitual.sealedAt = Date.now();
    this.activeRitual.updatedAt = Date.now();

    this.activeRitual.stages.forEach(st => {
      if (st.status === 'pending' || st.status === 'current') st.status = 'completed';
    });

    await this.app.storage.saveRitual(this.activeRitual);
    const sealed = this.activeRitual;
    this.activeRitual = null;

    this.renderActiveBanner();
    await this.app.livingSeal.refresh();
    await this.app.refreshAllGrimoireViews();

    this.app.showToast(`⛧ Ritual Sealed: "${sealed.title}". Living Seal expanded.`);
    this.app.switchDomain('altar');
  }

  renderActiveBanner() {
    const banner = this.app.safeGet('altar-active-ritual-banner');
    const launcher = this.app.safeGet('altar-ritual-launcher');
    const titleEl = this.app.safeGet('active-ritual-title');
    const statusEl = this.app.safeGet('active-ritual-status');
    const intentEl = this.app.safeGet('active-ritual-intent');
    const stagesEl = this.app.safeGet('active-ritual-stages');
    const pauseBtn = this.app.safeGet('btn-ritual-pause');

    if (!this.activeRitual) {
      if (banner) banner.style.display = 'none';
      if (launcher) launcher.style.display = 'block';
      return;
    }

    if (banner) banner.style.display = 'flex';
    if (launcher) launcher.style.display = 'none';

    if (titleEl) titleEl.textContent = this.activeRitual.title;
    if (statusEl) {
      statusEl.textContent = this.activeRitual.status.toUpperCase();
      statusEl.className = this.activeRitual.status === 'active' ? 'badge-provenance badge-personal' : 'badge-provenance badge-archive';
    }
    if (intentEl) intentEl.textContent = `"${this.activeRitual.intention}"`;
    if (pauseBtn) pauseBtn.textContent = this.activeRitual.status === 'paused' ? '▶ Resume' : '⏸ Pause';

    if (stagesEl) {
      stagesEl.innerHTML = this.activeRitual.stages.map((st, i) => {
        let cls = 'ritual-stage-node';
        if (st.status === 'completed') cls += ' completed';
        else if (i === this.activeRitual.currentStageIndex) cls += ' current';
        return `<span class="${cls}">${i + 1}. ${st.title}</span>`;
      }).join('');
    }
  }

  async recordArtifact(type, title, data, metadata = {}) {
    const artifact = {
      id: "art-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      ritualId: this.activeRitual ? this.activeRitual.id : null,
      type: type,
      title: title,
      data: data,
      metadata: metadata,
      createdAt: Date.now(),
      provenance: "PERSONAL"
    };

    await this.app.storage.saveArtifact(artifact);

    if (this.activeRitual) {
      this.activeRitual.artifacts.push(artifact);
      await this.app.storage.saveRitual(this.activeRitual);
      const currentStage = this.activeRitual.stages[this.activeRitual.currentStageIndex];
      if (currentStage && currentStage.toolId === this.app.activeTab) {
        currentStage.artifactId = artifact.id;
        currentStage.result = `Recorded artifact: ${title}`;
      }
      this.renderActiveBanner();
    }

    await this.app.refreshAltarRecentArtifacts();
    return artifact;
  }
}

// ==========================================
// 5. CHAMBER COMMAND PALETTE & DIRECT JUMP
// ==========================================
class ChamberPalette {
  constructor(app) {
    this.app = app;
    this.chambers = [
      { id: "altar", name: "The Altar", domain: "altar", desc: "Living Seal, active ritual engine, intention declaration" },
      { id: "forge-sigil", name: "Sigil Forge", domain: "forge", desc: "Procedural vowel stripper & custom vector sigil forging" },
      { id: "forge-dice", name: "Alchemical Dice", domain: "forge", desc: "Elemental polyhedral dice pools for divination" },
      { id: "grimoire-transmuter", name: "Ritual Transmuter", domain: "forge", desc: "Combine alchemical reagents (sulfur, quicksilver, lead)" },
      { id: "charging", name: "Charging Station", domain: "forge", desc: "Physical holding tactile aura intention charging" },
      { id: "demonology", name: "Goetic Entity Generator", domain: "forge", desc: "Procedural daemonological formulation" },
      { id: "library-solomon", name: "Keys of Solomon", domain: "archive", desc: "72 Goetic spirits, 44 pentacles, 72 Shem angels" },
      { id: "library-tenets", name: "TST Philosophy", domain: "archive", desc: "Seven foundational tenets of satanic reason and compassion" },
      { id: "trivia", name: "Gnosis Trivia", domain: "archive", desc: "Examine knowledge across daemonology & occult lore" },
      { id: "banish", name: "Banishing Ritual", domain: "chambers", desc: "Lesser banishing pentagram tracing on vector canvas" },
      { id: "astrolabe", name: "Black Sun Astrolabe", domain: "chambers", desc: "Astronomical planetary hour calculation & solar dials" },
      { id: "library-tarot", name: "Tarot Oracle", domain: "chambers", desc: "3-card Trinity & 5-card Pentagram oracle spreads" },
      { id: "sanctum-mixer", name: "Soundscape Mixer", domain: "chambers", desc: "Synthesize drone, white noise, and pulse heartbeats" },
      { id: "sanctum-timer", name: "Focus & Edge Timer", domain: "chambers", desc: "Box-breathing guide ring and concentration countdown" },
      { id: "incense", name: "Censer Smoke", domain: "chambers", desc: "Interactive fluid smoke particle censer" },
      { id: "echoes", name: "Acoustic Nodes", domain: "chambers", desc: "Interactive harmonic pitch matrix and chord chimes" },
      { id: "mirror", name: "Shadow Mirror", domain: "chambers", desc: "Dark reflective introspection & shadow integration" },
      { id: "scryer", name: "Dark Scryer", domain: "chambers", desc: "Obsidian black scrying pool for visions & contemplation" },
      { id: "pact", name: "Blood Pact Covenant", domain: "chambers", desc: "Sign binding covenant on digital parchment in crimson" },
      { id: "library-journey", name: "Descent Journey", domain: "chambers", desc: "Narrative underworld interactive crypt adventure" },
      { id: "grimoire-journal", name: "The Sovereign Grimoire", domain: "grimoire", desc: "Persistent ritual history, artifacts, journal & vault" },
      { id: "cipher", name: "Legacy Cipher Decoder", domain: "grimoire", desc: "Legacy Vigenère/XOR rotation obfuscation decoder" },
      { id: "smoke-serpent", name: "Smoke: Serpent of Wisdom", domain: "chambers", desc: "Gnostic serpent smoke stream" },
      { id: "smoke-brimstone", name: "Smoke: Brimstone Crucible", domain: "chambers", desc: "Deep alchemical brimstone fumes" },
      { id: "smoke-dragon", name: "Smoke: Dragon Breath", domain: "chambers", desc: "Martian fire smoke exhalation" },
      { id: "smoke-transmute", name: "Smoke: Alchemical Transmutation", domain: "chambers", desc: "Shifting vapor transmutation" },
      { id: "smoke-banish", name: "Smoke: Void Banishment", domain: "chambers", desc: "Purifying void smoke dispersal" },
      { id: "desire-bond", name: "Sovereign Bond", domain: "chambers", desc: "Consensual devotion covenant & energetic binding" },
      { id: "desire-shadow", name: "Sovereign Shadow", domain: "chambers", desc: "Erotic shadow integration and boundary affirmation" },
      { id: "desire-astrolabe", name: "Sovereign Astrolabe", domain: "chambers", desc: "Desire transit alignment & lunar conjunction" },
      { id: "desire-devotion", name: "Sovereign Devotion", domain: "chambers", desc: "Sacred repetitive devotional loop" },
      { id: "desire-edging", name: "Sovereign Energy Cultivation", domain: "chambers", desc: "Advanced sexual energy retention & focus loop" }
    ];
  }

  init() {
    const input = this.app.safeGet('chamber-palette-input');
    if (input) {
      input.addEventListener('input', () => this.renderList(input.value));
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.open();
      }
    });

    const modal = this.app.safeGet('chamber-palette-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.close();
      });
    }
  }

  open() {
    const modal = this.app.safeGet('chamber-palette-modal');
    const input = this.app.safeGet('chamber-palette-input');
    if (!modal) return;
    modal.classList.add('open');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.renderList('');
  }

  close() {
    const modal = this.app.safeGet('chamber-palette-modal');
    if (modal) modal.classList.remove('open');
  }

  renderList(query) {
    const listEl = this.app.safeGet('chamber-palette-list');
    if (!listEl) return;
    const q = query.toLowerCase().trim();
    const filtered = this.chambers.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      c.domain.toLowerCase().includes(q)
    );

    listEl.innerHTML = '';
    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding:1rem; text-align:center; color:var(--text-muted);">No chambers found matching "${query}".</div>`;
      return;
    }

    filtered.forEach(c => {
      const item = document.createElement('div');
      item.className = 'chamber-palette-item';
      item.setAttribute('tabindex', '0');
      item.innerHTML = `
        <div>
          <div class="chamber-palette-item-name">${c.name}</div>
          <div class="chamber-palette-item-desc">${c.desc}</div>
        </div>
        <span class="chamber-palette-item-domain">${c.domain.toUpperCase()}</span>
      `;
      item.addEventListener('click', () => {
        this.app.switchTab(c.id);
        this.close();
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.app.switchTab(c.id);
          this.close();
        }
      });
      listEl.appendChild(item);
    });
  }
}

class InfernalTempleApp {
  constructor() {
    this.storage = new HomoGoetiaStorage(this);
    this.vault = new HomoGoetiaVault(this);
    this.livingSeal = new LivingSealEngine(this);
    this.ritualEngine = new RitualSessionEngine(this);
    this.chamberPalette = new ChamberPalette(this);
    this.currentGrimoireView = 'sessions';

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

  async init() {
    await this.storage.init();
    this.vault.updateUI();
    this.chamberPalette.init();
    await this.ritualEngine.init();
    await this.livingSeal.init();
    await this.refreshAltarRecentSessions();
    await this.refreshAltarRecentArtifacts();

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
    this.initCollapsiblePanels();
    this.initDrippingEffect();
  }

  initDrippingEffect() {
    const canvas = this.safeGet('drip-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const colors = ['rgba(214, 28, 56, 0.85)', 'rgba(158, 16, 38, 0.75)', 'rgba(89, 10, 22, 0.65)'];
    const maxDrops = window.innerWidth < 768 ? 10 : 22;

    const createDrop = (initialY = null) => ({
      x: Math.random() * canvas.width,
      y: initialY !== null ? initialY : -10 - Math.random() * 50,
      length: 12 + Math.random() * 28,
      width: 1.5 + Math.random() * 2.2,
      speed: 0.8 + Math.random() * 1.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.4 + Math.random() * 0.5,
      splatRadius: 0,
      maxSplatRadius: 3 + Math.random() * 5,
      isSplatting: false
    });

    const drops = Array.from({ length: maxDrops }, () => createDrop(Math.random() * canvas.height));

    const render = () => {
      requestAnimationFrame(render);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach((d, i) => {
        if (!d.isSplatting) {
          d.y += d.speed;

          // Draw dripping viscous line + droplet head
          ctx.strokeStyle = d.color;
          ctx.lineWidth = d.width;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y - d.length);
          ctx.lineTo(d.x, d.y);
          ctx.stroke();

          // Droplet bulb
          ctx.fillStyle = d.color;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.width * 1.3, 0, Math.PI * 2);
          ctx.fill();

          // Check bottom boundary or random terminal point
          if (d.y >= canvas.height || (d.y > canvas.height * 0.8 && Math.random() < 0.002)) {
            d.isSplatting = true;
          }
        } else {
          // Expand ripple splat
          d.splatRadius += 0.4;
          const splatAlpha = Math.max(0, d.alpha * (1 - d.splatRadius / d.maxSplatRadius));
          ctx.strokeStyle = `rgba(214, 28, 56, ${splatAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(d.x, d.y, d.splatRadius * 1.8, d.splatRadius * 0.6, 0, 0, Math.PI * 2);
          ctx.stroke();

          if (d.splatRadius >= d.maxSplatRadius) {
            drops[i] = createDrop();
          }
        }
      });
    };

    render();
  }

  initCollapsiblePanels() {
    document.addEventListener('click', (e) => {
      const heading = e.target.closest('.explanation-panel h4:first-child');
      if (heading) {
        const panel = heading.closest('.explanation-panel');
        if (panel) {
          panel.classList.toggle('collapsed');
        }
      }
    });
  }

  // ==========================================
  // DOMAIN & TAB NAVIGATION & ROUTING
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

    // Sidebar navigation items
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        const domain = item.getAttribute('data-domain-nav');
        if (domain) {
          this.switchDomain(domain);
        } else if (tab) {
          this.switchTab(tab);
        }
        closeMobileMenu();
      });
    });

    // Top domain navigation bar
    document.querySelectorAll('.domain-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const domain = pill.getAttribute('data-domain') || pill.getAttribute('data-domain-nav');
        if (domain) this.switchDomain(domain);
      });
    });

    // Mobile bottom navigation bar
    document.querySelectorAll('.mobile-bottom-item').forEach(item => {
      item.addEventListener('click', () => {
        const domain = item.getAttribute('data-domain') || item.getAttribute('data-domain-mobile');
        if (domain) this.switchDomain(domain);
      });
    });

    // Command palette trigger
    const openPalette = () => {
      if (this.chamberPalette) this.chamberPalette.open();
    };
    this.safeBind('btn-cmd-palette', 'click', openPalette);
    this.safeBind('btn-open-palette', 'click', openPalette);

    // Custom ritual builder triggers
    this.safeBind('btn-open-custom-ritual', 'click', () => {
      if (this.ritualEngine) this.ritualEngine.openCustomRitualBuilder();
    });
    this.safeBind('btn-close-custom-modal', 'click', () => {
      if (this.ritualEngine) this.ritualEngine.closeCustomRitualBuilder();
    });
    this.safeBind('btn-launch-custom-ritual', 'click', () => {
      if (this.ritualEngine) this.ritualEngine.startCustomRitual();
    });
  }

  openChamberPalette() {
    if (this.chamberPalette) this.chamberPalette.open();
  }

  closeChamberPalette() {
    if (this.chamberPalette) this.chamberPalette.close();
  }

  switchDomain(domain) {
    document.querySelectorAll('.domain-pill, .mobile-bottom-item, [data-domain], [data-domain-nav]').forEach(el => {
      const d = el.getAttribute('data-domain') || el.getAttribute('data-domain-nav');
      if (d) {
        el.classList.toggle('active', d === domain);
      }
    });

    const domainOverviewTabs = {
      altar: 'altar-tab',
      archive: 'archive-overview-tab',
      forge: 'forge-overview-tab',
      chambers: 'chambers-overview-tab',
      grimoire: 'grimoire-journal-tab'
    };

    const targetTab = domainOverviewTabs[domain] || `${domain}-tab`;
    this.switchTab(targetTab);

    if (domain === 'grimoire') {
      this.refreshAllGrimoireViews();
    } else if (domain === 'altar') {
      this.refreshAltarRecentSessions();
      this.refreshAltarRecentArtifacts();
      if (this.livingSeal) this.livingSeal.render();
    }
  }

  switchTab(tabId) {
    let cleanId = tabId.endsWith('-tab') ? tabId.slice(0, -4) : tabId;
    
    const domainAliases = {
      'archive': 'archive-overview',
      'forge': 'forge-overview',
      'chambers': 'chambers-overview',
      'grimoire': 'grimoire-journal',
      'altar': 'altar'
    };
    if (domainAliases[cleanId]) {
      cleanId = domainAliases[cleanId];
    }

    const domainMapping = {
      'altar': 'altar',
      'archive-overview': 'archive',
      'library-solomon': 'archive',
      'astrolabe': 'archive',
      'mirror': 'archive',
      'scryer': 'archive',
      'trivia': 'archive',
      'forge-overview': 'forge',
      'forge-sigil': 'forge',
      'forge-dice': 'forge',
      'grimoire-transmuter': 'forge',
      'demonology': 'forge',
      'cipher': 'forge',
      'pact': 'forge',
      'chambers-overview': 'chambers',
      'banish': 'chambers',
      'portal': 'chambers',
      'library-tarot': 'chambers',
      'library-journey': 'chambers',
      'sanctum-mixer': 'chambers',
      'sanctum-timer': 'chambers',
      'library-tenets': 'chambers',
      'censer-smoke': 'chambers',
      'incense': 'chambers',
      'echoes': 'chambers',
      'charging': 'chambers',
      'smoke-serpent': 'chambers',
      'smoke-brimstone': 'chambers',
      'smoke-dragon': 'chambers',
      'smoke-transmute': 'chambers',
      'smoke-banish': 'chambers',
      'desire-bond': 'chambers',
      'desire-shadow': 'chambers',
      'desire-astrolabe': 'chambers',
      'desire-devotion': 'chambers',
      'desire-edging': 'chambers',
      'grimoire-journal': 'grimoire'
    };

    const currentDomain = domainMapping[cleanId] || 'chambers';
    document.querySelectorAll('.domain-pill, .mobile-bottom-item, [data-domain], [data-domain-nav]').forEach(el => {
      const d = el.getAttribute('data-domain') || el.getAttribute('data-domain-nav');
      if (d) {
        el.classList.toggle('active', d === currentDomain);
      }
    });

    const updateDOM = () => {
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });

      let activePanel = this.safeGet(`${cleanId}-tab`);
      if (!activePanel) {
        activePanel = this.safeGet(cleanId);
      }
      if (!activePanel && tabId.endsWith('-tab')) {
        activePanel = this.safeGet(tabId);
      }

      const activeNavItem = document.querySelector(`.nav-item[data-tab="${cleanId}"]`) ||
                            document.querySelector(`.nav-item[data-tab="${tabId}"]`);
      
      if (activePanel) activePanel.classList.add('active');
      if (activeNavItem) activeNavItem.classList.add('active');
      
      this.activeTab = cleanId;

      if (cleanId === 'forge-sigil') {
        this.drawSigilOnCanvas();
      }
      if (cleanId === 'altar') {
        this.refreshAltarRecentSessions();
        this.refreshAltarRecentArtifacts();
        if (this.livingSeal) this.livingSeal.render();
      }
      if (cleanId === 'grimoire-journal') {
        this.refreshAllGrimoireViews();
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
    ctx.fillStyle = '#050405';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Outer sacred Solomon geometry ring
    ctx.strokeStyle = 'rgba(214, 28, 56, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, 140, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(200, 150, 62, 0.08)';
    ctx.beginPath(); ctx.arc(cx, cy, 70, 0, Math.PI * 2); ctx.stroke();

    if (isReducedMotion) {
      // Reduced motion: static glowing seal core
      const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 90);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, '#d61c38');
      grad.addColorStop(0.7, '#8014b3');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(cx, cy, 90, 0, Math.PI * 2); ctx.fill();
    } else {
      // Dynamic Overdrive flame and ember physics
      this.portalFlameFlicker = (this.portalFlameFlicker || 0) + 0.08;
      const t = this.portalFlameFlicker;

      // Rotating inner triangle seal
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.3);
      ctx.strokeStyle = 'rgba(200, 150, 62, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * 2 * Math.PI) / 3;
        const rx = Math.cos(angle) * 70;
        const ry = Math.sin(angle) * 70;
        if (i === 0) ctx.moveTo(rx, ry);
        else ctx.lineTo(rx, ry);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Swirling embers
      if (!this.portalEmbers) {
        this.portalEmbers = Array.from({ length: 24 }, () => ({
          angle: Math.random() * Math.PI * 2,
          radius: 20 + Math.random() * 80,
          speed: 0.02 + Math.random() * 0.03,
          size: 1.5 + Math.random() * 2.5,
          alpha: 0.3 + Math.random() * 0.7
        }));
      }

      this.portalEmbers.forEach((e) => {
        e.angle += e.speed;
        e.radius = 20 + Math.sin(e.angle * 2 + t) * 60;
        const ex = cx + Math.cos(e.angle) * e.radius;
        const ey = cy + Math.sin(e.angle) * e.radius - (Math.sin(t * 2 + e.angle) * 10);
        ctx.fillStyle = `rgba(214, 28, 56, ${e.alpha})`;
        ctx.beginPath(); ctx.arc(ex, ey, e.size, 0, Math.PI * 2); ctx.fill();
      });

      // Core flame glow
      const size = 22 + Math.sin(t * 2) * 5;
      const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, size * 3);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.2, '#d61c38');
      grad.addColorStop(0.55, '#8014b3');
      grad.addColorStop(1, 'rgba(5, 4, 5, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Trace path drawing (User drawing action)
    if (this.portalPoints.length > 1) {
      ctx.strokeStyle = '#d61c38';
      ctx.lineWidth = 3.5;
      ctx.shadowBlur = 14;
      ctx.shadowColor = '#d61c38';
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

    this.safeBind('btn-save-sigil-grimoire', 'click', async () => {
      const canvas = this.safeGet('sigil-canvas');
      const intentInput = this.safeGet('sigil-intent');
      const intent = intentInput && intentInput.value.trim() ? intentInput.value.trim() : 'Sovereign Sigil';
      if (canvas) {
        const dataUrl = canvas.toDataURL('image/png');
        await this.ritualEngine.recordArtifact('sigil', `Forged Sigil: "${intent}"`, dataUrl, {
          intent: intent,
          style: document.querySelector('input[name="sigil-style"]:checked')?.value || 'geometric',
          glow: this.safeGet('sigil-glow-color')?.value || 'crimson'
        });
        this.showToast(`Sigil inscribed to Grimoire: "${intent}"`);
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

    const auraEl = this.safeGet('sigil-glow-color');
    const auraVal = auraEl ? auraEl.value : 'crimson';
    const auraColors = {
      crimson: { stroke: 'rgba(214, 28, 56, 0.9)', shadow: 'rgba(214, 28, 56, 0.7)' },
      gold: { stroke: 'rgba(200, 150, 62, 0.9)', shadow: 'rgba(200, 150, 62, 0.7)' },
      violet: { stroke: 'rgba(152, 103, 255, 0.9)', shadow: 'rgba(152, 103, 255, 0.7)' },
      cyan: { stroke: 'rgba(0, 180, 216, 0.9)', shadow: 'rgba(0, 180, 216, 0.7)' }
    };
    const activeColor = auraColors[auraVal] || auraColors.crimson;

    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = activeColor.stroke;
    ctx.shadowColor = activeColor.shadow;
    
    if (style === 'geometric') {
      ctx.beginPath();
      const firstPt = coordinates[pathIndices[0]];
      ctx.moveTo(firstPt.x, firstPt.y);
      for (let idx of pathIndices) {
        ctx.lineTo(coordinates[idx].x, coordinates[idx].y);
      }
      ctx.stroke();
    } 
    else if (style === 'runic') {
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
      const spreadTypeEl = this.safeGet('tarot-spread-type');
      const is5Card = spreadTypeEl && spreadTypeEl.value === '5card';
      const spreadRoles = is5Card 
        ? ["Spirit (Sovereignty)", "Fire (Passion)", "Water (Emotions)", "Air (Intellect)", "Earth (Flesh & Boundary)"]
        : ["Past (Foundation)", "Present (Initiation)", "Future (Resolution)"];
      
      this.safeGet('meaning-card-name').innerText = `${spreadRoles[cardIdx % spreadRoles.length]}: ${card.name}`;
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
        
        this.ritualEngine.recordArtifact('tarot', `Tarot Oracle: ${new Date().toLocaleDateString()}`, readingDetails.join('\n\n'), {
          spreadRoles,
          cards: readingDetails
        });

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
      if (logEl && logEl.children.length > 0) {
        if (confirm("Are you sure you want to clear the descent log history?")) {
          const oldLog = logEl.innerHTML;
          logEl.innerHTML = '';
          this.showToast('Descent log cleared.', 'Undo', () => {
            logEl.innerHTML = oldLog;
          });
        }
      }
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

    const presetBtns = document.querySelectorAll('.sound-preset-btn');
    const presets = {
      sanctum: { hum: 0.5, drone: 0.4, noise: 0.1, beat: 0.15 },
      crucible: { hum: 0.2, drone: 0.3, noise: 0.6, beat: 0.25 },
      evocation: { hum: 0.3, drone: 0.5, noise: 0.2, beat: 0.5 },
      astral: { hum: 0.6, drone: 0.2, noise: 0.35, beat: 0.1 }
    };

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-preset');
        const p = presets[name];
        if (!p) return;

        if (!this.synthPlaying && btnToggle) {
          btnToggle.click();
        }

        Object.keys(p).forEach(k => {
          if (sliders[k]) {
            sliders[k].value = p[k];
            if (valDisplays[k]) valDisplays[k].innerText = `${Math.round(p[k] * 100)}%`;
            this.updateSynthVolume(k, p[k]);
          }
        });
        this.safeGet('audio-mixer-status').innerText = `Preset Loaded: ${btn.innerText}`;
      });
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

    if (this.ritualEngine) {
      this.ritualEngine.recordArtifact('meditation', 'Focus Meditation Complete', 'Breathwork and mental concentration cycle successfully completed.', {
        timestamp: Date.now()
      });
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

    const recipeSelect = this.safeGet('transmute-recipe-preset');
    if (recipeSelect) {
      recipeSelect.addEventListener('change', () => {
        const v = recipeSelect.value;
        const base = this.safeGet('reagent-base');
        const cat = this.safeGet('reagent-catalyst');
        if (v === 'lead-gold' && base && cat) {
          base.value = "Lead Element";
          cat.value = "Gold leaf fragments";
          intensitySlider.value = 5;
        } else if (v === 'mercury-nightshade' && base && cat) {
          base.value = "Quicksilver Fluid";
          cat.value = "Nightshade essence";
          intensitySlider.value = 4;
        } else if (v === 'brimstone-ashes' && base && cat) {
          base.value = "Brimstone crystal";
          cat.value = "Ashes of Inversion";
          intensitySlider.value = 3;
        } else if (v === 'sulfur-obsidian' && base && cat) {
          base.value = "Sulfur powder";
          cat.value = "Obsidian glass shards";
          intensitySlider.value = 2;
        }
        if (intensityVal) {
          const roman = ["I", "II", "III", "IV", "V"];
          intensityVal.innerText = `Level ${roman[parseInt(intensitySlider.value) - 1]}`;
        }
      });
    }

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

        if (this.ritualEngine) {
          this.ritualEngine.recordArtifact('transmute', noteTitle, this.activeRecipeHtml.replace(/<[^>]*>/g, ''), {
            reagent, catalyst, intensity: parseInt(intensitySlider.value)
          });
        }

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
    if (this.storage && Array.isArray(this.grimoireEntries)) {
      this.grimoireEntries.forEach(e => {
        this.storage.saveJournalEntry(e);
      });
    }
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

  showToast(message, actionLabel = null, actionCallback = null) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:9999; display:flex; flex-direction:column; gap:10px;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'glass-card';
    toast.style.cssText = 'padding:12px 20px; background:rgba(16,14,17,0.95); border:1px solid var(--primary); border-radius:8px; color:var(--text-primary); font-size:0.9rem; display:flex; align-items:center; gap:16px; box-shadow:var(--glow-primary);';
    
    const text = document.createElement('span');
    text.innerText = message;
    toast.appendChild(text);

    if (actionLabel && actionCallback) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.style.cssText = 'padding:4px 12px; font-size:0.8rem; cursor:pointer;';
      btn.innerText = actionLabel;
      btn.onclick = () => {
        actionCallback();
        toast.remove();
      };
      toast.appendChild(btn);
    }

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 6000);
  }

  deleteGrimoireEntry() {
    if (!this.activeEntryId) {
      this.clearGrimoireEditor();
      return;
    }

    const targetEntry = this.grimoireEntries.find(e => e.id === this.activeEntryId);
    if (!targetEntry) return;

    if (confirm(`⚠️ Are you sure you want to delete "${targetEntry.title || 'this entry'}"?`)) {
      const entryIndex = this.grimoireEntries.findIndex(e => e.id === this.activeEntryId);
      const deletedEntry = { ...targetEntry, index: entryIndex };
      
      this.grimoireEntries = this.grimoireEntries.filter(e => e.id !== this.activeEntryId);
      this.saveGrimoireEntriesToStorage();
      this.clearGrimoireEditor();
      this.loadGrimoireEntriesFromStorage();

      this.showToast(`Grimoire entry deleted.`, 'Undo', () => {
        this.grimoireEntries.splice(deletedEntry.index, 0, targetEntry);
        this.saveGrimoireEntriesToStorage();
        this.loadGrimoireEntriesFromStorage();
        this.selectGrimoireEntry(targetEntry.id);
      });
    }
  }

  async exportGrimoireJSON() {
    const rituals = await this.storage.getAllRituals();
    const artifacts = await this.storage.getAllArtifacts();
    const payload = {
      app: "Homo Goetia",
      version: 2,
      exportedAt: Date.now(),
      grimoireEntries: this.grimoireEntries,
      rituals: rituals,
      artifacts: artifacts
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `homo_goetia_grimoire_backup_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    this.showToast("Grimoire archive exported.");
  }

  async importGrimoireJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!confirm("⚠️ WARNING: Importing an archive will merge entries into your grimoire. Proceed?")) {
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          this.grimoireEntries = imported;
          this.saveGrimoireEntriesToStorage();
          this.loadGrimoireEntriesFromStorage();
          this.showToast("Legacy journal entries restored.");
        } else if (imported && typeof imported === 'object') {
          if (Array.isArray(imported.grimoireEntries)) {
            this.grimoireEntries = imported.grimoireEntries;
            this.saveGrimoireEntriesToStorage();
            this.loadGrimoireEntriesFromStorage();
          }
          if (Array.isArray(imported.rituals)) {
            for (const r of imported.rituals) {
              await this.storage.saveRitual(r);
            }
          }
          if (Array.isArray(imported.artifacts)) {
            for (const a of imported.artifacts) {
              await this.storage.saveArtifact(a);
            }
          }
          await this.refreshAllGrimoireViews();
          await this.refreshAltarRecentSessions();
          await this.refreshAltarRecentArtifacts();
          if (this.livingSeal) await this.livingSeal.refresh();
          this.showToast("Grimoire archive restored successfully.");
        } else {
          alert("Invalid backup format.");
        }
      } catch (err) {
        alert("Failed to parse JSON file: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  // ==========================================
  // GRIMOIRE MULTI-VIEW & PERSISTENCE PANELS
  // ==========================================
  setGrimoireView(viewName) {
    this.currentGrimoireView = viewName;
    document.querySelectorAll('.grimoire-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-grimoire-view') === viewName);
    });

    document.querySelectorAll('.grimoire-view-panel').forEach(panel => {
      panel.style.display = 'none';
    });

    const target = this.safeGet(`grimoire-view-${viewName}`);
    if (target) {
      target.style.display = 'block';
    }

    if (viewName === 'sessions') {
      this.renderGrimoireSessionsList();
    } else if (viewName === 'artifacts') {
      this.renderGrimoireArtifactsGrid();
    } else if (viewName === 'journal') {
      this.renderGrimoireList();
    } else if (viewName === 'vault') {
      this.vault.updateUI();
    } else if (viewName === 'timeline') {
      this.renderGrimoireTimeline();
    }
  }

  async renderGrimoireSessionsList() {
    const listEl = this.safeGet('grimoire-sessions-list');
    if (!listEl) return;

    const rituals = await this.storage.getAllRituals();
    rituals.sort((a, b) => (b.sealedAt || b.createdAt || 0) - (a.sealedAt || a.createdAt || 0));

    if (rituals.length === 0) {
      listEl.innerHTML = `<p style="font-size:0.88rem; color:var(--text-muted); font-style:italic;">No ritual sessions recorded yet. Launch a ceremony on the Altar to begin.</p>`;
      return;
    }

    listEl.innerHTML = '';
    rituals.forEach(r => {
      const card = document.createElement('div');
      card.className = 'glass-card';
      card.style.cssText = 'padding:1rem; border-color:var(--border-color); display:flex; flex-direction:column; gap:0.5rem;';
      
      const isSealed = r.status === 'sealed';
      const statusBadge = isSealed 
        ? `<span class="badge-provenance badge-personal">⛧ SEALED</span>`
        : `<span class="badge-provenance badge-archive">${r.status.toUpperCase()}</span>`;
      
      const compLabel = (r.compositionId || 'CUSTOM').toUpperCase();
      const dateStr = new Date(r.sealedAt || r.createdAt).toLocaleString();
      const completedStages = r.stages ? r.stages.filter(s => s.status === 'completed').length : 0;
      const totalStages = r.stages ? r.stages.length : 0;
      const artCount = r.artifacts ? r.artifacts.length : 0;

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h4 style="font-family:var(--font-headline); font-size:1.05rem; color:var(--text-primary); margin:0 0 0.25rem 0;">${r.title}</h4>
            <div style="font-size:0.75rem; color:var(--text-muted);">${dateStr} &bull; Composition: <strong style="color:var(--accent-gold);">${compLabel}</strong></div>
          </div>
          <div>${statusBadge}</div>
        </div>
        <p style="font-size:0.85rem; font-style:italic; color:var(--text-secondary); margin:0.25rem 0; border-left:2px solid var(--primary); padding-left:0.5rem;">"${r.intention || 'No intention recorded.'}"</p>
        <div style="display:flex; gap:1rem; font-size:0.78rem; color:var(--text-muted); flex-wrap:wrap; margin-top:0.25rem;">
          <span>Stages: <strong style="color:var(--text-primary);">${completedStages}/${totalStages}</strong> completed</span>
          <span>Artifacts: <strong style="color:var(--accent-gold);">${artCount}</strong> forged</span>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:0.5rem; flex-wrap:wrap;">
          ${isSealed ? `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="app.inspectRitualOnSeal('${r.id}')">👁 View on Living Seal</button>` : ''}
          <button class="btn btn-danger" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="app.deleteRitualSession('${r.id}')">🗑 Delete</button>
        </div>
      `;
      listEl.appendChild(card);
    });
  }

  inspectRitualOnSeal(ritualId) {
    this.switchDomain('altar');
    if (this.livingSeal) {
      this.livingSeal.isolateRitual(ritualId);
      const inspector = this.safeGet('seal-inspector-card');
      if (inspector) inspector.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async deleteRitualSession(ritualId) {
    if (!confirm("Delete this ritual session? This action cannot be undone.")) return;
    await this.storage.deleteItem('rituals', ritualId);
    this.showToast("Ritual session removed.");
    if (this.livingSeal) await this.livingSeal.refresh();
    await this.refreshAllGrimoireViews();
    await this.refreshAltarRecentSessions();
  }

  filterArtifacts(type) {
    this.renderGrimoireArtifactsGrid(type);
  }

  async renderGrimoireArtifactsGrid(filterType = 'all') {
    const gridEl = this.safeGet('grimoire-artifacts-grid');
    if (!gridEl) return;

    let artifacts = await this.storage.getAllArtifacts();
    artifacts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    if (filterType !== 'all') {
      artifacts = artifacts.filter(a => a.type === filterType);
    }

    if (artifacts.length === 0) {
      gridEl.innerHTML = `<p style="font-size:0.88rem; color:var(--text-muted); font-style:italic; grid-column:1/-1;">No artifacts forged yet.</p>`;
      return;
    }

    gridEl.innerHTML = '';
    artifacts.forEach(art => {
      const card = document.createElement('div');
      card.className = 'glass-card';
      card.style.cssText = 'padding:0.85rem; border-color:var(--border-color); display:flex; flex-direction:column; gap:0.5rem; justify-content:space-between;';

      const typeBadges = {
        sigil: '<span class="badge-provenance badge-personal">SIGIL</span>',
        tarot: '<span class="badge-provenance badge-archive">TAROT</span>',
        transmute: '<span class="badge-provenance badge-forged">ELIXIR</span>',
        pact: '<span class="badge-provenance badge-personal">PACT</span>',
        meditation: '<span class="badge-provenance badge-archive">FOCUS</span>',
        demon: '<span class="badge-provenance badge-forged">DEMON</span>'
      };
      const badge = typeBadges[art.type] || `<span class="badge-provenance badge-personal">${(art.type || 'ARTIFACT').toUpperCase()}</span>`;
      const dateStr = new Date(art.createdAt).toLocaleDateString();

      let previewHtml = '';
      if (art.type === 'sigil' && typeof art.data === 'string' && art.data.startsWith('data:image')) {
        previewHtml = `<div style="text-align:center; background:#060506; border-radius:4px; padding:0.5rem; margin:0.25rem 0;"><img src="${art.data}" alt="${art.title}" style="max-height:120px; max-width:100%; filter:drop-shadow(0 0 6px var(--primary));"></div>`;
      } else if (art.type === 'pact' && art.metadata && art.metadata.signature) {
        previewHtml = `<div style="text-align:center; background:#060506; border-radius:4px; padding:0.5rem; margin:0.25rem 0;"><img src="${art.metadata.signature}" alt="Signature" style="max-height:80px; max-width:100%;"></div>`;
      } else {
        const textSnippet = typeof art.data === 'string' ? art.data.replace(/<[^>]*>?/gm, '').slice(0, 120) : JSON.stringify(art.metadata || {}).slice(0, 120);
        previewHtml = `<div style="font-size:0.75rem; color:var(--text-secondary); background:#060506; border-radius:4px; padding:0.5rem; margin:0.25rem 0; font-family:var(--font-mono); overflow:hidden;">${textSnippet}...</div>`;
      }

      card.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
            ${badge}
            <span style="font-size:0.72rem; color:var(--text-muted);">${dateStr}</span>
          </div>
          <h4 style="font-family:var(--font-headline); font-size:0.95rem; color:var(--text-primary); margin:0 0 0.25rem 0; line-height:1.3;">${art.title}</h4>
          ${previewHtml}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
          <button class="btn btn-outline" style="font-size:0.72rem; padding:0.2rem 0.5rem;" onclick="app.downloadArtifact('${art.id}')">💾 Export</button>
          <button class="btn btn-danger" style="font-size:0.72rem; padding:0.2rem 0.5rem;" onclick="app.deleteArtifact('${art.id}')">🗑</button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  async downloadArtifact(artifactId) {
    const art = await this.storage.getItem('artifacts', artifactId);
    if (!art) return;
    if (art.type === 'sigil' && typeof art.data === 'string' && art.data.startsWith('data:image')) {
      const a = document.createElement('a');
      a.href = art.data;
      a.download = `${art.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`;
      a.click();
    } else {
      const blob = new Blob([JSON.stringify(art, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${art.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
    this.showToast("Artifact exported.");
  }

  async deleteArtifact(artifactId) {
    if (!confirm("Delete this forged artifact?")) return;
    await this.storage.deleteItem('artifacts', artifactId);
    this.showToast("Artifact deleted.");
    this.renderGrimoireArtifactsGrid(this.safeGet('artifact-type-filter') ? this.safeGet('artifact-type-filter').value : 'all');
    await this.refreshAltarRecentArtifacts();
  }

  searchTimeline(query) {
    this.renderGrimoireTimeline(query);
  }

  async renderGrimoireTimeline(query = '') {
    const feedEl = this.safeGet('timeline-entries-feed');
    if (!feedEl) return;

    const rituals = await this.storage.getAllRituals();
    const artifacts = await this.storage.getAllArtifacts();
    const journal = this.grimoireEntries || [];

    const timelineItems = [];

    rituals.forEach(r => {
      timelineItems.push({
        id: r.id,
        category: 'RITUAL',
        timestamp: r.sealedAt || r.createdAt,
        title: `Ceremony: ${r.title}`,
        detail: `Intention: "${r.intention || 'Sovereign'}" • Status: ${(r.status || '').toUpperCase()}`,
        provenance: r.provenance || 'PERSONAL'
      });
    });

    artifacts.forEach(a => {
      timelineItems.push({
        id: a.id,
        category: 'ARTIFACT',
        timestamp: a.createdAt,
        title: `Forged ${(a.type || 'artifact').toUpperCase()}: ${a.title}`,
        detail: typeof a.data === 'string' ? a.data.slice(0, 100) : 'Artifact metadata logged.',
        provenance: a.provenance || 'FORGED'
      });
    });

    journal.forEach(j => {
      timelineItems.push({
        id: j.id,
        category: 'JOURNAL',
        timestamp: j.timestamp || Date.now(),
        title: `Journal: ${j.title || 'Untitled Entry'}`,
        detail: (j.content || '').slice(0, 100),
        provenance: 'PERSONAL'
      });
    });

    timelineItems.sort((a, b) => b.timestamp - a.timestamp);

    const q = query.toLowerCase().trim();
    const filtered = q ? timelineItems.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.detail.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ) : timelineItems;

    if (filtered.length === 0) {
      feedEl.innerHTML = `<p style="font-size:0.88rem; color:var(--text-muted); font-style:italic;">No events recorded in ritual timeline matching query.</p>`;
      return;
    }

    feedEl.innerHTML = '';
    filtered.forEach(item => {
      const row = document.createElement('div');
      row.className = 'glass-card';
      row.style.cssText = 'padding:0.75rem 1rem; border-color:var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;';
      
      const badgeCls = item.provenance === 'ARCHIVE' ? 'badge-archive' : item.provenance === 'FORGED' ? 'badge-forged' : 'badge-personal';
      const icon = item.category === 'RITUAL' ? '⚔' : item.category === 'ARTIFACT' ? '🔮' : '📓';

      row.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <span style="font-size:1.2rem;">${icon}</span>
          <div>
            <div style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">${item.title}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${item.detail}</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span class="badge-provenance ${badgeCls}">${item.provenance}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">${new Date(item.timestamp).toLocaleDateString()}</span>
        </div>
      `;
      feedEl.appendChild(row);
    });
  }

  async refreshAllGrimoireViews() {
    await this.renderGrimoireSessionsList();
    await this.renderGrimoireArtifactsGrid();
    await this.renderGrimoireTimeline();
    this.renderGrimoireList();
  }

  async refreshAltarRecentSessions() {
    const container = this.safeGet('altar-recent-sessions');
    if (!container) return;

    const rituals = await this.storage.getAllRituals();
    rituals.sort((a, b) => (b.sealedAt || b.createdAt || 0) - (a.sealedAt || a.createdAt || 0));
    const recent = rituals.slice(0, 3);

    if (recent.length === 0) {
      container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">No ceremonies sealed yet. Select a composition above to initiate.</p>`;
      return;
    }

    container.innerHTML = '';
    recent.forEach(r => {
      const card = document.createElement('div');
      card.className = 'glass-card';
      card.style.cssText = 'padding:0.75rem; border-color:var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;';
      const dateStr = new Date(r.sealedAt || r.createdAt).toLocaleDateString();
      card.innerHTML = `
        <div>
          <div style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">${r.title}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${dateStr} &bull; "${(r.intention || '').slice(0, 36)}..."</div>
        </div>
        <button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.5rem;" onclick="app.inspectRitualOnSeal('${r.id}')">👁 View Seal</button>
      `;
      container.appendChild(card);
    });
  }

  async refreshAltarRecentArtifacts() {
    const container = this.safeGet('altar-recent-artifacts');
    if (!container) return;

    const artifacts = await this.storage.getAllArtifacts();
    artifacts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    const recent = artifacts.slice(0, 4);

    if (recent.length === 0) {
      container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">No artifacts forged yet.</p>`;
      return;
    }

    container.innerHTML = '';
    recent.forEach(a => {
      const item = document.createElement('div');
      item.className = 'glass-card';
      item.style.cssText = 'padding:0.6rem; border-color:var(--border-color); text-align:center; font-size:0.8rem;';
      let icon = '🔮';
      if (a.type === 'sigil') icon = '⛧';
      else if (a.type === 'tarot') icon = '🃏';
      else if (a.type === 'transmute') icon = '⚗';
      else if (a.type === 'pact') icon = '🩸';

      item.innerHTML = `
        <div style="font-size:1.3rem; margin-bottom:0.25rem;">${icon}</div>
        <div style="font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${a.title}">${a.title}</div>
        <div style="font-size:0.7rem; color:var(--text-muted);">${new Date(a.createdAt).toLocaleDateString()}</div>
      `;
      container.appendChild(item);
    });
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

    this.safeBind('btn-solomon-blend-seal', 'click', () => {
      const active = this.getSolomonActiveItem();
      if (!active) return;
      
      const randomSecond = GOETIA_SPIRITS[Math.floor(Math.random() * GOETIA_SPIRITS.length)];
      const blendedName = `${active.name} × ${randomSecond.name}`;
      const color = 'var(--accent-gold)';

      const pane = this.safeGet('solomon-detail-pane');
      if (!pane) return;

      const dualSvg = `
        <svg viewBox="0 0 300 300" class="solomon-svg" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="135" fill="none" stroke="${color}" stroke-width="3" />
          <polygon points="150,25 258,225 42,225" fill="none" stroke="var(--primary)" stroke-width="2" />
          <polygon points="150,275 42,75 258,75" fill="none" stroke="var(--accent-purple)" stroke-width="2" opacity="0.7" />
          <text x="150" y="155" fill="${color}" font-family="Cinzel, serif" font-size="14" font-weight="bold" text-anchor="middle">DUAL BLEND SEAL</text>
          <text x="150" y="175" fill="var(--text-secondary)" font-family="sans-serif" font-size="10" text-anchor="middle">${blendedName}</text>
        </svg>
      `;

      pane.innerHTML = `
        <div class="solomon-view">
          <div class="solomon-metadata">
            <h3 style="color:var(--accent-gold); border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; font-size:1.4rem;">Dual Invocative Blend: ${blendedName}</h3>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Primary Entity</span><span class="solomon-meta-val">${active.name}</span></div>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Secondary Entity</span><span class="solomon-meta-val">${randomSecond.name} (${randomSecond.rank})</span></div>
            <div class="solomon-desc">
              <h4>Synergistic Resonances</h4>
              <p>Harmonizes ${active.name}'s power with ${randomSecond.name}'s office (${randomSecond.office}).</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div class="solomon-svg-container" style="border-color:var(--accent-gold); box-shadow:0 0 15px rgba(200,150,62,0.3);">${dualSvg}</div>
          </div>
        </div>
      `;
    });

    this.renderSolomonList();
  }

  getSolomonActiveItem() {
    if (!this.solomonActiveId) return null;
    if (this.solomonActiveId.startsWith('goetia-')) {
      const id = parseInt(this.solomonActiveId.split('-').pop());
      const s = GOETIA_SPIRITS.find(item => item.id === id);
      if (s) return { id: this.solomonActiveId, name: s.name, category: 'goetia', data: s };
    } else if (this.solomonActiveId.startsWith('shem-')) {
      const id = parseInt(this.solomonActiveId.split('-').pop());
      const a = SHEM_ANGELS.find(item => item.num === id);
      if (a) return { id: this.solomonActiveId, name: a.name, category: 'shem', data: a };
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

    if (cat === 'all' || cat === 'shem') {
      SHEM_ANGELS.forEach(a => {
        if (a.name.toLowerCase().includes(query) || a.order.toLowerCase().includes(query)) {
          items.push({ id: a.id, name: `#${a.num} ${a.name}`, sub: `${a.order} (${a.verse})`, glyph: '✨', category: 'shem', data: a });
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

    if (items.length === 0) {
      listEl.innerHTML = `<div class="empty-state-card" style="padding: 1.5rem; text-align: center; color: var(--text-muted); border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
        <p style="font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; color: var(--text-secondary);">⛧ No Spirits or Pentacles Found</p>
        <p style="font-size: 0.85rem;">Try adjusting your search terms or category filter.</p>
      </div>`;
      return;
    }

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
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
              <span class="badge-provenance badge-forged">FORGED / PROCEDURAL</span>
              <span style="font-size:0.75rem; color:var(--text-muted);">Algorithmic vector synthesis</span>
            </div>
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
    } else if (item.category === 'shem') {
      const a = item.data;
      pane.innerHTML = `
        <div class="solomon-view">
          <div class="solomon-metadata">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
              <span class="badge-provenance badge-archive">ARCHIVE</span>
              <span style="font-size:0.75rem; color:var(--text-muted);">Historical Shem HaMephorash</span>
            </div>
            <h3 style="color:var(--accent-gold); border-bottom:1px solid var(--border-color); padding-bottom:0.5rem; font-size:1.4rem;">Angel #${a.num}: ${a.name}</h3>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Angelic Order</span><span class="solomon-meta-val">${a.order}</span></div>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Sacred Verse</span><span class="solomon-meta-val">${a.verse}</span></div>
            <div class="solomon-meta-row"><span class="solomon-meta-label">Goetic Counterpart</span><span class="solomon-meta-val">Spirit #${a.goetiaCounterId}</span></div>
            <div class="solomon-desc">
              <h4>Counter-Illumination Virtue</h4>
              <p>${a.virtue}</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div class="solomon-svg-container" style="border-color:var(--accent-gold); box-shadow:0 0 15px rgba(200, 150, 62, 0.2);">${svg}</div>
          </div>
        </div>
      `;
    } else {
      const p = item.data;
      pane.innerHTML = `
        <div class="solomon-view">
          <div class="solomon-metadata">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
              <span class="badge-provenance badge-archive">ARCHIVE</span>
              <span style="font-size:0.75rem; color:var(--text-muted);">Clavicula Salomonis Historical Record</span>
            </div>
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

    canvas.style.touchAction = 'none';

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startBanish = (e) => {
      this.banishIsDrawing = true;
      this.banishPoints = [getPos(e)];
      if (e.target.setPointerCapture && e.pointerId !== undefined) {
        try { e.target.setPointerCapture(e.pointerId); } catch(err) {}
      }
    };

    const moveBanish = (e) => {
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
    };

    const endBanish = (e) => {
      if (!this.banishIsDrawing) return;
      this.banishIsDrawing = false;
      if (e && e.target && e.target.releasePointerCapture && e.pointerId !== undefined) {
        try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
      }
      this.evaluateBanishmentPath(points);
    };

    canvas.addEventListener('pointerdown', startBanish);
    canvas.addEventListener('pointermove', moveBanish);
    canvas.addEventListener('pointerup', endBanish);
    canvas.addEventListener('pointercancel', endBanish);

    // Fallback mouse events
    canvas.addEventListener('mousedown', startBanish);
    canvas.addEventListener('mousemove', moveBanish);
    canvas.addEventListener('mouseup', endBanish);

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

    const updateLivePlanetaryHour = () => {
      const clockEl = this.safeGet('planetary-hour-clock');
      const infoEl = this.safeGet('planetary-hour-info');
      if (!clockEl || !infoEl) return;

      const now = new Date();
      const hour = now.getHours();
      const planetaryHours = [
        { name: "Sun (☉)", element: "Fire", metal: "Gold", focus: "Authority, vitality, and high ceremonial operations." },
        { name: "Venus (♀)", element: "Earth", metal: "Copper", focus: "Harmony, attraction, and artistic creation." },
        { name: "Mercury (☿)", element: "Air", metal: "Quicksilver", focus: "Ciphers, logic, communication, and swift action." },
        { name: "Moon (☽)", element: "Water", metal: "Silver", focus: "Dreams, astral portals, and sub-conscious exploration." },
        { name: "Saturn (♄)", element: "Earth", metal: "Lead", focus: "Banishment, discipline, and structural bounds." },
        { name: "Jupiter (♃)", element: "Water", metal: "Tin", focus: "Abundance, glory, and expansion of consciousness." },
        { name: "Mars (♂)", element: "Fire", metal: "Iron", focus: "Courage, martial vigor, and destroying opposition." }
      ];

      const current = planetaryHours[hour % 7];
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      clockEl.innerHTML = `Current Planetary Hour: <strong>${current.name}</strong> (${timeStr})`;
      infoEl.innerHTML = `<strong>Element:</strong> ${current.element} &nbsp;|&nbsp; <strong>Metal:</strong> ${current.metal}<br><strong>Optimal Focus:</strong> ${current.focus}`;
    };

    updateLivePlanetaryHour();
    setInterval(updateLivePlanetaryHour, 60000);

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

    btn.addEventListener('click', () => {
      this.playClickSound();
      
      const rank = this.safeGet('demon-rank') ? this.safeGet('demon-rank').value : 'All';
      const elem = this.safeGet('demon-element') ? this.safeGet('demon-element').value : 'All';

      let filtered = GOETIA_SPIRITS.filter(s => 
        (rank === 'All' || s.rank === rank) && (elem === 'All' || s.element === elem)
      );

      if (filtered.length === 0) filtered = GOETIA_SPIRITS;

      const spirit = filtered[this.getRandomNumber(filtered.length)];

      this.safeGet('demon-output-title').innerText = `Summoned Spirit: ${spirit.name}`;
      this.safeGet('demon-output-desc').innerHTML = `
        A powerful <strong>${spirit.rank}</strong> governed by <strong>${spirit.planet}</strong> (${spirit.element} Element).<br>
        Commands <strong>${spirit.legions}</strong> infernal legions.<br>
        <strong>Planetary Metal:</strong> ${spirit.metal} &nbsp;|&nbsp; <strong>Incense:</strong> ${spirit.incense}<br>
        <strong>Magical Office:</strong> ${spirit.office}
      `;

      const strokeColor = spirit.rank === 'King' ? 'var(--accent-gold)' : spirit.rank === 'Duke' ? 'var(--accent-purple)' : 'var(--primary)';
      const mockItem = { id: `goetia-${spirit.id}`, name: spirit.name, category: 'goetia', data: spirit };
      this.safeGet('demon-sigil-container').innerHTML = this.generateSolomonSVG(mockItem, strokeColor);

      const outputCard = this.safeGet('demon-output-card');
      if (outputCard) {
        outputCard.style.display = 'block';
        outputCard.classList.remove('slide-up-entry');
        void outputCard.offsetWidth; // Trigger reflow
        outputCard.classList.add('slide-up-entry');
      }
    });

    this.safeBind('btn-save-demon-artifact', 'click', async () => {
      const title = this.safeGet('demon-output-title')?.innerText || 'Summoned Entity';
      const desc = this.safeGet('demon-output-desc')?.innerText || '';
      if (this.ritualEngine) {
        await this.ritualEngine.recordArtifact('demon', title, desc, {
          provenance: 'FORGED'
        });
        this.showToast(`${title} recorded to Grimoire`);
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

    const vaultSelect = this.safeGet('cipher-key-vault');
    if (vaultSelect) {
      vaultSelect.addEventListener('change', () => {
        const kInput = this.safeGet('cipher-key');
        if (kInput && vaultSelect.value) {
          kInput.value = vaultSelect.value;
        }
      });
    }

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

    canvas.style.touchAction = 'none';

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
      const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startPact = (e) => {
      drawing = true;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      if (e.target.setPointerCapture && e.pointerId !== undefined) {
        try { e.target.setPointerCapture(e.pointerId); } catch(err) {}
      }
    };

    const movePact = (e) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    };

    const endPact = (e) => {
      drawing = false;
      if (e && e.target && e.target.releasePointerCapture && e.pointerId !== undefined) {
        try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
      }
    };

    canvas.addEventListener('pointerdown', startPact);
    canvas.addEventListener('pointermove', movePact);
    canvas.addEventListener('pointerup', endPact);
    canvas.addEventListener('pointercancel', endPact);

    // Fallback mouse events
    canvas.addEventListener('mousedown', startPact);
    canvas.addEventListener('mousemove', movePact);
    canvas.addEventListener('mouseup', endPact);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }

    if (sealBtn) {
      sealBtn.addEventListener('click', async () => {
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

        if (this.ritualEngine) {
          await this.ritualEngine.recordArtifact('pact', `Blood Pact: ${spirit}`, terms, {
            spirit,
            signature: canvas.toDataURL('image/png')
          });
        }

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
            aura.style.transform = `scale(${this.chargeLevel / 100})`;
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
          aura.style.transform = 'scale(0)';
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
