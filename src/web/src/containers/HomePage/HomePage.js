import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home bg-dark">
        <div className="bg-dark">
          <div className="h-100-vh">
            <div className="container h-100">
              <a href="/beneficio/cafe-recibido">Beneficio</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

const homepage = connect(mapStateToProps)(HomePage);
export { homepage as HomePage };
