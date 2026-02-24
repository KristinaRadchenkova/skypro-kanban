// src/components/Column/Column.jsx
import Card from "../Card/Card";

const Column = ({ title, cards = [] }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card 
            key={card.id} // Используем id из данных
            theme={card.theme} 
            text={card.text}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;