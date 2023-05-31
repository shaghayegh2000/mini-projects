import SearchContact from "./contact/SearchContact";
import styles from '../css modules/Navbar.module.css';

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg ">
            <div className="container">
                <div className="row w-100">
                    <div className="col mt-2">
                        <span className={styles.contacts}>
                            <i className="fa fa-id-badge"></i>
                        </span>
                        {" "}Contact manager web application {" "}
                        <span className={styles.contacts}>Contacts</span>
                    </div>
                    <div className="col">
                        <SearchContact/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;