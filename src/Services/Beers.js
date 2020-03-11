import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
});

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('beers')
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

const single = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/${id}`)
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

const random = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/random`)
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

const create = data =>
  new Promise((resolve, reject) => {
    instance
      .post(`/beers/new`, data)
      .then(result => {
        console.log(result);
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

export { list, single, random, create };
