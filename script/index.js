const WRAPPER = document.getElementsByClassName('wrapper')[0];
const divMateria = document.getElementsByClassName('materia');

class Materia{
  habilitada;
  nombre;
  año;
  correlativas;

  constructor(nombre,año){
    this.nombre = nombre;
    this.año = año;
  }
  habilitar(){
    this.habilitada = true;
  }

  get aprobada() {
    return this.correlativas.length === 0 || this.correlativas.every(mat => mat.aprobada);
  }

  
  set añadir(pCorrelativas){
    this.correlativas = pCorrelativas;
  }
}
const Alumno = {
  materiasAprobadas:[],
  set aproboMateria(pMateria){
    if (!this.materiasAprobadas.includes(pMateria)) {
      this.materiasAprobadas.push(pMateria);
    }
  },
  get materiasPosibles() {
    let posibles = [];
    for (const materia of materiasObjetos) {
      if (
        !this.materiasAprobadas.includes(materia) &&
        (materia.correlativas.length === 0 || materia.correlativas.every(correl => this.materiasAprobadas.includes(correl)))
      ) {
        if (!materia.habilitada) {
          materia.habilitar();
        }
        posibles.push(materia);
      }
    }
    return posibles;
  }
  
  }
const materias = {
1:['Análisis Matemático 1','Álgebra y Geometría Analítica','Física 1','Inglés 1','Lógica y Estructuras Discretas','Algoritmos y Estructuras de Datos','Arquitectura de Computadoras','Sistemas y Procesos de Negocio'],
2:['Análisis Matemático 2','Física 2','Ingeniería y Sociedad','Inglés 2','Sintaxis y Semántica de los Lenguajes','Paradigmas de Programación','Sistemas Operativos','Análisis de Sistemas de Información [integradora]'],
3:['Probabilidades y Estadísticas','Economía','Bases de Datos','Desarrollo de Software','Comunicación de Datos','Análisis Numérico','Diseño de Sistemas de Información [integradora]','Seguridad Informatica (E)','Sistemas de Gestion Integral (E)'],
4:['Legislación','Ingeniería y Calidad de Software','Redes de Datos','Investigación Operativa','Simulación','Tecnologías para la Automatización','Administración de Sistemas de Información [integradora]','Pensamiento Computacional y Programacion (E)','Administracion de Bases de Datos (E)','Acustica Fisica (E)','Lenguajes, Computabilidad y Aplicaciones (E)'],
5:['Inteligencia Artificial','Ciencia de Datos','Sistemas de Gestión','Gestión Gerencial','Seguridad en los Sistemas de Información','Proyecto Final [integradora]',]
};
const correlativas = {
  'Análisis Matemático 1': [],
  'Álgebra y Geometría Analítica': [],
  'Física 1': [],
  'Inglés 1': [],
  'Lógica y Estructuras Discretas': [],
  'Algoritmos y Estructuras de Datos': [],
  'Arquitectura de Computadoras': [],
  'Sistemas y Procesos de Negocio': [],

  'Análisis Matemático 2': ['Análisis Matemático 1', 'Álgebra y Geometría Analítica'],
  'Física 2': ['Análisis Matemático 1', 'Física 1'],
  'Ingeniería y Sociedad': [],
  'Inglés 2': ['Inglés 1'],
  'Sintaxis y Semántica de los Lenguajes': ['Lógica y Estructuras Discretas', 'Algoritmos y Estructuras de Datos'],
  'Paradigmas de Programación': ['Lógica y Estructuras Discretas', 'Algoritmos y Estructuras de Datos'],
  'Sistemas Operativos': ['Arquitectura de Computadoras'],
  'Análisis de Sistemas de Información [integradora]': ['Algoritmos y Estructuras de Datos', 'Sistemas y Procesos de Negocio'],

  'Probabilidades y Estadísticas': ['Análisis Matemático 1', 'Álgebra y Geometría Analítica'],
  'Economía': ['Análisis Matemático 1', 'Álgebra y Geometría Analítica'],
  'Bases de Datos': ['Sintaxis y Semántica de los Lenguajes', 'Análisis de Sistemas de Información [integradora]', 'Lógica y Estructuras Discretas', 'Algoritmos y Estructuras de Datos'],
  'Desarrollo de Software': ['Paradigmas de Programación', 'Análisis de Sistemas de Información [integradora]', 'Lógica y Estructuras Discretas', 'Algoritmos y Estructuras de Datos'],
  'Comunicación de Datos': ['Física 1', 'Arquitectura de Computadoras'],
  'Análisis Numérico': ['Análisis Matemático 2', 'Análisis Matemático 1', 'Álgebra y Geometría Analítica'],
  'Diseño de Sistemas de Información [integradora]': ['Paradigmas de Programación', 'Análisis de Sistemas de Información [integradora]', 'Inglés 1', 'Algoritmos y Estructuras de Datos', 'Sistemas y Procesos de Negocio'],

  //ELECTIVAS
  'Seguridad Informatica (E)':[],
  'Sistemas de Gestion Integral (E)':[],
  'Pensamiento Computacional y Programacion (E)':['Diseño de Sistemas de Información [integradora]'],
  'Administracion de Bases de Datos (E)':[],
  'Acustica Fisica (E)':['Física 1','Análisis Numérico'],
  'Lenguajes, Computabilidad y Aplicaciones (E)':[],

  'Legislación': ['Ingeniería y Sociedad'],
  'Ingeniería y Calidad de Software': ['Bases de Datos', 'Desarrollo de Software', 'Diseño de Sistemas de Información [integradora]', 'Sintaxis y Semántica de los Lenguajes', 'Paradigmas de Programación'],
  'Redes de Datos': ['Sistemas Operativos', 'Comunicación de Datos'],
  'Investigación Operativa': ['Probabilidades y Estadísticas', 'Análisis Numérico'],
  'Simulación': ['Probabilidades y Estadísticas', 'Análisis Matemático 2'],
  'Tecnologías para la Automatización': ['Física 2', 'Análisis Numérico', 'Análisis Matemático 2'],
  'Administración de Sistemas de Información [integradora]': ['Economía', 'Diseño de Sistemas de Información [integradora]', 'Análisis de Sistemas de Información [integradora]'],

  'Inteligencia Artificial': ['Simulación', 'Probabilidades y Estadísticas', 'Análisis Numérico'],
  'Ciencia de Datos': ['Simulación', 'Probabilidades y Estadísticas', 'Bases de Datos'],
  'Sistemas de Gestión': ['Economía', 'Investigación Operativa', 'Diseño de Sistemas de Información [integradora]'],
  'Gestión Gerencial': ['Legislación', 'Administración de Sistemas de Información [integradora]', 'Economía'],
  'Seguridad en los Sistemas de Información': ['Redes de Datos', 'Administración de Sistemas de Información [integradora]', 'Desarrollo de Software', 'Comunicación de Datos'],

  'Proyecto Final [integradora]': [
    'Legislación', 'Ingeniería y Calidad de Software', 'Redes de Datos', 'Investigación Operativa', 'Simulación',
    'Tecnologías para la Automatización', 'Administración de Sistemas de Información [integradora]',
    'Diseño de Sistemas de Información [integradora]', 'Inteligencia Artificial', 'Ciencia de Datos',
    'Sistemas de Gestión', 'Gestión Gerencial', 'Seguridad en los Sistemas de Información'
  ]
};
var materiasObjetos = [];

function construirCorrelativas(pMateriasOBJETOS, pCorrelativas) {
  for (const nombreMateria in pCorrelativas) {
    const materiaOBJ = pMateriasOBJETOS.find(mat => mat.nombre === nombreMateria);
    const correlativasNombres = pCorrelativas[nombreMateria];
    const correlativasObjetos = correlativasNombres.map(nombre =>
      pMateriasOBJETOS.find(mat => mat.nombre === nombre)
    );
    materiaOBJ.añadir = correlativasObjetos;
  }
}
function construirMaterias(pMaterias){
  for (let año = 1; año < Object.keys(pMaterias).length + 1; año++) {
    pMaterias[año].forEach(materia => {
      var vMateria = new Materia(materia,año);
      materiasObjetos.push(vMateria);
    });
  }
};
function dibujarMaterias(pContenedor,pArrayMaterias){
  for (let año = 1; año < Object.keys(pArrayMaterias).length + 1; año++) {
    let arrayAño = pArrayMaterias[año];
    let divAño = document.createElement('div');

    divAño.classList.add('anio');
    pContenedor.appendChild(divAño);

    arrayAño.forEach(materia => {
      let divMateria = document.createElement('div');
      let objetoMateria = materiasObjetos.find((mat) => mat.nombre === materia);
      divMateria.innerHTML = materia;
      divMateria.classList.add('materia');
      
      if (objetoMateria.correlativas.length === 0){
        divMateria.classList.add('habilitada');
      }else{
        divMateria.classList.add('bloqueada');
      }
      divAño.appendChild(divMateria);
    })
  }
}
function obtenerValorObjeto(pElemento){
  let nombreDeLaMateria = pElemento.innerHTML;
  for (let i = 0; i < materiasObjetos.length; i++) {
    var materiaObjeto = materiasObjetos[i];
    if (materiaObjeto.nombre == nombreDeLaMateria){
      return {
        nombre: materiaObjeto.nombre,
        correlativas:materiaObjeto.correlativas,
        objeto:materiaObjeto
      }
    }
  }
}

function recalcularMateriasAprobadas() {
  let nuevasAprobadas = [];
  let cambios = true;
  
  while (cambios) {
    cambios = false;
    for (const materia of materiasObjetos) {
      if (nuevasAprobadas.includes(materia)) continue;

      const correlativas = materia.correlativas || [];
      if (correlativas.length === 0 || correlativas.every(correl => nuevasAprobadas.includes(correl))) {
        if (Alumno.materiasAprobadas.includes(materia)) {
          nuevasAprobadas.push(materia);
          cambios = true;
        }
      }
    }
  }

  Alumno.materiasAprobadas = nuevasAprobadas;
}




construirMaterias(materias);
construirCorrelativas(materiasObjetos,correlativas);
Alumno.materiasPosibles;
dibujarMaterias(WRAPPER,materias);

WRAPPER.addEventListener("click", (e) => {
  const materiaDIV = e.target;
  if (!materiaDIV.classList.contains("materia")) return;

  const materiaObjeto = obtenerValorObjeto(materiaDIV).objeto;

  // Si esta aprobada, la desmarca
  if (Alumno.materiasAprobadas.includes(materiaObjeto)) {
    Alumno.materiasAprobadas = Alumno.materiasAprobadas.filter(mat => mat !== materiaObjeto);
    recalcularMateriasAprobadas();
  } else if (materiaDIV.classList.contains("habilitada")) {
    // Si esta habilitada, la aprueba
    Alumno.aproboMateria = materiaObjeto;
  } else {
    // Si esta bloqueada no hace nada
    return;
  }

  // Reetea todas
  const divs = document.querySelectorAll('.materia');
  divs.forEach(div => {
    const mat = obtenerValorObjeto(div).objeto;

    if (Alumno.materiasAprobadas.includes(mat)) {
      div.className = 'materia desbloqueada';
    } else if (Alumno.materiasPosibles.includes(mat)) {
      div.className = 'materia habilitada';
    } else {
      div.className = 'materia bloqueada';
    }
  });
});


Array.from(divMateria).forEach((div => {
  div.addEventListener('mouseover', () => {
    if (!div.classList.contains("materia")) return;
    if (!div.classList.contains("habilitada")) return;

    const materiaActual = obtenerValorObjeto(div).objeto;

    const divs = document.querySelectorAll('.materia');

    for (const posible of materiasObjetos) {
      if (Alumno.materiasAprobadas.includes(posible)) continue;
      if (Alumno.materiasPosibles.includes(posible)) continue;
      if (!posible.correlativas.includes(materiaActual)) continue;

      const todasAprobadasExceptoEsta = posible.correlativas.every(correl =>
        correl === materiaActual || Alumno.materiasAprobadas.includes(correl)
      );

      if (todasAprobadasExceptoEsta) {
        divs.forEach(divMat => {
          if (divMat.innerHTML === posible.nombre) {
            divMat.classList.add('podriaCursar');
          }
        });
      }
    }
  });


  // Limpieza al salir
  div.addEventListener('mouseout', () => {
    const divs = document.querySelectorAll('.materia');
    divs.forEach(divMat => {
      divMat.classList.remove('podriaCursar');
    });
  });
}));
