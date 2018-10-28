import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';

import RouterLink from 'react-metismenu-router-link';
import { Row, Col } from 'react-bootstrap';
import 'react-loading-bar/dist/index.css';
import { Menu } from './Menu';
import { AssetList } from './AssetList';
import { AssetCreate } from './AssetCreate';
import { AssetDetails } from './AssetDetails';
import { store } from '../../helpers';
import Dashboard from './Dashboard';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Row>
            <Col md="2" className="menu-fake" />
            <Col md="2" className="menu-wrapper bg-dark">
              <MetisMenu
                className="bg-dark"
                content={Menu}
                LinkComponent={RouterLink}
                activeLinkFromLocation
                store={store}
              />
            </Col>
            <Col md="10" className="page-wrapper">
              <Switch>
                <Route path="/beneficio/dashboard" component={Dashboard} />
                <Route
                  path="/beneficio/cafe-clasificado"
                  component={AssetList}
                />
                <Route path="/beneficio/cafe-recibido" component={AssetList} />
                <Route path="/beneficio/assets/crear" component={AssetCreate} />
                <Route
                  path="/beneficio/assets/:id/detalles"
                  component={AssetDetails}
                />
              </Switch>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

const home = connect(mapStateToProps)(Home);
export { home as Home };
