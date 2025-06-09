function showName(){
     const name=document.getElementById('name').value 
     const email=document.getElementsById('email').value
   const registerno=document.getElementsById('registerno').value
    const department=document.getElementsById('department').value
    document.getElementsById('result').innerText=`
    ${name} ${email} ${registerno} ${department}
}