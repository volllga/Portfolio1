[Руководство по оформлению Markdown файлов](https://gist.github.com/Jekins/2bf2d0638163f1294637/ "Необязательная подсказка")
.water {                
transform: ...;     
}

***
# TRANSLATE
> center from 0, 0 moves to x, y 

translate(10px, 20px);   

> As the transformation is applied based on the element itself, with units it's the same thing.
> there will be two square: one above other

.water {
position: absolute;
top: 10px;
left: 10px;
background-color: mediumaquamarine;
width: 200px;
height: 200px;
}

.ice {
position: absolute;
top: 10px;
left: 10px;
background-color: cornflowerblue;
width: 200px;
height: 200px;
transform: translate(10%, 30px);
}


***
#  ROTATE

>An angle with a positive value will rotate the element clockwise,
> an angle with a negative value will rotate it counter-clockwise.
> angle is measured from the horizontal axis

rotate(45deg);
transform: translate(10%, 30px) rotate(60deg);


rotate()
skew()
scale()