import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Banner from "./components/Banner";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import Footer from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Banner} />
          <div className="container">
            <Route
              path="/wallet"
              render={props => (
                <div>
                  <Balance />
                  <IncomeExpenses />
                  <TransactionList />
                  <AddTransaction />
                </div>
              )}
            />
          </div>
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
