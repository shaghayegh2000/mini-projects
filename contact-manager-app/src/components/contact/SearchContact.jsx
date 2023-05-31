import styles from '../../css modules/SearchContact.module.css';

const SearchContact = () => {
    return (
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
        
    )
}

export default SearchContact;