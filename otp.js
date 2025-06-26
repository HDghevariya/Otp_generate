// create otp 
// function otp()
// {
//     result = document.write(Math.floor(Math.random()))
//     document.getElementById('otp').innerHTML = result;
// }
// document.write(result)

// function OTP() {
   
//     // Declare a digits variable
//     // which stores all digits
//     let digits = '0123456789';
//     let OTP = '';
//     for (let i = 0; i < 6; i++) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//     }
//     return OTP;
// }

// console.log("OTP of 6 digits: ")
// console.log(OTP());
// document.write("<br>")
// document.write("OTP of 6 digits: ")
// document.write(OTP());


// secound way to generate otp
// const generateOtp =()=>{
//     let otp =" ";
//     for(let i=0; i<6; i++)
//     {
//         otp += Math.floor(Math.random()*10)
//     }
//     // return otp; // this will return otp in string
//     return Number(otp); //this will return otp in number
// }
// console.log("otp is : ",generateOtp());

// button click 
function generateOtp(){
    let digits = '0123456789';
    let otp = '';
    for(let i=0; i<6; i++)
    {
        let store = Math.floor(Math.random()*10)
        otp += digits[store];

    }
    document.getElementById('otp1').innerHTML = otp;
}