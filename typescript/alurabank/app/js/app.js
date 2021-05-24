import { Controller } from './controllers/NegociacaoController';
const negociacaoController = new Controller.NegociacaoController();
document.querySelector('.form').addEventListener('submit', negociacaoController.adicionaNegociacao.bind(negociacaoController));
