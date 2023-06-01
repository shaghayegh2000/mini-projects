import {Fragment} from "react";
import styles from '../../css modules/Contacts.module.css';
import Contact from './Contact'

const Contacts = () => {
    return (
        <Fragment>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <span className={styles.createContact}>
                                    <button className="btn text-white">
                                        Create new contact {" "}
                                        <i className="fa fa-plus-circle"></i>
                                    </button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">   
            <div className="row">
                <Contact/>
            </div>
            </section>
        </Fragment>
    )
}

export default Contacts;