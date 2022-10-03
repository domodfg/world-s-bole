import pc from "../images/shop/pcgamecase.jpeg";
import ps5 from "../images/shop/ps5gamecase.jpeg";
import item1 from "../images/shop/item1.png";
import item2 from "../images/shop/item2.png";
import item3 from "../images/shop/item3.png";
import item4 from "../images/shop/item4.png";
import item5 from "../images/shop/item5.png";
import item6 from "../images/shop/item6.png";
import item7 from "../images/shop/item7.png";
import item8 from "../images/shop/item8.png";
import item9 from "../images/shop/item9.png";
import item10 from "../images/shop/item10.png";
import item11 from "../images/shop/item11.png";
import item12 from "../images/shop/item12.png";

const gameProduct = [
  {
    id: "steam-digital",
    img: pc,
    name: "STEAM 數位標準版",
    price: 399,
  },
  {
    id: "ps5-digital",
    img: ps5,
    name: "PS5 數位標準版",
    price: 429,
  },
];

const gameItem = [
  {
    id: "item1",
    img: item1,
    name: "飲血劍",
    price: 35,
    description: "附加生命吸取的長劍，為國界山附近的沼澤地所發現！",
    level: 45,
    rarity: "★★★★★✩",
  },
  {
    id: "item2",
    img: item2,
    name: "飛鳥弓",
    price: 76,
    description: "一把稀有度極高的良弓，只適用於角色：奧蘭多·奇亞娜！",
    level: 36,
    rarity: "★★★★★✩",
  },
  {
    id: "item3",
    img: item3,
    name: "狡兔書",
    price: 53,
    description:
      "時之國魔法師的黑暗聖經！傳說是魔君七宗罪將領：傲慢死後留下的秘籍？",
    level: 48,
    rarity: "★★★★✩✩",
  },
  {
    id: "item4",
    img: item4,
    name: "走狗爪",
    price: 42,
    description: "七大罪將領：暴食所使用的兇狠利器！只適用於獸人族獵人和刺客。",
    level: 38,
    rarity: "★★★✩✩✩",
  },
  {
    id: "item5",
    img: item5,
    name: "海盜槍",
    price: 36,
    description: "相傳為出沒在波斯灣附近的海盜所用，后被新月國加以改造",
    level: 34,
    rarity: "★★★✩✩✩",
  },
  {
    id: "item6",
    img: item6,
    name: "穿心鏢",
    price: 60,
    description: "蓬瀛國的忍者必備！",
    level: 44,
    rarity: "★★✩✩✩✩",
  },
  {
    id: "item7",
    img: item7,
    name: "Bilibili魔法書",
    price: 80,
    description: "打開B站次元門的魔法師所擁有！",
    level: 54,
    rarity: "★★★★★✩",
  },
  {
    id: "item8",
    img: item8,
    name: "鬼滅之刃",
    price: 75,
    description: "大哥煉獄杏壽郎臨死前留下的刀刃（只適用於鬼滅聯動角色）！",
    level: 60,
    rarity: "★★★★★✩",
  },
  {
    id: "item9",
    img: item9,
    name: "女神弓",
    price: 95,
    description: "涅比雅女神專用的弓矢，據說蘊含神力加成的元素。",
    level: 55,
    rarity: "★★★★★★",
  },
  {
    id: "item10",
    img: item10,
    name: "荊棘之冠",
    price: 88,
    description: "涅比雅化為女神之時曾經戴過的頭飾，也是雅典娜神贈給之物",
    level: 65,
    rarity: "★★★★★★",
  },
  {
    id: "item11",
    img: item11,
    name: "魔神刀",
    price: 88,
    description: "魔君奧古斯曾經使用過的寶刀，附有惡魔路西法之力！",
    level: 70,
    rarity: "★★★★★✩",
  },
  {
    id: "item12",
    img: item12,
    name: "炸彈人",
    price: 50,
    description: "據說是原神可莉和安柏炸彈公仔的混合體？（僅限原神聯動角色)",
    level: 49,
    rarity: "★★★✩✩✩",
  },
];

export { gameProduct, gameItem };
