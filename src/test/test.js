import {assert} from 'chai';
import {
  payload,
  people
} from '../serialization';
// you can ge row data form payload.js file

describe('payload', function () {

  // in this tests try to use as least as possible number of assignments

  it('car quantity with owners older than 20 years', function () {

    let answer;

    answer = payload.data.filter((maschinen) => {

      return maschinen.type === 'Car' &&

        maschinen.owners.filter((owner) => {

          return owner.personalInfo.age > 20

        }).length > 0;

    }).length;

    assert.equal(answer, 2);

  });

  it('all car colors separated by comma without duplicates', function () {

    let answer;
    const colorList = [];

    payload.data.forEach((maschinen) => {

      const color = maschinen.attrs.color;

      if (maschinen.type === 'Car' && colorList.indexOf(color) === -1) {
        colorList.push(color);
      }

    });

    answer = colorList.join();
    assert.equal(answer, 'red,yellow');

  });

  it('id\'s of all vehicles separated by comma', function () {

    let answer;

    const vehicles = ['Car', 'Bicycle'];
    const vehiclesId = [];

    payload.data.forEach((maschinen) => {

      if (vehicles.indexOf(maschinen.type) >= 0) {
        vehiclesID.push(maschinen.id)
      }

    });

    answer = vehiclesID.join();
    assert.equal(answer, '1,3,6,4,2');

  });

  it('summary price of all items', function () {

    let answer;

    answer = payload.data.map(item => item.attrs.price)
                    .reduce((prev, current) => {
                      return prev + current;
                    });

    assert.equal(answer, 42800);

  });

  it('price of all things john has own', function () {

    let answer;
    answer = 0;

    payload.data.forEach((maschinen) => {

      const ownerJohnCount = maschinen.owners.filter((owner) => {
        return owner.firstName === 'john';
      }).length;

      if (ownerJohnCount > 0) {
        answer += maschinen.attrs.price;
      }

    });

    assert.equal(answer, 25000);

  });

  it('all cities', function () {

    let answer;
    const cities = [];

    for (var man in people) {
      people[man].cities.forEach((city) => {
        if (cities.indexOf(city) === -1) {
          cities.push(city)
        }
      });
    }

    answer = cities.join();
    assert.equal(answer, 'New York,Boston,Columbia,Rapture');

  });
});
