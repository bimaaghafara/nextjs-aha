export type PageLayoutMobileProps = {
  children: React.ReactNode;
  activeMenu: string;
  isBottomNav?: boolean;
};

export type Menu = {
  key: string;
  label: string;
  url: string;
};

export type Menus = Menu[];
