import { Home, Contact, About, Cart, WishList, Checkout } from "../components";
export default [
  {
    name: "Home",
    id: 0,
    link: "/home",
    isMenu: true,
    component: Home,
  },
  {
    name: "About",
    id: 1,
    link: "/about",
    isMenu: true,
    component: About,
  },
  {
    name: "Contact",
    id: 2,
    link: "/contact",
    isMenu: true,
    component: Contact,
  },
  {
    name: "Cart",
    id: 3,
    link: "/cart",
    isMenu: false,
    component: Checkout,
  },
  {
    name: "WishList",
    id: 4,
    link: "/wishlist",
    isMenu: false,
    component: WishList,
  },
];
