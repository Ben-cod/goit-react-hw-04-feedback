import css from './Section.module.css';

export const Section = ({ title, children, style }) => {
  return (
    <section className={css.section} style={style}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
