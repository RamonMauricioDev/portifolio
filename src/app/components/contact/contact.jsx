import './contact.css';
import emailjs from '@emailjs/browser';
import { serviceID, templateID, publicKey } from '@/config/emailJS';

const Contact = () =>{
    function testEmail(){
        let readyToSend = true;
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        const inputList = [
            document.querySelector("#name"), document.querySelector("#email"), 
            document.querySelector("#subject"), document.querySelector("#message")
        ]

        //email
        if(validateEmail(inputList[1].value) == false){
            inputList[1].style.borderColor = "red";
            inputList[1].value = "";
            readyToSend = false;
            return false;
        }
        
        for(let i = 0; i < inputList.length; i++){
            if(inputList[i].value.trim() == ""){
                inputList[i].style.borderColor = "red";
                inputList[i].value = "";
                readyToSend = false;
                break;
            }else{
                inputList[i].style.borderColor = "green";
            }
            readyToSend = true;
        }

        console.log(readyToSend)
        
        if(readyToSend) {
            let test = {
                name: inputList[0].value,
                email: inputList[1].value,
                subject: inputList[2].value,
                message: inputList[3].value
            }

            inputList.map((index) => {
                index.value = "";
            })
            emailjs.send(serviceID, templateID, test, publicKey)
            .then(() => {
                console.log("Sucess");
            }, () =>{
                console.log('Fail...')
            })
        }
    }

    return(
        <div id='contact' className="contact">
            <h2>Contact Me</h2>
            <div className="contact-input-div">
                <input type="text" id="name" className="contact-input" placeholder="Name"/>
                <input type="text" id="email" className="contact-input" placeholder="Email"/>
                <input type="text" id="subject" className="contact-input" placeholder="Subject"/>
                <textarea type="text" id="message" className="contact-input big-input" placeholder="Message"/>
                <button className="contact-button" onClick={() => testEmail()}>Send</button>
                <div className="contact-links">
                    <a href='https://github.com/RamonMauricioDev' target='_blank'><img src="./github.png" alt="github" width={38}/></a>
                    <a href='https://www.linkedin.com/in/ramon-mauricio-1b0b8829b/' target='_blank'><img src="./linkedin.png" alt="github" width={38}/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact