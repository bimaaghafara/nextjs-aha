export type PageLayoutDesktopProps = {
  children: React.ReactNode;
  sideContent?: React.ReactNode;
  activeMenu: string;
  withNotificationMenus?: [string?];
};

export type Menu = {
  key: string;
  label: string;
  url: string;
};

export type Menus = Menu[];
