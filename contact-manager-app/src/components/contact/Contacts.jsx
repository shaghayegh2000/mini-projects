import {Fragment} from "react";
import styles from '../../css modules/Contacts.module.css';
import Contact from './Contact';
import NotFound from '../../assets/no-found.gif';
import Spinner from "../Spinner ";

const Contacts = ({contacts , loading}) => {
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
            {
                loading ? <Spinner/> : (
                    <section className="container">   
            <div className="row">
                {
                    contacts.length > 0 ? Contacts.map((c) => (
                    <Contact key={c.id} Contact={c}/>
                    )) : 
                    (
                        <div className="text-center py-5">
                            <p className="h3">
                                Contact not found!
                            </p>
                            <img src={NotFound} alt="not found" className="w-25" />
                        </div>
                    )
                }
            </div>
            </section>
                )
            }
        </Fragment>
    )
}

export default Contacts;