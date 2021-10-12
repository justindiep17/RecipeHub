function NavbarItemNoDD({ title, highlighted }) {
  return (
    <li className="link-container">
      <div
        className={
          highlighted ? "highlight-oval highlighted" : "highlight-oval"
        }
      >
        <button className="link-btn">{`${title}`}</button>
      </div>
    </li>
  );
}

export default NavbarItemNoDD;
