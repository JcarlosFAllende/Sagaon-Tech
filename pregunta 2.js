let personas = [
    {
      nombre: 'Miguel',
      apellido: 'Pacheco',
      edad: 19,
      peso: 61,
      estatura: 1.80
    },
    {
        nombre: 'Sebastian',
        apellido: 'Gomez',
        edad: 21,
        peso: 58,
        estatura: 1.72
      },
    {
        nombre: 'Fernando',
        apellido: 'Rodriguez',
        edad: 20,
        peso: 63,
        estatura: 1.78
    } 
  ]

  const Mapeo = personas.map((persona) => (`nombre: ${persona.nombre}`));
 console.log(Mapeo);
