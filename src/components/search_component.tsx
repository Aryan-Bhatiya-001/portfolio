import { useState } from "react"
import styles from './search_component.module.css';

function Search_Component() {
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState("")

    const sendSearch =async () => {
        const response = await fetch(`http://127.0.0.1:8000/search?query=${searchValue}`)
        const result = await response.json()

        console.log(result)
        setSearchResult(result.searchResult);
    }

    const handleEnter = (e: { key: string; }) => {
        if (e.key === "Enter"){
            sendSearch();
        }
    }

    return(
        <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    placeholder="Search..." 
                    value={searchValue} 
                    onChange={(e)=>{setSearchValue(e.target.value)}}
                    onKeyDown={handleEnter}
                />
                <button className={styles.searchButton} onClick={sendSearch}>Search</button>
            </div>
            {searchResult && <p className={styles.searchResult}>Result: {searchResult}</p>}
        </div>
    )
}

export default Search_Component