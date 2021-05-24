var View;
(function (View) {
    class NegociacoesView extends View.View {
        constructor(IdSelector) {
            super(IdSelector);
        }
        template(model) {
            return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
  
            <tbody>
              ${model.toArray().map(negociacao => `
                  <tr>
                      <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                      <td>${negociacao.quantidade}</td>
                      <td>${negociacao.valor}</td>
                      <td>${negociacao.volume}</td>
                  </tr>                        
              `).join('')} 
            </tbody>
  
            <tfoot>
            </tfoot>
        </table>               
        `;
        }
        ;
    }
    View.NegociacoesView = NegociacoesView;
})(View || (View = {}));
