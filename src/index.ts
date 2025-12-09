import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
// import { characters } from './database/character.js'
// import villages from "./database/villages.js";

// console.log(villages);

const characters = [
  {
    "id": 1344,
    "name": "Naruto Uzumaki",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png",
      "https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png"
    ],
    "family": {
      "father": "Minato Namikaze",
      "mother": "Kushina Uzumaki",
      "son": "Boruto Uzumaki",
      "daughter": "Himawari Uzumaki",
      "wife": "Hinata Uzumaki",
      "adoptive son": "Kawaki",
      "godfather": "Jiraiya"
    },
    "jutsu": [
      "All Directions Shuriken",
      "Baryon Mode",
      "Big Ball Rasengan",
      "Big Ball Rasenshuriken",
      "Big Ball Spiralling Serial Zone Spheres",
      "Boil Release: Unrivalled Strength",
      "Chakra Transfer Technique",
      "Clone Body Blow",
      "Clone Flying Arrow",
      "Clone Spinning Heel Drop (Anime only)",
      "Combination Transformation",
      "Continuous Tailed Beast Balls",
      "Crescent Moon Rasengan",
      "Earth Release: Earth-Style Wall",
      "Erupting Propulsion Fist",
      "Fire Release: Toad Oil Flame Bullet (Anime only)",
      "Frog Kata",
      "Frog Strike",
      "Gelel Rasengan",
      "Gentle Step Spiralling Twin Lion Fists",
      "Guts Rasengan",
      "Harem Technique",
      "Hurricane Thunderclap — Majestic Attire Sword Stroke",
      "Ink Creation",
      "Kurama Arm Attack",
      "Mini-Rasenshuriken",
      "Multiple Shadow Clone Technique",
      "Naruto Region Combo",
      "Naruto Uzumaki Combo",
      "Naruto Uzumaki Two Thousand Combo",
      "Naruto and Shion's Super Chakra Rasengan",
      "Negative Emotions Sensing",
      "New Sexy Technique",
      "Nine-Tails Chakra Mode",
      "Ninja Art: Bare-Handed Blade Block",
      "One Thousand Years of Death",
      "Pachinko Technique (Anime only)",
      "Parachute",
      "Parent and Child Rasengan",
      "Planetary Rasengan",
      "Rasengan",
      "Rasengan: Flash",
      "Regeneration Ability",
      "Runt Ball Rasengan (Anime only)",
      "Sage Art: Lava Release Rasenshuriken",
      "Sage Art: Magnet Release Rasengan",
      "Sage Art: Many Ultra-Big Ball Spiralling Serial Spheres",
      "Sage Art: Super Tailed Beast Rasenshuriken",
      "Sage Mode",
      "Scorch Release: Halo Hurricane Jet Black Arrow Style Zero",
      "Seven-Coloured Rasengan",
      "Sexy Reverse Harem Technique",
      "Sexy Technique",
      "Sexy Technique: Pole Dance and Nice Body (Anime only)",
      "Shadow Clone Technique",
      "Shadow Shuriken Technique",
      "Shuriken Shadow Clone Technique (Anime only)",
      "Six Paths Sage Mode",
      "Six Paths Senjutsu",
      "Six Paths Yang Power",
      "Six Paths — Chibaku Tensei",
      "Six Paths: Ultra-Big Ball Rasenshuriken",
      "Soap Bubble Ninjutsu (Anime only)",
      "Spiralling Absorption Sphere",
      "Spiralling Serial Spheres",
      "Spiralling Strife Spheres",
      "Strong Fist (Anime only)",
      "Summoning Technique (Toad)",
      "Summoning: Food Cart Destroyer Technique",
      "Super Mini-Tailed Beast Ball",
      "Super-Ultra-Big Ball Rasengan",
      "Supreme Ultimate Rasengan",
      "Tailed Beast Ball",
      "Tailed Beast Ball Rasenshuriken",
      "Tailed Beast Chakra Arms",
      "Tailed Beast Full Charge",
      "Tailed Beast Rasengan",
      "Tailed Beast Shockwave",
      "Torii Seal",
      "Tornado Rasengan",
      "Truth-Seeking Ball",
      "Turning into a Frog Technique (Anime only)",
      "Typhoon Water Vortex Technique",
      "Ultra-Big Ball Rasengan",
      "Ultra-Many Spiralling Serial Spheres",
      "Uzumaki Formation (Anime only)",
      "Wind Release: Rasengan",
      "Wind Release: Rasenshuriken",
      "Wind Release: Repeated Rasenshuriken",
      "Wind Release: Toad Gun (Anime only)",
      "Wind Release: Toad Oil Bullet (Anime only)",
      "Wind Release: Toad Oil Flame Bullet (Anime only)",
      "Wind Release: Ultra-Big Ball Rasenshuriken",
      "Wisdom Wolf Decay"
    ],
    "clan": ["Uzumaki"]
  },
  {
    "id": 1307,
    "name": "Sasuke Uchiha",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png",
      "https://static.wikia.nocookie.net/naruto/images/1/13/Sasuke_Part_2.png"
    ],
    "family": {
      "father": "Fugaku Uchiha",
      "mother": "Mikoto Uchiha",
      "brother": "Itachi Uchiha",
      "daughter": "Sarada Uchiha",
      "wife": "Sakura Uchiha"
    },
    "jutsu": [
      "Afterglow",
      "Amaterasu",
      "Amaterasu: Flame Wrapping Fire",
      "Amenotejikara",
      "Animal Path",
      "Area Scanning Technique",
      "Asura Path",
      "Banshō Ten'in (Anime only)",
      "Binding Snake Glare Spell",
      "Blaze Release: Honoikazuchi (Anime only)",
      "Blaze Release: Kagutsuchi",
      "Blaze Release: Susanoo Kagutsuchi",
      "Blaze Release: Yasaka Magatama",
      "Chibaku Tensei",
      "Chidori",
      "Chidori Current",
      "Chidori Light Sword",
      "Chidori Senbon",
      "Chidori Sharp Spear",
      "Coercion Sharingan",
      "Combination Transformation (Anime only)",
      "Cursed Seal of Heaven",
      "Demonic Illusion: Mirage Crow",
      "Demonic Illusion: Shackling Stakes Technique",
      "Deva Path",
      "Earth Release: Stone Luster",
      "Evil Releasing Method",
      "Fire Release: Dragon Fire Technique",
      "Fire Release: Great Dragon Fire Technique",
      "Fire Release: Great Fireball Technique",
      "Fire Release: Phoenix Sage Fire Technique",
      "Genjutsu: Sharingan",
      "Hidden Shadow Snake Hands",
      "Human Path",
      "Hurricane Thunderclap — Majestic Attire Sword Stroke",
      "Indra's Arrow",
      "Kirin",
      "Lightning Flash",
      "Lion Combo",
      "Lorentz Gun (Novel only)",
      "Majestic Attire: Susanoo",
      "Manipulated Shuriken Technique",
      "Manipulating Windmill Triple Blades",
      "Moonlight",
      "Naka Shrine Pass Technique",
      "Naraka Path",
      "Orochimaru-Style Body Replacement Technique",
      "Outer Path",
      "Pachinko Technique (Anime only)",
      "Peregrine Falcon Drop",
      "Preta Path",
      "Reverse Summoning Technique",
      "Sasuke Uchiha's Space–Time Dōjutsu",
      "Scorch Release: Halo Hurricane Jet Black Arrow Style Zero",
      "Shadow Clone Technique",
      "Shadow Shuriken Technique",
      "Shadow of the Dancing Leaf",
      "Six Paths Technique",
      "Six Paths Yin Power",
      "Six Paths — Chibaku Tensei",
      "Strong Fist",
      "Summoning Technique (Hawk, Snake)",
      "Summoning: Lightning Flash Blade Creation",
      "Supercooled Water Technique",
      "Surging Fire Wild Dance",
      "Susanoo",
      "Susanoo: Captive Slash",
      "Susanoo: Chidori",
      "Susanoo: Crush",
      "Susanoo: Fist",
      "Susanoo: Great Fireball Technique (Anime only)",
      "Sword of Kagutsuchi",
      "Sword of Kusanagi: Chidori Katana",
      "Uchiha Style Shurikenjutsu: \"Lightning\": Triple",
      "Water Release: Water Formation Wall (Novel only)"
    ],
    "clan": ["Uchiha"]
  },
  {
    "id": 1299,
    "name": "Madara Uchiha",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png"
    ],
    "family": {
      "father": "Tajima Uchiha",
      "brother": "Izuna Uchiha"
    },
    "jutsu": [
      "Animal Path",
      "Asura Path",
      "Black Receiver",
      "Blocking Technique Absorption Seal",
      "Chibaku Tensei",
      "Demonic Statue Chains",
      "Deva Path",
      "Evil Disturbance Waltz",
      "Fire Release: Dragon Flame Release Song Technique",
      "Fire Release: Great Fire Annihilation",
      "Fire Release: Great Fire Destruction",
      "Fire Release: Great Fireball Technique",
      "Fire Release: Great Flame Flower (Anime only)",
      "Fire Release: Hiding in Ash and Dust Technique",
      "Forbidden Individual Curse Tag",
      "Genjutsu: Sharingan",
      "God: Nativity of a World of Trees",
      "Gunbai Fanned Wind (Anime only)",
      "Hiding in Surface Technique",
      "Human Path",
      "Infinite Tsukuyomi",
      "Izanagi",
      "Kamui",
      "Limbo: Border Jail",
      "Majestic Attire: Susanoo",
      "Multiple Wood Release Clone Technique",
      "Naraka Path",
      "Outer Path",
      "Preta Path",
      "Regeneration Ability",
      "Sage Art: Storm Release Light Fang",
      "Sage Art: Yin Release Lightning Dispatch",
      "Sensing Technique",
      "Shadow Clone Technique",
      "Six Paths Senjutsu",
      "Six Paths Technique",
      "Six Paths Ten-Tails Coffin Seal",
      "Summoning Technique (Demonic Statue of the Outer Path, Kurama)",
      "Summoning: Demonic Statue of the Outer Path",
      "Susanoo",
      "Susanoo: Fist",
      "Tengai Shinsei",
      "Transcription Seal: Izanagi",
      "Truth-Seeking Ball",
      "Uchiha Return",
      "Will Materialisation",
      "Wood Clone Technique",
      "Wood Release Secret Technique: Nativity of a World of Trees",
      "Wood Release: Advent of a World of Flowering Trees",
      "Wood Release: Wood Dragon Technique",
      "Yasaka Magatama"
    ],
    "clan": ["Uchiha"]
  },
  {
    "id": 376,
    "name": "Kakashi Hatake",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png",
      "https://static.wikia.nocookie.net/naruto/images/2/25/Kakashi_Part_III.png"
    ],
    "family": {
      "father": "Sakumo Hatake"
    },
    "jutsu": [
      "Area Scanning Technique",
      "Chidori",
      "Demonic Illusion: Hell Viewing Technique",
      "Earth Release: Double Suicide Decapitation Technique",
      "Earth Release: Earth Wave Technique (Anime only)",
      "Earth Release: Earth-Style Wall",
      "Earth Release: Hiding Like a Mole Technique",
      "Earth Release: Multiple Earth-Style Wall (Anime only)",
      "Earth Release: Rending Drill Fang",
      "Eight Gates",
      "Evil Sealing Method",
      "Eye Mind Reading (Anime only)",
      "Fire Release: Great Fireball Technique (Anime only)",
      "Fire Release: Water Mist (Novel only)",
      "Flying Revolving Sword (Anime only)",
      "Front Lotus (Anime only)",
      "Genjutsu: Sharingan",
      "Ground Splitting Technique",
      "Hiding in Mist Technique (Anime only)",
      "Ice Release: One Horned White Whale",
      "Kamui",
      "Kamui Lightning Cutter",
      "Kamui Shuriken",
      "Lightning Cutter",
      "Lightning Release: Lightning Beast Tracking Fang",
      "Lightning Release: Purple Electricity",
      "Lightning Release: Shadow Clone Technique",
      "Lightning Transmission",
      "Multiple Shadow Clone Technique",
      "One Thousand Years of Death",
      "Peregrine Falcon Drop (Anime only)",
      "Rasengan",
      "Shadow Clone Technique",
      "Shadow of the Dancing Leaf (Anime only)",
      "Silent Killing",
      "Strong Fist (Anime only)",
      "Summoning Technique (Ninken)",
      "Summoning: Earth Release: Tracking Fang Technique",
      "Susanoo",
      "Water Clone Technique",
      "Water Release: Great Waterfall Technique",
      "Water Release: Water Beast",
      "Water Release: Water Bullet Technique",
      "Water Release: Water Dragon Bullet Technique",
      "Water Release: Water Formation Wall",
      "Water Release: Water Shark Bullet Technique",
      "White Light Blade"
    ],
    "clan": ["Hatake"]
  },
  {
    "id": 928,
    "name": "Orochimaru",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png",
      "https://static.wikia.nocookie.net/naruto/images/b/be/Orochimaru_Part_III.png"
    ],
    "family": {
      "clone/son": "Mitsuki"
    },
    "jutsu": [
      "Binding Snake Glare Spell",
      "Casualty Puppet (Anime only)",
      "Chakra Scalpel (Anime only)",
      "Earth Release: Hiding Like a Mole Technique",
      "Earth Release: Shadow Clone (Anime only)",
      "Eight Branches Technique",
      "Eight Trigrams Sealing Style (Anime only)",
      "Five Elements Seal",
      "Five Elements Unseal (Anime only)",
      "Formation of Ten Thousand Snakes",
      "Four Black Snakes Formation (Anime only)",
      "Four Symbols Seal (Anime only)",
      "Fūinjutsu Trap (Anime only)",
      "Gathering of the Snakes",
      "Genjutsu Binding (Anime only)",
      "Hidden Doorway Technique (Anime only)",
      "Hidden Shadow Snake Hands",
      "Hideout Destruction Trap (Anime only)",
      "Hiding in Surface Technique",
      "Living Corpse Reincarnation",
      "Many Hidden Shadow Snake Hands",
      "Orochimaru's Juinjutsu",
      "Orochimaru-Style Body Replacement Technique",
      "Regeneration Ability",
      "Reversible Technique (Anime only)",
      "Self-Healing Technique (Anime only)",
      "Shadow Clone Technique",
      "Shuriken Shadow Clone Technique (Anime only)",
      "Slithering Snake Mode",
      "Snake Clone Technique (Anime only)",
      "Snake Mouth Bind (Anime only)",
      "Soft Physique Modification",
      "Sound Wave Technique (Anime only)",
      "Space–Time Technique Formula: Underworld Turnover (Anime only)",
      "Substitute Technique",
      "Summoning Technique (Shinigami, Snake)",
      "Summoning: Impure World Reincarnation",
      "Summoning: Rashōmon",
      "Summoning: Triple Rashōmon",
      "Sword of Kusanagi: Longsword of the Sky",
      "Temporary Paralysis Technique",
      "Twin Snakes Mutual Death Technique",
      "Vanishing Facial Copy Technique",
      "White Snake Possession (Anime only)",
      "Wind Release: Breakthrough",
      "Wind Release: Gale Palm (Anime only)",
      "Wind Release: Great Breakthrough"
    ]
  },
  {
    "id": 1303,
    "name": "Obito Uchiha",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png",
      "https://static.wikia.nocookie.net/naruto/images/3/3c/Obito.png"
    ],
    "debut": {
      "manga": "Naruto Chapter #239",
      "anime": "Naruto Shippūden Episode #32",
      "novel": "Naruto Jinraiden: The Day the Wolf Howled",
      "movie": "Road to Ninja: Naruto the Movie",
      "game": "Naruto Shippūden: Ultimate Ninja Heroes 3",
      "ova": "Naruto: The Cross Roads",
      "appearsIn": "Anime, Manga, Novel, Game, Movie"
    },
    "family": {
      "grandmother": "Obito's Grandmother"
    },
    "jutsu": [
      "Animal Path",
      "Asura Path",
      "Black Receiver",
      "Chakra Transfer Technique",
      "Demonic Statue Chains",
      "Deva Path",
      "Earth Release: Hiding Like a Mole Technique",
      "Explosive Landmines",
      "Fire Release: Blast Wave Wild Dance",
      "Fire Release: Great Fireball Technique",
      "Fire Release: Phoenix Sage Fire Technique (Anime only)",
      "Genjutsu: Sharingan",
      "Hands of Flame",
      "Human Path",
      "Infinite Tsukuyomi",
      "Izanagi",
      "Kamui",
      "Naraka Path",
      "Outer Path",
      "Outer Path — Samsara of Heavenly Life Technique",
      "Preta Path",
      "Regeneration Ability",
      "Sealing Technique: Phantom Dragons Nine Consuming Seals",
      "Sensing Technique",
      "Six Paths Senjutsu",
      "Six Paths Technique",
      "Six Paths Ten-Tails Coffin Seal",
      "Six Paths of Pain",
      "Six Red Yang Formation",
      "Summoning Rinnegan",
      "Summoning Technique (Demonic Statue of the Outer Path, Kurama)",
      "Summoning: Demonic Statue of the Outer Path",
      "Tail Releasing Method",
      "Tailed Beast Ball",
      "Tailed Beast Chakra Arms",
      "Tailed Beast Transfer Technique",
      "Telescope Technique",
      "Truth-Seeking Ball",
      "Uchiha Flame Formation",
      "Uchiha Return",
      "Whac-A-Mole Technique (Anime only)",
      "Wood Release: Cutting Technique",
      "Wood Release: Great Spear Tree",
      "Wood Release: Underground Roots Technique",
      "Wood Release: Wood Dragon Technique"
    ],
    "clan": ["Uchiha"]
  },
  {
    "id": 259,
    "name": "Gaara",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png",
      "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png"
    ],
    "family": {
      "father": "Rasa",
      "mother": "Karura",
      "brother": "Kankurō",
      "sister": "Temari",
      "nephew": "Shikadai Nara",
      "uncle": "Yashamaru",
      "adoptive son": "Shinki"
    },
    "jutsu": [
      "Air Sand Protective Wall",
      "Armour of Sand",
      "Concealed Sand Picture Cat",
      "Desert Layered Imperial Funeral Seal",
      "Desert Suspension",
      "Desert Wave",
      "Desert: Hand",
      "Exploding Sand Boulder",
      "Feigning Sleep Technique",
      "Monstrous Sand Arm",
      "Prison Sand Burial",
      "Quicksand Waterfall Flow",
      "Sand Binding Coffin",
      "Sand Binding Prison",
      "Sand Body",
      "Sand Bullet (Anime only)",
      "Sand Castle Wolf Horn (Novel only)",
      "Sand Characters",
      "Sand Clone",
      "Sand Drizzle",
      "Sand Hail",
      "Sand Lightning Needles",
      "Sand Mesh (Anime only)",
      "Sand Pillar",
      "Sand Restraining Technique",
      "Sand Shuriken",
      "Sand Spear (Anime only)",
      "Sand Stream",
      "Sand Sword (Novel only)",
      "Sand Waterfall Funeral",
      "Sand Waterfall Imperial Funeral",
      "Shield of Sand",
      "Successive Shots Sand Drizzle",
      "Third Eye",
      "Ultimately Hard Absolute Attack: Spear of Shukaku (Anime only)",
      "Ultimately Hard Absolute Defence: Shield of Shukaku",
      "Wind Release: Breakthrough",
      "Wind Release: Great Breakthrough",
      "Wind Release: Infinite Sand Cloud — Great Breakthrough",
      "Wind Release: Multi-Layered Gale (Novel only)",
      "Wind Release: Sand Buckshot"
    ],
    "clan": ["Kazekage (Novel only)"]
  },
  {
    "id": 1359,
    "name": "Kabuto Yakushi",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/c/c9/Kabuto_Part_1.png",
      "https://static.wikia.nocookie.net/naruto/images/0/0b/Kabuto_Part_II.png"
    ],
    "family": {
      "adoptive mother": "Nonō Yakushi",
      "adoptive sons": "Shin Uchiha",
      "adoptive brother": "Urushi"
    },
    "jutsu": [
      "Attack of the Twin Demons",
      "Body Fluid Shedding Technique",
      "Body Recreation Technique (Anime only)",
      "Chakra Absorbing Snakes (Anime only)",
      "Chakra Draining Seal",
      "Chakra Scalpel",
      "Clone Snakes (Anime only)",
      "Clone Snakes: Serpent Technique (Anime only)",
      "Dance of the Seedling Fern",
      "Dead Soul Technique",
      "Demonic Flute: Phantom Sound Chains",
      "Earth Release: Earth Shore Return",
      "Earth Release: Hiding Like a Mole Technique",
      "Hidden Shadow Snake Hands",
      "Hiding with Camouflage Technique (Anime only)",
      "Many Hidden Shadow Snake Hands",
      "Mystical Palm Technique",
      "Orochimaru-Style Body Replacement Technique",
      "Reverse Summoning Technique",
      "Sage Art: Inorganic Reincarnation",
      "Sage Art: White Rage Technique",
      "Sage Mode",
      "Sage Transformation",
      "Scroll Communication Technique (Anime only)",
      "Slithering Snake Mode",
      "Snake Clone Technique (Anime only)",
      "Soft Physique Modification",
      "Spider Web Unrolling",
      "Strange Transmission Distant Shadow",
      "Summoning Technique (Snake)",
      "Summoning: Impure World Reincarnation",
      "Temple of Nirvana Technique",
      "Vanishing Facial Copy Technique (Anime only)",
      "Water Release: Great Waterfall Technique",
      "Water Release: Water Bullet Technique",
      "Water Release: Water Dragon Bullet Technique",
      "Yin Healing Wound Destruction"
    ]
  },
  {
    "id": 515,
    "name": "Jiraiya",
    "images": [
      "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsage-mode-mitsuki-vs-jiraya-who-have-you-got-v0-mwvbzc9v8t7e1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Dcba93b972ef6fba257aca5e60069a340cb4e611a"
    ],
    "family": {
      "clone": "Koji Kashin",
      "godson": "Naruto Uzumaki"
    },
    "jutsu": [
      "Barrier: Canopy Method Formation",
      "Barrier: Toad Gourd Prison",
      "Big Ball Rasengan",
      "Earth Release: Earth-Style Wall (Anime only)",
      "Earth Release: Swamp of the Underworld",
      "Finger Carving Seal",
      "Fire Release: Big Flame Bullet",
      "Fire Release: Dragon Fire Technique",
      "Fire Release: Fire Dragon Flame Bullet (Anime only)",
      "Fire Release: Flame Bullet",
      "Fire Release: Toad Oil Flame Bullet",
      "Fire Sealing Method",
      "Five Elements Unseal",
      "Frog Kata",
      "Hair Needle Senbon",
      "Hiding in a Toad Technique",
      "Needle Hell (Anime only)",
      "Needle Jizō",
      "Rasengan",
      "Reverse Summoning Technique (Anime only)",
      "Sage Art: Goemon",
      "Sage Mode",
      "Shadow Clone Technique",
      "Spiralling Serial Spheres",
      "Summoning Technique (Toad)",
      "Summoning: Crushing Toad Stomach (Anime only)",
      "Summoning: Food Cart Destroyer Technique",
      "Summoning: Toad Mouth Bind",
      "Summoning: Toad Shop Technique",
      "Toad Flatness — Shadow Manipulation Technique",
      "Toad Oil Bullet",
      "Transparent Escape Technique",
      "Turning into a Frog Technique",
      "Ultra-Big Ball Rasengan",
      "Water Release: Water Gun (Anime only)",
      "Wild Lion's Mane Technique"
    ]
  },
  {
    "id": 1373,
    "name": "Yamato",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png",
      "https://static.wikia.nocookie.net/naruto/images/4/48/Yamato_Part_III.png"
    ],
    "jutsu": [
      "Area Scanning Technique",
      "Ball of Light Technique (Anime only)",
      "Earth Release: Earth Flow Divide",
      "Earth Release: Earth Flow Spears (Anime only)",
      "Earth Release: Earth-Style Rampart",
      "Earth Release: Earth-Style Wall",
      "Earth Release: Hiding in Rock Technique (Anime only)",
      "Earth Release: Tunnelling Technique",
      "Hiding in Surface Technique",
      "Hokage-Style Sixty-Year-Old Technique — Kakuan Entering Society with Bliss-Bringing Hands",
      "Regeneration Ability",
      "Tailed Beast Sealing",
      "Transmission Wood",
      "Typhoon Water Vortex Technique",
      "Water Release: Tearing Torrent",
      "Water Release: Water Bowl (Anime only)",
      "Water Release: Water Formation Wall (Anime only)",
      "Water Release: Waterfall Basin Technique",
      "Wood Clone Technique",
      "Wood Release: Foo Dog Heads",
      "Wood Release: Four-Pillar House Technique",
      "Wood Release: Four-Pillar Prison Technique",
      "Wood Release: Great Forest Technique",
      "Wood Release: Hand Tool Manipulation",
      "Wood Release: Nativity of a Sea of Trees",
      "Wood Release: Serial Pillar Houses Technique",
      "Wood Release: Smothering Binding Technique",
      "Wood Release: Stocks",
      "Wood Release: Transformation",
      "Wood Release: Tree Bind Flourishing Burial (Anime only)",
      "Wood Release: Wood Locking Wall",
      "Wood Release: Wood Spikes Ring",
      "Wood Release: World of Trees Wall (Anime only)"
    ]
  },
  {
    "id": 344,
    "name": "Might Guy",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/3/31/Might_Guy.png",
      "https://static.wikia.nocookie.net/naruto/images/b/b3/Might_Guy_Part_III.png"
    ],
    "family": {
      "father": "Might Duy"
    },
    "jutsu": [
      "Daytime Tiger",
      "Double Dynamic Entry",
      "Dynamic Action (Anime only)",
      "Dynamic Entry",
      "Eight Gates",
      "Eight Gates Released Formation",
      "Evening Elephant",
      "Front Lotus",
      "Intersection Method (Anime only)",
      "Leaf Coiling Whirlwind",
      "Leaf Coiling Wind (Anime only)",
      "Leaf Drop (Novel only)",
      "Leaf Gale",
      "Leaf Great Flash (Anime only)",
      "Leaf Great Whirlwind (Anime only)",
      "Leaf Gust (Anime only)",
      "Leaf Rock-Destroying Rise",
      "Leaf Strong Whirlwind",
      "Leaf Whirlwind",
      "Little Toe Attack",
      "Morning Peacock",
      "Night Guy",
      "Reverse Lotus",
      "Seasickness Fist (Novel only)",
      "Shadow of the Dancing Leaf",
      "Strong Fist",
      "Summoning Technique (Tortoise)",
      "Violent — Leaf Adamantine-Strength Whirlwind"
    ]
  },
  {
    "id": 1037,
    "name": "Konohamaru Sarutobi",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/8/89/Konohamaru_p1.png",
      "https://static.wikia.nocookie.net/naruto/images/3/37/Konohamaru_Sarutobi.png"
    ],
    "family": {
      "great-grandfather": "Sasuke Sarutobi",
      "grandfather": "Hiruzen Sarutobi",
      "grandmother": "Biwako Sarutobi",
      "uncle": "Asuma Sarutobi",
      "cousin": "Mirai Sarutobi"
    },
    "jutsu": [
      "Adamantine Seal: Monkey Yang Suppression (Anime only)",
      "Barrier Releasing Technique (Anime only)",
      "Big Ball Rasengan (Anime only)",
      "Booby Trap (Anime only)",
      "Bouncy Bouncy Technique (Anime only)",
      "Fire Release: Ash Pile Burning (Anime only)",
      "Fire Release: Blazing Meteors",
      "Fire Release: Fire Dragon Bullet (Anime only)",
      "Fire Release: Fire Dragon Flame Bullet",
      "Fire Release: Great Flame Technique",
      "Flying Swallow (Anime only)",
      "Harem Technique (Anime only)",
      "Multiple Shadow Clone Technique (Anime only)",
      "Multiple String Light Formation (Anime only)",
      "Rasengan",
      "Sealing Technique: Release",
      "Sealing Technique: Three Directions Seal (Anime only)",
      "Sexy Technique",
      "Sexy Technique: Pole Dance and Nice Body (Anime only)",
      "Sexy: Boy on Boy Technique (Manga only)",
      "Sexy: Girl on Girl Technique",
      "Shadow Clone Technique",
      "Shuriken Shadow Clone Technique (Anime only)",
      "String Light Formation (Anime only)",
      "Student and Teacher: Rasengan",
      "Summoning Technique (Monkey, Toad) (Anime only)",
      "Wind Release: Rasengan"
    ],
    "clan": ["Sarutobi"]
  },
  {
    "id": 813,
    "name": "Mitsuki",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/5/5c/Mitsuki.png"
    ],
    "family": {
      "genetic template/parent": "Orochimaru",
      "clone/brother": "Log",
      "pet": "Mikazuki"
    },
    "jutsu": [
      "Binding Snake Glare Spell",
      "Boruto Stream",
      "Chakra Transfer Technique (Anime only)",
      "Claw Creation Technique (Anime only)",
      "Hidden Shadow Snake Burial (Anime only)",
      "Hidden Shadow Snake Hands",
      "Hidden Shadow Wild Snake Hands",
      "Lightning Release: Purple Electricity (Manga only)",
      "Lightning Release: Snake Lightning",
      "Lightning Strike (Anime only)",
      "Lorentz Gun (Novel only)",
      "Many Hidden Shadow Snake Hands (Anime only)",
      "Multiple String Light Formation (Anime only)",
      "Sage Art: Great Snake Lightning (Anime only)",
      "Sage Mode",
      "Sage Transformation",
      "Sensing Technique (Anime only)",
      "Shadow Clone Technique (Anime only)",
      "Sickle Weasel Technique (Anime only)",
      "Snake Clone Technique",
      "Snake Spying Technique (Anime only)",
      "Soft Physique Modification",
      "String Light Formation (Anime only)",
      "Summoning Technique (Snake)",
      "Super Compression Rasengan (Anime only)",
      "Wind Release: Breakthrough",
      "Wind Release: Gale Palm (Anime only)"
    ]
  },
  {
    "id": 865,
    "name": "Minato Namikaze",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png"
    ],
    "family": {
      "son": "Naruto Uzumaki",
      "grandson": "Boruto Uzumaki",
      "granddaughter": "Himawari Uzumaki",
      "wife": "Kushina Uzumaki"
    },
    "jutsu": [
      "Area Scanning Technique",
      "Chakra Transfer Technique",
      "Contract Seal",
      "Dead Demon Consuming Seal",
      "Eight Trigrams Sealing Style",
      "Flying Thunder Formation Technique",
      "Flying Thunder God Mutually Instantaneous Revolving Technique",
      "Flying Thunder God Slash",
      "Flying Thunder God Technique",
      "Flying Thunder God — Second Step",
      "Flying Thunder God: Guiding Thunder",
      "Four Red Yang Formation",
      "Four Symbols Seal",
      "Memory Erasing Seal",
      "Nine-Tails Chakra Mode",
      "Parent and Child Rasengan",
      "Rasengan",
      "Sage Mode",
      "Sensing Technique",
      "Shadow Clone Technique",
      "Spiralling Flash Super Round Dance Howl Style Three",
      "Summoning Technique (Shinigami, Toad)",
      "Summoning: Food Cart Destroyer Technique",
      "Supreme Ultimate Rasengan",
      "Tailed Beast Ball",
      "Tailed Beast Chakra Arms",
      "Tailed Beast Transfer Technique"
    ]
  },
  {
    "id": 1339,
    "name": "Boruto Uzumaki",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/d/de/Boruto_Infobox.png"
    ],
    "family": {
      "grandfather": "Hiashi Hyūga",
      "grandmother": "Kushina Uzumaki",
      "father": "Naruto Uzumaki",
      "great-grandfather": "Hyūga Elder",
      "granduncle": "Hizashi Hyūga",
      "grandmother ": "Hinata and Hanabi's Mother",
      "mother": "Hinata Hyūga",
      "aunt": "Hanabi Hyūga",
      "sister": "Himawari Uzumaki",
      "first cousin once removed": "Neji Hyūga",
      "adoptive brother": "Kawaki",
      "host": "Momoshiki Ōtsutsuki"
    },
    "jutsu": [
      "Boruto Stream",
      "Compression Rasengan (Anime only)",
      "Gentle Fist",
      "Harem Technique",
      "Improvised Secret Technique: Lightning Ball Shuriken Technique (Anime only)",
      "Kāma",
      "Kāma Rift",
      "Lightning Release Bullet: Powerful Breath (Anime only)",
      "Lightning Release: Purple Electricity (Manga only)",
      "Lightning Release: Thunderclap Arrow",
      "Multiple String Light Formation (Anime only)",
      "Parent and Child Rasengan",
      "Rasengan",
      "Rasengan: \"Unison\"",
      "Sexy Technique",
      "Shadow Clone Technique",
      "String Light Formation (Anime only)",
      "Student and Teacher: Rasengan",
      "Summoning Technique (Snake) (Anime only)",
      "Super Compression Rasengan (Anime only)",
      "Surging Fire Wild Dance (Anime only)",
      "Uchiha Style Shurikenjutsu: \"Lightning\": Triple",
      "Vanishing Rasengan",
      "Water Release: Surging Sea",
      "Water Release: Water Formation Wall (Novel only)",
      "Wind Release: Gale Palm",
      "Wind Release: Rasengan (Anime only)"
    ],
    "clan": [
      "Uzumaki",
      "Hyūga Clan"
    ]
  },
  {
    "id": 1293,
    "name": "Itachi Uchiha",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png"
    ],
    "family": {
      "father": "Fugaku Uchiha",
      "mother": "Mikoto Uchiha",
      "brother": "Sasuke Uchiha",
      "niece": "Sarada Uchiha"
    },
    "jutsu": [
      "Amaterasu",
      "Chakra Suppression Technique (Novel only)",
      "Clone Great Explosion",
      "Crow Clone Technique",
      "Demonic Illusion: Mirage Crow",
      "Demonic Illusion: Mirror Heaven and Earth Change",
      "Demonic Illusion: Shackling Stakes Technique",
      "Early Sacrifice",
      "Ephemeral",
      "Fire Release: Great Fireball Technique",
      "Fire Release: Phoenix Sage Fire Technique",
      "Fire Release: Phoenix Sage Flower Nail Crimson",
      "Genjutsu: Sharingan",
      "Izanami",
      "Sensing Barrier Pass Technique",
      "Shadow Clone Technique",
      "Summoning Technique (Crow)",
      "Susanoo",
      "Susanoo: Fist",
      "Transcription Seal: Amaterasu",
      "Tsukuyomi",
      "Water Release: Starch Syrup Capturing Field (Novel only)",
      "Water Release: Water Bullet Technique",
      "Water Release: Water Dragon Bullet Technique",
      "Water Release: Water Fang Bullet",
      "Yasaka Magatama"
    ],
    "clan": ["Uchiha"]
  },
  {
    "id": 1063,
    "name": "Hashirama Senju",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png"
    ],
    "family": {
      "father": "Butsuma Senju",
      "brother": "Tobirama Senju",
      "wife": "Mito Uzumaki",
      "granddaughter": "Tsunade",
      "grandson": "Nawaki"
    },
    "jutsu": [
      "Bringer-of-Darkness Technique (Manga only)",
      "Chakra Transfer Technique",
      "Contract Seal (Anime only)",
      "Four Red Yang Formation",
      "Hokage-Style Sixty-Year-Old Technique — Kakuan Entering Society with Bliss-Bringing Hands",
      "Regeneration Ability",
      "Sage Art Wood Release: True Several Thousand Hands",
      "Sage Art: Gate of the Great God",
      "Sage Mode",
      "Summoning Technique",
      "Summoning: Quintuple Rashōmon",
      "Summoning: Rashōmon",
      "Top Transformed Buddha",
      "Wood Clone Technique",
      "Wood Release Secret Technique: Nativity of a World of Trees",
      "Wood Release: Advent of a World of Flowering Trees",
      "Wood Release: Great Forest Technique",
      "Wood Release: Hōbi Technique",
      "Wood Release: Hotei Technique",
      "Wood Release: Wood Dragon Technique",
      "Wood Release: Wood Human Technique",
      "Wood Release: Wood Locking Wall (Anime only)"
    ],
    "clan": ["Senju"]
  },
  {
    "id": 1280,
    "name": "Tsunade",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png"
    ],
    "family": {
      "great-grandfather": "Butsuma Senju",
      "grandfather": "Hashirama Senju",
      "granduncle": "Kawarama Senju",
      "grandmother": "Mito Uzumaki",
      "brother": "Nawaki",
      "lover": "Dan Katō"
    },
    "jutsu": [
      "Body Pathway Derangement",
      "Cell Activation Technique (Anime only)",
      "Chakra Enhanced Strength",
      "Chakra Scalpel",
      "Chakra Transfer Technique",
      "Creation Rebirth",
      "Five Elements Unseal (Anime only)",
      "Four-Corner Sealing Barrier (Anime only)",
      "Genjutsu Binding (Anime only)",
      "Heavenly Foot of Pain",
      "Heavenly Spear Foot",
      "Katsuyu: Immense Network Healing",
      "Mechanical Eight Trigrams Formation (Anime only)",
      "Mystical Palm Technique",
      "Ninja Art Creation Rebirth — Strength of a Hundred Technique",
      "Reverse Summoning Technique (Anime only)",
      "Shadow Clone Technique (Anime only)",
      "Strength of a Hundred Seal",
      "Summoning Technique (Slug)",
      "Time-Release Technique",
      "Transformation Technique",
      "Yin Seal: Release"
    ],
    "clan": ["Senju"]
  },
  {
    "id": 739,
    "name": "Rock Lee",
    "images": [
      "https://static.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png",
      "https://static.wikia.nocookie.net/naruto/images/7/7d/Lee_timeskip.png"
    ],
    "family": {
      "son": "Metal Lee"
    },
    "jutsu": [
      "Crane Wing Formation",
      "Double Dynamic Entry",
      "Drunken Fist",
      "Dynamic Entry (Anime only)",
      "Eight Gates",
      "Front Lotus",
      "Front Lotus: Eight Trigrams Palms Revolving Heaven",
      "Leaf Coiling Whirlwind",
      "Leaf Drop",
      "Leaf Flash Kick",
      "Leaf Gale",
      "Leaf Great Whirlwind",
      "Leaf Rising Wind",
      "Leaf Whirlwind",
      "Ninja Art: Bare-Handed Blade Block (Anime only)",
      "One-Man Front Lotus (Anime only)",
      "Reverse Lotus",
      "Seasickness Fist (Anime only)",
      "Shadow of the Dancing Leaf",
      "Strong Fist",
      "Youth Full Power (Anime only)"
    ],
    "team": [
      "Team Guy",
      "Konoha 11 (Anime only)",
      "Star Guard Team (Anime only)",
      "Team Two (Anime only)",
      "Third Division",
      "Suicide Corps (Movie only)"
    ],
    "clan": ["Lee (Novel only)"]
  },
  {
    "id": 1,
    "name": "Sakura Haruno",
    "images": ["https://static.wikia.nocookie.net/naruto/images/7/76/Sakura_Part_II.png"],
    "family": {
      "father": "Unknown",
      "mother": "Unknown"
    },
    "jutsu": [
      "Chakra Enhanced Strength",
      "Mystical Palm Technique",
      "Creation Rebirth",
      "Strength of a Hundred Seal"
    ],
    "clan": ["Unknown"]
  },
  {
    "id": 2,
    "name": "Hinata Hyūga",
    "images": ["https://static.wikia.nocookie.net/naruto/images/8/85/Hinata_Part_II.png"],
    "family": {
      "father": "Hiashi Hyūga",
      "mother": "Unknown"
    },
    "jutsu": [
      "Gentle Fist",
      "Eight Trigrams Vacuum Palm",
      "Byakugan"
    ],
    "clan": ["Hyūga"]
  },
  {
    "id": 3,
    "name": "Kiba Inuzuka",
    "images": ["https://static.wikia.nocookie.net/naruto/images/c/ce/Kiba_Part_II.png"],
    "family": {
      "father": "Unknown",
      "mother": "Tsume Inuzuka"
    },
    "jutsu": [
      "Fang Over Fang",
      "Four Legs Technique"
    ],
    "clan": ["Inuzuka"]
  },
  {
    "id": 4,
    "name": "Shino Aburame",
    "images": ["https://static.wikia.nocookie.net/naruto/images/6/6f/Shino_Part_II.png"],
    "family": {
      "father": "Shibi Aburame",
      "mother": "Unknown"
    },
    "jutsu": [
      "Insect Clone Technique",
      "Destruction Bug Host"
    ],
    "clan": ["Aburame"]
  },
  {
    "id": 5,
    "name": "Kurenai Yūhi",
    "images": ["https://static.wikia.nocookie.net/naruto/images/8/8a/Kurenai.png"],
    "family": {
      "father": "Unknown",
      "mother": "Unknown",
      "daughter": "Mirai Sarutobi"
    },
    "jutsu": ["Demonic Illusion: Tree Bind Death"],
    "clan": ["Unknown"]
  },
  {
    "id": 6,
    "name": "Shikamaru Nara",
    "images": ["https://static.wikia.nocookie.net/naruto/images/9/92/Shikamaru_Part_II.png"],
    "family": {
      "father": "Shikaku Nara",
      "mother": "Yoshino Nara"
    },
    "jutsu": [
      "Shadow Imitation Technique",
      "Shadow Strangle Technique"
    ],
    "clan": ["Nara"]
  },
  {
    "id": 7,
    "name": "Ino Yamanaka",
    "images": ["https://static.wikia.nocookie.net/naruto/images/5/5f/Ino_Part_II.png"],
    "family": {
      "father": "Inoichi Yamanaka",
      "mother": "Unknown"
    },
    "jutsu": ["Mind Transfer Technique"],
    "clan": ["Yamanaka"]
  },
  {
    "id": 8,
    "name": "Choji Akimichi",
    "images": ["https://static.wikia.nocookie.net/naruto/images/1/1b/Choji_Part_II.png"],
    "family": {
      "father": "Chōza Akimichi",
      "mother": "Unknown"
    },
    "jutsu": ["Expansion Jutsu"],
    "clan": ["Akimichi"]
  },
  {
    "id": 9,
    "name": "Asuma Sarutobi",
    "images": ["https://static.wikia.nocookie.net/naruto/images/3/3b/Asuma.png"],
    "family": {
      "father": "Hiruzen Sarutobi",
      "mother": "Biwako Sarutobi"
    },
    "jutsu": [
      "Flying Swallow",
      "Fire Release: Ash Pile Burning"
    ],
    "clan": ["Sarutobi"]
  },
  {
    "id": 10,
    "name": "Neji Hyūga",
    "images": ["https://static.wikia.nocookie.net/naruto/images/0/0f/Neji_Part_I.png"],
    "family": {
      "father": "Hizashi Hyūga",
      "mother": "Unknown"
    },
    "jutsu": [
      "Gentle Fist",
      "Eight Trigrams Rotation"
    ],
    "clan": ["Hyūga"]
  },
  {
    "id": 11,
    "name": "Tenten",
    "images": ["https://static.wikia.nocookie.net/naruto/images/3/3f/Tenten_Part_II.png"],
    "family": {
      "father": "Unknown",
      "mother": "Unknown"
    },
    "jutsu": ["Weapon Summoning"],
    "clan": ["Unknown"]
  },
  {
    "id": 12,
    "name": "Temari",
    "images": ["https://static.wikia.nocookie.net/naruto/images/8/8b/Temari_Part_II.png"],
    "family": {
      "father": "Rasa",
      "mother": "Karura"
    },
    "jutsu": ["Wind Release: Great Sickle Weasel"],
    "clan": ["Unknown"]
  },
  {
    "id": 13,
    "name": "Kankurō",
    "images": ["https://static.wikia.nocookie.net/naruto/images/0/0c/Kankuro_Part_II.png"],
    "family": {
      "father": "Rasa",
      "mother": "Karura"
    },
    "jutsu": ["Puppet Technique"],
    "clan": ["Unknown"]
  },
  {
    "id": 14,
    "name": "Tobirama Senju",
    "images": ["https://static.wikia.nocookie.net/naruto/images/a/a3/Tobirama_Senju.png"],
    "family": {
      "father": "Butsuma Senju",
      "mother": "Unknown"
    },
    "jutsu": [
      "Flying Thunder God",
      "Water Release: Water Dragon Bullet"
    ],
    "clan": ["Senju"]
  },
  {
    "id": 15,
    "name": "Hiruzen Sarutobi",
    "images": ["https://static.wikia.nocookie.net/naruto/images/d/d8/Hiruzen_Sarutobi.png"],
    "family": {
      "father": "Unknown",
      "mother": "Unknown"
    },
    "jutsu": [
      "Five Elements Jutsu",
      "Summoning: Monkey King Enma"
    ],
    "clan": ["Sarutobi"]
  },
  {
    "id": 16,
    "name": "Shikadai Nara",
    "images": ["https://static.wikia.nocookie.net/naruto/images/1/1e/Shikadai.png"],
    "family": {
      "father": "Shikamaru Nara",
      "mother": "Temari"
    },
    "jutsu": ["Shadow Imitation Technique"],
    "clan": ["Nara"]
  },
  {
    "id": 17,
    "name": "Hanabi Hyūga",
    "images": ["https://static.wikia.nocookie.net/naruto/images/4/47/Hanabi.png"],
    "family": {
      "father": "Hiashi Hyūga",
      "mother": "Unknown"
    },
    "jutsu": ["Gentle Fist"],
    "clan": ["Hyūga"]
  }
]

const villages = [
  {
    id: 1,
    name: "Vila Oculta da Folha (Konohagakure)",
    region: "País do Fogo",
    leader: "Hokage",
    population: 1500,
    clans: ["Uchiha", "Hyuga", "Akimichi", "Nara", "Yamanaka", "Sarutobi"]
  },
  {
    id: 2,
    name: "Vila Oculta da Areia (Sunagakure)",
    region: "País do Vento",
    leader: "Kazekage",
    population: 1200,
    clans: ["Clã Kazekage", "Clã Chiyo"]
  },
  {
    id: 3,
    name: "Vila Oculta da Névoa (Kirigakure)",
    region: "País da Água",
    leader: "Mizukage",
    population: 1000,
    clans: ["Hozuki", "Kaguya", "Yuki"]
  },
  {
    id: 4,
    name: "Vila Oculta da Pedra (Iwagakure)",
    region: "País da Terra",
    leader: "Tsuchikage",
    population: 1100,
    clans: ["Kamizuru", "Akatsuchi"]
  },
  {
    id: 5,
    name: "Vila Oculta da Nuvem (Kumogakure)",
    region: "País do Raio",
    leader: "Raikage",
    population: 1300,
    clans: ["Yotsuki", "Clã do Killer Bee"]
  },
  {
    id: 6,
    name: "Vila Oculta da Chuva (Amegakure)",
    region: "País da Chuva",
    leader: "Pain",
    population: 800,
    clans: ["Clãs Civis de Amegakure"]
  },
  {
    id: 7,
    name: "Vila Oculta da Cachoeira (Takigakure)",
    region: "País da Cachoeira",
    leader: "Shibuki",
    population: 600,
    clans: ["Clã de Takigakure"]
  },
  {
    id: 8,
    name: "Vila Oculta do Som (Otogakure)",
    region: "País do Som",
    leader: "Orochimaru",
    population: 700,
    clans: ["Quarteto do Som", "Clã Dosu"]
  }
];

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/characters', (req, res) => {
  res.status(200).json(characters)
})

app.get('/characters/:id', (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id, 10);
  const characterResult = characters.filter(a => a.id ==  idNumber) || []
  if (characterResult.length == 0) {
    res.status(404).json({ message: "character is note found" })
  }

  res.status(200).json(characterResult[0])
})

app.get('/villages', (req, res) => {
  res.status(200).json(villages)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
