import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      court_name: "default court",
      buttons: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">Supreme</div>
          <div className="App-title-description">Ενημέρωση εξέλιξης πινακίου</div>
        </header>
        <main className="app__main">
          <div class="app__main__court__button finished">1</div>
          <div class="app__main__court__button finished">2</div>
          <div class="app__main__court__button finished">3</div>
          <div class="app__main__court__button on-hold">4</div>
          <div class="app__main__court__button finished">5</div>
          <div class="app__main__court__button on-hold">6</div>
          <div class="app__main__court__button finished">7</div>
          <div class="app__main__court__button finished">8</div>
          <div class="app__main__court__button finished">9</div>
          <div class="app__main__court__button current">10</div>
          <div class="app__main__court__button">11</div>
          <div class="app__main__court__button">12</div>
          <div class="app__main__court__button">13</div>
          <div class="app__main__court__button">14</div>
          <div class="app__main__court__button">15</div>
          <div class="app__main__court__button">16</div>
          <div class="app__main__court__button">17</div>
          <div class="app__main__court__button">18</div>
          <div class="app__main__court__button finished">19</div>
          <div class="app__main__court__button">20</div>
          <div class="app__main__court__button finished">21</div>
          <div class="app__main__court__button">22</div>
          <div class="app__main__court__button">23</div>
          <div class="app__main__court__button">24</div>
          <div class="app__main__court__button">25</div>
          <div class="app__main__court__button">26</div>
        </main>
        <footer eader className="App-footer">
          <div className="App-footer__time">10:15:27</div>
        </footer>
      </div>
    );
  }
}

export default App;
