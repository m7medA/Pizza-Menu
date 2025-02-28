import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="contianer">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // }; for inline style

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. PLZ come back later ;)</p>
      )}

      {/* <Pizza
        name="Pizza Funghi"
        pizzaSrc="pizzas/funghi.jpg"
        ingredients="Tomato, Mashrom"
        price="13"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={!pizzaObj.soldOut ? "pizza" : "pizza sold-out"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{!pizzaObj.soldOut ? pizzaObj.price : "Sold Out"}</span>
      </div>
    </li>
  );
}

function Footer() {
  // return React.createElement("footer", null, "We are open in 8:00 Am"); old way without JSX
  const hour = new Date().getHours();
  const closeHour = 22;
  const openHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We are Open until {closeHour}:00 come visit us or order online.</p>
        ) : (
          <p>
            OPPs! We are currently Closed 🔒. Worked between {openHour}:00 to
            {closeHour}:00 .
          </p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
