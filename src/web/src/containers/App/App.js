import React from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';
import { HomePage } from '../HomePage/HomePage';
import { Home as BeneficioHome } from '../Beneficio/Home';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/beneficio" component={BeneficioHome} />
      </Switch>
    );

    return (
      <div className="h-100">
        <NotificationContainer />
        <Header />
        <Router history={history}>{routes}</Router>
        <Footer />
      </div>
    );
  }
}

const connectedApp = connect()(App);
export { connectedApp as App };
