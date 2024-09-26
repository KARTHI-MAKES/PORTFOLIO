import styles from './Contact.module.css'

function Contact() {
  return (
      <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>CONTACT</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text"
                       name='name'
                       id='name'
                       placeholder='Name' 
                       required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="email"
                       name='email'
                       id='email'
                       placeholder='Email'
                       required />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                       name='message'
                       id='message'
                       placeholder='Message'
                       required />
            </div>
            <input className='hover btn' type="submit" value="SUBMIT" />
        </form>
      </section>
  )
}

export default Contact;
