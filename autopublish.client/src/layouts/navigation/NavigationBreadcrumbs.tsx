import { Link, useLocation } from "react-router-dom";

const routeNameMap: Record<string, string> = {
    projects: "Projekty",
    new: "Nový"
};

export default function NavigationBreadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
            <Link to="/">AutoPublish</Link>

            {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;
                const label = routeNameMap[name] || name; 

                return (
                    <span key={routeTo}>
                        <span style={{ paddingRight: 10, paddingLeft: 10 }}>/</span>

                        {isLast ? (
                            <span style={{ fontWeight: "bold" }}>{label}</span>
                        ) : (
                            <Link to={routeTo}>
                               {label}
                            </Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
}