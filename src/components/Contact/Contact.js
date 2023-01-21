import emailjs from '@emailjs/browser';
import Button from '../Button/Button'
import './Contact.css'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let send_btn = document.querySelector('button[type="submit"]');
    console.log(send_btn);

    let params = {
      from_name: name.value,
      email_id: email.value,
      message: message.value
    }

    send_btn.setAttribute('disabled', true);
    send_btn.innerHTML = 'Sending...';

    emailjs.send('service_3hc3jth', 'template_0100zpb', params, 'R4R-XitmBesSZBT7Q')
      .then(() => {
          send_btn.setAttribute('disabled', false);
          send_btn.innerHTML = 'Sent';
          name.value = '';
          email.value = '';
          message.value = '';
      }, (error) => {
        console.log(error);
          send_btn.innerHTML = 'Error occured';
          name.value = '';
          email.value = '';
          message.value = 'You can always react out to me @parneet.s.sarao@gmail.com';
      });

      setTimeout(() => {
        send_btn.setAttribute('disabled', false);
        send_btn.innerHTML = 'Send';
      }, 4000);
  };


  return (
    <div className='contact-container' id='contact'>
      <div className="contact">
        <div className="heading">
          &#47;&#47; Message Me
        </div>
        <form onSubmit={sendEmail} className='contact-form'>
          <input className='input' id='name' type="text" name='name' placeholder='Name' required />
          <input className='input' id='email' type="email" name='email' placeholder='your_email@xyz.com' required/>
          <textarea className='textarea' id='message' name="message" cols="30" rows="10" placeholder="what's on your mind !" required></textarea>
          <Button name='Send' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default Contact
