<?php
function ifeelse()
{

    $idade = 15;
    mensageEndl("$idade possui o tipo -> " . gettype($idade));

    $idadeLimite = 18;
    if ($idade < $idadeLimite) {
        mensageEndl("menor de \"$idadeLimite\" não pode entrar");
    } elseif ($idade == $idadeLimite) {
        mensageEndl("deu sorte bora");
    } else {
        mensageEndl("pode entrar");
    }
}
function arrayDeclaration()
{
    $array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for ($i = 0; $i < count($array); referenciaIncrementa($i)) {
        echo "$array[$i], ";
    }
    echo PHP_EOL;
}
function arrayDinamico()
{
    $contasCorrente = [
        101 => [
            'nome' => 'robertinho',
            'conta' => '504265'
        ],
        202 => [
            'nome' => 'josé',
            'conta' => '502456'
        ]
    ];
    $contasCorrente[303] = [
        'nome' => 'maria',
        'conta' => '503298'
    ];

    foreach ($contasCorrente as $valorConta => $conta) {
        ['nome' => $nome, 'conta' => $Nconta] = $conta;
        mensageEndl("$valorConta -> $nome -> $Nconta");
    }
}
function referenciaIncrementa(&$a)
{
    $a++;
}
function mensageEndl($mensagem)
{
    echo $mensagem . PHP_EOL;
}
function splitDoPhp()
{
    $nomes = "Amanda, Ellian, Roberto, Nicolas";
    $arrayNomes = explode(", ", $nomes);
    foreach ($arrayNomes as $nome) {
        mensageEndl("nome: {$nome}");
    }
    mergeStrings($arrayNomes);
}
function mergeStrings($array)
{
    mensageEndl("now concat array");
    $arrayToBiggerString = implode("; ", $array);
    mensageEndl($arrayToBiggerString);
}
function removeItemArray($item, &$array) {
    $position = array_search($item, $array);
    unset($array[$position]);
}
