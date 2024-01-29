import { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Tutors from "./components/tutors/Tutors";
import University from "./components/university/University";
import Cities from "./components/cities/cities";

class App extends Component {
  render() {
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
  }
}

export default App;
