import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { create } from '../Services/Beers';

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    };
    this.sendMessage = this.handleForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleForm(event) {
    // ...
    event.preventDefault();
    const data = {
      name: event.target[0].value,
      tagline: event.target[1].value,
      description: event.target[2].value,
      first_brewed: event.target[3].value,
      brewers_tips: event.target[4].value,
      attenuation_level: Number(event.target[5].value),
      contributed_by: event.target[6].value
    };
    console.log(typeof data.attenuation_level);
    create(data);
  }

  handleInputChange(event) {
    const value = event.target;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleForm} method="POST">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
          <Form.Label>Tagline</Form.Label>
          <Form.Control name="tagline" type="text" placeholder="Enter tagline" />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" placeholder="Enter description" />
          <Form.Label>First Brewed</Form.Label>
          <Form.Control name="first_brewed" type="text" placeholder="Enter First Brewed" />
          <Form.Label>Atenuation Level</Form.Label>
          <Form.Control
            name="attenuation_level"
            type="number"
            placeholder="Enter Atenuation Level"
          />
          <Form.Label>Contribuited By</Form.Label>
          <Form.Control name="contributed_by" type="text" placeholder="Enter Contribuited By" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
