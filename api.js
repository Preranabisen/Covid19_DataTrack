/* eslint-disable prettier/prettier */
const axios = require('axios');
const randomPromise = Promise.resolve(200);

const api = {
  // login function
  covid() {
    console.log('test');
    const headers = {
      'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
      'x-rapidapi-key': '078f21da51msh949341a3ab08a8ep1873abjsn0a9e904cfe71',
    };
    return axios
      .get('https://corona-virus-world-and-india-data.p.rapidapi.com/api', {             //Make a request for a user with a given ID
        headers: headers,                  // headers that the server responded with
      })
      .then(res => {               // then method is used to handle the result
        console.log('datares', res);          //handle success
        return res.data;           // if the promises is fulfilled then this method is called
      })
      .catch(err => {
        console.log(err);           // handle error
        return err;                 // if the promises is rejected then this method is called
      });
  },
};


export default api;

