
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";

export const products = [
  {
    id: 1,
    name: "Emerald Necklace",
    price: "$1200",
    category: "Necklace",
    description: "A stunning emerald necklace showcasing a rare Panjshir emerald of exceptional clarity and color, meticulously set in 18k gold. This exquisite piece is perfect for formal occasions or as a timeless addition to any jewelry collection, reflecting elegance and luxury.",
    image: img1
  },
  {
    id: 2,
    name: "ZamLux Emerald Ring",
    price: "$950",
    category: "Ring",
    description: "An elegant ring featuring a brilliant-cut Panjshir emerald, carefully set to highlight its vibrant green hue. Ideal for special occasions, this ring combines classic design with modern sophistication, making it a treasured piece for years to come.",
    image: img2
  },
  {
    id: 3,
    name: "Emerald Stud Earrings",
    price: "$450",
    category: "Earrings",
    description: "Classic stud earrings with premium Panjshir emeralds set in lustrous white gold. These versatile earrings are perfect for everyday wear or complementing evening attire, offering a subtle yet luxurious touch to any outfit.",
    image: img3
  },
  {
    id: 4,
    name: "ZamLux Emerald Bracelet",
    price: "$780",
    category: "Bracelet",
    description: "A delicate bracelet adorned with multiple Panjshir emeralds, each carefully chosen for its brilliance. Combining exceptional craftsmanship with timeless elegance, this bracelet enhances any ensemble with a refined, sophisticated charm.",
    image: img4
  },
  {
    id: 5,
    name: "Emerald Drop Pendant Necklace",
    price: "$670",
    category: "Necklace",
    description: "A beautiful drop pendant necklace featuring a radiant Panjshir emerald set in 18k gold. Designed to captivate attention, this piece is perfect for evening wear and special occasions, offering a striking blend of luxury and elegance.",
    image: img5
  },
  {
    id: 6,
    name: "ZamLux Emerald Cocktail Ring",
    price: "$1100",
    category: "Ring",
    description: "A statement cocktail ring with a large Panjshir emerald that radiates vibrancy and sophistication. Perfect for parties and elegant events, this ring combines bold design with exceptional quality, making it a centerpiece of any jewelry collection.",
    image: img6
  },
  {
    id: 7,
    name: "Emerald Hoop Earrings",
    price: "$520",
    category: "Earrings",
    description: "Stylish hoop earrings adorned with small Panjshir emeralds, offering a blend of daily wear practicality and luxurious sparkle. These earrings add a touch of elegance to casual and formal outfits alike.",
    image: img7
  },
  {
    id: 8,
    name: "ZamLux Emerald Charm Bracelet",
    price: "$710",
    category: "Bracelet",
    description: "A charming bracelet featuring small emerald charms, designed to combine playful elegance with high-end craftsmanship. Perfect as a gift or a personal treat, this bracelet adds color and sophistication to any wrist.",
    image: img8
  },
  {
    id: 9,
    name: "Pan Halo Necklace",
    price: "$1400",
    category: "Necklace",
    description: "A luxurious halo necklace showcasing a central Panjshir emerald encircled by dazzling diamonds. This masterpiece of jewelry design embodies sophistication and glamour, ideal for making a statement at any grand occasion.",
    image: img9
  },
  {
    id: 10,
    name: "ZamLux Emerald Stackable Rings",
    price: "$880",
    category: "Ring",
    description: "A set of stackable rings featuring tiny Panjshir emeralds, perfect for layering and mixing styles. These versatile rings combine elegance and trendiness, allowing for personalized styling and effortless sophistication.",
    image: img10
  },
  {
    id: 11,
    name: "Emerald Drop Bracelet",
    price: "$760",
    category: "Bracelet",
    description: "A delicate drop-style bracelet adorned with small Panjshir emeralds, carefully designed to catch the light with every movement. Elegant and refined, this piece is perfect for formal events or adding a touch of luxury to daily wear.",
    image: img11
  },
  {
    id: 12,
    name: "ZamLux Emerald Stud Necklace",
    price: "$980",
    category: "Necklace",
    description: "A minimalist stud-style necklace featuring a single sparkling Panjshir emerald. Ideal for everyday elegance or understated sophistication, this piece highlights the natural beauty of the emerald in a sleek and timeless design.",
    image: img12
  }
];


export default function getProductById(id) {
  return products.find((p) => p.id === id);
}
