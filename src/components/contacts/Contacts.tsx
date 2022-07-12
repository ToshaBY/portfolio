import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../../common/styles/Container.module.scss";
import styleButton from "../../common/styles/Buttons.module.css";
import {Title} from "../../common/components/title/Title";

export const Contacts = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.contactsBlock}`} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>

                <form className={style.formContainer}>
                    <input type={'text'} placeholder={'Name'}/>
                    <input type={'text'} placeholder={'E-mail'}/>
                    <input type={'text'} placeholder={'Subject'}/>
                    <textarea placeholder={'Message'}/>
                </form>
                <button type='submit' className={styleButton.primary}>Send</button>
            </div>
        </div>
    );
})
