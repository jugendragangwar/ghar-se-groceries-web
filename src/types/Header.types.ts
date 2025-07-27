export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export interface HeaderProps {
  navItems: NavItem[];
  logo?: string;
  onMenuToggle?: () => void;
}