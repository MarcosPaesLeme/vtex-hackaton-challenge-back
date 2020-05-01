'use strict'
const request = require('requests');
const axios = require('axios');

exports.getDistanceInfo = async function (user, company) {
  try {
    return await axios.get(`http://router.project-osrm.org/route/v1/car/${user.location[1]},${user.location[0]};${company.location[1]},${company.location[0]}?overview=simplified`)
      .then(function (response) {
        // handle success
        return response.data.routes[0];
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  } catch (err) { }
};