<?php
echo "Olá mundo, suave irmão?" . PHP_EOL;

$idade = 15;
echo "$idade possui o tipo -> " . gettype($idade) . PHP_EOL;

$idadeLimite = 18;
if ($idade < $idadeLimite) {
    echo "menor de \"$idadeLimite\" não pode entrar";
} elseif ($idade == $idadeLimite) {
    echo "deu sorte bora";
} else {
    echo "pode entrar";
}
echo PHP_EOL;

$array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for ($i = 0; $i < count($array); $i++) {
    echo "$array[$i], ";
}
echo PHP_EOL;

$contasCorrente = [
    101 => [
        'nome' => 'robertinho',
        'conta' => '504265'
    ],
    202 => [
        'nome' => 'josé',
        'conta' => '502456'
    ],
    303 => [
        'nome' => 'maria',
        'conta' => '503298'
    ]
];
foreach ($contasCorrente as $valorConta => $conta) {
    echo $valorConta['nome'] . PHP_EOL;
}
