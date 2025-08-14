import css from "./EmptyMessage.module.css";

export default function EmptyMessage({ message }) {
  return (
    <div className={css.emptyContainer}>
      <p>{message}</p>
    </div>
  );
}
