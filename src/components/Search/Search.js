import { FaSearch } from 'react-icons/fa';
import './Search.css'

function Search() {
    return(
        <div className='search'>
            <input type='text' placeholder='Qualquer lugar'></input>
            <input type='text' placeholder='Qualquer semana'></input>
            <input type='text' placeholder='Hóspedes'></input>
            <button> <FaSearch /> </button>
        </div>
    );
}

export default Search;