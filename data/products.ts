// data/products.ts

export type Category =
  | "meals"
  | "bowls"
  | "pasta"
  | "rice"
  | "bases"
  | "pastes"
  | "marinades"
  | "sides"
  | "desserts"
  | "global-bases";

export type Product = {
  id: string;
  name: string;
  price?: number; // ✅ optional (hidden for now)
  category: Category;
  readyToEat?: boolean;
  vegetarian?: boolean;
  tags?: string[];
  description?: string;
  prepTime?: number;
  featured?: boolean;
};

export const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

// ✅ AUTO IMAGE HELPER (no need to store image in each product)
export const getProductImage = (product: Product) => {
  return `/images/products/${product.category}/${product.id}.jpg`;
};

// ======================
// 🧾 PRODUCTS
// ======================

export const products: Product[] = [

  // ======================
  // 🍽️ READY MEALS
  // ======================
  { id:"dal-makhani", name:"Dal Makhani", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"dal-tadka", name:"Dal Tadka", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free","mild"] },
  { id:"dal-ka-kamaal", name:"Dal Ka Kamaal", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"rajma-masala", name:"Rajma Masala", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"chana-masala", name:"Chana Masala", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"shahi-paneer", name:"Shahi Paneer", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"kadhi-pakoda", name:"Kadhi Pakoda", category:"meals", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"pav-bhaji", name:"Pav Bhaji", category:"meals", readyToEat:true, vegetarian:true },

  // ======================
  // 🍚 RICE
  // ======================
  { id:"veg-pulav", name:"Vegetable Pulav", category:"rice", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"hyderabadi-biryani", name:"Hyderabadi Biryani", category:"rice", readyToEat:true, tags:["spicy"] },
  { id:"steamed-basmati", name:"Steamed Basmati Rice", category:"rice", readyToEat:true, vegetarian:true, tags:["gluten-free"] },

  // ======================
  // 🍚 RICE BOWLS
  // ======================
  { id:"rajma-rice-bowl", name:"Rajma Rice Bowl", category:"bowls", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"chana-rice-bowl", name:"Chana Masala Rice Bowl", category:"bowls", readyToEat:true, vegetarian:true, tags:["gluten-free"] },
  { id:"dal-makhani-rice-bowl", name:"Dal Makhani Rice Bowl", category:"bowls", readyToEat:true, vegetarian:true, tags:["gluten-free"] },

  { id:"butter-chicken-rice-bowl", name:"Butter Chicken Rice Bowl", category:"bowls", readyToEat:true },
  { id:"chicken-tikka-rice-bowl", name:"Chicken Tikka Masala Rice Bowl", category:"bowls", readyToEat:true },

  { id:"chettinad-rice-bowl", name:"Chettinad Chicken Rice Bowl", category:"bowls", readyToEat:true, tags:["spicy"] },
  { id:"andhra-rice-bowl", name:"Andhra Chicken Rice Bowl", category:"bowls", readyToEat:true, tags:["spicy"] },

  { id:"thai-green-rice-bowl", name:"Thai Green Curry Rice Bowl", category:"bowls", readyToEat:true, tags:["mild"] },
  { id:"teriyaki-rice-bowl", name:"Teriyaki Chicken Rice Bowl", category:"bowls", readyToEat:true, tags:["no-seed-oils"] },
  { id:"chipotle-rice-bowl", name:"Chipotle Rice Bowl", category:"bowls", readyToEat:true, tags:["spicy"] },

  // ======================
  // 🍝 PASTA
  // ======================
  { id:"alfredo-pasta", name:"Creamy Alfredo Pasta", category:"pasta", readyToEat:true, vegetarian:true, tags:["mild"] },
  { id:"tomato-basil-penne", name:"Tomato Basil Penne", category:"pasta", readyToEat:true, vegetarian:true, tags:["no-seed-oils"] },
  { id:"arrabbiata-fusilli", name:"Arrabbiata Fusilli", category:"pasta", readyToEat:true, tags:["spicy"] },

  { id:"truffle-mushroom-pasta", name:"Truffle Mushroom Cream Pasta", category:"pasta", readyToEat:true, vegetarian:true },
  { id:"four-cheese-pasta", name:"Four Cheese Pasta", category:"pasta", readyToEat:true, vegetarian:true },

  { id:"chicken-alfredo-pasta", name:"Chicken Alfredo Pasta", category:"pasta", readyToEat:true },
  { id:"chicken-arrabbiata-pasta", name:"Chicken Arrabbiata Pasta", category:"pasta", readyToEat:true, tags:["spicy"] },

  { id:"butter-chicken-pasta", name:"Butter Chicken Pasta", category:"pasta", readyToEat:true },
  { id:"makhni-paneer-pasta", name:"Makhni Paneer Pasta", category:"pasta", readyToEat:true, vegetarian:true },
  { id:"chettinad-chicken-pasta", name:"Chettinad Chicken Pasta", category:"pasta", readyToEat:true, tags:["spicy"] },

  // ======================
  // 🍳 BASES
  // ======================
  { id:"yellow-base-gravy", name:"Yellow Base Gravy", category:"bases", tags:["bulk"] },
  { id:"white-base-gravy", name:"White Base Gravy", category:"bases", tags:["bulk"] },
  { id:"onion-gravy", name:"Onion Gravy", category:"bases" },
  { id:"tomato-gravy", name:"Tomato Gravy", category:"bases" },

  { id:"chopped-masala-base", name:"Chopped Masala Base", category:"bases" },
  { id:"onion-tomato-bhuna-base", name:"Onion-Tomato Bhuna Base", category:"bases" },

  { id:"roganjosh-brown-base", name:"Roganjosh Brown Base", category:"bases" },
  { id:"tomato-makhni-base", name:"Tomato Makhni Base", category:"bases" },

  { id:"butter-chicken-gravy", name:"Butter Chicken Gravy", category:"bases" },
  { id:"chicken-tikka-masala-base", name:"Chicken Tikka Masala Base", category:"bases" },

  { id:"veg-all-purpose-gravy", name:"All-Purpose Veg Gravy", category:"bases" },
  { id:"kadhai-masala-gravy", name:"Kadhai Masala Gravy", category:"bases" },

  { id:"chettinad-masala-base", name:"Chettinad Masala Base", category:"bases", tags:["spicy"] },
  { id:"gongura-gravy", name:"Gongura (Sorrel) Gravy", category:"bases" },

  { id:"andhra-chicken-curry-base", name:"Andhra Chicken Curry Base", category:"bases", tags:["spicy"] },
  { id:"fish-pulusu-base", name:"Fish Pulusu Base", category:"bases", tags:["spicy"] },

  // ======================
  // 🧂 PASTES
  // ======================
  { id:"dum-biryani-paste", name:"Dum Biryani Paste", category:"pastes" },
  { id:"hyderabadi-biryani-paste", name:"Hyderabadi Biryani Paste", category:"pastes" },
  { id:"sambar-paste", name:"Sambar Paste", category:"pastes", vegetarian:true },

  // ======================
  // 🔥 MARINADES
  // ======================
  { id:"lasooni-marinade", name:"Lasooni Marinade", category:"marinades" },
  { id:"tandoori-marinade", name:"Red Tandoori Marinade", category:"marinades", tags:["spicy"] },
  { id:"malai-marinade", name:"Malai Tikka Marinade", category:"marinades" },

  // ======================
  // 🥥 SIDES
  // ======================
  { id:"coconut-chutney", name:"Coconut Chutney", category:"sides", vegetarian:true },
  { id:"tomato-chutney", name:"Tomato Chutney", category:"sides", vegetarian:true },

  // ======================
  // 🍰 DESSERTS
  // ======================
  { id:"gulab-jamun", name:"Gulab Jamun", category:"desserts", vegetarian:true },
  { id:"carrot-halwa", name:"Carrot Halwa", category:"desserts", vegetarian:true },
  { id:"moong-dal-halwa", name:"Moong Dal Halwa", category:"desserts", vegetarian:true },

  // ======================
  // 🌍 GLOBAL BASES
  // ======================
  { id:"thai-green-base", name:"Thai Green Curry Base", category:"global-bases", tags:["mild"] },
  { id:"thai-red-base", name:"Thai Red Curry Base", category:"global-bases", tags:["spicy"] },
  { id:"teriyaki-glaze", name:"Teriyaki Glaze", category:"global-bases", tags:["no-seed-oils"] },
  { id:"chipotle-base", name:"Chipotle Cooking Base", category:"global-bases", tags:["spicy"] },
];

// ======================
// 📂 CATEGORIES
// ======================

export const ALL_CATEGORIES = [
  { key: "meals", label: "Ready Meals" },
  { key: "bowls", label: "Rice Bowls" },
  { key: "pasta", label: "Pasta" },
  { key: "rice", label: "Rice & Biryani" },
  { key: "bases", label: "Cooking Bases" },
  { key: "pastes", label: "Pastes" },
  { key: "marinades", label: "Marinades" },
  { key: "sides", label: "Sides & Chutneys" },
  { key: "desserts", label: "Desserts" },
  { key: "global-bases", label: "Global Flavours" },
];

// ======================
// 🏷️ TAGS
// ======================

export const TAGS = [
  "gluten-free",
  "dairy-free",
  "spicy",
  "mild",
  "no-seed-oils",
  "bulk",
] as const;
