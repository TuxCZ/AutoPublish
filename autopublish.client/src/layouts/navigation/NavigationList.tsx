import { useNavigate } from "react-router-dom";
import List from "devextreme-react/List";
import { NavigationBarItems } from "./NavigationBarItems";

const NavigationList = () => {
    const navigate = useNavigate();

    const onItemClick = (e: any) => {
        if (e.itemData.url)
            navigate(e.itemData.url);
    }

    return (
        <div className="list" style={{ width: "250px" }}>
            <List
                dataSource={NavigationBarItems}
                keyExpr="text"
                selectionMode="none"
                onItemClick={onItemClick}
                itemRender={(item: any) => (
                    <div style={item.isSubItem ? { marginLeft: 25 } : {}}>
                        <span className="flex items-center">{item.icon}</span>
                        <span style={{ paddingLeft: 5 }}>{item.text}</span>
                    </div>
                )}
            />
        </div>
    );
}

export default NavigationList;