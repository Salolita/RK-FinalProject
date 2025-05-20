import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Router.css'

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="list">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.path} className="link">{item.label}</a>
            {index < items.length - 1 && <span className="list-space">{">"}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

function BreadcrumbsTracker() {
  const location = useLocation();
  const [visitedPages, setVisitedPages] = useState(() => {
    const saved = localStorage.getItem("visitedPages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const path = location.pathname;
    const label = getLabelFromPath(path);

    setVisitedPages((prev) => {
      if (path === "/") {
        const newPages = [{ path, label }];
        localStorage.setItem("visitedPages", JSON.stringify(newPages));
        return newPages;
      }

      const filtered = prev.filter((page) => page.path !== path);
      const newPages = [...filtered, { path, label }];
      localStorage.setItem("visitedPages", JSON.stringify(newPages));
      return newPages;
    });
  }, [location]);

  return <Breadcrumbs items={visitedPages} />;
}

function getLabelFromPath(path) {
  if (path === "/") return "Home";
  const segments = path.split("/").filter(Boolean);
  return decodeURIComponent(segments[segments.length - 1]);
}

export default BreadcrumbsTracker;