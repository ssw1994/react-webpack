export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const DRAWER_SIDE = "DRAWER_SIDE";

export const opendrawer = (payload = null) => ({
  type: OPEN_DRAWER,
  payload: payload,
});

export const closedrawer = (payload = null) => ({
  type: CLOSE_DRAWER,
  payload: payload,
});

export const drawerloction = (payload) => ({
  type: DRAWER_SIDE,
  payload: payload,
});
