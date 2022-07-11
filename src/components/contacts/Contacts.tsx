import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../../common/styles/Container.module.css";
import styleButton from "../../common/styles/Buttons.module.css";

export const Contacts = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.contactsBlock}`}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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
