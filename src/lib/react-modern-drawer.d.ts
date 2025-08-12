declare module "react-modern-drawer" {
  import * as React from "react";

  export interface DrawerProps {
    open: boolean;
    onClose: () => void;
    direction?: "left" | "right" | "top" | "bottom";
    duration?: number;
    size?: number | string;
    overlayOpacity?: number;
    enableOverlay?: boolean;
    lockBackgroundScroll?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  const Drawer: React.FC<DrawerProps>;
  export default Drawer;
}
