import {Decorators} from '../decorators/TempoExecusao';

export namespace Controller {
  export class NegociacaoController {
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _inputData: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new View.NegociacoesView('#negociacoesView');
    private _mensagemView = new View.MensagemView('#mensagemView');
  
    constructor() {
      this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
      this._inputValor = <HTMLInputElement>document.querySelector('#valor');
      this._inputData = <HTMLInputElement>document.querySelector('#data');
      this._negociacoesView.update(this._negociacoes);
    }
  
    @Decorators.tempoExecucao()
    public adicionaNegociacao(event: Event) {
      event.preventDefault();
      const negociacao = new Negociacao(
        new Date(this._inputData.value.replace(/-/g, ',')),
        parseInt(this._inputValor.value),
        parseFloat(this._inputQuantidade.value)
      );
  
      this._negociacoes.add(negociacao);
      this._negociacoesView.update(this._negociacoes);
      this._mensagemView.update('Negociação adicionada com sucesso');
    }
  }
}