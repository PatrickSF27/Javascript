<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <h1 id="meuId" name="meuNome" class="minhaClasse">Bem-vindo à minha página!</h1>
    <p name="meuNome" class="minhaClasse">Esta é a página principal.</p>
    <script>
        // 1. Faça uma mensagem de 'Olá Mundo’
        console.log("Olá Mundo");

        // 2. Faça uma saída de soma de 2 inteiros
        var num1 = 5;
        var num2 = 10;
        var soma = num1 + num2;
        console.log("A soma é: " + soma);

        // 3. Altera a propriedade de um elemento por id
        document.getElementById("meuId").style.color = "red";

        // 4. Altere a propriedade de um elemento por name
        var elementos = document.getElementsByName("meuNome");
        for(var i = 0; i < elementos.length; i++) {
            elementos[i].style.color = "blue";
        }

        // 5. Altere a propriedade de um elemento por class
        var elementos = document.getElementsByClassName("minhaClasse");
        for(var i = 0; i < elementos.length; i++) {
            elementos[i].style.color = "green";
        }
    </script>
</body>
</html>