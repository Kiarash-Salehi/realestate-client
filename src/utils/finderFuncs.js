import cities from './allCities';

export const findeOneCity = (input) => {
  if (input) {
    const regex = new RegExp(input, 'gi');
    const matches = [];
    for (let city in cities) {
      if (city.match(regex)) {
        matches.push(city);
      }
    }
    console.log(matches);
  }
};

export const findArea = (city, input) => {
  if (input) {
    const regex = new RegExp(input, 'gi');
    console.log(city);
    const matches = [];
    for (let area of cities[city]) {
      if (area.match(regex)) {
        matches.push(area);
      }
    }
    console.log(matches);
  }
};