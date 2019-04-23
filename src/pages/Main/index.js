import React, { Component } from 'react';

import moment from 'moment';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList/index';

export default class Main extends Component {
  state = {
    respositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (event) => {
    event.preventDefault();
    try {
      const { data: repository } = await api.get(`/repos/${this.state.respositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        respositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github comparte" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Usuario/repositório"
            value={this.state.respositoryInput}
            onChange={event => this.setState({ respositoryInput: event.target.value })}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
