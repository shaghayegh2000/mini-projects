import {Fragment} from "react";
import styles from '../../css modules/Contacts.module.css';

const Contacts = () => {
    return (
        <Fragment>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <span className={styles.button}>
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
                <div className="col-md-6">
                    <div className="card my-4">
                        <div className="card-body">
                            <div className=" row align-items-center d-flex justify-content-around">
                                <div className="col-md-4 col-sm-4">
                                    <img className="img-fluid rounded" src="https://via.placeholder.com/200" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clo-md-7 col-sm-7">
                    <ul className="list-group"></ul>
                </div>
            </div>
            </section>
        </Fragment>
    )
}

export default Contacts;