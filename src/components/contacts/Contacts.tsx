import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../../common/styles/Container.module.scss";
import styleButton from "../../common/styles/Buttons.module.css";
import {Title} from "../../common/components/title/Title";

export const Contacts = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.contactsBlock}`}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>

                <form className={style.formContainer}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea/>
                </form>
                <button type='submit' className={styleButton.primary}>Send</button>
            </div>
        </div>
    );
})
