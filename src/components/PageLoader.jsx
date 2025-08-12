import { BeatLoader } from "react-spinners";

import css from "./PageLoader.module.css";

export default function PageLoader() {
  return (
    <div className={css.container}>
      <BeatLoader />
    </div>
  );
}
