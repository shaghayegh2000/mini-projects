const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
            <div className="container">
                <div className="row w-100">
                    <div className="col mt-2">
                        <i className="fa fa-id-badge"></i>
                        {" "}Contact manager web application 
                        <span className="contacts">Contacts</span>
                    </div>
                    <div className="col">
                        <div className="input-group mx-2 w-75">
                            <span className="px-3 input-group-text input" id="basic-addon1">
                                <i className="fa fa-search"></i>
                            </span>
                            <input 
                            className="rounded-2 form-control textInput" 
                            type="text" 
                            placeholder="Search contact"
                            aria-label="search"
                            aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;