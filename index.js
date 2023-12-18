const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const submit = document.getElementsByClassName('a')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <b>First Name: </b>${fname.value}&nbsp;${lname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>phone: </b>${phone.value}
    
    `;


    console.log("Clicked");
    Email.send({
      SecureToken : "2aec51f2-a1ae-447f-96d5-013465fed2c4",
      To : 'gujarat.pharma108@gmail.com',
      From : "gujarat.pharma108@gmail.com",
      Subject : "Customer Details",
      Body : ebody
  }).then(
    message => alert("your massage send sucsess")
  );
     

});