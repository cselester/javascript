<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>

    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        input[type=text] {
            padding: 8px;
            margin-bottom: 10px;
            width: 80%;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .calc button,#refresh {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            margin: 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .calc button,#refresh:hover {
            background-color: #45a049;
        }

        #display {
            margin-top: 15px;
            padding: 8px;
            width: 80%;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form>
        <input type="text" id="one" placeholder="Enter first number"><br>
        <input type="text" id="two" placeholder="Enter second number"><br>
        <div class="calc">
            <button type="button" onclick="add()">Add</button>
            <button type="button" onclick="sub()">Subtract</button>
            <button type="button" onclick="multiply()">Multiply</button>
            <button type="button" onclick="divide">Divide</button><br>
        </div>
        <input id="display" readonly>
        <button type="button" onclick="refresh()" id="refresh">Refresh</button>
    </form>

    <script>
        function add() {
            var x = document.getElementById("one").value;
            var y = document.getElementById("two").value;
            document.getElementById("display").value = parseInt(x) + parseInt(y);
        }

        function sub() {
            var x = document.getElementById("one").value;
            var y = document.getElementById("two").value;
            document.getElementById("display").value = parseInt(x) - parseInt(y);
        }

        function multiply() {
            var x = document.getElementById("one").value;
            var y = document.getElementById("two").value;
            document.getElementById("display").value = parseInt(x) * parseInt(y);
        }

        function divide() {
            var x = document.getElementById("one").value;
            var y = document.getElementById("two").value;
            document.getElementById("display").value = parseInt(x) / parseInt(y);
        }

        function refresh() {
            currentResult = undefined;
            document.getElementById("one").value = "";
            document.getElementById("two").value = "";
            document.getElementById("display").value = "";
        }
    </script>
</body>
</html>
