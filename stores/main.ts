import { reactive } from 'vue';
//import schema from '../../plugins/schema';

// Define types for the state
interface Cart {
  products: Array<{ id: number; name: string; price: number }>;
  total: number;
}

interface ActiveRoute {
  route: string;
}

interface Upsell {
  // Define the structure of upsell data
  [key: string]: any;
}

interface Order {
  // Define the structure of order data
  [key: string]: any;
}

interface MainState {
  cart: Cart;
  windowWidth: number | null;
  isMobile: boolean;
  openNav: boolean;
  eventData: any; // Replace `any` with a specific type if known
  activeRoute: ActiveRoute;
  upsell: Upsell;
  order: Order | null;
  [key: string]: any; // Allow dynamic properties
}

export const useMainState = () => {
  const extra = [
    'authenticated',
    'IP',
    'AUTH_TOKEN',
    'CURRENT_LANGUAGE',
    'CURRENT_CURRENCY',
    'customer',
    'token',
    'referer',
  ];

  //const variables = schema.concat(extra);

  // Initialize the state with TypeScript types
  const state: MainState = reactive({
    cart: { products: [], total: 0 },
    windowWidth: null,
    isMobile: false,
    openNav: false,
    eventData: null,
    activeRoute: { route: 'orders' },
    upsell: {},
    order: null,
  });

  // Dynamically add variables to the state
  for (const element of variables) {
    if (element === 'settings') {
      state[element] = {};
    } else {
      state[element] = null;
    }
  }

  // Actions (functions to update state)
  const updateWindowWidth = (width: number) => {
    state.windowWidth = width;
    state.isMobile = width < 768; // Example: Update isMobile based on window width
  };

  const toggleNav = () => {
    state.openNav = !state.openNav;
  };

  const setEventData = (data: any) => {
    state.eventData = data;
  };

  const setActiveRoute = (route: ActiveRoute) => {
    state.activeRoute = route;
  };

  // Getters (computed properties)
  const cartTotalItems = () => state.cart.products.length;
  const isAuthenticated = () => !!state.token;

  return {
    state,
    updateWindowWidth,
    toggleNav,
    setEventData,
    setActiveRoute,
    cartTotalItems,
    isAuthenticated,
  };
};