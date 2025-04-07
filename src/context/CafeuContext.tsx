"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import Aos from "aos";
import {
  blogDataList,
  galleryList,
  productList,
  serviceList,
} from "../data/Data";
import { toast } from "react-toastify";

// Define the interface for your context data
interface CafeuContextData {
  isVideoModalOpen: boolean;
  openVideoModal: () => void;
  closeVideoModal: () => void;
  isHeaderFixed: boolean;
  isSearchbarModalOpen: boolean;
  openSearchbarModal: () => void;
  closeSearchbarModal: () => void;
  activeMenuTab: string;
  handleMenuTabChange: (tab: any) => void;
  filteredItemList: AllProduct[];
  currentYear: number;
  activeMenuProductTab: string;
  handleMenuProductTabChange: (tab: any) => void;
  filteredMenuProductList: AllProduct[];
  hoveredItemId: number | null;
  handleCardHover: (itemId: number) => void;
  handleCardLeave: () => void;
  serviceItemsToShow: number;
  handleServiceShowMore: () => void;
  handleServiceShowLess: () => void;
  activeGalleryTab: string;
  handleGalleryTabChange: (tab: any) => void;
  filteredGalleryItemList: GalleryList[];
  currentBlogItems: BlogList[];
  currentBlogPage: number;
  handleBlogPageChange: (newPage: number) => void;
  totalBlogPages: number;
  itemsToShow: number;
  handleBlogShowMore: () => void;
  handleBlogShowLess: () => void;
  openAccordion: number | null;
  handleAccordionBtn: (itemId: number) => void;
  isLightBoxModalOpen: boolean;
  openLightBoxModal: (product: AllProduct | null) => void;
  closeLightBoxModal: () => void;
  product: AllProduct | null;
  startIndex: number;
  endIndex: number;
  setSortingOption: (option: string) => void;
  sortingOption: string;
  filteredProducts: AllProduct[];
  itemsPerPage: number;
  currentItems: AllProduct[];
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  totalPages: number;
  addToCart: (productId: number) => void;
  
  addToWishlist: (productId: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
  priceRange: number[];
  setPriceRange: (newPriceRange: number[]) => void;
  handlePriceChange: (event: Event, newValue: number | number[]) => void;
  selectedTags: string[];
  handleTagChange: (tag: string) => void;
  cart: AllProduct[];
  removeFromCart: (productId: number) => void;
  handleQuantityChange: (productId: number, newQuantity: number) => void;
  cartTotal: number;
  wishlist: AllProduct[];
  removeFromWishlist: (productId: number) => void;
  moveWishlistToCart: () => void;
  addToCartWithQuantity: (productId: number, quantity: number) => void;
  searchBlogQuery: string;
  setSearchBlogQuery: (query: string) => void;
  filteredBlogs: BlogList[];
  selectedBlogCategory: string;
  handleBlogCategoryChange: (category: string) => void;
  selectedBlogTags: string[];
  handleBlogTagChange: (tag: string) => void;
  menuItemsToShow: number;
  handleMenuShowMore: () => void;
  handleMenuShowLess: () => void;
  galleryItemsToShow: number;
  handleGalleryShowMore: () => void;
  handleGalleryShowLess: () => void;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  handleDropdownToggle: (dropdownName: keyof DropdownState) => void;
  isDropdownOpen: DropdownState;
  cartItemAmount: number;
  haveCoupon: boolean;
  handleCouponBtn: () => void;
  passwordVisible: boolean;
  togglePasswordVisibility: () => void;
  isVisible: boolean;
  showCart: boolean;
  handleCartOpen: () => void;
  handleCartClose: () => void;
  checkout: () => void;
  wishlisttoast: () => void;
}
interface DropdownState {
  home: boolean;
  about: boolean;
  menu: boolean;
  pages: boolean;
  blog: boolean;
  contact: boolean;
}

type GalleryList = {
  id: number;
  longTitle: string;
  imgSrc: string;
  title: string;
  slug: string;
  category: string[];
};

type BlogList = {
  id: number;
  imgSrc: string;
  title: string;
  slug: string;
  desc: string;
  date: string;
  longDesc: string;
  category: string;
};

type AllProduct = {
  id: number;
  imgSrc: string;
  name: string;
  priceRange: string;
  slug: string;
  sale?: boolean;
  category: string;
  isInCart: boolean; // New property
  isInWishlist: boolean; // New property
  price: number;
  quantity: number;
  total: number;
  foodType?: string[];
  status?: string;
  rating?: string;
  desc: string;
};
// Create the context with an initial value
const CafeuContext = createContext<CafeuContextData | undefined>(undefined);

interface CafeuProviderProps {
  children: ReactNode;
}

export const CafeuProvider: React.FC<CafeuProviderProps> = ({ children }) => {
  const checkout = () => {
    // Find the item from filteredProducts using productId
    toast.success("Item is added to Checkout!");
  };
  const wishlisttoast = () => {
    // Find the item from filteredProducts using productId
    toast.success("Item is added to Wishlist!");
  };
  // Video Modal function
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Sticky Header Section on Scroll
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  // Searchbar Modal function
  const [isSearchbarModalOpen, setIsSearchbarModalOpen] =
    useState<boolean>(false);

  const openSearchbarModal = () => {
    setIsSearchbarModalOpen(true);
  };

  const closeSearchbarModal = () => {
    setIsSearchbarModalOpen(false);
  };

  // Current Year
  const currentYear = new Date().getFullYear();

  // Menu Product Filter
  const [activeMenuProductTab, setActiveMenuProductTab] =
    useState<string>("all");
  const handleMenuProductTabChange = (tab: any) => {
    setActiveMenuProductTab(tab);
  };

  // Pricing Section
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(1);
  const handleCardHover = (itemId: number) => {
    setHoveredItemId(itemId);
  };

  const handleCardLeave = () => {
    setHoveredItemId(1);
  };
  // Menu Products Section
  const filteredMenuProductList =
    activeMenuProductTab === "all"
      ? productList.slice(9, 19)
      : productList
          .slice(9, 17)
          .filter(
            (item) =>
              item.foodType && item.foodType.includes(activeMenuProductTab)
          );
  const initialMenuItemsToShow = 8; // Number of items to initially show
  const [menuItemsToShow, setMenuItemsToShow] = useState<number>(
    initialMenuItemsToShow
  );

  const handleMenuShowMore = () => {
    // When the "Show More" button is clicked, set itemsToShow to the total number of items in the list
    setMenuItemsToShow(filteredMenuProductList.length);
  };
  const handleMenuShowLess = () => {
    setMenuItemsToShow(initialMenuItemsToShow);
  };
  // Service Section
  const initialServiceItemsToShow = 6; // Number of items to initially show
  const [serviceItemsToShow, setServiceItemsToShow] = useState<number>(
    initialServiceItemsToShow
  );

  const handleServiceShowMore = () => {
    // When the "Show More" button is clicked, set itemsToShow to the total number of items in the list
    setServiceItemsToShow(serviceList.length);
  };
  const handleServiceShowLess = () => {
    setServiceItemsToShow(initialServiceItemsToShow);
  };

  // Gallery Filter
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("all");
  const handleGalleryTabChange = (tab: any) => {
    setActiveGalleryTab(tab);
  };
  const filteredGalleryItemList =
    activeGalleryTab === "all"
      ? galleryList
      : galleryList.filter(
          (item) => item.category && item.category.includes(activeGalleryTab)
        );

  const initialGalleryItemsToShow = 8; // Number of items to initially show
  const [galleryItemsToShow, setGalleryItemsToShow] = useState<number>(
    initialGalleryItemsToShow
  );

  const handleGalleryShowMore = () => {
    // When the "Show More" button is clicked, set itemsToShow to the total number of items in the list
    setGalleryItemsToShow(filteredGalleryItemList.length);
  };
  const handleGalleryShowLess = () => {
    setGalleryItemsToShow(initialGalleryItemsToShow);
  };
  // Blog Section
  const [currentBlogPage, setCurrentBlogPage] = useState<number>(1);
  const [selectedBlogCategory, setSelectedBlogCategory] =
    useState<string>("All");
  const [searchBlogQuery, setSearchBlogQuery] = useState("");
  const [selectedBlogTags, setSelectedBlogTags] = useState<string[]>([]);
  const blogsPerPage: number = 3;
  const [filteredBlogs, setFilteredBlogs] = useState<BlogList[]>(blogDataList);

  // Calculate the start and end index based on the current page and items per page
  const startBlogIndex = (currentBlogPage - 1) * blogsPerPage;
  const endBlogIndex = Math.min(startBlogIndex + blogsPerPage);

  // Extract the current blog items to display
  const currentBlogItems = filteredBlogs.slice(startBlogIndex, endBlogIndex);

  const totalBlogPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleBlogPageChange = (newPage: number) => {
    setCurrentBlogPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling animation
    });
  };

  const handleBlogCategoryChange = (category: string) => {
    setSelectedBlogCategory(category);
  };

  const handleBlogTagChange = (tag: string) => {
    if (selectedBlogTags.includes(tag)) {
      setSelectedBlogTags(
        selectedBlogTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedBlogTags([...selectedBlogTags, tag]);
    }
  };

  // Blog Grid
  const initialBlogItemsToShow = 6; // Number of items to initially show
  const [itemsToShow, setItemsToShow] = useState<number>(
    initialBlogItemsToShow
  );

  const handleBlogShowMore = () => {
    // When the "Show More" button is clicked, set itemsToShow to the total number of items in the list
    setItemsToShow(blogDataList.length);
  };
  const handleBlogShowLess = () => {
    setItemsToShow(initialBlogItemsToShow);
  };

  // FAQ accordion
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionBtn = (itemId: number) => {
    setOpenAccordion((prevState) => (prevState === itemId ? null : itemId));
  };

  // LightBox Modal function
  const [isLightBoxModalOpen, setIsLightBoxModalOpen] =
    useState<boolean>(false);
  const [product, setProduct] = useState<AllProduct | null>(null);

  const openLightBoxModal = (product: AllProduct | null) => {
    setIsLightBoxModalOpen(true);
    setProduct(product);
  };
  const closeLightBoxModal = () => {
    setIsLightBoxModalOpen(false);
  };

  //  All Logic for Shop Section

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [priceRange, setPriceRange] = useState<number[]>([0, 60]); // State for price range
  const [sortingOption, setSortingOption] = useState<string>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [cart, setCart] = useState<AllProduct[]>([]);
  const [wishlist, setWishlist] = useState<AllProduct[]>([]);
  const itemsPerPage: number = 9;
  const cartItemAmount = cart.reduce((total, item) => total + item.quantity, 0);
  const [filteredProducts, setFilteredProducts] =
    useState<AllProduct[]>(productList);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling animation
    });
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (event) {
      setPriceRange(newValue as number[]);
    }
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const handleTagChange = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Function to add a product to the cart
  const addToCart = (productId: number) => {
    // Find the item from filteredProducts using productId
    const itemToAdd = productList.find((item) => item.id === productId);

    if (itemToAdd) {
      const existingItemIndex = cart.findIndex((item) => item.id === productId);

      if (existingItemIndex === -1) {
        setCart((prevCart) => [...prevCart, itemToAdd]);

        // Update local storage with the updated cart
        const updatedCart = [...cart, itemToAdd];
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        toast.success("Item added in cart!");
      } else {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
        updatedCart[existingItemIndex].total =
          updatedCart[existingItemIndex].quantity * itemToAdd.price;

        setCart(updatedCart);

        // Update local storage with the updated cart
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        toast.success("Item list updated in cart!");
      }
    } else {
      toast.warning("Item not found in filteredProducts.");
    }
  };


  // Function to remove a product from the cart
  const removeFromCart = (productId: number) => {
    // Create an updated cart by filtering out the product with the matching id
    const updatedCart = cart.filter((product) => product.id !== productId);

    // Update the cart state
    setCart(updatedCart);

    // Update the filteredProducts state to mark the product as not in the cart
    const updatedProducts = filteredProducts.map((product) =>
      product.id === productId ? { ...product, isInCart: false } : product
    );
    setFilteredProducts(updatedProducts);

    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      // Prevent quantity from going below 1
      return;
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );

      setCart(updatedCart);

      // Update local storage with the updated cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Cart Modal
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleCartOpen = () => {
    setShowCart(true);
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  // Function to add a product to the wishlist
  const addToWishlist = (productId: number) => {
    const itemToAdd = productList.find((item) => item.id === productId);

    if (itemToAdd) {
      if (!wishlist.some((item) => item.id === productId)) {
        const newItem = {
          ...itemToAdd,
          quantity: 1,
          total: itemToAdd.price,
          isInWishlist: true,
        };

        // Update the state and add the new item to the wishlist
        setWishlist((prevWishlistItems) => [...prevWishlistItems, newItem]);

        // Update the local storage with the updated wishlist
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...wishlist, newItem]) // Use the updated value of wishlist
        );

        toast.success("Item added to wishlist!");
      } else {
        toast.warning("Item already in wishlist!");
      }
    } else {
      toast.error("Item not found in productList.");
    }
  };

  const addToCartWithQuantity = (productId: number, quantity: number) => {
    const itemToAdd = productList.find((item) => item.id === productId);

    if (itemToAdd) {
      const existingItemIndex = cart.findIndex((item) => item.id === productId);

      if (!cart.some((item) => item.id === productId)) {
        const newItem = {
          ...itemToAdd,
          quantity: quantity, // Set the provided quantity
          total: itemToAdd.price * quantity,
        };

        setCart((prevCart) => [...prevCart, newItem]);
        toast.success("Product added to cart!"); // Replace with your toast implementation
      } else if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += quantity; // Increment the quantity
        updatedCart[existingItemIndex].total =
          updatedCart[existingItemIndex].quantity * itemToAdd.price;

        setCart(updatedCart);
        toast.success("Product quantity updated in cart!"); // Replace with your toast implementation
      }
    } else {
      toast.warning("Product not found."); // Replace with your toast implementation
    }
  };
  // Function to remove a product from the wishlist
  const removeFromWishlist = (productId: number) => {
    // Create an updated wishlist by filtering out the product with the matching id
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== productId
    );

    // Update the wishlist state
    setWishlist(updatedWishlist);

    // Update the filteredProducts state to mark the product as not in the wishlist
    const updatedProducts = filteredProducts.map((product) =>
      product.id === productId ? { ...product, isInWishlist: false } : product
    );
    setFilteredProducts(updatedProducts);

    // Save the updated wishlist to local storage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Calculate the total price of items in the cart
  const calculateCartTotal = (cartItems: AllProduct[]) => {
    let total = 0;

    for (const cartItem of cartItems) {
      total += cartItem.price * cartItem.quantity;
    }

    return total;
  };

  // Use the calculateCartTotal function to get the total price
  const cartTotal = calculateCartTotal(cart);

  const moveWishlistToCart = () => {
    const updatedCart = [...cart]; // Create a copy of the current cart

    for (const wishlistItem of wishlist) {
      const existingCartItem = updatedCart.find(
        (cartItem) => cartItem.id === wishlistItem.id
      );

      if (existingCartItem) {
        // If the item already exists in the cart, update its quantity
        existingCartItem.quantity += 1;
        existingCartItem.total =
          existingCartItem.quantity * existingCartItem.price;
      } else {
        // If the item doesn't exist in the cart, add it
        updatedCart.push({
          ...wishlistItem,
          quantity: 1,
          total: wishlistItem.price,
        });
      }
    }

    setCart(updatedCart); // Update the cart state

    // Update local storage with the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Clear the wishlist
    setWishlist([]);

    // Update local storage to clear the wishlist
    localStorage.removeItem("wishlist");

    toast.success("Items from wishlist added to cart!");
  };

  // Menu Section filter

  const [activeMenuTab, setActiveMenuTab] = useState<string>("all");
  const handleMenuTabChange = (tab: any) => {
    setActiveMenuTab(tab);
  };
  const filteredItemList =
    activeMenuTab === "all"
      ? productList.slice(1, 7)
      : productList
          .slice(1, 7)
          .filter(
            (item) => item.foodType && item.foodType.includes(activeMenuTab)
          );

  // Mobile Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>({
    home: false,
    about: false,
    menu: false,
    pages: false,
    blog: false,
    contact: false,
  });

  // Define the function for handling dropdown toggle
  const handleDropdownToggle = (dropdownName: keyof DropdownState) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  // Coupon Section
  const [haveCoupon, setHaveCoupon] = useState<boolean>(false);

  const handleCouponBtn = () => {
    setHaveCoupon(!haveCoupon);
  };

  // Password Visible
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // UseEffect

  useEffect(() => {
    // header sticky
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // AOS Initialization
    Aos.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
    });
    // Blog functions
    let newFilteredBlogs = blogDataList;

    // Search filter
    if (searchBlogQuery.trim() !== "") {
      newFilteredBlogs = newFilteredBlogs.filter((item) =>
        item.title.toLowerCase().includes(searchBlogQuery.toLowerCase())
      );
    }

    // Create a filtered list based on the selected category

    if (selectedBlogCategory !== "All") {
      newFilteredBlogs = newFilteredBlogs.filter(
        (item) => item.category === selectedBlogCategory
      );
    }
    // Apply tag filtering
    if (selectedBlogTags.length > 0) {
      newFilteredBlogs = newFilteredBlogs.filter((item) =>
        selectedBlogTags.includes(item.category)
      );
    }

    // Update the filteredBlogs state
    setFilteredBlogs(newFilteredBlogs);

    // Shop Section
    let sortedProducts = [...productList];

    if (sortingOption === "lowToHigh") {
      sortedProducts.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (sortingOption === "highToLow") {
      sortedProducts.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (sortingOption === "sortAToZ") {
      sortedProducts.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
    } else if (sortingOption === "sortZToA") {
      sortedProducts.sort((a, b) => (b.name ?? "").localeCompare(a.name ?? ""));
    }

    // Apply price range filtering
    sortedProducts = sortedProducts.filter((item) => {
      const itemPrice = item.price;

      if (typeof itemPrice === "number" && !isNaN(itemPrice)) {
        const [minPrice, maxPrice] = priceRange;
        return itemPrice >= minPrice && itemPrice <= maxPrice;
      }

      return false;
    });

    // Apply category filtering
    if (selectedCategory !== "All") {
      sortedProducts = sortedProducts.filter(
        (item) => item.category === selectedCategory
      );
    }
    // Search filter
    if (searchQuery.trim() !== "") {
      sortedProducts = sortedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Apply tag filtering
    if (selectedTags.length > 0) {
      sortedProducts = sortedProducts.filter((item) =>
        selectedTags.includes(item.category)
      );
    }
    // Load cart from local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Load wishlist from local storage
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }

    setFilteredProducts(sortedProducts);
    setCurrentPage(1);
    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    selectedBlogCategory,
    searchBlogQuery,
    selectedBlogCategory,
    selectedBlogTags,
    sortingOption,
    priceRange,
    selectedCategory,
    searchQuery,
    selectedTags,
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  // Define the context value based on the interface
  const contextValue: CafeuContextData = {
    isVideoModalOpen,
    openVideoModal,
    closeVideoModal,
    isHeaderFixed,
    isSearchbarModalOpen,
    openSearchbarModal,
    closeSearchbarModal,
    activeMenuTab,
    handleMenuTabChange,
    filteredItemList,
    currentYear,
    activeMenuProductTab,
    handleMenuProductTabChange,
    filteredMenuProductList,
    hoveredItemId,
    handleCardHover,
    handleCardLeave,
    serviceItemsToShow,
    handleServiceShowMore,
    handleServiceShowLess,
    activeGalleryTab,
    handleGalleryTabChange,
    filteredGalleryItemList,
    currentBlogItems,
    currentBlogPage,
    handleBlogPageChange,
    totalBlogPages,
    itemsToShow,
    handleBlogShowMore,
    handleBlogShowLess,
    openAccordion,
    handleAccordionBtn,
    isLightBoxModalOpen,
    openLightBoxModal,
    closeLightBoxModal,
    product,
    startIndex,
    endIndex,
    setSortingOption,
    sortingOption,
    filteredProducts,
    itemsPerPage,
    currentItems,
    currentPage,
    handlePageChange,
    totalPages,
    addToCart,
    addToWishlist,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategoryChange,
    priceRange,
    setPriceRange,
    handlePriceChange,
    selectedTags,
    handleTagChange,
    cart,
    removeFromCart,
    handleQuantityChange,
    cartTotal,
    removeFromWishlist,
    wishlist,
    moveWishlistToCart,
    addToCartWithQuantity,
    searchBlogQuery,
    setSearchBlogQuery,
    filteredBlogs,
    selectedBlogCategory,
    handleBlogCategoryChange,
    selectedBlogTags,
    handleBlogTagChange,
    menuItemsToShow,
    handleMenuShowMore,
    handleMenuShowLess,
    galleryItemsToShow,
    handleGalleryShowMore,
    handleGalleryShowLess,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    handleDropdownToggle,
    isDropdownOpen,
    cartItemAmount,
    haveCoupon,
    handleCouponBtn,
    passwordVisible,
    togglePasswordVisibility,
    isVisible,
    showCart,
    handleCartClose,
    handleCartOpen,
    checkout,
    wishlisttoast
  };

  return (
    <CafeuContext.Provider value={contextValue}>
      {children}
    </CafeuContext.Provider>
  );
};

export const useCafeuContext = () => {
  const context = useContext(CafeuContext);
  if (!context) {
    throw new Error("useCafeuContext must be used within an CafeuProvider");
  }
  return context;
};
