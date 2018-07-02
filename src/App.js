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
  // todo να βρείς πώς στέλνεις το index του κουμπιού που πατήθηεκα ωστε να καταχωρήσεις το toggle του στον πινακα
  toggleButtonState = event => {
    console.log(event.currentTarget.button_id);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">Supreme</div>
          <div className="App-title-description">Ενημέρωση εξέλιξης πινακίου</div>
        </header>
        <main className="app__main">
          <div
            className="app__main__court__button finished"
            button_id={1}
            onClick={button_id => this.toggleButtonState(button_id)}
          >
            1
          </div>
          <div className="app__main__court__button finished" value={2} onClick={this.toggleButtonState}>
            2
          </div>
          <div className="app__main__court__button finished" value={3} onClick={this.toggleButtonState}>
            3
          </div>
          <div className="app__main__court__button on-hold">4</div>
          <div className="app__main__court__button finished">5</div>
          <div className="app__main__court__button on-hold">6</div>
          <div className="app__main__court__button finished">7</div>
          <div className="app__main__court__button finished">8</div>
          <div className="app__main__court__button finished">9</div>
          <div className="app__main__court__button current">10</div>
          <div className="app__main__court__button">11</div>
          <div className="app__main__court__button">12</div>
          <div className="app__main__court__button">13</div>
          <div className="app__main__court__button">14</div>
          <div className="app__main__court__button">15</div>
          <div className="app__main__court__button">16</div>
          <div className="app__main__court__button">17</div>
          <div className="app__main__court__button">18</div>
          <div className="app__main__court__button finished">19</div>
          <div className="app__main__court__button">20</div>
          <div className="app__main__court__button finished">21</div>
          <div className="app__main__court__button">22</div>
          <div className="app__main__court__button">23</div>
          <div className="app__main__court__button">24</div>
          <div className="app__main__court__button">25</div>
          <div className="app__main__court__button">26</div>
        </main>
        <footer className="App-footer">
          <div className="App-footer__copyright">Δικηγορικός Σύλλογος Κομοτηνής</div>
          <div className="App-footer__time">10:15:27</div>
        </footer>
      </div>
    );
  }
}

export default App;
