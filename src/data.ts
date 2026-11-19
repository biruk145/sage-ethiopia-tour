import { Tour, Attraction } from './types';
import timketImage from './assets/images/timket_epiphany_gondar_1790687161286.jpg';
import hararImage from './assets/images/harar_cultural_tour_1790688037336.jpg';
import axumImage from './assets/images/axum_ancient_obelisks_1792586581284.jpg';
import geraltaImage from './assets/images/tigray_geralta_churches_1792586784698.jpg';
import tiyaImage from './assets/images/tiya_megalithic_stelae_1792587094673.jpg';
import blueNileFallsImage from './assets/images/blue_nile_falls_tis_issat_1792587347894.jpg';
import yehaImage from './assets/images/yeha_temple_moon_ruins_1792587500729.jpg';
import meskelImage from './assets/images/meskel_festival_demera_1792587713854.jpg';
import irreechaImage from './assets/images/ireecha_thanksgiving_festival_1792587919375.jpg';
import bishoftuImage from './assets/images/bishoftu_crater_lake_1793440320898.jpg';
import entotoImage from './assets/images/entoto_park_panoramic_1793440550697.jpg';
import menageshaImage from './assets/images/menagesha_suba_forest_1793440562227.jpg';
import awashImage from './assets/images/awash_falls_safari_1793440575318.jpg';
import addisFullDayImage from './assets/images/addis_full_day_tour_1793441798209.jpg';
import wonchiImage from './assets/images/wonchi_crater_lake_1793441810264.jpg';
import addisAbabaEnaImage from './assets/images/addis_ababa_ena.jpg';
import ashendaImage from './assets/images/ashenda_ena.png';
import mountEntotoFallbackImage from './assets/images/mount_entoto_park.webp';
import addisCityTourFallbackImage from './assets/images/addis_ababa_city_tour.webp';

export { addisAbabaEnaImage, ashendaImage, mountEntotoFallbackImage, addisCityTourFallbackImage };

export const tours: Tour[] = [
  {
    id: 1,
    title: "Ashenda",
    category: "festival",
    duration: "1",
    durationLabel: "Festival Tour",
    destination: "Tigray & Amhara (Lalibela, Mekelle)",
    price: "",
    image: "https://www.ena.et/documents/42142/0/2019_08_ashenda1_png.png/f806d89d-0d7c-7192-1f5a-ea3a3a3f0f67?version=1.0&t=1674399309309&download=true",
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
    id: 23,
    title: "Meskel (Finding of the True Cross)",
    category: "festival",
    duration: "1",
    durationLabel: "Festival Tour",
    destination: "Addis Ababa & Nationwide",
    price: "",
    image: meskelImage,
    description: "Meskel is an ancient Ethiopian Orthodox celebration inscribed by UNESCO as Intangible Cultural Heritage of Humanity, commemorating the 4th-century discovery of the True Cross by Queen Helena (Empress Eleni).\n\n• The Lighting of the Demera: On Meskel Eve (September 26), tens of thousands of worshippers and visitors gather at Meskel Square in central Addis Ababa. A colossal pyramid-shaped bonfire (Demera) decorated with bright yellow Meskel daisies (Adey Abeba) and topped with a cross is ignited at dusk following blessings by the Patriarch and church bishops.\n• Ceremonial Splendor: Hundreds of Orthodox priests, deacons, and youth choirs wearing vibrant gold and crimson robes sing liturgical hymns, beat ceremonial drums (kebero), and wave ceremonial umbrellas while circling the blazing fire.\n• Prophetic Ashes: Tradition holds that the direction the towering Demera falls foretells the year ahead. Believers use charcoal and ash from the fire to mark crosses upon their foreheads as symbols of faith.\n• Feast & Community Reunion: Families gather to share holiday banquets of freshly baked injera, spicy doro wat, and traditional honey wine (tej), celebrating the blooming of yellow daisies that signify the end of the rainy season and the Ethiopian New Year."
  },
  {
    id: 24,
    title: "Irreecha (Oromo Thanksgiving Festival)",
    category: "festival",
    duration: "1",
    durationLabel: "Festival Tour",
    destination: "Bishoftu (Hora Harsadi) & Addis Ababa (Hora Finfinnee)",
    price: "",
    image: irreechaImage,
    description: "Irreecha is the premier national thanksgiving celebration of the Oromo people, bringing millions of celebrants together to give thanks to the Creator (Waaqa) for the blessings of harvest, fertility, and peace at the end of the rainy season.\n\n• Sacred Waters of Hora Harsadi: Celebrants converge on sacred crater lake shores, dipping freshly plucked moist blades of grass (Coqorsa) and vibrant blossoms into holy lake waters and splashing blessings upon one another.\n• Traditional Attire & Siqqee: Women wear dazzling white handwoven cotton gowns with intricate red and black embroidery, holding ceremonial hardwood Siqqee sticks that symbolize female dignity, peace, and legal authority.\n• Gadaa Wisdom & Chants of Peace: Elders (Aba Gadaas) dressed in ceremonial fur cloaks and beadwork lead rhythmic invocations, singing soulful chants of thanksgiving (Mareehoo) and fostering social harmony and reconciliation.\n• Communal Celebration: Experience jubilant folk dances, traditional songs of joy, and traditional communal feasts honoring nature, water, and life."
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
    id: 30,
    title: "Konso Cultural Landscape & Dorze Highland Villages",
    category: "cultural",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Konso & Arba Minch, Southern Ethiopia",
    price: "",
    image: tiyaImage,
    description: "Explore the UNESCO World Heritage Konso Cultural Landscape and the bamboo-woven highland villages of the Dorze people above Lake Chamo.\n\n• Konso Walled Villages & Waka Statues: Walk through ancient stone-terraced hillsides and fortified Konso settlements, and see traditional carved wooden Waka memorial totems.\n• Dorze Weaving & Enset Culture: Visit Chencha in the Guge Mountains to experience iconic elephant-shaped bamboo huts, intricate hand-loomed cotton textiles, and traditional false-banana (enset) bread preparation.\n• Lake Chamo Boat Safari: Cruise across Lake Chamo to spot giant Nile crocodiles, hippopotami, and vibrant Rift Valley waterbirds.",
    itinerary: [
      {
        day: 1,
        title: "Addis Ababa to Arba Minch & Lake Chamo",
        description: "Fly or drive south to Arba Minch overlooking the twin Rift Valley lakes of Abaya and Chamo. Afternoon boat safari on Lake Chamo's Crocodile Market."
      },
      {
        day: 2,
        title: "Dorze Highland Village & Weaving",
        description: "Ascend into the Guge Mountains to visit a traditional Dorze village. Learn about bamboo architecture, enset bread baking, and master cotton weaving."
      },
      {
        day: 3,
        title: "Konso UNESCO Terraced Villages",
        description: "Drive to Konso to explore fortified stone-walled villages (Mora), ancient agricultural terraces, and the Konso Cultural Museum."
      },
      {
        day: 4,
        title: "Return to Addis Ababa",
        description: "Morning scenic drive or flight back to Addis Ababa with cultural shopping and farewell coffee."
      }
    ],
    inclusions: [
      "Private air-conditioned 4x4 vehicle and licensed cultural guide",
      "Lake Chamo boat excursion",
      "All village, museum, and local community entrance fees",
      "Bottled mineral water throughout the tour"
    ],
    exclusions: [
      "Domestic flights and accommodation (available on request)",
      "Meals and personal beverages",
      "Discretionary tips for local guides and drivers"
    ]
  },
  {
    id: 32,
    title: "Kaffa Coffee Origins & Forest Culture Tour",
    category: "cultural",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Kaffa Biosphere Reserve, Southwestern Ethiopia",
    price: "",
    image: menageshaImage,
    description: "Journey to the birthplace of Arabica coffee in Ethiopia's lush southwestern highlands. Discover ancient wild coffee forests, traditional Kafficho royal heritage, and authentic village coffee ceremonies.\n\n• Mankira Wild Coffee Forest: Walk through the UNESCO Kaffa Biosphere Reserve where Coffea arabica grows naturally beneath towering montane canopy trees.\n• Kaffa National Coffee Museum: Explore the history, tools, and royal traditions of the historic Kingdom of Kaffa.\n• Traditional Buna Ceremony: Experience an authentic forest-side coffee roasting and brewing ritual hosted by local families.",
    itinerary: [
      {
        day: 1,
        title: "Addis Ababa to Jimma & Bonga",
        description: "Fly or drive to Jimma and continue into the emerald highlands of Bonga, gateway to the Kaffa Biosphere Reserve."
      },
      {
        day: 2,
        title: "Mankira Wild Coffee Forest & Coffee Museum",
        description: "Guided walk through Mankira, the legendary birthplace of Arabica coffee, followed by a visit to the Kaffa National Coffee Museum."
      },
      {
        day: 3,
        title: "Barta Waterfall & Kafficho Village Culture",
        description: "Hike to scenic Barta Waterfall and spend the afternoon with local Kafficho artisans and coffee farmers."
      },
      {
        day: 4,
        title: "Return to Addis Ababa",
        description: "Morning departure back to Jimma for your return flight to Addis Ababa."
      }
    ],
    inclusions: [
      "Private 4x4 transportation and licensed cultural guide",
      "All biosphere reserve, museum, and community entrance fees",
      "Traditional Ethiopian coffee ceremony experience",
      "Bottled mineral water throughout the tour"
    ],
    exclusions: [
      "Domestic flights and accommodation (available on request)",
      "Meals and personal beverages",
      "Discretionary tips for local guides and drivers"
    ]
  },
  {
    id: 33,
    title: "Sof Omar Caves & Bale Oromo Cultural Heritage",
    category: "cultural",
    duration: "3-5",
    durationLabel: "3 Days",
    destination: "Sof Omar & Bale Zone, Oromia",
    price: "",
    image: yehaImage,
    description: "Explore one of Africa's longest underground limestone cave systems carved by the Weyib River, paired with authentic Oromo pastoralist hospitality and sacred cultural traditions in the Bale lowlands.\n\n• Sof Omar Limestone Caverns: Walk through soaring subterranean chambers, natural stone pillars, and echoing river passages revered as a historic pilgrimage site.\n• Bale Oromo Hospitality: Experience traditional Oromo culinary traditions, pastoralist life, and regional folk music.\n• Scenic Rift & Highland Descent: Travel through dramatic escarpments linking the Bale highlands to the arid Weyib River valley.",
    itinerary: [
      {
        day: 1,
        title: "Addis Ababa to Robe / Goba",
        description: "Fly or drive southeast into the Bale highlands, arriving in Robe with an afternoon cultural walk and traditional dinner."
      },
      {
        day: 2,
        title: "Sof Omar Caves Exploration & Cultural Visit",
        description: "Descend to the Weyib River gorge for a guided exploration of the monumental Sof Omar limestone caverns and surrounding village."
      },
      {
        day: 3,
        title: "Return to Addis Ababa",
        description: "Morning visit to a local Bale market before returning to Addis Ababa."
      }
    ],
    inclusions: [
      "Private 4x4 transportation and licensed cultural guide",
      "All cave, local scout, and community entrance fees",
      "Bottled mineral water throughout the tour"
    ],
    exclusions: [
      "Domestic flights and accommodation (available on request)",
      "Meals and personal beverages",
      "Discretionary tips for local guides and drivers"
    ]
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
    id: 34,
    title: "Addis Ababa St. George, Merkato & Friendship Park Tour",
    category: "halfday",
    duration: "1",
    durationLabel: "Half Day",
    destination: "Addis Ababa",
    price: "",
    image: addisAbabaEnaImage,
    description: "Discover the vibrant heart of Addis Ababa on a curated city tour combining historic heritage, bustling local commerce, tranquil urban gardens, and Ethiopia's most iconic coffee house.\n\n• St. George Cathedral Church (Kidus Giorgis): Visit the landmark octagonal Ethiopian Orthodox cathedral built to commemorate the 1896 Battle of Adwa, home to celebrated artwork and an imperial heritage museum.\n• Merkato Open-Air Market: Explore Africa's largest open-air marketplace with a knowledgeable local guide—navigating aromatic spice alleys, handwoven cotton textiles, traditional basketry, and artisan recycling stalls.\n• Friendship Park: Stroll through the lush landscaped gardens, serene water fountains, and scenic pathways of Addis Ababa's signature riverside urban park.\n• Tomoca Coffee Shop: Stop at Piazza's legendary 1953 coffee roaster to savor a freshly brewed Ethiopian Arabica espresso or macchiato surrounded by the aroma of roasting beans.",
    itinerary: [
      {
        day: "Morning",
        title: "St. George Cathedral Church & Tomoca Coffee Shop",
        description: "Begin in historic Piazza with a guided visit to St. George Cathedral Church and its museum, followed by a classic Ethiopian coffee break at the famous Tomoca Coffee Shop."
      },
      {
        day: "Midday",
        title: "Merkato Open-Air Market Exploration",
        description: "Walk through the vibrant lanes of Merkato Open-Air Market to experience Ethiopia's largest trading hub—from berbere spice markets and coffee wholesalers to traditional crafts."
      },
      {
        day: "Afternoon",
        title: "Friendship Park Promenade & Return",
        description: "Unwind with a relaxing guided stroll through Friendship Park's botanical gardens, fountains, and city viewpoints before your hotel or airport drop-off."
      }
    ],
    inclusions: [
      "Private air-conditioned vehicle and hotel/airport pick-up & drop-off",
      "Licensed English-speaking city guide",
      "Entrance fees for St. George Cathedral Museum and Friendship Park",
      "Coffee tasting at Tomoca Coffee Shop",
      "Bottled mineral water throughout the tour"
    ],
    exclusions: [
      "Lunch and personal market purchases",
      "Personal beverages beyond included coffee tasting",
      "Discretionary tips for guide and driver"
    ]
  },
  {
    id: 14,
    title: "Addis Ababa Full Day City Tour",
    category: "fullday",
    duration: "1",
    durationLabel: "6-7 hours",
    destination: "Addis Ababa",
    price: "$130 per person",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QWyUklCEyn9S3lWwZbYBV2wDLroC0ugpqfqf0e1-eDggHWytBaK4vUWXoVCGLDaje22La7h1bR7xVBJ-umeDze4kgyzJqIIOMH7H5jSA4xbRx0Yo_YZUvdfOVOppTLcyC8CKUJ=s1360-w1360-h1020-rw",
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
    image: wonchiImage,
    description: "Sitting in the shadow of Mount Wonchi, Wonchi Crater Lake is the beautiful legacy of a once powerful volcano. A hiking path from the rim of the volcano meanders past small farms and forests to the lake below. An ancient island church, Cherkos, is accessible via a boat ride across the lake. For those not keen on walking, horseback in an option."
  },
  {
    id: 25,
    title: "Bishoftu Crater Lakes & Resort Excursion",
    category: "fullday",
    duration: "1",
    durationLabel: "1 Day",
    destination: "Bishoftu (Debre Zeyit)",
    price: "$165",
    image: bishoftuImage,
    description: "Located just 45 kilometers southeast of Addis Ababa, Bishoftu (formerly Debre Zeyit) is a tranquil resort haven celebrated for its series of picturesque volcanic crater lakes nestled within the Great Rift Valley.\n\n• Volcanic Crater Lakes: Explore the emerald waters of Lake Bishoftu, Lake Babogaya, Lake Kuriftu, and Lake Hora (Hora Harsadi), each formed within ancient volcanic calderas surrounded by sheer cliff walls and acacia woodlands.\n• Boating & Water Activities: Enjoy serene boat cruises across calm crater waters, taking in pristine reflections of highland ridges and gentle water breezes.\n• Rich Birdwatching Paradise: Spot vibrant endemic and migratory water birds, including African fish eagles, pink-backed pelicans, glossy ibises, kingfishers, and cormorants along the reed-lined shores.\n• Lakeside Culinary & Relaxation: Savor freshly prepared Ethiopian-style Rift Valley tilapia, sip traditional freshly roasted Buna (coffee ceremony), and relax at premier waterfront eco-lodges overlooking panoramic lake vistas.",
    itinerary: [
      {
        day: "Morning",
        title: "Scenic Drive to Bishoftu & Lake Hora Harsadi",
        description: "Depart Addis Ababa on a pleasant 45-minute drive via the expressway into the Rift Valley. Arrive at sacred Lake Hora Harsadi, the cultural and ceremonial heart of the annual Irreecha thanksgiving festival. Enjoy a guided morning stroll along the lake rim observing water birds and indigenous flora."
      },
      {
        day: "Midday",
        title: "Lake Babogaya Boat Ride & Fresh Tilapia Lunch",
        description: "Proceed to Lake Babogaya for a relaxing boat ride across the emerald caldera lake. Enjoy a leisurely lunch at a premier waterfront terrace serving freshly caught grilled tilapia fish, traditional injera, and fresh tropical fruit juices."
      },
      {
        day: "Afternoon",
        title: "Lake Kuriftu Exploration, Coffee Ritual & Return",
        description: "Visit Lake Kuriftu for scenic cliffside viewpoints, handcrafted artisan souvenir browsing, and an authentic Ethiopian coffee ceremony with frankincense. Scenic afternoon drive back to Addis Ababa with hotel or airport drop-off."
      }
    ],
    inclusions: [
      "Round-trip private air-conditioned transportation from Addis Ababa",
      "Licensed professional English-speaking tour guide",
      "Scenic caldera lake boat ride on Lake Babogaya",
      "All entry and environmental fees to crater lake viewpoints",
      "Authentic Ethiopian coffee ceremony experience",
      "Bottled mineral water throughout the excursion"
    ],
    exclusions: [
      "Lunch and personal beverages (available on-site at lake restaurants)",
      "Personal shopping and souvenirs",
      "Discretionary tips for driver and local guides"
    ]
  },
  {
    id: 26,
    title: "Mount Entoto Natural Park & Palace Panoramic Tour",
    category: "fullday",
    duration: "1",
    durationLabel: "1 Day",
    destination: "Mount Entoto, Addis Ababa",
    price: "$110",
    image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qo49dZM0ra4F5dANySOFvvpaYDXpuAoRqkcfHpso_z4a1x6NmZ1b62YcFfnXBJZp8Z5jz-akuvqnqET6ZZSmYKJVrmSIGCrG_mj36Ju-LL72lWAtwAOjr-DhiXjPqrGGzL4SE=s1360-w1360-h1020-rw",
    description: "Perched at 3,200 meters above sea level on the northern ridge of Addis Ababa, Mount Entoto is the historic birthplace of the capital city and a refreshing highland sanctuary of eucalyptus forests and alpine breezes.\n\n• Entoto Natural Park: Explore the modern eco-park featuring scenic canopy walking trails, suspension bridges, equestrian centers, and tranquil viewpoint gazebos overlooking the vast metropolis below.\n• Menelik II & Empress Taitu Historic Palace: Walk through the historic late 19th-century royal compound constructed from cedarwood and stone, from where Emperor Menelik II ruled the Ethiopian Empire and plotted the founding of Addis Ababa.\n• Entoto St. Mary Church & Museum: Visit one of the oldest churches in Addis Ababa, crowned with octagonal Ethiopian Orthodox architecture and housing imperial crowns, coronation robes, and royal religious relics.\n• Traditional Shiro & Coffee Ceremony: Savor authentic clay-pot Shiro wat and traditional freshly roasted coffee overlooking sweeping 360-degree highland mountain vistas.",
    itinerary: [
      {
        day: "Morning",
        title: "Ascent to Mount Entoto & Royal Palace Compound",
        description: "Depart your hotel and ascend the winding northern mountain road through fragrant eucalyptus groves. Arrive at the historic royal palace of Emperor Menelik II and Empress Taitu, exploring the bedroom quarters, banquet hall, and imperial audience chambers."
      },
      {
        day: "Midday",
        title: "Entoto St. Mary Church Museum & Panoramic Lunch",
        description: "Visit the 1880s octagonal Entoto St. Mary Church and its royal museum displaying imperial battle regalia, gold-embroidered robes, and ancient manuscripts. Savor a scenic lunch overlooking the entire Addis Ababa skyline from a high-altitude terrace."
      },
      {
        day: "Afternoon",
        title: "Entoto Natural Park Canopy Trails & Coffee Ritual",
        description: "Stroll along the landscaped forest boardwalks, scenic viewpoints, and suspension bridges of Entoto Natural Park. Enjoy an authentic traditional coffee ceremony with roasting, popcorn, and frankincense before a scenic descent back to your hotel."
      }
    ],
    inclusions: [
      "Private air-conditioned round-trip vehicle transfer",
      "Experienced licensed English-speaking tour guide",
      "Entrance permits to Mount Menelik II Palace & St. Mary Museum",
      "Entrance fees to Entoto Natural Park facilities",
      "Traditional Ethiopian freshly roasted coffee ceremony",
      "Bottled mineral water throughout the day"
    ],
    exclusions: [
      "Lunch and personal beverages",
      "Optional adventure activities inside park (zip-line, horseback riding)",
      "Gratuities and personal souvenir purchases"
    ]
  },
  {
    id: 27,
    title: "Menagesha Suba Imperial Forest & Wildlife Trek",
    category: "fullday",
    duration: "1",
    durationLabel: "1 Day",
    destination: "Menagesha Suba, Oromia",
    price: "$145",
    image: menageshaImage,
    description: "Established in the 15th century by Emperor Zera Yacob, Menagesha Suba is celebrated as Africa's oldest designated conservation forest, located just 35 kilometers west of Addis Ababa.\n\n• Ancient Giant Junipers: Hike beneath a canopy of centuries-old Juniperus procera, Podocarpus falcatus, and Hagenia abyssinica trees draped in moss and wild orchids.\n• Endemic Wildlife Encounters: Spot active troops of black-and-white colobus (Guereza) monkeys leaping through high tree canopies, endemic Menelik’s bushbucks, baboons, and caracals.\n• Mount Wechecha Volcanic Peak Hike: Trek along well-shaded mountain paths ascending to the scenic ridge of extinct Mount Wechecha for sweeping panoramas across the Shewa highland plateau.\n• Birdwatching Haven: Observe over 120 recorded highland forest bird species, including the endemic Abyssinian catbird, yellow-fronted parrot, and banded barbet.",
    itinerary: [
      {
        day: "Morning",
        title: "Scenic Drive & Ancient Primary Forest Hike",
        description: "Early morning departure from Addis Ababa heading west through rolling agricultural hills to Menagesha Suba State Forest. Meet your local wildlife scout and begin a guided trek under the towering 400-year-old juniper canopy."
      },
      {
        day: "Midday",
        title: "Colobus Monkey Tracking & Woodland Picnic",
        description: "Trek deeper into the ancient arboretum, tracking acrobatic troops of black-and-white colobus monkeys and spotting elusive Menelik's bushbucks in the bamboo undergrowth. Enjoy a hearty packed picnic lunch beside a bubbling forest spring."
      },
      {
        day: "Afternoon",
        title: "Mount Wechecha Ridge Lookout & Return to Capital",
        description: "Ascend to higher forest clearings offering sweeping views toward the extinct Mount Wechecha volcanic crater and distant Shewa plains. Conclude with a relaxed downhill hike and return drive to Addis Ababa by late afternoon."
      }
    ],
    inclusions: [
      "Round-trip private 4WD / minivan transportation from Addis Ababa",
      "Professional licensed English-speaking naturalist guide",
      "Mandatory local community scout & forest ranger fees",
      "Menagesha Suba State Forest entrance & conservation permits",
      "Packed picnic lunch and mineral water refreshments"
    ],
    exclusions: [
      "Personal hiking equipment and walking sticks",
      "Souvenirs and personal expenses",
      "Tips for forest scout and driver"
    ]
  },
  {
    id: 28,
    title: "Awash National Park & Canyon Falls Safari",
    category: "fullday",
    duration: "1",
    durationLabel: "1 Day",
    destination: "Awash National Park, Great Rift Valley",
    price: "$195",
    image: awashImage,
    description: "Journey 215 kilometers east of Addis Ababa down into the Great Rift Valley to discover Awash National Park, one of Ethiopia’s most historic and dramatic wildlife reserves.\n\n• Roaring Awash River Gorge & Cataracts: Stand beside the breathtaking Awash Falls where the mighty Awash River plunges over basalt steps into a deep volcanic canyon.\n• Savannah Wildlife Game Drive: Scan golden acacia savannahs and open plains for herds of Beisa oryx, Soemmerring’s gazelles, Greater and Lesser kudus, warthogs, and hamadryas baboons.\n• Mount Fantale Caldera & Volcanic Lava Fields: View the dramatic silhouette of semi-dormant Mount Fantale volcano and ancient blister caves formed by historic basalt flows.\n• Filwoha Natural Hot Springs: Visit tranquil natural thermal springs surrounded by a lush oasis of doum palms, a secret desert refuge for migratory water birds and local Afar and Kereyu pastoralists.",
    itinerary: [
      {
        day: "Morning",
        title: "Rift Valley Descent & Awash River Falls",
        description: "Early morning scenic drive down the Ethiopian Rift Valley expressway, passing Lake Beseka and Mount Fantale. Arrive at Awash National Park and immediately visit the roaring Awash Falls, watching torrents of white water cascade down the basalt gorge."
      },
      {
        day: "Midday",
        title: "Ilala Sala Plains Game Drive & Canyon Lunch",
        description: "Embark on an open savannah wildlife safari drive across the Ilala Sala plains to spot herds of Beisa oryx, gazelles, and troops of hamadryas baboons. Enjoy a delicious lunch at the Awash Falls Lodge terrace perched directly over the gorge."
      },
      {
        day: "Afternoon",
        title: "Filwoha Hot Springs Oasis & Scenic Return",
        description: "Drive north to the Filwoha thermal hot springs nestled within a lush oasis of green doum palms, observing endemic water birds and desert landscapes before a comfortable expressway journey back to Addis Ababa."
      }
    ],
    inclusions: [
      "Round-trip private air-conditioned transportation from Addis Ababa",
      "Licensed tour guide and official National Park wildlife scout",
      "All Awash National Park entry, vehicle, and scout fees",
      "Full game drive across Ilala Sala plains and Awash River Gorge",
      "Bottled spring water throughout the safari drive"
    ],
    exclusions: [
      "Lunch at Awash Falls Lodge restaurant",
      "Personal beverages and snacks",
      "Discretionary gratuities for local scout and driver"
    ]
  },
  {
    id: 29,
    title: "Bahir Dar, Lake Tana & Blue Nile Falls",
    category: "historical",
    duration: "3-5",
    durationLabel: "3 Days",
    destination: "Bahir Dar & Lake Tana",
    price: "",
    image: blueNileFallsImage,
    description: "Discover the scenic source of the Blue Nile at Lake Tana and witness the thundering Tis Issat (Blue Nile Falls). Cruise across Ethiopia's largest lake to visit centuries-old island monasteries adorned with vibrant religious murals and ancient illuminated manuscripts.\n\n• Blue Nile Falls (Tis Issat): Hike across a historic 17th-century Portuguese stone bridge to view the \"Smoking Water\" cascading 45 meters into a lush basalt gorge.\n• Lake Tana Island Monasteries: Boat across tranquil waters to the Zege Peninsula and Ura Kidane Mehret, famed for conical thatched roofs and vivid biblical frescoes.\n• Bezawit Hill & Nile Outlet: Take in panoramic sunset views over Bahir Dar, palm-lined boulevards, and the exact point where the Blue Nile begins its journey toward Sudan and Egypt.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bahir Dar & Bezawit Hill Sunset",
        description: "Arrive in Bahir Dar and transfer to your lakeside hotel. In the afternoon, visit Bezawit Hilltop for sweeping views of Lake Tana and the Blue Nile outlet."
      },
      {
        day: 2,
        title: "Lake Tana Island Monasteries & Blue Nile Falls",
        description: "Morning boat excursion on Lake Tana to Ura Kidane Mehret and Azwa Maryam monasteries. In the afternoon, drive to Tis Abay village for a guided walk to the roaring Blue Nile Falls."
      },
      {
        day: 3,
        title: "Local Market & Departure",
        description: "Stroll through Bahir Dar's colorful morning market and lakeside promenade before your onward flight or drive."
      }
    ],
    inclusions: [
      "Private air-conditioned vehicle and licensed local guide",
      "Private motorboat excursion on Lake Tana",
      "All monastery, waterfall, and local guide entrance fees",
      "Bottled water throughout the tour"
    ],
    exclusions: [
      "Domestic flights and accommodation (available on request)",
      "Meals and personal beverages",
      "Discretionary tips for boat crew and guides"
    ]
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
  },
  {
    id: 18,
    title: "Axum Kingdom & Ancient Obelisks",
    category: "historical",
    duration: "3-5",
    durationLabel: "3 Days",
    destination: "Axum (Aksum)",
    price: "$620",
    image: axumImage,
    description: "Explore the cradle of Ethiopian civilization in ancient Axum (Aksum), a UNESCO World Heritage site and former heart of the powerful Aksumite Empire.\n\n• Northern Stelae Park: Marvel at monumental monolithic granite obelisks, including the Great Stele and King Ezana's standing obelisk rising over 24 meters, sculpted with faux doors and windows.\n• Church of Our Lady Mary of Zion: Visit Ethiopia's oldest and holiest Christian sanctuary, revered as the resting repository of the biblical Ark of the Covenant, alongside the adjacent Chapel of the Tablet.\n• Palace & Bath of the Queen of Sheba (Dungur): Walk among royal palace ruins, ancient underground burial chambers of King Kaleb and King Gebre Meskel, and the ancient stone reservoir believed to be the Queen of Sheba's bath.\n• Inscribed Ezana Stone: Examine trilingual inscriptions written in ancient Ge'ez, Sabaean, and Greek detailing the historic conversion of the Aksumite Empire to Christianity in the 4th century."
  },
  {
    id: 19,
    title: "Gheralta Mountains Rock-Hewn Churches",
    category: "historical",
    duration: "3-5",
    durationLabel: "4 Days",
    destination: "Gheralta, Tigray",
    price: "$740",
    image: geraltaImage,
    description: "Embark on an exhilarating journey through the dramatic red sandstone pinnacles and cliff-top sanctuaries of the Gheralta (Geralta) mountain range.\n\n• Abuna Yemata Guh: Scale the legendary cliffside route to reach one of the world's most inaccessible and awe-inspiring churches, perched 2,500 meters high with breathtaking 360-degree desert canyon panoramas.\n• Ancient Ceiling Frescoes: Admire remarkably preserved 15th-century Orthodox mural paintings, depicting the Nine Saints, Apostles, and Old Testament scenes rendered on solid stone ceilings.\n• Mariam Korkor & Daniel Korkor: Trek through narrow rock crevices and high mountain plateaus to explore spacious pillared basilicas with intricate geometric carvings and peaceful monk hermitages.\n• Scenic Sunset Horizons: Experience unforgettable golden hour vistas across the expansive Hawzen plains and dramatic flat-topped sandstone formations."
  },
  {
    id: 20,
    title: "Tiya Megalithic World Heritage Site",
    category: "historical",
    duration: "1",
    durationLabel: "1-2 Days",
    destination: "Tiya, Gurage Zone",
    price: "$210",
    image: tiyaImage,
    description: "Journey south of Addis Ababa to uncover the mysterious prehistoric cemetery of Tiya, an internationally recognized UNESCO World Heritage site dating from the 12th to 14th centuries.\n\n• Ancient Megalithic Stelae: Inspect 36 monumental standing carved stone pillars marking ancient burial complexes, featuring intricate prehistoric engravings of curved swords, enigmatic circular symbols, and human figures.\n• Melka Kunture Prehistoric Site: Discover one of East Africa's most significant Stone Age archaeological sites, showcasing ancient Acheulean handaxes and fossils dating back over 1.5 million years.\n• Adadi Mariam Rock Church: Visit the southernmost semi-monolithic rock-hewn church in Ethiopia, historically linked to King Lalibela's 13th-century craftsmen.\n• Gurage Cultural Landscapes: Drive across rolling green pastoral highlands, visiting traditional circular thatch homes and experiencing indigenous Enset (false banana) culinary traditions."
  },
  {
    id: 21,
    title: "Blue Nile Falls (Tis Issat) & Bahir Dar",
    category: "historical",
    duration: "1",
    durationLabel: "2 Days",
    destination: "Bahir Dar & Tis Abay",
    price: "$340",
    image: blueNileFallsImage,
    description: "Witness the thunderous majesty of the Blue Nile Falls, locally known as 'Tis Issat' (Smoke of Fire), situated just 30 kilometers downstream from Lake Tana.\n\n• Thunderous Cataracts & Shimmering Rainbows: Marvel as the mighty Blue Nile plunges over a 45-meter high volcanic cliff face into a misty chasm, creating permanent mist curtains and vivid rainbows.\n• Historic 17th-Century Portuguese Bridge: Walk across the first stone bridge built in Ethiopia, constructed under Emperor Susenyos in 1626, spanning the rushing waters of the Blue Nile.\n• Scenic Countryside Hike: Trek through lush agrarian villages and rolling green hills lined with eucalyptus groves, observing local farmers and traditional papyrus tankwa boat builders.\n• Bezawit Palace Viewpoint: Conclude with a panoramic hilltop view over Bahir Dar city where the Blue Nile gently flows out from Lake Tana to begin its epic journey to the Mediterranean Sea."
  },
  {
    id: 22,
    title: "Great Temple of Yeha & D'mt Kingdom",
    category: "historical",
    duration: "1",
    durationLabel: "2 Days",
    destination: "Yeha & Adwa, Tigray",
    price: "$390",
    image: yehaImage,
    description: "Step back 2,700 years into the ancient kingdom of D'mt at Yeha, home to the oldest standing stone structure in Sub-Saharan Africa dating to approximately 700 BC.\n\n• Great Tower Temple of the Moon: Stand in awe before an ancient dry-stone sun and moon temple built without mortar using perfectly interlocking limestone blocks, rising 12 meters high with carved ibex friezes.\n• Ancient South Arabian (Sabaean) Script: Trace 28-century-old royal inscriptions that illuminate early trade links, bronze artifacts, and shared religious roots across the Red Sea corridor.\n• Monastery of Abba Aftse: Explore the 6th-century Christian monastery complex founded by one of the Nine Byzantine Saints, containing ancient illuminated parchment gospels and sacred silver crosses.\n• Historic Mountains of Adwa: Traverse the dramatic jagged volcanic peaks of Adwa, site of the momentous 1896 Battle of Adwa where Ethiopia defended its sovereignty against colonial forces."
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
