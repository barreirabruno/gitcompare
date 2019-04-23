import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(respository => (
      <Repository key={respository.id}>
        <header>
          <img src={respository.owner.avatar_url} alt="facebook" />
          <strong>{respository.name}</strong>
          <small>{respository.owner.login}</small>
        </header>
        <ul>
          <li>
            {respository.stargazers_count}
            <small> stars</small>
          </li>
          <li>
            {respository.forks_count}
            <small> forks</small>
          </li>
          <li>
            {respository.open_issues_count}
            <small> issues</small>
          </li>
          <li>
            {respository.lastCommit}
            <small> last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
