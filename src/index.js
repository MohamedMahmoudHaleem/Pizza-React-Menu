import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
/*******Pizza's data********/
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
/*****end of data*******/
/***style object ***/
// const headStyle = {
//   color: "red",
//   border: "1px solid black",
//   padding: "20px",
//   background: "yellow",
// };

///our app//////
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// header
function Header() {
  // return <h1 style={headStyle}>FAST REACT PIZZA CO.</h1>;
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>;
    </header>
  );
}
// menu
function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>

      {numPizza > 0 ? (
        //react fragments
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working in our menu. Please come back later :)</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut);

  return (
    <li className={pizzaObj.soldOut ? `pizza sold-out` : `pizza`}>
      <img className={pizzaObj.soldOut ? `pizza sold-out img` : null} src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
// footer

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;
  console.log(isOpen); // true or false

  // if (!isOpen) return <p>Cloooosed</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} openHour={openHour} />
      ) : (
        <p style={{ textAlign: "center", padding: "10px" }}>
          We're happy to welcome you from {openHour}:00 to {closedHour}:00 . Come visite us or order online.
        </p>
      )}
    </footer>
  );
}
function Order({ closedHour }) {
  return (
    <div className="order">
      <p>We're open untill {closedHour}:00. come visit us or order online </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);
