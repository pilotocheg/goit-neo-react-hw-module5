import css from "./InfoCard.module.css";

export default function InfoCard({ title, items, renderItem }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className={css.infoCard}>
      <h3 className={css.infoTitle}>{title}</h3>
      <ul className={css.infoList}>{items.map(renderItem)}</ul>
    </div>
  );
}
