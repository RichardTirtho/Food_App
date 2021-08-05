import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Mealitem from "./Mealitem";
const Dummy_meals = [
  {
    id: "m1",
    name: "Burger",
    description: "sausage delight",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Meat theory",
    price: 15.75,
  },
  {
    id: "m3",
    name: "Sushi",
    description: "Finest fish & veges",
    price: 13.32,
  },
  {
    id: "m4",
    name: "Meat Loaf",
    description: "Chiken paste with garlic mayo",
    price: 14.5,
  },
];

const AvailableMeals = () => {
  const mealslist = Dummy_meals.map((meals) => (
    <Mealitem
      key={meals.id}
      id ={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    ></Mealitem>
  ));
  return (
    <section className={classes.meal}>
      <Card>
        <ul> {mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
