import React, {useRef} from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../../common/styles/Container.module.scss";
import styleButton from "../../common/styles/Buttons.module.scss";
import {Title} from "../../common/components/title/Title";
import emailjs from '@emailjs/browser';

export const Contacts = React.memo(() => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fuzsh09', 'template_nvww3si', form.current, '1_IsLIEfF25NBzdkq')
            .then((response) => {
                // console.log(response.text);
                alert('Message successfully sent!')
                window.location.reload(false)
            }, (error) => {
                alert('Failed to send the message, please try again')
                // console.log(error.text);
            });
    };


    return (
        <div className={`${styleContainer.block} ${style.contactsBlock}`} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact me'}/>
                <form ref={form} className={style.formContainer} onSubmit={sendEmail}>
                    <input type={'text'}
                           placeholder={'Name'}
                           name={'user_name'}
                           required/>
                    <input type={'email'}
                           placeholder={'E-mail'}
                           name={'user_email'}
                           required/>
                    <input type={'text'}
                           placeholder={'Subject'}
                           name={'subject'}
                           required/>
                    <textarea placeholder={'Message'}
                              name={'message'}
                              required/>
                    <button type={'submit'}
                            className={styleButton.primary}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
})
