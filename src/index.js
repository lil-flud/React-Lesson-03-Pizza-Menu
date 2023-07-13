import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "49px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// =======MENU NOTES======= //
{
  /* pizzaData.map is making an array out of each object in pizzaData as we described it in the code*/
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu:</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone over, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* 
      REPLACED BY ABOVE CODE RENDERING A LIST INSTEAD OF EACH INDIVIDUAL COMP
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price="12"
      /> */}
    </main>
  );
}
// {pizzaObj} in the place of props is how you destructure the props.
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  const afterTax = pizzaObj.price * 1.07;

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>

        {/* Less clean than alt, left for reference. 
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>
            {pizzaObj.soldOut ? "Sold out" : "$" + afterTax.toFixed(2)}
          </span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + afterTax.toFixed(2)}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  //   let openClosed =
  //     hour >= openHour && hour <= closeHour
  //       ? alert("We're currently open!")
  //       : alert("Sorry, we're closed");

  const isOpen = hour >= openHour && hour <= closeHour;
  const openCloseMess = isOpen ? "We're currently open!" : "We're closed";

  // if (!isOpen) return <p>CLOSED!</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're closed, we welcome you to return between {openHour}:00 PM and{" "}
          {closeHour}:00 PM.
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}. {openCloseMess} */}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open! From {openHour}:00 to {closeHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
