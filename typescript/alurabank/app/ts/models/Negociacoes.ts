class Negociacoes {

  private _negociacoes: Negociacao[] = [];

  public add(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  public toArray(): Negociacao[] {
    return [].concat(this._negociacoes);
  }
}