function check() {
  var element=document.getElementById('number');
  var n=BigInt(element.value);
  if(n<2n){alert("これはそすうじゃないです。そうっすね〜");return;}
  if(n==2n){alert("これは素数ですね");return;}
  if(n%2n==0n){alert("これはそすうじゃないです。そうっすね〜");return;}
  for (var i = BigInt(3); i*i <=n;i++){if(n%i==0){alert("これはそすうじゃないです。そうっすね〜");return;}}alert("これは素数ですね");return;}
