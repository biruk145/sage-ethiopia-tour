import { Tour, Attraction } from './types';
import timketImage from './assets/images/timket_epiphany_gondar_1790687161286.jpg';
import hararImage from './assets/images/harar_cultural_tour_1790688037336.jpg';

export const tours: Tour[] = [
  {
    id: 1,
    title: "Ashenda",
    category: "festival",
    duration: "1",
    durationLabel: "Festival Tour",
    destination: "Tigray & Amhara (Lalibela, Mekelle)",
    price: "",
    image: "https://images.unsplash.com/photo-1764145162259-04eaf2b3d86a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzaGVuZGF8ZW58MHx8MHx8fDA%3D",
    description: "\"Ashenda\" refers to the tall green grass that girls collect from riverbanks and tuck into their waistbands or wear as skirts. Girls gather in groups, play small drums, and go from house to house singing, dancing, and receiving gifts or tokens of appreciation from community members. The festival creates a unique public space where young women enjoy exceptional freedom, joy, and visibility, and are deeply respected and protected by the community."
  },
  {
    id: 15,
    title: "Genna",
    category: "festival",
    duration: "1",
    durationLabel: "Festival Tour",
    destination: "Lalibela & Nationwide",
    price: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KcnbkceGJgzDY0ojG3WNi3BndS9tbwkfkBYXdIY9Lexr2TDDJ7H2kIo&s=10",
    description: "After 43 days of fasting (known as the advent or Tsome Gahad), Ethiopians celebrate their Christmas. The Genna festivity starts in the early morning (6:00 a.m.) with people gathering in churches for the mass service culminating in a spectacular procession of the Tabot (a replica of the Ark of the Covenant) carried on the top of the priest’s head. After this ceremony, people gather at home with their relatives to feast and break their fast with typical Ethiopian food such as Doro Wat, a spicy chicken stew served with injera. Injera is a sourdough pancake-like bread and a staple food in Ethiopia. A typical local drink for Genna celebration is tej, made from honey or tell barley.. One of the most popular places to witness this holiday is Lalibela, which receives pilgrims from all over the country who gather to chant and pray around the famous rock-hewn churches during the night."
  },
  {
    id: 16,
    title: "Timket (Ethiopian Epiphany)",
    category: "festival",
    duration: "3-5",
    durationLabel: "",
    destination: "Gondar, Lalibela & Addis Ababa",
    price: "",
    image: timketImage,
    description: "Timket (Ethiopian Epiphany) is Ethiopia's most vibrant and celebrated religious festival, recognized by UNESCO as Intangible Cultural Heritage of Humanity. Commemorating the baptism of Jesus Christ in the River Jordan by John the Baptist, the celebration unfolds over three unforgettable days.\n\n• The Eve of Timket (Ketera): Sacred replicas of the Ark of the Covenant (Tabots) are carried out of local churches wrapped in rich silks and velvets, borne on the heads of priests under embroidered ceremonial velvet umbrellas, escorted by thousands of singing, clapping worshippers in pristine white cotton Habesha Kemis.\n• The Main Baptism Ceremony: At dawn, holy water is blessed in sacred pools (such as the historic 17th-century Fasilides' Bath in Gondar) followed by the joyous blessing and spraying of the crowd, re-enacting Christ's baptism amidst rhythmic drumming, silver sistra chants, and vibrant liturgical dances.\n• Procession & Celebration: Priests and deacons lead jubilant street processions accompanied by traditional trumpet blasts, hymn singing, and joyful communal feasts of injera, doro wat, and honey wine (tej)."
  },
  {
    id: 2,
    title: "Danakil Depression Expedition",
    category: "adventure",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Danakil, Erta Ale",
    price: "$1,550",
    image: "https://unsplash.com/photos/E0gtyLcD4NE/download?force=true",
     /**/
  
    description: "An adventurous journey to one of the lowest and hottest places on Earth with glowing lava lakes and neon hydrothermal fields."
  },
  {
    id: 3,
    title: "Simien Mountains Trekking",
    category: "adventure",
    duration: "7+",
    durationLabel: "7 Days",
    destination: "Simien Mountains",
    price: "$2,200",
    image: "https://unsplash.com/photos/eRFC0_U0hGE/download?force=true",
    description: "Trek the breathtaking Simien Mountains, home to dramatic escarpments, deep valleys, and endemic wildlife like the Gelada baboon."
  },
  {
    id: 4,
    title: "Historic Route of Ethiopia",
    category: "historical",
    duration: "7+",
    durationLabel: "10 Days",
    destination: "Lalibela, Gondar, Axum",
    price: "$1,850",
    image: "https://images.unsplash.com/photo-1608634193723-1865aa4416ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29uZGVyfGVufDB8fDB8fHww",
    description: "Gondar was once the capital of the Ethiopian Empire from 1632 to 1855. The city is most famous for its castles and medieval churches built by a series of emperors inside the Royal Enclosure.\n\nNicknamed the “Camelot of Africa” because there are no similar castles in Sub-Saharan Africa, Gondar became an important commercial and cultural center of the Ethiopian Empire. The city’s rich cultural heritage is reflected in the beautiful murals inside its historic churches. The castles of Gondar can easily be explored on a city tour."
  },
  {
    id: 5,
    title: "Omo Valley Cultural Tour",
    category: "cultural",
    duration: "7+",
    durationLabel: "8 Days",
    destination: "Omo Valley",
    price: "$1,450",
    image: "https://unsplash.com/photos/BCyWIZwGB38/download?force=true",
    description: "Immerse yourself in the diverse indigenous cultures of the Omo Valley, visiting various tribes and experiencing their unique traditions."
  },
  {
    id: 17,
    title: "Harar Jugol Walled City & Hyena Feeding Cultural Tour",
    category: "cultural",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Harar Jugol, Eastern Ethiopia",
    price: "$850",
    image: hararImage,
    description: "Step into the fortified historic town of Harar Jugol, recognized by UNESCO as the fourth holiest city of Islam. Wander through vibrant pastel-colored alleyways, visit traditional Harari cultural houses (Gegar), bustling spice markets, Arthur Rimbaud's museum, and witness the legendary dusk tradition of the local Hyena Men hand-feeding wild hyenas."
  },
  {
    id: 6,
    title: "Bale Mountains Wildlife Safari",
    category: "adventure",
    duration: "3-5",
    durationLabel: "5 Days",
    destination: "Bale Mountains",
    price: "$720",
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/shutterstock_2233560031.jpg",
    description: "Spot the rare Ethiopian Wolf and explore the Sanetti Plateau and Harenna Forest in this diverse high-altitude ecosystem."
  },
  {
    id: 7,
    title: "Addis Ababa Half-Day tour",
    category: "halfday",
    duration: "1",
    durationLabel: "Half Day",
    destination: "Addis Ababa",
    price: "$90",
    image: "https://www.jebenatoursethiopia.com/uploads/blog-28.webp",
    description: "A half-day city tour of Addis Ababa typically lasts around 4 to 5 hours, making it an ideal option for short visits, business travelers with free time, or those with flight layovers.\n\nTraditional Ethiopian Coffee Ceremony:\nEthiopia, celebrated worldwide as the birthplace of coffee, holds a unique and profound tradition around this beloved beverage. The Ethiopian coffee ceremony is a central pillar of local culture, embodying hospitality, friendship, and community. More than simply enjoying coffee, it is an immersive ritual engaging all the senses with freshly roasted beans, fragrant frankincense, and warm hospitality.\n\nKey Highlights:\n• Tomoca Coffee & Authentic Ceremony: Savor classic Ethiopian coffee culture at legendary Tomoca and experience a traditional coffee ceremony.\n• National Museum of Ethiopia: Home to the famous 3.2-million-year-old hominid fossil \"Lucy\" (Dinkinesh), imperial crowns, garments, and ancient royal regalia.\n• Entoto Panoramic Viewpoint: Ascend Mount Entoto through fragrant eucalyptus forests for breathtaking vistas over the capital city."
  },
  {
    id: 14,
    title: "Addis Ababa Full Day City Tour",
    category: "fullday",
    duration: "1",
    durationLabel: "6-7 hours",
    destination: "Addis Ababa",
    price: "$130 per person",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Addis_in_night.jpg/1280px-Addis_in_night.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    description: "Holy Trinity Cathedral (Kidist Selassie) stands as one of the most significant Orthodox cathedrals in Ethiopia, featuring baroque architectural elements and a distinctive copper dome.\n\n• Imperial History: Serves as the final resting place of Emperor Haile Selassie I and Empress Menen Asfaw, housed in grand granite tombs.\n• Artistic Heritage: The interior walls feature large stained-glass windows depicting biblical passages and major events in Ethiopian church history.\n• Visitor Guidelines: Modest attire is required; women should bring a scarf or shawl for head covering, and shoes are removed prior to entering the main sanctuary.\n\nNational Museum of Ethiopia houses the country's paramount historical, ethnographic, and paleontological collections.\n• Fossil Relics: The basement gallery displays the original fossilized remains of \"Lucy\" (Dinkinesh), a 3.2-million-year-old hominid skeleton discovered in the Afar region.\n• Royal & Cultural Artifacts: Upper floors feature imperial crowns, ceremonial robes, traditional musical instruments, and fine art pieces spanning early Aksumite artifacts to modern paintings.\n\nEthiopian Cultural Restaurant offers an authentic culinary introduction to Ethiopian gastronomy in a traditional thatched-roof setting.\n• Traditional Dining: Guests share a platter of Injera topped with varied meat and vegetarian stews (Beyaynetu or Kitfo).\n• Cultural Experience: Includes a live demonstration of the traditional Ethiopian coffee ceremony (Buna) accompanied by fresh frankincense.\n\nShiro Meda Traditional Cloth Market is located along the lower slopes of Mount Entoto and serves as the primary hub for handwoven Ethiopian textiles.\n• Artisanal Garments: Features rows of local vendors and weavers crafting traditional white cotton dresses (Habesha Kemis), colorful shawls (Netela), and embroidered linens.\n• Shopping Experience: Direct interaction with weavers makes it an ideal spot for purchasing authentic souvenirs and custom-fitted garments."
  },
  {
    id: 8,
    title: "Debre Libanos Monastery",
    category: "fullday",
    duration: "1",
    durationLabel: "1 Day",
    destination: "Debre Libanos",
    price: "$185",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxIvDY69CuNZ9mUF0nXntAjt5LGaMBotkRHb5m4-a2XvK8hbNUdCBKRE&s=10",
    description: "Debre libanos Orthodox Church is one of the most revered spiritual sites in the Ethiopian Orthodox Tewahedo Church. Perched along a dramatic gorge above a tributary of the Blue Nile River, it is a major destination for pilgrimage, history, and nature. Historical Origins: Built in the 16th century, popular legend long attributed its construction to Portuguese allies who aided the Ethiopian Empire. However, local historical records indicate it was built using traditional stone, mortar, and egg-whites by Ras Darge or local Ethiopian craftsmen during the 19th century in the Portuguese architectural style. Waterfall & Gorge Views: During and following the rainy season, the river cascades over the stone arch into the 600-meter-deep Jemma River Gorge, creating the spectacular Gur Waterfall. Encounters with Gelada Baboons The \"Bleeding-Heart\" Monkeys: The cliff edges around the bridge and monastery are home to large habituated troops of Gelada Baboons (Theropithecus gelada), an endemic primate species found only in the Ethiopian highlands."
  },
  {
    id: 9,
    title: "Wonchi Crater Lake",
    category: "fullday",
    duration: "1",
    durationLabel: "1 Day",
    destination: "Mount Wonchi",
    price: "$185",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7hbE5CjUZLd-KOLaxRYC3FDb7LK3yUzOvy856OkkZOaRZdUFJCb0CE6g&s=10",
    description: "Sitting in the shadow of Mount Wonchi, Wonchi Crater Lake is the beautiful legacy of a once powerful volcano. A hiking path from the rim of the volcano meanders past small farms and forests to the lake below. An ancient island church, Cherkos, is accessible via a boat ride across the lake. For those not keen on walking, horseback in an option."
  },
  {
    id: 10,
    title: "Rock-Hewn Churches of Lalibela Pilgrimage",
    category: "historical",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Lalibela",
    price: "$750",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkelp6hrTFNwECxON4jCHHqa3NGcNfwAOZebsUCnNH7txKRZ-Op0cXt6xo&s=10",
    description: "Explore the Eighth Wonder of the World in Lalibela. Visit all 11 monolithic medieval churches carved out of solid volcanic rock, connected by ceremonial trenches and catacombs, including the iconic cross-shaped Bete Giyorgis."
  },
  {
    id: 11,
    title: "Danakil Depression & Erta Ale Lava Lake",
    category: "historical",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Danakil, Erta Ale",
    price: "$1,550",
    image: "https://visitethiopia.et/uploads/0000/152/2025/05/26/erta-ale-001.jpg",
    description: "Journey across the ancient geological wonders of Danakil, the lowest place on Earth. Witness the boiling lava lake of Erta Ale, neon sulfur hot springs of Dallol, and historic Afar salt miner caravans."
  },
  {
    id: 12,
    title: "Simien Mountains Heritage & Wildlife Trek",
    category: "historical",
    duration: "7+",
    durationLabel: "7 Days",
    destination: "Simien Mountains",
    price: "$2,200",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuuG6o9Wadb2zxxHDrdQwLZkrNfEQmsrvnAknQ1GyPfTe5RRDos3vJ-A&s=10",
    description: "Discover the UNESCO World Heritage Simien Mountains, known as the 'Roof of Africa'. Trek across dramatic escarpments, spot endemic Gelada baboons, Walia Ibex, and explore centuries of highland settlement history."
  },
  {
    id: 13,
    title: "LAKE TANA AND MONASTERIES",
    category: "historical",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Bahir Dar, Lake Tana",
    price: "$680",
    image: "https://media.istockphoto.com/id/175246590/photo/inside-an-ancient-ethiopian-orthodox-church-at-lake-tana.webp?a=1&b=1&s=612x612&w=0&k=20&c=wH_o2HN88cljBaT56mqvvsEd2NESMJNh7fvsSrYri5Q=",
    description: "Lake Tana and Its Monasteries: Lake Tana is not only the largest lake in Ethiopia but also the source of the Blue Nile River, which contributes around 85% of the water of the Nile — the longest river in the world. Besides its importance for birdwatching, fishing, and ecology, Lake Tana is home to some of the most important monasteries, churches, and Christian schools of the Ethiopian Orthodox Church. The area has great significance in Ethiopian history, reflected in its priceless treasures and beautiful wall paintings inside the churches. The monasteries can be visited by boat trips from Bahir Dar. Some monasteries are traditionally forbidden to women."
  }
];

export const attractions: Attraction[] = [
  {
    title: "Rock-Hewn Churches of Lalibela",
    tag: "UNESCO World Heritage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkelp6hrTFNwECxON4jCHHqa3NGcNfwAOZebsUCnNH7txKRZ-Op0cXt6xo&s=10",
    description: "11 monolithic medieval churches carved out of solid volcanic rock in the 13th century.",
    link: "Lalibela",
    location: "Amhara Region, Northern Ethiopia",
    bestTimeToVisit: "October to March (dry season & Ethiopian Genna / Christmas festivals)",
    fullOverview: "Referred to as the Eighth Wonder of the World, Lalibela is a high-place sacred sanctuary containing 11 remarkable monolithic rock-hewn churches chiseled straight into the earth from top down under King Lalibela during the 12th–13th centuries. Connected by intricate labyrinthine trenches, catacombs, and ceremonial tunnels, each church represents an architectural and spiritual masterpiece still actively used by Orthodox Christian monks and pilgrims today.",
    highlights: [
      "Bete Giyorgis (Church of St. George) chiseled in the shape of a cruciform cross",
      "Bete Medhane Alem — the largest monolithic church in the entire world",
      "Centuries-old illuminated manuscripts, ceremonial crosses, and ancient mural frescoes",
      "Active pilgrimage services, incense chants, and liturgical Orthodox singing"
    ]
  },
  {
    title: "Danakil & Erta Ale Volcano",
    tag: "Geological Wonder",
    image: "https://visitethiopia.et/uploads/0000/152/2025/05/26/erta-ale-001.jpg",
    description: "One of the lowest and hottest places on Earth with glowing lava lakes and neon hydrothermal fields.",
    link: "Danakil",
    location: "Afar Triangle, Northeastern Ethiopia",
    bestTimeToVisit: "November to February (cooler desert weather)",
    fullOverview: "The Danakil Depression is an otherworldly alien terrain situated 125 meters below sea level where tectonic plates pull apart. It is home to Erta Ale, one of the world's few continuously boiling basaultic lava lakes. Marvel at Dallol's surreal neon yellow, green, and copper sulfur hot springs, salt mountains, and witness ancient Afar camel caravans cutting and hauling slabs of white crystalline salt across endless dried salt pans.",
    highlights: [
      "Erta Ale shield volcano with its active glowing red bubbling magma crater",
      "Dallol hydrothermal fields glowing with neon acid springs and salt chimneys",
      "Lake Assal and Karum salt flats with traditional Afar salt miners and camel trains",
      "Sleeping beneath the desert stars in an open-air eco bivouac"
    ]
  },
  {
    title: "Simien Mountains",
    tag: "Natural Beauty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuuG6o9Wadb2zxxHDrdQwLZkrNfEQmsrvnAknQ1GyPfTe5RRDos3vJ-A&s=10",
    description: "Dramatic landscapes with jagged mountain peaks, deep valleys, and unique endemic wildlife.",
    link: "Simien Mountains",
    location: "North Gondar Zone, Amhara Region",
    bestTimeToVisit: "October to April (clear blue skies and post-monsoon wildflowers)",
    fullOverview: "Often called the 'Roof of Africa' with precipitous peaks reaching Ras Dejen (4,550m), the Simien Mountains National Park is a UNESCO World Heritage wilderness of dramatic cliff-top escarpments, deep chasms, and alpine Afro-montane moorlands. It shelters some of the world’s rarest and most charismatic endemic wildlife species living freely on the cliff edges.",
    highlights: [
      "Habituated troops of endemic Gelada Baboons grazing peacefully alongside hikers",
      "Spectacular viewpoints over Jinbar Waterfall plunging into a sheer 500m canyon",
      "Spotting the critically endangered Walia Ibex and Ethiopian Wolf",
      "World-class multi-day trek trails with panoramic views stretching into the horizon"
    ]
  }
];
