namespace View {
  export abstract class View<T> {
    protected _elemento: Element;

    constructor(IdSelector: string) {
      this._elemento = document.querySelector(IdSelector);
    }

    public update(model: T): void {
      this._elemento.innerHTML = this.template(model);
    }

    public abstract template(model: T): string
  }
}