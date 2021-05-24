namespace View {
	export class MensagemView extends View<string> {
	
		constructor(IdSelector: string) {
			super(IdSelector);
		}
	
		template(model: string): string {
			return `<p class="alert alert-info">${model}</p>`;
		}
	}
}