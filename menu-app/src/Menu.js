import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;

        return (
          <article key={id} className="menuItem">
            <img src={img} alt={title} className="menuItem__photo" />
            <div className="menuItem__info">
              <header>
                <h4 className="menuItem__title">{title}</h4>
                <h4 className="menuItem__price">${price}</h4>
              </header>
              <p className="menuItem__item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
