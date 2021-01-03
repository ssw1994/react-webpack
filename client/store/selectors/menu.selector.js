export const menus = (state) => state.menuReducer.menus;

export const activeMenu = (state) => {
  let allMenus = [];
  const expandMenu = (menu) => {
    if (menu.childrens && menu.childrens.length > 0) {
      menu.childrens.forEach((m) => {
        allMenus.push(m);
        if (m.childrens && m.childrens.length > 0) {
          expandMenu(m);
        }
      });
    }
  };
  state.menuReducer.menus.forEach((menu) => {
    allMenus.push(menu);
    expandMenu(menu);
  });
  return allMenus.filter((menu) => menu.isActive);
};

export const userMenus = (state) =>
  state.menuReducer.menus.filter((menu) => menu.isUserMenu);

export const userSettings = (state) => {
  //return state.menuReducer.menus.filter((x) => x.isUserMenu);
  let index = state.menuReducer.menus.findIndex((x) => x.name === "Profile");
  if (index >= 0) return state.menuReducer.menus[index].childrens;
  else return [];
};
