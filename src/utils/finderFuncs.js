import Providences from './allCities';

export const findProvidence = (input) => {
  if (input) {
    const regex = new RegExp(input, 'gi');
    const matches = [];
    for (let city in Providences) {
      if (city.match(regex)) {
        matches.push(city);
      }
    }
    return matches;
  } else return [];
};

export const findOneCity = (Providence, input) => {
  if (input) {
    const regex = new RegExp(input, 'gi');
    const matches = [];
    for (let city of Providences[Providence]) {
      if (city.match(regex)) {
        matches.push(city);
      }
    }
    return matches;
  } else return [];
};