import classes from "./MealsSummery.module.css";

const MealsSummery = () => {
  return (
    <section className={classes.summery}>
      <h2>Delicious Food, delivered to you</h2>
      <p>
        Choose your favourite meal from our shop and enjoy delicious lunch or
        dinner at home
      </p>
      <p>
        {" "}
        All our meals are cooked with high quality ingridients , just in time
        ofcourse by experienced chef.
      </p>
    </section>
  );
};

export default MealsSummery;
