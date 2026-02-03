import Column from "../Column/Column";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              title="Без статуса"
              cards={[
                { theme: "orange", text: "Web Design" },
                { theme: "green", text: "Research" },
                { theme: "orange", text: "Web Design" },
                { theme: "purple", text: "Copywriting" },
                { theme: "orange", text: "Web Design" },
              ]}
            />
            <Column
              title="Нужно сделать"
              cards={[{ theme: "green", text: "Research" }]}
            />
            <Column
              title="В работе"
              cards={[
                { theme: "green", text: "Research" },
                { theme: "purple", text: "Copywriting" },
                { theme: "orange", text: "Web Design" },
              ]}
            />
            <Column
              title="Тестирование"
              cards={[{ theme: "green", text: "Research" }]}
            />
            <Column
              title="Готово"
              cards={[{ theme: "green", text: "Research" }]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
