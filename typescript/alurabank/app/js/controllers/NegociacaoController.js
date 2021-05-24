var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Decorators } from '../decorators/TempoExecusao';
export var Controller;
(function (Controller) {
    class NegociacaoController {
        constructor() {
            this._negociacoes = new Negociacoes();
            this._negociacoesView = new View.NegociacoesView('#negociacoesView');
            this._mensagemView = new View.MensagemView('#mensagemView');
            this._inputQuantidade = document.querySelector('#quantidade');
            this._inputValor = document.querySelector('#valor');
            this._inputData = document.querySelector('#data');
            this._negociacoesView.update(this._negociacoes);
        }
        adicionaNegociacao(event) {
            event.preventDefault();
            const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputValor.value), parseFloat(this._inputQuantidade.value));
            this._negociacoes.add(negociacao);
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update('Negociação adicionada com sucesso');
        }
    }
    __decorate([
        Decorators.tempoExecucao()
    ], NegociacaoController.prototype, "adicionaNegociacao", null);
    Controller.NegociacaoController = NegociacaoController;
})(Controller || (Controller = {}));
