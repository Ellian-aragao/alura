class Negociacao {
  
  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

  public get volume(): number {
    return this.valor * this.quantidade;
  }
}