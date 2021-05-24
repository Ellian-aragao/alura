var View;
(function (View) {
    class MensagemView extends View.View {
        constructor(IdSelector) {
            super(IdSelector);
        }
        template(model) {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
    View.MensagemView = MensagemView;
})(View || (View = {}));
