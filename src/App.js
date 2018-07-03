import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    let courtCases0 = [
      {
        caseID: 1,
        caseState: "finished"
      },
      {
        caseID: 2,
        caseState: "finished"
      },
      {
        caseID: 3,
        caseState: "finished"
      },
      {
        caseID: 4,
        caseState: "finished"
      },
      {
        caseID: 5,
        caseState: "onHold"
      },
      {
        caseID: 6,
        caseState: "finished"
      },
      {
        caseID: 7,
        caseState: "running"
      },
      {
        caseID: 8,
        caseState: "default"
      },
      {
        caseID: 9,
        caseState: "default"
      },
      {
        caseID: 10,
        caseState: "default"
      },
      {
        caseID: 11,
        caseState: "finished"
      },
      {
        caseID: 12,
        caseState: "default"
      },
      {
        caseID: 13,
        caseState: "default"
      },
      {
        caseID: 14,
        caseState: "default"
      },
      {
        caseID: 15,
        caseState: "default"
      },
      {
        caseID: 16,
        caseState: "default"
      },
      {
        caseID: 17,
        caseState: "default"
      },
      {
        caseID: 18,
        caseState: "default"
      },
      {
        caseID: 19,
        caseState: "default"
      },
      {
        caseID: 20,
        caseState: "default"
      },
      {
        caseID: 21,
        caseState: "default"
      },
      {
        caseID: 22,
        caseState: "default"
      },
      {
        caseID: 23,
        caseState: "default"
      },
      {
        caseID: 24,
        caseState: "default"
      },
      {
        caseID: 25,
        caseState: "default"
      },
      {
        caseID: 26,
        caseState: "default"
      },
      {
        caseID: 27,
        caseState: "default"
      }
    ];

    let court0 = { title: "εφετείο", date: "12.12.2018", courtCases: courtCases0 };

    this.state = {
      court: court0
    };
  }

  toggleButtonState = event => {
    console.info("pressed button with id:" + event.target.getAttribute("caseid"));
    let caseIDString = event.target.getAttribute("caseid");
    let caseID = parseInt(caseIDString, 10);
    console.info("caseID number:" + caseID);
    let theCourt = this.state.court;
    let oldCaseState = theCourt.courtCases[caseID - 1].caseState;
    console.info("oldCaseState:" + oldCaseState);
    let newCaseState = "default";

    switch (oldCaseState) {
      case "running":
        newCaseState = "onHold";
        break;
      case "onHold":
        newCaseState = "finished";
        break;
      case "finished":
        newCaseState = "default";
        break;
      default:
        newCaseState = "running";
    }

    theCourt.courtCases[caseID - 1].caseState = newCaseState;
    console.info("newCaseState:" + newCaseState);
    this.setState({ court: theCourt });
  };

  getButtonCSSBasedOnCourtState = state => {
    switch (state) {
      case "onHold":
        return "app__main__court__button onHold";
      case "finished":
        return "app__main__court__button finished";
      case "running":
        return "app__main__court__button running";
      default:
        return "app__main__court__button";
    }
  };
  // todo μετά να αποθηκεύεται κάπου αυτή η state (σε έναν server ο οποίος με API θα ρωτάται.
  //  Το θέμα είναι πώς γίνεται αυτόματα update όταν αλλάξει κάτι στον server. Γινόμαστε κάπου subscribe?)
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">Supreme</div>
          <div className="App-title-description">Ενημέρωση εξέλιξης πινακίου</div>
        </header>
        <main className="app__main">
          {this.state.court.courtCases.map(aCourtCase => {
            return (
              <div
                className={this.getButtonCSSBasedOnCourtState(aCourtCase.caseState)}
                key={aCourtCase.caseID}
                caseid={aCourtCase.caseID}
                onClick={this.toggleButtonState}
              >
                {aCourtCase.caseID}
              </div>
            );
          })}
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
