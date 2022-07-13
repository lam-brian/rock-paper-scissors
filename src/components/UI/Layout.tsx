import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return <main className={styles.layout}>{props.children}</main>;
};

export default Layout;
