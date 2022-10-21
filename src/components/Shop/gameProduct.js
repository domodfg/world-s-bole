import pc from "../../images/shop/pcgamecase.jpeg";
import ps5 from "../../images/shop/ps5gamecase.jpeg";
import item1 from "../../images/shop/item1.png";
import item2 from "../../images/shop/item2.png";
import item3 from "../../images/shop/item3.png";
import item4 from "../../images/shop/item4.png";
import item5 from "../../images/shop/item5.png";
import item6 from "../../images/shop/item6.png";
import item7 from "../../images/shop/item7.png";
import item8 from "../../images/shop/item8.png";
import item9 from "../../images/shop/item9.png";
import item10 from "../../images/shop/item10.png";
import item11 from "../../images/shop/item11.png";
import item12 from "../../images/shop/item12.png";
import item13 from "../../images/shop/item13.png";
import item14 from "../../images/shop/item14.png";
import item15 from "../../images/shop/item15.png";
import merch1 from "../../images/shop/merch1.png";
import merch2 from "../../images/shop/merch2.png";
import merch3 from "../../images/shop/merch3.png";

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
    detail:
      "傳說為國界山附近沼澤所發現的一把寶劍，追求著嗜血的本能，擁有吸取生命的屬性。",
    element: "＋55攻擊力 ＋20%暴擊幾率 ＋20%生命偷取",
    special: [
      "靈液護盾：來自攻擊的生命偷取可以對你進行過量治療。溢出的生命值會儲存為50-350（基於等級）護盾值，如果你在之前的25秒裏沒有造成或承受任何傷害，那麼這個護盾會緩慢衰減。",
    ],
    level: 45,
    rarity: 5,
  },
  {
    id: "item2",
    img: item2,
    name: "飛鳥弓",
    price: 76,
    description: "一把稀有度極高的良弓，只適用於角色：奧蘭多·奇亞娜！",
    detail:
      "艾爾斯蘭王親自御賜的退敵神器！擁有超遠距離的射程，並能夠精準地射擊敵人~~",
    element: "＋80攻擊力 ＋35%遠程釋放 ＋10%生命回復",
    special: [
      "特殊效果： 百發百中：對生命體造成的傷害+15%，在釋放箭矢的同時，賦予箭矢的自動瞄準索敵功能大（群體傷害不適用）。",
      "備註：該武器只適用於弓箭手--奧蘭多·奇亞娜。",
    ],
    level: 36,
    rarity: 5,
  },
  {
    id: "item3",
    img: item3,
    name: "狡兔書",
    price: 53,
    description:
      "時之國魔法師的黑暗聖經！傳說是魔君七宗罪將領：傲慢死後留下的秘籍？",
    detail:
      "時之國魔法師的獨門秘籍！蘊含著巨大的魔法力量的奧秘和來源。當然，對魔法師本身的能力需求也是必須的~~",
    element: "＋45魔力值 ＋9%近程防禦 ＋33%元素傷害 ＋16%遠程輸出",
    special: [
      "綻放的千本焰：（被動技）當面對的敵人多少或等於三個個體，戰鬥過程中可隨機釋放煙火傷害，最多維持3秒鐘。",
      "散華禮彌：（主動技）釋放一個類似水球的物體，從天而降，並瞬間化成水花以攝氏高溫100度攻擊敵方（對自己無效）。",
      "鏡花水月：（被動技）戰鬥過程中，若敵方對自己造成傷害，則有幾率釋放幻術以致敵方眩暈，該效果持續0.5秒。",
      "備註：只適用於時之國魔法師角色。",
    ],
    level: 48,
    rarity: 4,
  },
  {
    id: "item4",
    img: item4,
    name: "走狗爪",
    price: 42,
    description: "七大罪將領：暴食所使用的兇狠利器！只適用於獸人族獵人和刺客。",
    detail: "相傳為魔君奧古斯手下：七大罪暴食所使用過的武器！",
    element: "＋95攻擊力 ＋15%敏捷 ＋8%耐久",
    special: [
      "趁你病，要你命：（被動技能）當敵方的一個角色生命值HP少於該角色的生命值上限5%的時候，有30%的概率發動瞬間奪取對方生命的效果。",
      "備註：該武器只適用於獸人族。",
    ],
    level: 38,
    rarity: 3,
  },
  {
    id: "item5",
    img: item5,
    name: "海盜槍",
    price: 36,
    description: "相傳為出沒在波斯灣附近的海盜所用，后被新月國加以改造",
    detail:
      "相傳為海盜索隆在波斯灣沿岸附近作惡時候留下的，被新月國海軍擊退後撿到，繼而加以改進.....",
    element: "＋56攻擊力 ＋3%火力魔法輸出 ＋10%精準度",
    special: [
      "子彈時間：當指定和射擊一名或以上的目標時，玩家自動進入子彈時間，射出的子彈會以慢動作的形式進行慢放效果，維持2秒。",
      "斷罪審判：（被動技）以單一角色作為目標時，釋放而出的子彈有幾率會以音速射出的速度射出，形成音爆效果，最終爆破掉敵人。",
      "備註：該武器只適用於新月國種族。",
    ],
    level: 34,
    rarity: 3,
  },
  {
    id: "item6",
    img: item6,
    name: "穿心鏢",
    price: 60,
    description: "蓬瀛國的忍者必備！",
    detail:
      "本來是忍者才會使用到的獨門暗器。現已擴展成為所有職業能夠使用和傷人的利器？",
    element: "＋66穿刺裝甲 ＋15敏捷",
    special: [
      "會心一擊：面對怪物和普通目標（PK玩家）,可主動釋放該技能一次，快速穿透敵人護甲，並減少敵人不少於15%的HP值（若大於該值，再隨機扣減目標不多於30%的HP值）。",
      "備註：技能幾率與角色天賦的幸運值綁定。",
    ],
    level: 44,
    rarity: 2,
  },
  {
    id: "item7",
    img: item7,
    name: "Bilibili魔法書",
    price: 80,
    description: "打開B站次元門的魔法師所擁有！",
    detail:
      "傳聞是時之國內的某位30歲的死宅單身狗大魔法師，為了打開次元之門而走火入魔，研究出了這本人類聖經？",
    element: "無屬性",
    special: [
      "彈幕嘲諷：僅對副本BOSS專用，可召喚一場彈幕之雨，以文字的形式從右至左地詛咒並削弱BOSS的氣焰，削減其HP上限不超過50%，該效果持續12秒。",
    ],
    level: 54,
    rarity: 5,
  },
  {
    id: "item8",
    img: item8,
    name: "鬼滅之刃",
    price: 75,
    description: "大哥煉獄杏壽郎臨死前留下的刀刃（只適用於鬼滅聯動角色）！",
    detail: "大哥煉獄杏壽郎臨終前留下。",
    element: "+15%炎屬性傷害",
    special: [
      "炎之呼吸：當目標怪物種族為惡魔或七大罪手下，僅能指定一位目標，連續釋放以下技能：",
      "壹之型·不知火：以火焰爆發般的勢頭對目標進行突擊",
      "貳之型·上升炎天：將刀由下往上揮動，以熊熊烈火般的刀刃朝對手砍去",
      "叁之型·氣炎萬象：自上而下斬擊，斬擊會伴隨烈焰",
      "肆之型·盛炎的蜿蜒：以自身為中心，施展出漩渦火焰般的劍法進行攻擊。",
      "終曲·炎虎：向前突刺，所揮出的火焰如同想要咬住獵物的烈火之虎一般，向敵人攻去",
      "奧義:（被動技）當以上炎之呼吸技能沒有被打斷且順利完成所有技能釋放，有5%的概率發動最終奧義：玖之型·煉獄， 以地獄烈火般的威力向前突進，瞬間對鬼造成深剜入骨的大面積傷害（隨機統計）。",
      "備註：特殊效果與角色天賦幸運值不綁定。",
    ],
    level: 60,
    rarity: 5,
  },
  {
    id: "item9",
    img: item9,
    name: "女神弓",
    detail:
      "因果律武器，據說是涅比雅女神在世界即將終結之時所使用的輪迴逆轉神弓！",
    element: "+60%遠程瞄準 +80%普通攻擊傷害",
    special: [
      "逆轉未來：（主動技）僅在指定副本《君臨天下》的場景下使用。",
      "當魔王奧古斯（最終BOSS）即將迎來自我毀滅之際，持有該武器的玩家將有機會觸發遊戲內的因果律選項：",
      "1.選擇（YES）=> Ghost in the Shell：",
      "女神弓將發動靈魂淨化效果，將魔王奧古斯的人族靈魂從惡魔路西法的軀殼中脫離。（注意：選擇了YES選項的玩家，將額外獲得進入《女神的異聞後宮生活》劇場副本，玩家將享有該副本永久使用權。）",
      "2.選擇（NO）=> Resident Evil：",
      "玩家將自行切換到以惡魔的視角，將涅比雅和在場的敵對玩家送入墓地，以自爆的方式同歸於盡。注意：選擇了NO選項的玩家，將額外獲得進入《君臨天下》2.0後續劇場副本，該副本僅限於1.0版本活動推廣和進行期間使用。）",
      "魔女之夜：（被動技）若玩家選擇了NO選項，有2%的概率觸發涅比雅自身化身成為魔女，在黑夜來臨前代替魔王受苦，犧牲掉自己作為交換奧古斯的生命。",
      "備註：成功觸發魔女之夜後，玩家將同時享有以上兩個額外副本的使用權限。",
    ],
    price: 95,
    description: "涅比雅女神專用的弓矢，據說蘊含神力加成的元素。",
    level: 55,
    rarity: 6,
  },
  {
    id: "item10",
    img: item10,
    name: "荊棘之冠",
    price: 88,
    description: "涅比雅化為女神之時曾經戴過的頭飾，也是雅典娜神贈給之物",
    detail: "罪域的王冠！也是涅比雅身為人類時失去神力的象征。",
    element: "無屬性",
    special: [
      "神之道化：當涅比雅引領玩家進入她的個人劇情任務後，玩家將自動獲得不超過15%上限的神性和武力值的增益，該效果將持續到副本劇情完結。",
      "眾神制裁：（固定效果）神之道化持續期間，玩家的魔力值有機會以15%的概率隨著武力值的遞增而遞減。當魔力值歸零後，玩家的HP值也將有15%的概率發生遞增，直到注滿後結束制裁效果。",
      "備註：觸發眾神制裁效果後不重複。",
    ],
    level: 65,
    rarity: 6,
  },
  {
    id: "item11",
    img: item11,
    name: "魔神刀",
    price: 88,
    description: "魔君奧古斯曾經使用過的寶刀，附有惡魔路西法之力！",
    detail: "魔神奧古斯曾經使用過的武器！",
    element: "+50普通攻擊傷害",
    special: [
      "絕對服從：七大罪手下作為召喚靈媒出現，並圍繞在魔神身邊，形成一幅無法穿透的絕對防禦結界，該效果將短暫持續2.5秒。",
      "冥河衝擊：魔神奧古斯揮劍從靈界集結過百幽魂，形成一道冥河般的衝擊，向攻擊目標施展不超過其生命值上限一半的傷害。",
      "替罪羔羊：當死靈召喚技能成功觸發後，七大罪化身替罪羔羊，向不多餘在場七位以上的玩家指定並附著於其發動自殺式攻擊，每一位將軍僅能指定一位玩家目標。",
      "同歸於盡：當魔神奧古斯的總傷害值達到削弱在場所有玩家的總HP值不少於10%以上，作為替罪羊的七大罪將發動自爆，扣減所有玩家的總HP值不少於80%。扣減後的剩餘HP值隨機分配，分配的值為0的玩家被視為自動死亡而退出。",
      "備註：該武器只適用於魔神角色：奧古斯（尚未推出）",
    ],
    level: 70,
    rarity: 5,
  },
  {
    id: "item12",
    img: item12,
    name: "炸彈人",
    price: 50,
    description: "據說是原神可莉和安柏炸彈公仔的混合體？（僅限原神聯動角色)",
    level: 49,
    rarity: 3,
  },
  {
    id: "item13",
    img: item13,
    name: "煌弓",
    price: 63,
    description: "古代帝具其一",
    level: 47,
    rarity: 4,
  },
  {
    id: "item14",
    img: item14,
    name: "龍鱗",
    price: 69,
    description: "古代帝具其二",
    level: 44,
    rarity: 3,
  },
  {
    id: "item15",
    img: item15,
    name: "煌黑大劍",
    price: 119,
    description: "傳說遠古巨龍的龍牙",
    level: 99,
    rarity: 6,
  },
];

const gameMerch = [
  {
    id: "merch1",
    img: merch1,
    name: "T-shirt",
    description: "粉絲必備",
    price: 149,
  },
  {
    id: "merch2",
    img: merch2,
    name: "連帽衛衣",
    description: "粉絲必備",
    price: 239,
  },
  {
    id: "merch3",
    img: merch3,
    name: "WB帽",
    description: "粉絲必備",
    price: 99,
  },
];

export { gameProduct, gameItem, gameMerch };
