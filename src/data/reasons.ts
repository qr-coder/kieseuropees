import { Leaf, Heart, Factory, ShieldCheck, LucideIcon } from "lucide-react";

export interface Reason {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
}

export const reasons: Reason[] = [
  {
    slug: "duurzamer",
    icon: Leaf,
    title: "Duurzamer",
    description:
      "Europese merken volgen strengere milieuwetgeving en kiezen vaker voor duurzame materialen en productieprocessen.",
    longDescription:
      "Europa loopt wereldwijd voorop als het gaat om milieuwetgeving en duurzaamheidsstandaarden in de mode-industrie. De Europese Unie heeft met de Green Deal en de aankomende textielstrategie een duidelijk kader geschapen dat merken verplicht om transparant te zijn over hun ecologische voetafdruk.\n\nEuropese kledingmerken zijn gebonden aan strenge regelgeving rondom chemicaliëngebruik (REACH-verordening), waterlozing en afvalverwerking. Dit betekent dat stoffen die in Europa worden geproduceerd of verkocht, moeten voldoen aan de hoogste veiligheidsnormen ter wereld. Schadelijke stoffen zoals azo-kleurstoffen, formaldehyde en zware metalen zijn streng gereguleerd of volledig verboden.\n\nDaarnaast kiezen steeds meer Europese merken vrijwillig voor certificeringen zoals GOTS (Global Organic Textile Standard), OEKO-TEX en Bluesign. Deze keurmerken garanderen dat materialen biologisch geteeld, veilig geverfd en milieuvriendelijk verwerkt zijn. Het gebruik van biologisch katoen, gerecycled polyester en innovatieve materialen zoals Tencel (gemaakt van houtpulp uit duurzaam beheerde bossen) neemt in Europa sneller toe dan waar ook ter wereld.\n\nDe kortere transportafstanden binnen Europa dragen ook bij aan een lagere CO2-uitstoot. Waar kleding uit Azië duizenden kilometers moet reizen, kan Europees geproduceerde kleding vaak binnen dezelfde regio worden vervoerd — soms zelfs per trein in plaats van per schip of vliegtuig.",
    highlights: [
      "EU Green Deal en textielstrategie stellen strenge eisen aan de mode-industrie",
      "REACH-verordening verbiedt honderden schadelijke chemicaliën in textiel",
      "Hogere adoptie van GOTS, OEKO-TEX en Bluesign certificeringen",
      "Kortere transportketens betekenen minder CO2-uitstoot",
      "Innovatie in duurzame materialen zoals Tencel en gerecycled denim",
    ],
  },
  {
    slug: "eerlijke-arbeids-omstandigheden",
    icon: Heart,
    title: "Eerlijke arbeids-omstandigheden",
    description:
      "Productie binnen Europa betekent betere lonen, veilige werkplekken en respect voor werknemersrechten.",
    longDescription:
      "De instorting van Rana Plaza in Bangladesh in 2013 — waarbij meer dan 1.100 textielarbeiders omkwamen — was een keerpunt voor de mondiale mode-industrie. Het maakte pijnlijk duidelijk wat de menselijke kosten zijn van goedkope kleding die wordt geproduceerd in landen met minimale arbeidsbescherming.\n\nIn Europa zijn arbeidsrechten wettelijk verankerd en gehandhaafd. Werknemers in de textielindustrie hebben recht op een minimumloon dat in de meeste EU-landen een leefbaar loon benadert, veilige werkomstandigheden, beperkte werkuren, vakantiedagen en het recht om zich te organiseren in vakbonden. Fabrieken worden regelmatig geïnspecteerd door onafhankelijke instanties.\n\nLanden als Portugal, Italië en Spanje hebben een rijke textieltraditie met gespecialiseerde fabrieken die al generaties lang hoogwaardig vakmanschap leveren. De arbeiders in deze fabrieken beschikken over unieke kennis en vaardigheden die van ouder op kind worden doorgegeven. Door Europees te kopen, ondersteun je het voortbestaan van deze ambachtelijke tradities.\n\nDe Europese Corporate Sustainability Due Diligence Directive (CSDDD) verplicht grote bedrijven bovendien om mensenrechtenschendingen in hun volledige toeleveringsketen te identificeren en aan te pakken. Dit betekent dat Europese merken niet alleen verantwoordelijk zijn voor hun eigen fabrieken, maar ook voor de omstandigheden bij hun leveranciers.",
    highlights: [
      "Wettelijk gegarandeerde minimumlonen en arbeidsrechten in de EU",
      "Regelmatige onafhankelijke fabrieksinspecties",
      "Bescherming van ambachtelijke textieltraditie in Portugal, Italië en Spanje",
      "CSDDD verplicht ketenverantwoordelijkheid voor mensenrechten",
      "Recht op vakbonden, veilige werkplekken en beperkte werkuren",
    ],
  },
  {
    slug: "steun-lokale-economie",
    icon: Factory,
    title: "Steun lokale economie",
    description:
      "Door Europees te kopen investeer je in banen en ambachten dicht bij huis. Je geld blijft in onze economie.",
    longDescription:
      "Wanneer je kleding koopt van een Europees merk dat ook in Europa produceert, heeft dat een direct positief effect op de lokale economie. Je geld creëert banen in ontwerp, productie, logistiek en retail binnen Europa. Dit staat in schril contrast met fast fashion, waarbij het overgrote deel van de waardeketen zich in lagelonenlanden bevindt.\n\nDe Europese textielindustrie biedt werkgelegenheid aan meer dan 1,5 miljoen mensen, verspreid over gespecialiseerde regio's met unieke expertise. Denk aan de wol- en kasjmierindustrie in Schotland en Italië, de denimindustrie in het Japanse en Italiaanse ambacht, de lederwarenindustrie in Spanje en Portugal, en de linnenweverijen in België en Ierland.\n\nHet kopen van Europees geproduceerde kleding helpt deze industriële clusters in stand te houden. Wanneer consumenten kiezen voor goedkopere alternatieven van buiten Europa, verdwijnen deze gespecialiseerde fabrieken en daarmee onvervangbare kennis en vakmanschap.\n\nBovendien betalen Europese bedrijven belasting in Europa, wat bijdraagt aan publieke voorzieningen zoals onderwijs, gezondheidszorg en infrastructuur. De multiplier-effect van lokale besteding is aanzienlijk: elke euro die wordt uitgegeven bij een Europees bedrijf circuleert meerdere keren door de lokale economie voordat het het systeem verlaat.",
    highlights: [
      "1,5+ miljoen banen in de Europese textielindustrie",
      "Behoud van unieke ambachtelijke expertise per regio",
      "Belastinginkomsten blijven in Europa voor publieke voorzieningen",
      "Sterkere lokale toeleveringsketens en minder afhankelijkheid",
      "Multiplier-effect: elke euro circuleert meerdere keren door de economie",
    ],
  },
  {
    slug: "hogere-kwaliteit",
    icon: ShieldCheck,
    title: "Hogere kwaliteit",
    description:
      "Europese mode staat bekend om vakmanschap en kwaliteit. Kleding die langer meegaat is de beste duurzame keuze.",
    longDescription:
      "Het meest duurzame kledingstuk is het stuk dat je niet hoeft te vervangen. Europese mode staat van oudsher bekend om een hogere kwaliteit in materialen, afwerking en constructie, waardoor kleding aanzienlijk langer meegaat dan fast fashion-alternatieven.\n\nDe kwaliteitstraditie in de Europese mode-industrie heeft diepe historische wortels. Italiaanse tailoring, Franse couture, Britse saville row — deze ambachtelijke tradities hebben eeuwenlange kennis opgebouwd over hoe kleding het best geconstrueerd kan worden. Deze expertise vertaalt zich ook naar hedendaagse ready-to-wear collecties van Europese merken.\n\nConcreet betekent hogere kwaliteit: stevigere naden die niet loslaten na een paar wasbeurten, stoffen die hun vorm en kleur behouden, ritsen en knopen die niet breken, en snits die ook na jarenlang dragen nog goed zitten. Het verschil zit vaak in onzichtbare details: de dikte van het garen, de dichtheid van het weefsel, de manier waarop zomen zijn afgewerkt.\n\nVanuit duurzaamheidsperspectief is kwaliteit cruciaal. Een T-shirt dat twee jaar meegaat in plaats van zes maanden, heeft effectief een vier keer lagere milieu-impact per draagbeurt. Door te investeren in kwalitatieve Europese kleding bespaar je op de lange termijn niet alleen geld, maar verminder je ook je ecologische voetafdruk aanzienlijk.\n\nDaarnaast bieden steeds meer Europese merken reparatieservices aan, wat de levensduur van hun producten nog verder verlengt. Dit staat in schril contrast met de wegwerpcultuur van fast fashion.",
    highlights: [
      "Eeuwenlange ambachtelijke traditie in textielproductie",
      "Stevigere naden, betere stoffen en duurzamere afwerking",
      "Lagere milieu-impact per draagbeurt door langere levensduur",
      "Reparatieservices verlengen de levensduur nog verder",
      "Op lange termijn voordeliger dan goedkope alternatieven",
    ],
  },
];
