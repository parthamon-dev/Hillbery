export type AreaKey =
  | 'digestive'
  | 'hair-skin'
  | 'brain-stress'
  | 'heart-metabolism'
  | 'immunity'
  | 'joint-bone'
  | 'vitality';

export const AREAS: Record<AreaKey, string> = {
  digestive: 'Digestive & liver',
  'hair-skin': 'Hair & skin',
  'brain-stress': 'Brain & stress',
  'heart-metabolism': 'Heart & metabolism',
  immunity: 'Immunity & respiratory',
  'joint-bone': 'Joint & bone',
  vitality: 'Vitality',
};

export const AREA_IMAGES: Record<AreaKey, string> = {
  digestive: 'https://images.pexels.com/photos/32281630/pexels-photo-32281630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'hair-skin': 'https://images.pexels.com/photos/3067707/pexels-photo-3067707.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'brain-stress': 'https://images.pexels.com/photos/5669187/pexels-photo-5669187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'heart-metabolism': 'https://images.pexels.com/photos/32708810/pexels-photo-32708810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  immunity: 'https://images.pexels.com/photos/6220709/pexels-photo-6220709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'joint-bone': 'https://images.pexels.com/photos/36863456/pexels-photo-36863456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  vitality: 'https://images.pexels.com/photos/6220707/pexels-photo-6220707.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

interface RawExtract {
  latinName: string;
  commonName: string;
  assay: string;
  area: AreaKey;
}

export interface Extract extends RawExtract {
  slug: string;
}

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const herbPath = (latinName: string) => `/products/${slugify(latinName)}`;

const UNSORTED_EXTRACTS: RawExtract[] = [
  { latinName: 'Acacia concinna', commonName: 'Shikakai', assay: '30–40% Saponins', area: 'hair-skin' },
  { latinName: 'Acacia catechu', commonName: 'Katha', assay: '70% Catechin, 90% Tannins', area: 'hair-skin' },
  { latinName: 'Aegle marmelos', commonName: 'Bilva / Bael fruit', assay: '5% Tannins', area: 'digestive' },
  { latinName: 'Allium sativum', commonName: 'Garlic', assay: 'Alliin >1% (HPLC)', area: 'heart-metabolism' },
  { latinName: 'Alpinia galanga', commonName: 'Kulinjan', assay: '4% Flavonoids', area: 'immunity' },
  { latinName: 'Aloe barbadensis', commonName: 'Aloe vera', assay: 'Herb ratio 100x, 200x', area: 'digestive' },
  { latinName: 'Andrographis paniculata', commonName: 'Kalmegh', assay: '10–30% Andrographolide', area: 'digestive' },
  { latinName: 'Asparagus racemosus', commonName: 'Shatavari', assay: '20–50% Saponins', area: 'vitality' },
  { latinName: 'Asphaltum', commonName: 'Shilajit', assay: '40% Fulvic acid', area: 'vitality' },
  { latinName: 'Azadirachta indica', commonName: 'Neem', assay: '2.5–5% Bitters', area: 'hair-skin' },
  { latinName: 'Bacopa monnieri', commonName: 'Brahmi', assay: '20–50% Bacosides', area: 'brain-stress' },
  { latinName: 'Berberis aristata', commonName: 'Daru haldi', assay: '5–97% Berberine', area: 'digestive' },
  { latinName: 'Boerhavia diffusa', commonName: 'Punarnava', assay: '20–40% Saponins', area: 'digestive' },
  { latinName: 'Boswellia serrata', commonName: 'Shallaki', assay: '65–85% Boswellic acid, 30% AKBA', area: 'joint-bone' },
  { latinName: 'Camellia sinensis', commonName: 'Green tea', assay: '>90% Polyphenols, EGCG >35%', area: 'heart-metabolism' },
  { latinName: 'Cassia angustifolia', commonName: 'Senna leaves', assay: '20–60% Sennosides', area: 'digestive' },
  { latinName: 'Centella asiatica', commonName: 'Gotu kola', assay: '10–50% Asiaticosides', area: 'brain-stress' },
  { latinName: 'Carica papaya', commonName: 'Papaya leaf', assay: '20–55% Glycosides', area: 'immunity' },
  { latinName: 'Cinnamomum cassia / zeylanicum', commonName: 'Cinnamon', assay: '40% Polyphenols', area: 'heart-metabolism' },
  { latinName: 'Cissus quadrangularis', commonName: 'Bone setter', assay: '2.5–20% Keto-steroids', area: 'joint-bone' },
  { latinName: 'Coffea robusta', commonName: 'Green coffee (caffeine)', assay: '98% Caffeine', area: 'brain-stress' },
  { latinName: 'Coleus forskohlii', commonName: 'Coleus roots', assay: '10–20% Forskohlin', area: 'heart-metabolism' },
  { latinName: 'Citrus acida', commonName: 'Lime', assay: '10–20% Flavonoids', area: 'hair-skin' },
  { latinName: 'Convolvulus pluricaulis', commonName: 'Shankhpushpi', assay: '2.5% Bitters', area: 'brain-stress' },
  { latinName: 'Commiphora mukul', commonName: 'Guggul', assay: '1.5–2.5% Guggulsterones', area: 'heart-metabolism' },
  { latinName: 'Coffea bean', commonName: 'Green coffee (chlorogenic)', assay: '45–50% Chlorogenic acid', area: 'heart-metabolism' },
  { latinName: 'Curcuma longa', commonName: 'Turmeric', assay: '95% Curcuminoids', area: 'joint-bone' },
  { latinName: 'Eclipta alba', commonName: 'Bhringraj', assay: '1–2.5% Bitters', area: 'hair-skin' },
  { latinName: 'Eugenia jambolana', commonName: 'Jamun', assay: '10% Tannins, 2.5–5% Bitters', area: 'heart-metabolism' },
  { latinName: 'Eurycoma longifolia', commonName: 'Tongkat ali', assay: '1% Eurycomanone', area: 'vitality' },
  { latinName: 'Emblica officinalis', commonName: 'Amla', assay: '20%, 40% Tannins', area: 'digestive' },
  { latinName: 'Gymnema sylvestre', commonName: 'Gudmar', assay: '25%, 75% Gymnemic acids', area: 'heart-metabolism' },
  { latinName: 'Garcinia combogia', commonName: 'Garcinia', assay: '50–60% HCA', area: 'heart-metabolism' },
  { latinName: 'Glycyrrhiza glabra', commonName: 'Licorice', assay: '10–20% Glycyrrhizin', area: 'digestive' },
  { latinName: 'Ginkgo biloba', commonName: 'Ginkgo leaves', assay: '24% Flavone, 6% Lactones', area: 'brain-stress' },
  { latinName: 'Gloriosa superba seeds', commonName: 'Gloriosa', assay: '99% Colchicine', area: 'joint-bone' },
  { latinName: 'Hibiscus sabdariffa', commonName: 'Hibiscus', assay: '2% Tannins, 5% Flavonoids', area: 'hair-skin' },
  { latinName: 'Lepidium meyenii', commonName: 'Maca root', assay: '>50% Saponins', area: 'vitality' },
  { latinName: 'Moringa oleifera', commonName: 'Moringa leaf', assay: '10–40% Saponins', area: 'joint-bone' },
  { latinName: 'Mucuna pruriens', commonName: 'Cowhage', assay: '20–60% L-Dopa', area: 'brain-stress' },
  { latinName: 'Ocimum sanctum', commonName: 'Tulsi', assay: '1–4% Triterpenes, 5–10% Tannins', area: 'immunity' },
  { latinName: 'Panax ginseng', commonName: 'Ginseng', assay: '10–80% Ginsenosides', area: 'vitality' },
  { latinName: 'Phyllanthus niruri', commonName: 'Bhui amla', assay: '20% Tannins', area: 'digestive' },
  { latinName: 'Piper nigrum', commonName: 'Black pepper', assay: '5–95% Piperine', area: 'digestive' },
  { latinName: 'Piper longum', commonName: 'Indian long pepper', assay: '2–3% Piperine', area: 'immunity' },
  { latinName: 'Picrorrhiza kurroa', commonName: 'Kutki', assay: '5–10% Bitters', area: 'digestive' },
  { latinName: 'Punica granatum fruit', commonName: 'Pomegranate fruit', assay: '2% Tannins', area: 'heart-metabolism' },
  { latinName: 'Punica granatum seed', commonName: 'Pomegranate seed', assay: '2–2.5% Tannins', area: 'digestive' },
  { latinName: 'Rubia cordifolia', commonName: 'Manjistha', assay: '5–20% Flavonoids', area: 'hair-skin' },
  { latinName: 'Sapindus mukorossi', commonName: 'Areetha / soap-nut', assay: '40% Saponins', area: 'hair-skin' },
  { latinName: 'Tamarindus indica', commonName: 'Tamarind', assay: '10% Tartaric acid', area: 'digestive' },
  { latinName: 'Tribulus terrestris', commonName: 'Gokhru', assay: '20–40% Saponins', area: 'vitality' },
  { latinName: 'Trikatu', commonName: 'Ginger, long and black pepper 1:1:1', assay: 'Piperine positive (HPLC)', area: 'immunity' },
  { latinName: 'Triphala', commonName: 'Haritaki, bibhitaki, amla 1:2:4', assay: '40% Tannins', area: 'digestive' },
  { latinName: 'Trigonella foenum-graecum', commonName: 'Fenugreek', assay: '20–50% Saponins', area: 'heart-metabolism' },
  { latinName: 'Terminalia arjuna', commonName: 'Arjuna bark', assay: '20–40% Tannins', area: 'heart-metabolism' },
  { latinName: 'Terminalia belerica', commonName: 'Baheda', assay: '20–50% Tannins', area: 'digestive' },
  { latinName: 'Terminalia chebula', commonName: 'Harde', assay: '20–50% Tannins', area: 'digestive' },
  { latinName: 'Tinospora cordifolia', commonName: 'Guduchi', assay: '2.5–5% Bitters', area: 'immunity' },
  { latinName: 'Vitis vinifera', commonName: 'Grape seed', assay: 'Ask for specification', area: 'heart-metabolism' },
  { latinName: 'Withania somnifera', commonName: 'Ashwagandha', assay: '2.5–15% Withanolides', area: 'brain-stress' },
  { latinName: 'Zingiber officinale', commonName: 'Ginger', assay: '5–20% Gingerols', area: 'digestive' },
];

export const EXTRACTS: Extract[] = UNSORTED_EXTRACTS.map((extract) => ({
  ...extract,
  slug: slugify(extract.latinName),
})).sort((a, b) => a.commonName.localeCompare(b.commonName));

export const findExtractBySlug = (slug: string) => EXTRACTS.find((extract) => extract.slug === slug);

export const findExtractByLatinName = (latinName: string) =>
  EXTRACTS.find((extract) => extract.latinName === latinName);
