import React, { useState, type ReactNode } from "react";
import NavigationDrawer from "./navigation/NavigationDrawer";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [opened, setOpened] = useState(true);

    const handleDrawerToggle = (): boolean => {
        setOpened(!opened);

        return true;
    }

    return (
        <>
            <Header />

            <NavigationDrawer opened={opened} handleDrawerToggle={handleDrawerToggle}>
                {children}
            </NavigationDrawer>

            <Footer />
        </>
    );
}

export default Layout;