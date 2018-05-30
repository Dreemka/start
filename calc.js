function calc() {
  var num1, result, chek1, chek2, per, ver, ker;

  num1 = 20;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);




 if ( h1.checked )
 per = 0;
 else if  ( h2.checked )
 per = 30;
 else if  ( h3.checked )
 per = 40;
 else
 per = 10;

 if ( v1.checked )
 ver = 0;
 else if  ( v2.checked )
 ver = 30;
 else if  ( v3.checked )
 ver = 40;
 else
 ver = 10;








  result = 20 + num1 * (per + ver);
  document.getElementById('out').innerHTML = result;
}
