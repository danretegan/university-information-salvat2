import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Tutors from "./components/tutors/Tutors";
import University from "./components/university/University";
import Cities from "./components/cities/cities";

const App = () => {
  console.log("Yes! Primul meu hook!");
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <University />
        <Tutors />
        <Cities />
      </section>
    </main>
  );
};

export default App;
