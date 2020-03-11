import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
});

/* const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('beers')
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  }); */

const list = async () => {
  try {
    const theList = await instance.get('/beers');
    const data = theList.data;
    console.log('is this working???', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const single = async id => {
  try {
    const theSingle = await instance.get(`/beers/${id}`);
    const data = theSingle.data;
    console.log('is this working???', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* const single = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/${id}`)
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  }); */

/* const random = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/beers/random`)
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  }); */

const random = async () => {
  try {
    const someOne = await instance.get(`/beers/random`);
    const data = someOne.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
