const Default = require('./general/default')
const Home = require('./pages/home')
const Department = require('./pages/departmento')
const Product = require('./pages/produto')
const Institutional = require('./pages/institucional')

const bodyClass = document.querySelector("body").classList[0].replace(/-/g, "");

const dictionaryInit = {
  home: () => Home.init(),
  departamento: () => Department.init(),
  categoria: () => Department.init(),
  resultadobusca: () => Department.init(),
  marca: () => Department.init(),
  institucional: () => Institutional.init(),
  faleconosco: () => Institutional.init(),
  produto: () => Product.init(),
};

Default.init();
dictionaryInit[bodyClass]();