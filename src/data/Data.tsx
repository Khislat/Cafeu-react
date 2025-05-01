const bannerData = [
  {
    id: 0,
    bannerTitleFirst: "BBQ Chicken",
    bannerTitleLast: "with Creamy Avocado",
    bannerTitleHighlight: "Salad",
    imgSrc: "img/slider/baner.png",
  },
  {
    id: 1,
    bannerTitleFirst: "Asian Lettuce Wrap",
    bannerTitleLast: "Chopped Salad",
    bannerTitleHighlight: "Chicken",
    imgSrc: "img/slider/baner1.png",
  },
  {
    id: 2,
    bannerTitleFirst: "Different",
    bannerTitleLast: "For A Different Taste",
    bannerTitleHighlight: "Spice",
    imgSrc: "img/slider/first-slider.png",
  },
  {
    id: 3,
    bannerTitleFirst: "Mediterranean",
    bannerTitleLast: "Summer Delight",
    bannerTitleHighlight: "Salad",
    imgSrc: "img/slider/banner-7.png",
  },
  {
    id: 4,
    bannerTitleFirst: "Classic Caesar",
    bannerTitleLast: "with Grilled Shrimp",
    bannerTitleHighlight: "Salad",
    imgSrc: "img/slider/banner-8.png",
  },
  {
    id: 5,
    bannerTitleFirst: "Tropical",
    bannerTitleLast: "Mango Salsa",
    bannerTitleHighlight: "Chicken",
    imgSrc: "img/slider/banner-9.png",
  },
];

const teamList = [
  {
    id: 0,
    imgSrc: "img/team/1.png",
    name: "Cathy Aenderson",
    position: "Chief Executive",
    slug: "cathy-aenderson",
    about:
      "Experienced leader with a passion for innovation and excellence in business management. Driving our team towards success.",
  },
  {
    id: 1,
    imgSrc: "img/team/2.png",
    name: "Mike Dooley",
    position: "Executive",
    slug: "mike-dooley",
    about:
      "Dedicated executive with a strong background in strategy and operations. Committed to achieving organizational goals.",
  },
  {
    id: 2,
    imgSrc: "img/team/3.png",
    name: "Alextina Jimiey",
    position: "Food Inspector",
    slug: "alextina-jimiey",
    about:
      "Experienced food inspector ensuring the highest quality and safety standards in every meal we serve.",
  },
  {
    id: 3,
    imgSrc: "img/team/4.png",
    name: "David Smith",
    position: "Marketing Specialist",
    slug: "david-smith",
    about:
      "Creative marketing specialist with a knack for building brand presence and engaging with our valued customers.",
  },
  {
    id: 4,
    imgSrc: "img/team/5.png",
    name: "Sarah Johnson",
    position: "Finance Manager",
    slug: "sarah-johnson",
    about:
      "Financial expert with a focus on optimizing our resources and ensuring fiscal responsibility.",
  },
  {
    id: 5,
    imgSrc: "img/team/6.png",
    name: "William Brandon",
    position: "Customer Support Representative",
    slug: "william-brandon",
    about:
      "Passionate customer support representative dedicated to providing exceptional service and solutions.",
  },
  {
    id: 6,
    imgSrc: "/img/aida-images/chef1.png",
    name: "Alberto Da Silva",
    position: "Senior Chef",
    slug: "alberto-da-silva",
    about:
      "Dedicated executive with a strong background in strategy and operations. Committed to achieving organizational goals.",
  },
  {
    id: 7,
    imgSrc: "/img/aida-images/chef2.png",
    name: "Rachael Haynes",
    position: "Chef De Partie",
    slug: "rachael-haynes",
    about:
      "Experienced food inspector ensuring the highest quality and safety standards in every meal we serve.",
  },
  {
    id: 8,
    imgSrc: "/img/aida-images/chef3.png",
    name: "James Anderson",
    position: "Resta Marketing",
    slug: "james-anderson",
    about:
      "Creative marketing specialist with a knack for building brand presence and engaging with our valued customers.",
  },
];

const partnerList = [
  {
      id:0,
      imgSrc:"img/partner/1.png",
  },
  {
      id:1,
      imgSrc:"img/partner/2.png",
  },
  {
      id:2,
      imgSrc:"img/partner/3.png",
  },
  {
      id:3,
      imgSrc:"img/partner/4.png",
  },
  {
      id:4,
      imgSrc:"img/partner/1.png",
  },
  {
      id:5,
      imgSrc:"img/partner/2.png",
  },
]

const customerList = [
  {
      id:0,
      imgSrc:"img/customer/1.png",
      name:"Reson Roy",
      type:"Regular Customer",
  },
  {
      id:1,
      imgSrc:"img/customer/11.png",
      name:"Jason Samoa",
      type:"Customer",
  },
  {
      id:2,
      imgSrc:"img/customer/12.png",
      name:"Clifford Main",
      type:"VIP Customer",
  },
  {
    id: 3,
    imgSrc: "img/customer/2.png",
    name: "John Doe", 
    type: "Regular Customer",
  },
  {
    id: 4,
    imgSrc: "img/customer/3.jpg",
    name: "Michael Smith", 
    type: "Customer",
  },
  {
    id: 5,
    imgSrc: "img/customer/4.jpg",
    name: "Robert Johnson", 
    type: "VIP Customer",
  },
]

const blogDataList = [
  {
    id: 0,
    imgSrc: "img/blog/1.png",
    title: "New Restaurant Town Our Ple Award Contract",
    slug: "new-restaurant-town-our-ple-award-contract",
    desc: "Drive your business and manage risks with a global industry leader.",
    date: "May 1, 2025",
    longDesc:
      "Cuisine is a universal language, speaking to our senses and heritage. Each dish is a story, a blend of history and flavor that we share. Discovering diverse culinary traditions is an exploration of cultures, connecting us on a deeper level.",
    category: "Restaurant",
  },
  {
    id: 1,
    imgSrc: "img/blog/2.png",
    title: "Greek yogurt breakfast bowls Ple Award Contract",
    slug: "greek-yogurt-breakfast-bowls-ple-award-contract",
    desc: "Drive your business and manage risks with a global industry leader.",
    date: "Jun 14, 2025",
    longDesc:
      "Food, a universal pleasure, unites us across borders. Culinary diversity celebrates our world's richness. From spicy curries to delicate pastries, every bite tells a tale. To savor this bounty, let's embrace sustainability, safeguarding our planet and nourishing our souls.",
    category: "Breakfast",
  },
  {
    id: 2,
    imgSrc: "img/blog/3.png",
    title: "Make Authentic Italian Margherita Pizza at Home",
    slug: "make-authentic-italian-margherita-pizza-at-home",
    desc: "Drive your business and manage risks with a global industry leader.",
    date: "Jan 5, 2025",
    longDesc:
      "Nourishing our bodies and souls, food transcends borders. Culinary traditions tell stories of culture and history, creating bridges between people. Yet, with this delight comes responsibility. Choosing sustainable and healthy options ensures a brighter future for ourselves and the planet.",
    category: "Pizza",
  },
  {
    id: 3,
    imgSrc: "img/blog/4.png",
    title: "Exploring New Food Trends in 2023",
    slug: "exploring-new-food-trends-in-2023",
    desc: "Discover the latest food trends shaping the culinary world.",
    date: "Jan 15, 2025",
    longDesc:
      "Food is a fundamental aspect of human existence, nourishing our bodies and satisfying our taste buds. It's not merely sustenance but a cultural, social, and emotional experience. Different cuisines worldwide reflect diverse traditions and histories, offering a rich tapestry of flavors and textures. Exploring food can be a delightful adventure, connecting people and bridging cultural gaps. However, it's essential to consider the sustainability and health aspects of our food choices to ensure a better future for both us and the planet.",
    category: "Trends",
  },
  {
    id: 4,
    imgSrc: "img/blog/5.png",
    title: "Healthy Breakfast Recipes for a Great Start",
    slug: "healthy-breakfast-recipes-for-a-great-start",
    desc: "Explore delicious and nutritious breakfast options.",
    date: "Mar 22, 2025",
    longDesc:
      "Food, a global tapestry of flavors, is a testament to our rich cultural heritage. Each bite carries the essence of tradition and history, connecting us through our shared love for cuisine. Prioritizing sustainable and nutritious choices is key to preserving our culinary legacy.",
    category: "Breakfast",
  },
  {
    id: 5,
    imgSrc: "img/blog/6.png",
    title: "The Art of Crafting Homemade Pasta",
    slug: "the-art-of-crafting-homemade-pasta",
    desc: "Learn how to make authentic Italian pasta from scratch.",
    date: "May 9, 2025",
    longDesc:
      "From street food to fine dining, food is an expression of culture. It's a shared experience that connects us globally. Diverse cuisines reflect our history and values. As we indulge, let's also make mindful choices that protect the environment and our well-being.",
    category: "Italian",
  },
  {
    id: 6,
    imgSrc: "img/blog/7.png",
    title: "Mastering the Art of Sushi Making",
    slug: "mastering-the-art-of-sushi-making",
    desc: "Discover the secrets of creating perfect sushi at home.",
    date: "May 28, 2025",
    longDesc:
      "Our world's culinary mosaic tells a tale of tradition, innovation, and unity. Every dish we enjoy is a window into the culture and history of its origin. While we explore these flavors, let's also honor the planet by making sustainable and health-conscious food choices.",
    category: "Sushi",
  },
  {
    id: 7,
    imgSrc: "/img/aida-images/article-image1.png" ,
    title: "Culinary Skills with Cake Decorating",
    slug: "advanced-cake-decorating",
    desc: "Discover the secrets of creating perfect sushi at home.",
    date: "Mar 28, 2025",
    longDesc:
      "Our world's culinary mosaic tells a tale of tradition, innovation, and unity. Every dish we enjoy is a window into the culture and history of its origin. While we explore these flavors, let's also honor the planet by making sustainable and health-conscious food choices.",
    category: "Sushi",
  },
  {
    id: 8,
    imgSrc: "/img/aida-images/article-image2.png" ,
    title: "The Craftsmanship of Handcrafted Pasta",
    slug: "handcrafted-pasta-masterclass",
    desc: "Discover the secrets of creating perfect sushi at home.",
    date: "Jan 28, 2025",
    longDesc:
      "Our world's culinary mosaic tells a tale of tradition, innovation, and unity. Every dish we enjoy is a window into the culture and history of its origin. While we explore these flavors, let's also honor the planet by making sustainable and health-conscious food choices.",
    category: "Sushi",
  },
  {
    id: 9,
    imgSrc: "/img/aida-images/article-image3.png" ,
    title: "Master Crafting Exquisite Cocktails",
    slug: "exquisite-cocktail-crafting",
    desc: "Discover the secrets of creating perfect sushi at home.",
    date: "Mar 28, 2025",
    longDesc:
      "Our world's culinary mosaic tells a tale of tradition, innovation, and unity. Every dish we enjoy is a window into the culture and history of its origin. While we explore these flavors, let's also honor the planet by making sustainable and health-conscious food choices.",
    category: "Sushi",
  },
];

const blogSlider = [
  {
      id:0,
      imgSrc:"/img/product/17.png",
  },
  {
      id:1,
      imgSrc:"/img/product/18.png",
  },
  {
      id:2,
      imgSrc:"/img/product/19.png",
  },
]

const accordionData = [
  {
      id:0,
      title:"What by means of HRM software?",
      desc:"An human resource management app is a technology that helps you automate and simplify your complex HR processes and manage them without any human intervention"
  },
  {
      id:1,
      title:"Does it generate real-time reports?",
      desc:"Yes our HRM software are generate all real time report when you want."
  },
  {
      id:2,
      title:"It's suitable for machine attendance?",
      desc:"Yes, Our software attendance system are based on machine attendance, its accept csv and txt file formate."
  },
  {
      id:3,
      title:"If i face any problem how i solved it?",
      desc:"Our service center are always ready to help you.so don't worry just knock us 24/7."
  },
  {
      id:4,
      title:"How can an employee take leave here?",
      desc:"They will first submit a leave application here.Then admin check his/her all due report and loan report then admin can leave him/her with leave letter."
  },
  {
      id:5,
      title:"Does it have loan and advance system for employee?",
      desc:"yes , It has."
  },
  {
      id:6,
      title:"Increment section available?",
      desc:"Yes, increment and decrement both section are available."
  },
]

const galleryList = [
  {
    id: 0,
    longTitle: "Mouthwatering Pasta Di Mare with Fresh Seafood and Zesty Tomato Sauce",
    imgSrc: "img/product/22.png",
    title: "Pasta Di Mare",
    slug: "pasta-di-mare",
    category: ["pizza"],
  },
  {
    id: 1,
    longTitle: "Creamy Carbonara Delight with Eggs, Cheese, and Pancetta",
    imgSrc: "img/product/23.png",
    title: "Carbonara",
    slug: "carbonara",
    category: ["asian","burger"],
  },
  {
    id: 2,
    longTitle: "Layered Lasagna Baked to Perfection with Ricotta and Meat Sauce",
    imgSrc: "img/product/24.png",
    title: "Lasagna",
    slug: "lasagna",
    category: ["burger","salad","bakery"],
  },
  {
    id: 3,
    longTitle: "Healthy Smoked Salmon Salad with Fresh Greens and Creamy Dressing",
    imgSrc: "img/product/18.png",
    title: "Smoked Salmon",
    slug: "smoked-salmon",
    category: ["salad"],
  },
  {
    id: 4,
    longTitle: "Pepperoni Pizza Loaded with Spicy Sausage and Melted Cheese",
    imgSrc: "img/product/21.png",
    title: "Pepperoni",
    slug: "pepperoni",
    category: ["bakery","salad"],
  },
  {
    id: 5,
    longTitle: "Crispy Potato Wedges Perfect for Snacking and Sharing",
    imgSrc: "img/product/17.png",
    title: "Potato Wedges",
    slug: "potato-wedges",
    category: ["drink","burger","bakery"],
  },
  {
    id: 6,
    longTitle: "Creamy Cauliflower Mash Infused with Herbs and Garlic",
    imgSrc: "img/product/20.png",
    title: "Cauliflower Mash",
    slug: "cauliflower-mash",
    category: ["drink","salad"],
  },
  {
    id: 7,
    longTitle: "Cheese Pasta Loaded with Gooey Cheese and Perfectly Cooked Pasta",
    imgSrc: "img/product/19.png",
    title: "Cheese Pasta",
    slug: "cheese-pasta",
    category: ["drink","bakery"],
  },
  {
    id: 10,
    longTitle: "Classic Beef Burger with Lettuce, Tomato, and Pickles",
    imgSrc: "img/product/2.png",
    title: "Beef Burger",
    slug: "beef-burger",
    category: ["burger"],
  },
  {
    id: 11,
    longTitle: "Refreshing Strawberry and Kiwi Smoothie",
    imgSrc: "img/product/3.png",
    title: "Strawberry Kiwi Smoothie",
    slug: "strawberry-kiwi-smoothie",
    category: ["drink","asian"],
  },
  {
    id: 12,
    longTitle: "Homemade Chocolate Chip Cookies",
    imgSrc: "img/product/4.png",
    title: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    category: ["dessert","pizza"],
  },
  {
    id: 13,
    longTitle: "Sizzling Fajitas with Grilled Chicken and Bell Peppers",
    imgSrc: "img/product/5.png",
    title: "Chicken Fajitas",
    slug: "chicken-fajitas",
    category: ["asian"],
  },
  {
    id: 14,
    longTitle: "Deluxe Veggie Sandwich with Avocado, Lettuce, and Tomato",
    imgSrc: "img/product/6.png",
    title: "Veggie Sandwich",
    slug: "veggie-sandwich",
    category: ["pizza","asian"],
  },
  {
    id: 15,
    longTitle: "Savory Spinach and Feta Stuffed Chicken Breast",
    imgSrc: "img/product/7.jpg",
    title: "Stuffed Chicken",
    slug: "stuffed-chicken",
    category: ["pizza"],
  },
];

const serviceList = [
  {
    id: 0,
    mainImgSrc: "img/service/service-1.png",
    imgSrc: "img/icon/3-1.png",
    title: "Fresh Healthy Food",
    slug: "fresh-healthy-food",
    desc:
      "Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    longDesc:
      "Experience the ultimate in fresh and healthy dining with our carefully curated menu. We source the finest ingredients to create dishes that not only delight your taste buds but also nourish your body. Whether you're a health-conscious foodie or just looking for a delicious meal, our fresh and healthy food is sure to satisfy your cravings."
  },
  {
    id: 1,
    mainImgSrc: "img/service/service-2.png",
    imgSrc: "img/icon/3-2.png",
    title: "Delicious Homemade Dishes",
    slug: "delicious-homemade-dishes",
    desc:
      "Savor the taste of our delicious homemade dishes made with love and care for your culinary delight.",
    longDesc:
      "Indulge in the comforting flavors of homemade dishes prepared with a touch of love and care. Our chefs craft each dish with passion, ensuring that every bite is a delightful experience. From traditional favorites to contemporary creations, our delicious homemade dishes are sure to leave you craving for more."
  },
  {
    id: 2,
    mainImgSrc: "img/service/service-3.png",
    imgSrc: "img/icon/3-3.png",
    title: "Gourmet Dining Experience",
    slug: "gourmet-dining-experience",
    desc:
      "Experience a gourmet dining journey like no other, with crafted dishes that tantalize your taste buds.",
    longDesc:
      "Embark on a culinary adventure with our gourmet dining experience. Our expert chefs take you on a journey of flavors, combining the finest ingredients and innovative techniques to create dishes that are both visually stunning and incredibly delicious. Elevate your dining experience with us."
  },
  {
    id: 3,
    mainImgSrc: "img/service/service-4.png",
    imgSrc: "img/icon/3-4.png",
    title: "Farm-to-Table Freshness",
    slug: "farm-to-table-freshness",
    desc:
      "Discover the goodness of farm-to-table freshness in every bite, ensuring a healthy and sustainable dining choice.",
    longDesc:
      "At our restaurant, we prioritize farm-to-table freshness to offer you a dining experience that's not only delicious but also sustainable. We work closely with local farmers to source the freshest ingredients for our dishes. Every bite you take reflects our commitment to a healthier planet and a healthier you."
  },
  {
    id: 4,
    mainImgSrc: "img/service/service-5.png",
    imgSrc: "img/icon/3-5.png",
    title: "Mouthwatering Culinary",
    slug: "mouthwatering-culinary",
    desc:
      "Indulge in mouthwatering culinary creations that combine tradition with innovation, promising a memorable dining experience.",
    longDesc:
      "Our culinary creations are a blend of tradition and innovation, resulting in mouthwatering dishes that tell a story with every bite. From classic recipes passed down through generations to contemporary dishes that push the boundaries of flavor, our menu promises a memorable dining experience."
  },
  {
    id: 5,
    mainImgSrc: "img/service/service-6.png",
    imgSrc: "img/icon/3-6.png",
    title: "Exquisite Dessert Delights",
    slug: "exquisite-dessert-delights",
    desc:
      "Satisfy your sweet cravings with our exquisite dessert delights, each bite a heavenly experience for your taste buds.",
    longDesc:
      "Treat yourself to sweet indulgence with our exquisite dessert delights. Each bite is a heavenly experience for your taste buds, crafted with precision and care. From decadent chocolate creations to delicate pastries, our desserts are the perfect way to satisfy your sweet cravings."
  },
  {
    id: 6,
    mainImgSrc: "img/service/service-7.png",
    imgSrc: "img/icon/1.png",
    title: "100% Swiss Quality",
    slug: "100-swiss-quality",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "Experience the unparalleled quality of Swiss craftsmanship in every aspect of our restaurant. From the ingredients we use to the service we provide, we uphold the highest standards of excellence. Join us for a truly Swiss dining experience."
  },
  {
    id: 7,
    mainImgSrc: "img/service/service-8.png",
    imgSrc: "img/icon/2.png",
    title: "Organic Production",
    slug: "organic-production",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "We are committed to organic production methods that prioritize the well-being of our planet and your health. Our ingredients are sourced from trusted organic suppliers, ensuring that you enjoy meals that are not only delicious but also environmentally responsible."
  },
  {
    id: 8,
    mainImgSrc: "img/service/service-9.png",
    imgSrc: "img/icon/3.png",
    title: "Food Law Certified",
    slug: "food-law-certified",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "Rest assured that our restaurant complies with all food laws and regulations to ensure the safety and quality of the dishes we serve. We take food safety seriously and adhere to the highest standards of hygiene and quality control."
  },
  {
    id: 9,
    mainImgSrc: "img/service/service-10.png",
    imgSrc: "img/icon/4.png",
    title: "Food Production",
    slug: "food-production",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "Our food production process is a well-oiled machine that guarantees the consistency and quality of every dish. From the kitchen to your table, we take pride in our food production practices to ensure that you enjoy the best culinary experience possible."
  },
  {
    id: 10,
    mainImgSrc: "img/aida-images/service-image1.png",
    lightImg: "img/aida-images/service-icon1.png",
    darkImg: "img/aida-images/ad-2-service-card-icon1.png",
    title: "Grilled Beef Steak",
    slug: "grilled-beef-steak",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "Our food production process is a well-oiled machine that guarantees the consistency and quality of every dish. From the kitchen to your table, we take pride in our food production practices to ensure that you enjoy the best culinary experience possible."
  },
  {
    id: 11,
    mainImgSrc: "img/aida-images/service-image3.png",
    lightImg: "img/aida-images/service-icon3.png",
    darkImg: "img/aida-images/ad-2-service-card-icon2.png",
    title: "Chicken Drumsticks",
    slug: "chicken-drumsticks",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "Our food production process is a well-oiled machine that guarantees the consistency and quality of every dish. From the kitchen to your table, we take pride in our food production practices to ensure that you enjoy the best culinary experience possible."
  },
  {
    id: 12,
    mainImgSrc: "img/aida-images/service-image1.png",
    lightImg: "img/aida-images/service-icon1.png",
    darkImg: "img/aida-images/ad-2-service-card-icon1.png",
    title: "Healthy Fresh Fish",
    slug: "healthy-fresh-fish",
    desc:
      "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    longDesc:
      "Our food production process is a well-oiled machine that guarantees the consistency and quality of every dish. From the kitchen to your table, we take pride in our food production practices to ensure that you enjoy the best culinary experience possible."
  },
];

const pricingList = [
  {
      id:0,
      plan:"Basic",
      price:49,
      time:10,
  },
  {
      id:1,
      plan:"Professional",
      price:149,
      time:5,
  },
  {
      id:2,
      plan:"Unlimited",
      price:199,
      time:3,
  },
]

const productList = [
  {
    id: 0,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 11.99,
    imgSrc: "img/product/01_home.png",
    name: "Spaghetti Bolognese",
    priceRange: "$12.99 - $9.99",
    slug: "spaghetti-bolognese",
    category: "Entrees",
    price: 11.99,
    desc: "A mouthwatering plate of spaghetti served with rich Bolognese sauce."
  },
  {
    id: 1,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 9.99,
    category: "Entrees",
    foodType:["pizza","burger","bakery"],
    imgSrc: "img/product/1.png",
    name: "Margherita Pizza",
    priceRange: "$10.49 - $8.99",
    slug: "margherita-pizza",
    price: 9.99,
    desc: "A classic Margherita pizza topped with ripe tomatoes and fresh mozzarella."
  },
  {
    id: 2,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 13.99,
    category: "Appetizers",
    imgSrc: "img/product/2.png",
    name: "Chicken Alfredo",
    priceRange: "$14.99 - $11.49",
    price: 13.99,
    slug: "chicken-alfredo",
    foodType:["burger"],
    sale: true,
    desc: "Tender chicken in a creamy Alfredo sauce, seasoned with garlic and Parmesan cheese."
  },
  {
    id: 3,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 6.99,
    category: "Salads",
    imgSrc: "img/product/3.png",
    name: "Caesar Salad",
    priceRange: "$7.99 - $5.99",
    price: 6.99,
    slug: "caesar-salad",
    foodType:["salad","pizza","drink"],
    sale: true,
    desc: "A crisp and refreshing Caesar salad with tangy dressing and crunchy croutons."
  },
  {
    id: 4,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 8.99,
    category: "Sides",
    imgSrc: "img/product/4.png",
    name: "Coleslaw",
    priceRange: "$9.49 - $7.99",
    price: 8.99,
    slug: "coleslaw",
    foodType:['asian','salad'],
    desc: "Fresh coleslaw with a creamy dressing, perfect as a side dish."
  },
  {
    id: 5,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 4.99,
    category: "Desserts",
    imgSrc: "img/product/5.png",
    name: "Chocolate Brownie",
    priceRange: "$5.99 - $4.49",
    price: 4.99,
    slug: "chocolate-brownie",
    foodType:["bakery","pizza"],
    desc: "Indulge in a decadent chocolate brownie, a sweet treat for your taste buds."
  },
  {
    id: 6,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 10.99,
    category: "Sides",
    foodType:["drink","asian"],
    imgSrc: "img/product/6.png",
    name: "Vegetable Stir-Fry",
    priceRange: "$11.99 - $9.49",
    price: 10.99,
    slug: "vegetable-stir-fry",
    desc: "A delicious stir-fry loaded with fresh vegetables and savory flavors."
  },
  {
    id: 7,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 3.99,
    category: "Beverages",
    imgSrc: "img/product/7.jpg",
    name: "Fruit Smoothie",
    priceRange: "$4.99 - $3.49",
    price: 3.99,
    slug: "fruit-smoothie",
    sale: true,
    desc: "Enjoy a refreshing fruit smoothie packed with your favorite fruits."
  },
  {
    id: 8,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 15.99,
    category: "Specials",
    imgSrc: "img/product/8.jpg",
    name: "Cheese Platter",
    priceRange: "$16.99 - $13.99",
    price: 15.99,
    slug: "cheese-platter",
    desc: "A delightful cheese platter featuring a variety of fine cheeses."
  },
  {
    id: 9,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 12.99,
    category: "Specials",
    imgSrc: "img/product/9.png",
    name: "Grilled Fish",
    priceRange: "$13.49 - $10.99",
    price: 12.99,
    slug: "grilled-fish",
    status: "new",
    desc: "Savor the flavors of perfectly grilled fish with a special seasoning."
  },
  {
    id: 10,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 7.99,
    category: "Salads",
    imgSrc: "img/product/10.png",
    name: "Caprese Salad",
    priceRange: "$8.49 - $6.99",
    price: 7.99,
    slug: "caprese-salad",
    foodType:["perch-fish","shrimps","red_crab"],
    sale: true,
    desc: "A fresh Caprese salad featuring tomatoes, mozzarella, and basil."
  },
  {
    id: 11,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 16.99,
    category: "Entrees",
    imgSrc: "img/product/11.png",
    name: "BBQ Ribs",
    priceRange: "$17.99 - $14.49",
    price: 16.99,
    slug: "bbq-ribs",
    foodType: ["burger","pizza"],
    status: "new",
    rating: "unrated",
    desc: "Tender BBQ ribs, slow-cooked to perfection with a smoky flavor."
  },
  {
    id: 12,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 5.99,
    category: "Entrees",
    imgSrc: "img/product/12.png",
    name: "Tiramisu",
    priceRange: "$6.99 - $5.49",
    price: 5.99,
    slug: "tiramisu",
    status: "new",
    foodType: ["salad","asian"],
    rating: "unrated",
    desc: "A classic Tiramisu dessert, a delightful blend of coffee and mascarpone."
  },
  {
    id: 13,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 5.99,
    category: "Beverages",
    imgSrc: "img/product/13.png",
    name: "Mango Smoothie",
    priceRange: "$5.49 - $4.29",
    price: 5.99,
    slug: "mango-smoothie",
    foodType: ["pizza","burger"],
    desc: "A tropical mango smoothie that's both refreshing and satisfying."
  },
  {
    id: 14,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 7.99,
    category: "Salads",
    imgSrc: "img/product/14.png",
    name: "Greek Salad",
    priceRange: "$8.99 - $7.49",
    price: 7.99,
    slug: "greek-salad",
    foodType: ["asian"],
    rating: "unrated",
    desc: "A classic Greek salad with fresh cucumbers, tomatoes, olives, and feta cheese."
  },
  {
    id: 15,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 14.99,
    category: "Appetizers",
    imgSrc: "img/product/15.png",
    name: "Pork Chops",
    priceRange: "$15.99 - $12.49",
    price: 14.99,
    slug: "pork-chops",
    sale: true,
    foodType: ["salad"],
    status: "new",
    rating: "unrated",
    desc: "Succulent pork chops grilled to perfection with a special seasoning."
  },
  {
    id: 15,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 14.99,
    category: "Appetizers",
    imgSrc: "img/product/15.png",
    name: "Pork Chops",
    priceRange: "$15.99 - $12.49",
    price: 14.99,
    slug: "pork-chops",
    sale: true,
    foodType: ["drink"],
    status: "new",
    rating: "unrated",
    desc: "Succulent pork chops grilled to perfection with a special seasoning."
  },
  {
    id: 15,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 14.99,
    category: "Appetizers",
    imgSrc: "img/product/15.png",
    name: "Pork Chops",
    priceRange: "$15.99 - $12.49",
    price: 14.99,
    slug: "pork-chops",
    sale: true,
    foodType: ["bakery"],
    status: "new",
    rating: "unrated",
    desc: "Succulent pork chops grilled to perfection with a special seasoning."
  },
  {
    id: 16,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 17.99,
    category: "Appetizers",
    imgSrc: "img/product/16.png",
    name: "Sushi Platter",
    priceRange: "$18.99 - $15.49",
    price: 17.99,
    slug: "sushi-platter",
    foodType: ["shrimps","red_crab","perch-fish"],
    rating: "unrated",
    desc: "An assortment of delicious sushi rolls, perfect for sushi enthusiasts."
  },
  {
    id: 17,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 15.99,
    category: "Appetizers",
    imgSrc: "img/product/17.png",
    name: "Shrimp Scampi",
    priceRange: "$16.49 - $13.29",
    price: 15.99,
    slug: "shrimp-scampi",
    desc: "Garlic-infused shrimp scampi served with linguini pasta."
  },
  {
    id: 18,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 6.99,
    category: "Sides",
    imgSrc: "img/product/18.png",
    name: "Veggie Wrap",
    priceRange: "$7.49 - $5.99",
    price: 6.99,
    slug: "veggie-wrap",
    sale: true,
    desc: "A wholesome veggie wrap filled with fresh vegetables and your choice of dressing."
  },
  {
    id: 19,
    isInCart: false,
    isInWishlist: false,
    quantity: 1,
    total: 4.99,
    category: "",
    imgSrc: "img/product/19.png",
    name: "Caramel Flan",
    priceRange: "$5.49 - $4.29",
    price: 4.99,
    slug: "caramel-flan",
    desc: "Creamy caramel flan, a delightful way to end your meal on a sweet note."
  },
];

const bannerData2 = [
  {
    id:0,
    smTitle:"Best In Fish",
    title:"The Best Fresh Fish in your City Area",
    banerBg:"banner-img-one",
  },
  {
    id:1,
    smTitle:"Best In Protein",
    title:"Sweet Crispy and Spicy Pepperoni",
    banerBg:"banner-img-two",
  },
  {
    id:2,
    smTitle:"Best In Vegetable",
    title:"Order Healthy Fresh Food in Any Time",
    banerBg:"banner-img-three",
  },
]

const foodCategoryData = [
  {
    id: 0,
    name: "Mink Shakes",
    price: "Avg. $55",
    imgSrc: "img/category/cat1.jpg",
  },
  {
    id: 1,
    name: "Sandwiches",
    price: "Avg. $95",
    imgSrc: "img/category/cat2.jpg",
  },
  {
    id: 2,
    name: "Muffins",
    price: "Avg. $75",
    imgSrc: "img/category/cat3.jpg",
  },
  {
    id: 3,
    name: "CheeseBurger",
    price: "Avg. $85",
    imgSrc: "img/category/cat4.jpg",
  },
  {
    id: 4,
    name: "Taco",
    price: "Avg. $65",
    imgSrc: "img/category/cat5.jpg",
  },
  {
    id: 5,
    name: "Mink Shakes",
    price: "Avg. $55",
    imgSrc: "img/category/cat1.jpg",
  },
  {
    id: 6,
    name: "Sandwiches",
    price: "Avg. $95",
    imgSrc: "img/category/cat2.jpg",
  },
  {
    id: 7,
    name: "Muffins",
    price: "Avg. $75",
    imgSrc: "img/category/cat3.jpg",
  },
  {
    id: 8,
    name: "CheeseBurger",
    price: "Avg. $85",
    imgSrc: "img/category/cat4.jpg",
  },
  {
    id: 9,
    name: "Taco",
    price: "Avg. $65",
    imgSrc: "img/category/cat5.jpg",
  },
];

const restaurantData = [
  {
    id: 0,
    imgSrc: "img/blog/restaurant1.jpg",
    name: "Chilly and the Cheese Factory",
    time: "08:00 am - 09:00 pm",
    location: "123 Main Street, New York",
  },
  {
    id: 1,
    imgSrc: "img/blog/restaurant2.jpg",
    name: "The Bacon Movement",
    time: "07:30 am - 10:00 pm",
    location: "456 Elm Avenue, Los Angeles",
  },
  {
    id: 2,
    imgSrc: "img/blog/restaurant3.jpg",
    name: "The Rooftop Grill and Bar",
    time: "09:00 am - 11:00 pm",
    location: "789 Oak Lane, Chicago",
  },
  {
    id: 3,
    imgSrc: "img/blog/restaurant4.jpg",
    name: "The Heaven’s Kitchen",
    time: "10:30 am - 09:30 pm",
    location: "101 Pine Road, San Francisco",
  },
  {
    id: 4,
    imgSrc: "img/blog/restaurant5.jpg",
    name: "Why So Delicious Restaurant",
    time: "11:00 am - 08:30 pm",
    location: "234 Cedar Drive, Miami",
  },
  {
    id: 5,
    imgSrc: "img/blog/restaurant6.jpg",
    name: "The Burning Brownie Home",
    time: "07:00 am - 10:30 pm",
    location: "345 Birch Street, Dallas",
  },
];

const bannerData3 = [
  {
    id: 0,
    bannerBg:"banner-one",
    subTitle: "Medium 3-Topping* Pizza",
    title: "Savor the Flavor of Baked Pepperoni",
    currentPrice: "$12.98",
    prevPrice: "$18.99"
  },
  {
    id: 1,
    bannerBg:"banner-two",
    subTitle: "Medium 3-Topping* Pizza",
    title: "Experience a Garden of Flavors in Every Bite",
    currentPrice: "$25.65",
    prevPrice: "$28.99"
  },
  {
    id: 2,
    bannerBg:"banner-three",
    subTitle: "Medium 3-Topping* Pizza",
    title: "Taste the Tradition of Italian Perfection",
    currentPrice: "$15.50",
    prevPrice: "$20.99"
  }
];

export {
    bannerData, 
    teamList, 
    partnerList,
    customerList,
    blogDataList,
    blogSlider,
    accordionData,
    galleryList,
    serviceList,
    pricingList,
    productList,
    bannerData2,
    foodCategoryData,
    restaurantData,
    bannerData3,
}
