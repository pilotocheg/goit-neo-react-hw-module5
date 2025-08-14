import { useRef } from "react";
import { useNavigate, useLocation } from "react-router";

import css from "./PageContainer.module.css";

export default function PageContainer({
  title,
  children,
  showGoBack,
  defaultBackLink = -1,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const backLink = useRef(location.state ?? defaultBackLink);

  const handleGoBack = () => {
    navigate(backLink.current);
  };

  return (
    <div className={css.page}>
      <div className={css.header}>
        {showGoBack && (
          <button className={css.goBackButton} onClick={handleGoBack}>
            ← Go Back
          </button>
        )}
        <h1 className={css.title}>{title}</h1>
      </div>
      {children}
    </div>
  );
}
