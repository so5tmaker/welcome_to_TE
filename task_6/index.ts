interface ITile {
  name: string; // tile title
  price: number; // tile price
  isActive: boolean; // tile status
}

interface IResult {
  totalPriceSum: number; // summary price of all active tiles
  tileCount: number; // summary active tile's amount
  averagePriceSum: number; // average price amount of all active tiles
}

// array of available tiles
const tileArr: Array<ITile> = [
  {
    name: "tile_1",
    price: 70,
    isActive: true,
  },
  {
    name: "tile_2",
    price: 50,
    isActive: false,
  },
  {
    name: "tile_3",
    price: 20,
    isActive: true,
  },
  {
    name: "tile_4",
    price: 110,
    isActive: true,
  },
  {
    name: "tile_5",
    price: 85,
    isActive: true,
  },
  {
    name: "tile_6",
    price: 25,
    isActive: false,
  },
  {
    name: "tile_7",
    price: 5,
    isActive: true,
  },
];

const tilesActive: Array<ITile> = tileArr.filter((item) => item.isActive);
const activeTilesAmount: number = tilesActive.reduce(
  (sum, item) => sum + item.price,
  0
);

const result: Array<IResult> = [
  {
    totalPriceSum: activeTilesAmount, // суммированная цена всех активных плиток
    tileCount: tilesActive.length, // количество всех активных плиток
    averagePriceSum: activeTilesAmount / tilesActive.length, // средная арифметическая цена всех активных плиток
  },
];
