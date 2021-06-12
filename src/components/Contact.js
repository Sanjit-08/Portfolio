import React,{useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const[name,setName]=useState('');
    const [email,setEmail]=useState('');
    const[nameerror,setNameError]=useState('');
    const[emailerror,setEmailError]=useState('');
    const[message,setMessage]=useState('');


    const Validate = () => {

        let errors ={};

        if(!name){
            errors.name="Name cannot be blank!!";
            setNameError(errors.name);
            document.getElementById('error__message').style.background="#FFD2D2";
        }

        if(!email.includes("@")){
            errors.email="Invalid email";
            setEmailError(errors.email);
            document.getElementById('error__email').style.background="#FFD2D2"
        }

        if(Object.keys(errors).length!==0){
            return false;
        }

        return true;
    }


    const sendEmail = (e) => {

        e.preventDefault();


        const isValid= Validate();

        if(isValid){
            var formname=name;
            var formemail=email;
            var formmessage=message;
            setName('');
            setEmail('');
            setMessage('');
            setNameError('');
            setEmailError('');
            document.getElementById('error__message').style.background="none";
            document.getElementById('error__email').style.background="none";


        var template_params={
            from_name:formname,
            to_name:'Sanjit',
            user_email:formemail,
            message:formmessage

        }

        var service_id='service_ome2u4b';
        var template_id='template_rlsa6cw';
        var user_id='user_HL0Rlx7c8SzMhxLCSvQKM';

        emailjs.send(service_id, template_id, template_params, user_id)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        } 
    }
    return (
        <div className="contact">
            <div className="row">
            <div className="contact__contactsection">
            <h2 className="contact__heading">CONTACT ME</h2>

            <form onSubmit={sendEmail} className="contact__form" id="form">
                <div className="contact__formgroup">
                    <label for="name" className="contact__label">Name</label>
                    <input type="text" className="contact__input" id="name" placeholder="Enter your name" autoComplete="nope" autoFocus="on"  value={name} onChange={(e)=>setName(e.target.value)} ></input>
                    <div className="contact__error__message" id="error__message">{nameerror}</div>
                </div>

                <div className="contact__formgroup">
                    <label for="email" className="contact__label">Email</label>
                    <input type="email" className="contact__input" id="email" placeholder="Enter your email" autoComplete="off"  value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                    <div className="contact__error__message" id="error__email">{emailerror}</div>
                </div>

                <div className="contact__formgroup">
                    <label for="message" className="contact__label">Message</label>
                    <textarea className="contact__textareainput" id="message" placeholder="Message..." rows="10" cols="60" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>

                <button type="submit" className="contact__submit" id="submit">Send</button>

            </form>
            </div>

            <div className="contact__accountsection">
                <div className="contact__emailbox">
                    <h4 className="contact__emailbox--text">EMAIL</h4>
                    <a href="mailto:kurarsanjit8@gmail.com" className="contact__emailbox--email">kurarsanjit8@gmail.com</a>
                </div>
                <div className="contact__websection">
                    <h4 className="contact__websection--text">ON THE WEB</h4>
                    <a href="https://www.linkedin.com/in/sanjit-kurar-892bb3184/" className="contact__websection--link1" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-4x"></i></a>
                    <a href="https://github.com/Sanjit-08" className="contact__websection--link2" target="_blank" rel="noreferrer"><i class="fab fa-github fa-4x"></i></a>
                </div>
            </div>
        </div>
        </div> 
      );
}
 
export default Contact;