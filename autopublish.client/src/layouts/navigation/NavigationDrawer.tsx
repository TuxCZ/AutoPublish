import Drawer from "devextreme-react/drawer";
import { type ReactNode } from "react";
import NavigationList from "./NavigationList";

type NavigationDrawerProps = {
    opened: boolean;
    handleDrawerToggle: () => boolean;
    children: ReactNode | ReactNode[]
};

const NavigationDrawer = ({ children, opened }: NavigationDrawerProps) => {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <Drawer
                    opened={opened}
                    openedStateMode="push"
                    position="left"
                    revealMode="expand"
                    component={NavigationList}
                    height="60vh"
                    width="200"
                />
            </div>

            <div style={{ flexGrow: 1, padding: '20px' }}>
                {children} 
            </div>
        </div>
    );
};

export default NavigationDrawer;