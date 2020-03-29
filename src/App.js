import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { ListGroup, Card, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import racks from './mock-api/racks.json';
// import sites from './mock-api/sites.json'


class App extends Component {

  state = {
    racks: []
  }

  componentDidMount() {
    axios.get('https://netboxqa.xcade.net/api/dcim/racks/', {
      headers: {
        'Authorization': 'Token 467c528e78698047e8af1557597712c7e5073ad6'
      }
    })
    .then(response => {
      this.setState({
        racks: response.data.results
      })
    })
    .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Racks</h1>
        <Container fluid='false'>
          <Row>
            {this.state.racks.map((rack) => {
              return(
                <Card key={ rack.id }>
                  <Card.Body>
                    <Card.Title><strong>{ rack.name }</strong></Card.Title>
                    <ListGroup>
                      <ListGroup.Item><strong>Facility:</strong> { `${rack.facility_id}` }</ListGroup.Item>
                      <ListGroup.Item><strong>Display name:</strong> { `${rack.display_name}` }</ListGroup.Item>
                      <ListGroup.Item><strong>Site:</strong><a href='#'>Link to site</a></ListGroup.Item>
                      <ListGroup.Item><strong>Height:</strong> { `${rack.u_height} inches` }</ListGroup.Item>
                      <ListGroup.Item><strong>Created:</strong> { `${rack.created}` }</ListGroup.Item>
                      <ListGroup.Item><strong>Last updated:</strong> { `${rack.last_updated}` }</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              )
            })}
          </Row>
        </Container>
      </div>
    );

  }
}

export default App;
