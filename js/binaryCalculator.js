  <!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
        <div id="res">000</div>
        <div id="btns">
            
            <button id="btn0" class="btnclass">0</button>
            <button id="btn1" class="btnclass">1</button>
            <button id="btnClr" class="btnclass">C</button>
            <button id="btnEql" class="btnclass">=</button>
            <button id="btnSum" class="btnclass">+</button>
            <button id="btnSub" class="btnclass">-</button>
            <button id="btnMul" class="btnclass">*</button>
            <button id="btnDiv" class="btnclass">/</button>
                
        </div>
        
    </body>
    <script>
        let res = document.querySelector("#res");
        res.innerHTML = "hello"
        let btn0 = document.querySelector("#btn0");
        let btn1 = document.querySelector("#btn1");
        let btnClr = document.querySelector("#btnClr");
        let btnEql = document.querySelector("#btnEql");
        let btnSum = document.querySelector("#btnSum");
        let btnSub = document.querySelector("#btnSub");
        let btnMul = document.querySelector("#btnMul");
        let btnDiv = document.querySelector("#btnDiv");

        
        
    </script>


</html>