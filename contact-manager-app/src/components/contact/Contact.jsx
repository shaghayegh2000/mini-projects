import styles from '../../css modules/Contacts.module.css'

const contact = () => {
    return (
        <div className="col-md-6">
        <div className="card my-5">
            <div className="card-body">
                <div className=" row align-items-center d-flex justify-content-around">
                    <div className="col-md-4 col-sm-4">
                        <img className="img-fluid rounded" src="https://via.placeholder.com/200" alt="" />
                    </div>
                    <div className="clo-md-7 col-sm-7">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark">
                                Name : {" "}
                                <span className="fw-bold">shaghayegh</span>
                            </li>

                            <li className="list-group-item list-group-item-dark">
                                Phone Number : {" "}
                                <span className="fw-bold">+98936123456</span>
                            </li>

                            <li className="list-group-item list-group-item-dark">
                                Email Adress : {" "}
                                <span className="fw-bold">shqayqm145@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="buts col-sm-1 d-flex flex-column align-items-center justify-items-between">
                        <span className={styles.orange}>
                            <button className="btn">
                                <i className="fa fa-eye"></i>
                            </button>
                        </span>
                        <span className={styles.blue}>
                            <button className="btn">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </span>
                        <span className={styles.red}>
                            <button className="btn">
                                <i className="fa fa-trash"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>   
    </div>
    )
}

export default contact;