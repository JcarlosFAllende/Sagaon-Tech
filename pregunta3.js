//método del .map
const myCar =  [
    {
        model: 'Mustang',
        year: 1969
    },
    {
        model: 'Jeep ',
        year: 1940
    },
    {
        model: 'Essex ',
        year: 1918
    }
];

 const Mapeo = myCar.map((modelos) => (`modelo: ${modelos.model}`));
 console.log(Mapeo);

//usando for of
 const myCar =  [
    {
        model: 'Mustang',
        year: 1969
    },
    {
        model: 'Jeep ',
        year: 1940
    },
    {
        model: 'Essex ',
        year: 1918
    }
];
 for (const value  of myCar) {
  console.log("modelo: " +value.model);
}