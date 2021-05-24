export var Decorators;
(function (Decorators) {
    function tempoExecucao(segundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoChamado = descriptor.value;
            descriptor.value = function (...args) {
                console.log(`Parâmetro passado para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const valueReturnFunction = metodoChamado.apply(this, args);
                const t2 = performance.now();
                console.log(`Retorno do método ${propertyKey}: ${JSON.stringify(valueReturnFunction)}`);
                if (segundos == true) {
                    console.log(`O tempo de execução: ${(t2 - t1) * 1000}`);
                }
                else {
                    console.log(`O tempo de execução: ${t2 - t1}`);
                }
                return valueReturnFunction;
            };
            return descriptor;
        };
    }
    Decorators.tempoExecucao = tempoExecucao;
})(Decorators || (Decorators = {}));
