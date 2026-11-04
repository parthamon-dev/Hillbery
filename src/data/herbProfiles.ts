export interface HerbProfile {
  family: string;
  plantPart: string;
  nativeRegion: string;
  summary: string;
}

export const HERB_PROFILES: Record<string, HerbProfile> = {
  'Acacia concinna': {
    family: 'Fabaceae',
    plantPart: 'Fruit pods',
    nativeRegion: 'India',
    summary:
      'Shikakai is a pod traditionally used across India for hair and scalp care. Our extract is standardised for its natural saponin content, so each batch performs the same way in your formulation.',
  },
  'Acacia catechu': {
    family: 'Fabaceae',
    plantPart: 'Heartwood',
    nativeRegion: 'India',
    summary:
      'Katha is a heartwood extract from the Khair tree, rich in catechins and tannins. It is supplied to a stated catechin and tannin level for dependable use in formulations.',
  },
  'Aegle marmelos': {
    family: 'Rutaceae',
    plantPart: 'Fruit',
    nativeRegion: 'India',
    summary:
      'Bilva, also known as Bael, is a fruit used in traditional Ayurvedic preparations. Our extract is standardised to its tannin content and released against the stated specification.',
  },
  'Allium sativum': {
    family: 'Amaryllidaceae',
    plantPart: 'Bulb',
    nativeRegion: 'Central Asia',
    summary:
      'Garlic is one of the most widely used culinary and botanical ingredients in the world. Our extract is standardised for alliin, measured by HPLC, to give a consistent sulphur-compound profile.',
  },
  'Alpinia galanga': {
    family: 'Zingiberaceae',
    plantPart: 'Rhizome',
    nativeRegion: 'South and Southeast Asia',
    summary:
      'Kulinjan, or greater galangal, is an aromatic rhizome used in Asian cooking and traditional practice. Our extract is standardised to its flavonoid content.',
  },
  'Aloe barbadensis': {
    family: 'Asphodelaceae',
    plantPart: 'Inner leaf gel',
    nativeRegion: 'Africa and the Arabian Peninsula',
    summary:
      'Aloe vera is a succulent cultivated widely for its leaf gel. Supplied at the herb ratio you specify, 100x or 200x, so the concentration can be matched to your formula.',
  },
  'Andrographis paniculata': {
    family: 'Acanthaceae',
    plantPart: 'Aerial parts',
    nativeRegion: 'India and Sri Lanka',
    summary:
      'Kalmegh is a bitter herb traditionally used in Ayurveda. Our extract is standardised to andrographolide, the marker compound that defines its strength.',
  },
  'Asparagus racemosus': {
    family: 'Asparagaceae',
    plantPart: 'Root',
    nativeRegion: 'India',
    summary:
      'Shatavari is a climbing herb whose roots are a staple of Ayurvedic formulations. Standardised to its saponin content so each lot matches the specification.',
  },
  Asphaltum: {
    family: 'Not applicable (mineral exudate)',
    plantPart: 'Mineral exudate from rock',
    nativeRegion: 'Himalayas',
    summary:
      'Shilajit is a mineral-rich exudate found in high mountain rock and traditionally used in Ayurveda. Standardised to fulvic acid, with origin and testing documented.',
  },
  'Azadirachta indica': {
    family: 'Meliaceae',
    plantPart: 'Leaf',
    nativeRegion: 'India',
    summary:
      'Neem is a tree native to the Indian subcontinent, with leaves widely used in traditional skin and hair care. Our extract is standardised to its bitter principles.',
  },
  'Bacopa monnieri': {
    family: 'Plantaginaceae',
    plantPart: 'Whole plant (aerial parts)',
    nativeRegion: 'India',
    summary:
      'Brahmi is a creeping herb of wet ground, traditionally valued in Ayurveda. Standardised to bacoside content, the marker used across our range.',
  },
  'Berberis aristata': {
    family: 'Berberidaceae',
    plantPart: 'Stem and root',
    nativeRegion: 'India and the Himalayas',
    summary:
      'Daru haldi is a thorny shrub whose yellow wood is a traditional source of berberine. Available across a wide assay range, from 5% to 97% berberine.',
  },
  'Boerhavia diffusa': {
    family: 'Nyctaginaceae',
    plantPart: 'Root and whole plant',
    nativeRegion: 'India',
    summary:
      'Punarnava is a ground-spreading herb common across India and used in traditional practice. Standardised to its saponin content for a consistent supply.',
  },
  'Boswellia serrata': {
    family: 'Burseraceae',
    plantPart: 'Oleo-gum resin from bark',
    nativeRegion: 'India',
    summary:
      'Shallaki is the resin of the Indian frankincense tree, valued in Ayurveda. Standardised to boswellic acids, including AKBA, the marker most often specified.',
  },
  'Camellia sinensis': {
    family: 'Theaceae',
    plantPart: 'Leaf',
    nativeRegion: 'East Asia',
    summary:
      'Green tea leaves are rich in polyphenols, led by catechins such as EGCG. Our extract carries a polyphenol assay above 90% and an EGCG level above 35%.',
  },
  'Cassia angustifolia': {
    family: 'Fabaceae',
    plantPart: 'Leaf and pod',
    nativeRegion: 'Africa and Arabia',
    summary:
      'Senna is a cultivated herb whose leaves and pods are standardised to their sennoside content. The sennoside level is stated on each certificate of analysis.',
  },
  'Centella asiatica': {
    family: 'Apiaceae',
    plantPart: 'Whole plant',
    nativeRegion: 'Tropical Asia',
    summary:
      'Gotu kola is a low-growing herb of wet tropical ground, traditionally used in Ayurveda. Standardised to asiaticosides, the triterpenes that mark its strength.',
  },
  'Carica papaya': {
    family: 'Caricaceae',
    plantPart: 'Leaf',
    nativeRegion: 'Central America',
    summary:
      'Papaya is grown across tropical countries, and its leaves are used in traditional practice. Our leaf extract is standardised to its glycoside content.',
  },
  'Cinnamomum cassia / zeylanicum': {
    family: 'Lauraceae',
    plantPart: 'Inner bark',
    nativeRegion: 'Sri Lanka and South China',
    summary:
      'Cinnamon bark is one of the oldest spices in trade. Our extract is standardised to polyphenol content, so flavour and activity stay consistent from batch to batch.',
  },
  'Cissus quadrangularis': {
    family: 'Vitaceae',
    plantPart: 'Stem',
    nativeRegion: 'India and tropical Africa',
    summary:
      'Bone setter is a succulent climber with four-angled stems, traditionally used in Ayurveda. Standardised to its keto-steroid content.',
  },
  'Coffea robusta': {
    family: 'Rubiaceae',
    plantPart: 'Green (unroasted) beans',
    nativeRegion: 'Central and West Africa',
    summary:
      'Robusta coffee beans are a major source of caffeine. Our extract is standardised to 98% caffeine, with the purity stated on each certificate of analysis.',
  },
  'Coleus forskohlii': {
    family: 'Lamiaceae',
    plantPart: 'Root',
    nativeRegion: 'India',
    summary:
      'Coleus is a Himalayan plant whose roots contain forskolin, a compound widely studied in nutraceutical research. Standardised to forskolin for use in formulations.',
  },
  'Citrus acida': {
    family: 'Rutaceae',
    plantPart: 'Fruit',
    nativeRegion: 'South Asia',
    summary:
      'Lime is a citrus fruit valued in cooking and personal care. Our extract is standardised to its flavonoid content.',
  },
  'Convolvulus pluricaulis': {
    family: 'Convolvulaceae',
    plantPart: 'Whole plant',
    nativeRegion: 'India',
    summary:
      'Shankhpushpi is a small flowering herb traditionally used in Ayurveda. Standardised to its bitter content, with every batch tested against the stated specification.',
  },
  'Commiphora mukul': {
    family: 'Burseraceae',
    plantPart: 'Oleo-gum resin',
    nativeRegion: 'India',
    summary:
      'Guggul is the aromatic resin of the mukul myrrh tree, long used in Ayurvedic preparations. Our extract is standardised to guggulsterone content.',
  },
  'Coffea bean': {
    family: 'Rubiaceae',
    plantPart: 'Green coffee beans',
    nativeRegion: 'East Africa',
    summary:
      'Green coffee bean extract keeps the chlorogenic acids that are lost when beans are roasted. Standardised to 45–50% chlorogenic acid.',
  },
  'Curcuma longa': {
    family: 'Zingiberaceae',
    plantPart: 'Rhizome',
    nativeRegion: 'India',
    summary:
      'Turmeric is a golden rhizome central to Indian cooking and Ayurveda. Our extract is standardised to 95% curcuminoids, measured by HPLC.',
  },
  'Eclipta alba': {
    family: 'Asteraceae',
    plantPart: 'Whole plant',
    nativeRegion: 'India',
    summary:
      'Bhringraj is a herb of wet ground traditionally used in Ayurvedic hair care. Standardised to its bitter content for a consistent supply.',
  },
  'Eugenia jambolana': {
    family: 'Myrtaceae',
    plantPart: 'Seed and fruit',
    nativeRegion: 'India',
    summary:
      'Jamun is a tree whose seeds and fruit are traditionally used in Ayurveda. Standardised to its tannin and bitter content.',
  },
  'Eurycoma longifolia': {
    family: 'Simaroubaceae',
    plantPart: 'Root',
    nativeRegion: 'Southeast Asia',
    summary:
      'Tongkat ali is a shrub of the Southeast Asian rainforest, grown and harvested for its roots. Standardised to eurycomanone, the marker compound in our extract.',
  },
  'Emblica officinalis': {
    family: 'Phyllanthaceae',
    plantPart: 'Fruit',
    nativeRegion: 'India',
    summary:
      'Amla is one of the most important fruits in Ayurveda and is naturally rich in tannins. Available at 20% or 40% tannin levels.',
  },
  'Gymnema sylvestre': {
    family: 'Apocynaceae',
    plantPart: 'Leaf',
    nativeRegion: 'India',
    summary:
      'Gudmar is a climbing herb of Indian forests, traditionally used in Ayurveda. Standardised to gymnemic acids, the marker compounds in our extract.',
  },
  'Garcinia combogia': {
    family: 'Clusiaceae',
    plantPart: 'Fruit rind',
    nativeRegion: 'Southeast Asia and India',
    summary:
      'Garcinia is a fruit rind from South and Southeast Asia, known for its hydroxycitric acid (HCA) content. Standardised to 50–60% HCA.',
  },
  'Glycyrrhiza glabra': {
    family: 'Fabaceae',
    plantPart: 'Root and rhizome',
    nativeRegion: 'Mediterranean and Central Asia',
    summary:
      'Licorice root has a long history in traditional medicine and confectionery. Our extract is standardised to glycyrrhizin, its sweet marker compound.',
  },
  'Ginkgo biloba': {
    family: 'Ginkgoaceae',
    plantPart: 'Leaf',
    nativeRegion: 'China',
    summary:
      'Ginkgo is one of the oldest living tree species. The leaf extract is standardised to flavone glycosides and terpene lactones, the markers of the extract.',
  },
  'Gloriosa superba seeds': {
    family: 'Colchicaceae',
    plantPart: 'Seed',
    nativeRegion: 'India and tropical Africa',
    summary:
      'Gloriosa is a climbing lily whose seeds are the source of this extract. Supplied with its assay and full documentation on request.',
  },
  'Hibiscus sabdariffa': {
    family: 'Malvaceae',
    plantPart: 'Calyx',
    nativeRegion: 'West Africa',
    summary:
      'Hibiscus calyces are used worldwide as a tart infusion ingredient. Standardised to tannin and flavonoid content.',
  },
  'Lepidium meyenii': {
    family: 'Brassicaceae',
    plantPart: 'Hypocotyl (root)',
    nativeRegion: 'Peru (Andes)',
    summary:
      'Maca is a root vegetable grown at high altitude in the Andes. Standardised to saponin content, with its origin documented.',
  },
  'Moringa oleifera': {
    family: 'Moringaceae',
    plantPart: 'Leaf',
    nativeRegion: 'Northern India and the Himalayan foothills',
    summary:
      'Moringa is a fast-growing tree whose leaves are a well-known source of plant nutrients. Standardised to saponin content.',
  },
  'Mucuna pruriens': {
    family: 'Fabaceae',
    plantPart: 'Seed',
    nativeRegion: 'Tropical Africa and India',
    summary:
      'Velvet bean is a climbing legume whose seeds contain L-DOPA. Standardised to L-DOPA across the 20–60% range.',
  },
  'Ocimum sanctum': {
    family: 'Lamiaceae',
    plantPart: 'Leaf',
    nativeRegion: 'India',
    summary:
      'Tulsi, or holy basil, is a sacred plant in Indian homes and a staple of Ayurveda. Standardised to triterpenes and tannins.',
  },
  'Panax ginseng': {
    family: 'Araliaceae',
    plantPart: 'Root',
    nativeRegion: 'East Asia (Korea and China)',
    summary:
      'Asian ginseng is a slow-growing root cultivated in East Asia for centuries. Standardised to ginsenosides, the marker compounds of the root.',
  },
  'Phyllanthus niruri': {
    family: 'Phyllanthaceae',
    plantPart: 'Whole plant',
    nativeRegion: 'India and the tropics',
    summary:
      'Bhui amla is a small, low-growing herb common across India. Standardised to 20% tannins.',
  },
  'Piper nigrum': {
    family: 'Piperaceae',
    plantPart: 'Dried fruit (berry)',
    nativeRegion: 'India (Western Ghats)',
    summary:
      'Black pepper is one of the most traded spices in the world. Standardised to piperine, the compound that gives pepper its bite, measured by HPLC.',
  },
  'Piper longum': {
    family: 'Piperaceae',
    plantPart: 'Dried fruit spikes',
    nativeRegion: 'India',
    summary:
      'Indian long pepper is a spice used in Ayurvedic preparations and Indian cooking. Standardised to 2–3% piperine.',
  },
  'Picrorrhiza kurroa': {
    family: 'Plantaginaceae',
    plantPart: 'Rhizome and root',
    nativeRegion: 'Himalayas',
    summary:
      'Kutki is a high-altitude Himalayan herb with a bitter root, traditionally used in Ayurveda. Standardised to its bitter content.',
  },
  'Punica granatum fruit': {
    family: 'Lythraceae',
    plantPart: 'Fruit',
    nativeRegion: 'Iran and the Himalayas',
    summary:
      'Pomegranate fruit is rich in polyphenols and tannins. Our fruit extract is standardised to 2% tannins.',
  },
  'Punica granatum seed': {
    family: 'Lythraceae',
    plantPart: 'Seed',
    nativeRegion: 'Iran and the Himalayas',
    summary:
      'Pomegranate seed extract is valued in personal care and nutraceutical blends. Standardised to 2–2.5% tannins.',
  },
  'Rubia cordifolia': {
    family: 'Rubiaceae',
    plantPart: 'Root',
    nativeRegion: 'India',
    summary:
      'Manjistha is a climbing herb whose roots yield a red pigment, traditionally used in Ayurveda. Standardised to flavonoid content.',
  },
  'Sapindus mukorossi': {
    family: 'Sapindaceae',
    plantPart: 'Fruit pericarp',
    nativeRegion: 'Himalayan foothills of India and China',
    summary:
      'Soapnut is a tree whose fruit shell is naturally rich in saponins and has long been used for gentle cleansing. Standardised to 40% saponins.',
  },
  'Tamarindus indica': {
    family: 'Fabaceae',
    plantPart: 'Fruit pulp',
    nativeRegion: 'Tropical Africa',
    summary:
      'Tamarind is a sour pod fruit that is a staple of Indian cooking. Standardised to tartaric acid content.',
  },
  'Tribulus terrestris': {
    family: 'Zygophyllaceae',
    plantPart: 'Fruit',
    nativeRegion: 'Tropical and subtropical Asia',
    summary:
      'Gokhru is a creeping herb with spiny fruits, traditionally used in Ayurveda. Standardised to saponin content.',
  },
  Trikatu: {
    family: 'Zingiberaceae and Piperaceae',
    plantPart: 'Dried ginger rhizome, long pepper and black pepper (1:1:1)',
    nativeRegion: 'India',
    summary:
      'Trikatu is a classic Ayurvedic blend of ginger, long pepper and black pepper in equal parts. Each batch is checked for piperine by HPLC.',
  },
  Triphala: {
    family: 'Phyllanthaceae and Combretaceae',
    plantPart: 'Dried fruits of haritaki, bibhitaki and amla (1:2:4)',
    nativeRegion: 'India',
    summary:
      'Triphala is a classic Ayurvedic blend of three dried fruits in a 1:2:4 ratio. Standardised to 40% tannins.',
  },
  'Trigonella foenum-graecum': {
    family: 'Fabaceae',
    plantPart: 'Seed',
    nativeRegion: 'Western Asia and India',
    summary:
      'Fenugreek seeds are a staple of Indian cooking and an Ayurvedic herb. Standardised to 20–50% saponins.',
  },
  'Terminalia arjuna': {
    family: 'Combretaceae',
    plantPart: 'Bark',
    nativeRegion: 'India',
    summary:
      'Arjuna is a large tree of Indian riverbanks, valued for its bark in traditional Ayurvedic preparations. Standardised to tannin content.',
  },
  'Terminalia belerica': {
    family: 'Combretaceae',
    plantPart: 'Fruit',
    nativeRegion: 'India',
    summary:
      'Baheda is a large Indian tree whose fruit is one of the three fruits in the Triphala blend. Standardised to 20–50% tannins.',
  },
  'Terminalia chebula': {
    family: 'Combretaceae',
    plantPart: 'Fruit',
    nativeRegion: 'India and Southeast Asia',
    summary:
      'Harde is the fruit of a large tree widely used in Ayurveda, and is one of the three fruits in Triphala. Standardised to 20–50% tannins.',
  },
  'Tinospora cordifolia': {
    family: 'Menispermaceae',
    plantPart: 'Stem',
    nativeRegion: 'India',
    summary:
      'Guduchi is a climbing shrub of India, traditionally used in Ayurveda. Standardised to its bitter content.',
  },
  'Vitis vinifera': {
    family: 'Vitaceae',
    plantPart: 'Seed',
    nativeRegion: 'Mediterranean and Western Asia',
    summary:
      'Grape seed is a by-product of winemaking and is rich in polyphenols. The full specification is available on request.',
  },
  'Withania somnifera': {
    family: 'Solanaceae',
    plantPart: 'Root',
    nativeRegion: 'India, Middle East and North Africa',
    summary:
      'Ashwagandha is one of the most important herbs in Ayurveda. Our extract is standardised to withanolides, the marker compounds that define its strength, at levels from 2.5% to 15%.',
  },
  'Zingiber officinale': {
    family: 'Zingiberaceae',
    plantPart: 'Rhizome',
    nativeRegion: 'Southeast Asia and India',
    summary:
      'Ginger is a rhizome used in cooking and traditional practice across Asia. Standardised to gingerols, its key pungent compounds.',
  },
};
