var View;
(function (View_1) {
    class View {
        constructor(IdSelector) {
            this._elemento = document.querySelector(IdSelector);
        }
        update(model) {
            this._elemento.innerHTML = this.template(model);
        }
    }
    View_1.View = View;
})(View || (View = {}));
