import Header from "./components/Header";
import Banner from "./components/Banner";
import img from "./assets/pizza.avif"
import Restaurant from "./components/Restaurant";


function App() {
  return (
    <div className="app">
      <Header restaurantName="Your Restaurant" />
      <Restaurant/>
      <Banner
        title="Fast food, made fresh, right to your door"
        subtitle="Explore Our Menu"
        imageURL= {img}
      />
    </div>
  );
}

export default App;
