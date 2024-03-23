import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon} from "../../assets/Search-icon.svg";

function Search({placeholder}) {
    return (
        <div>
            <div>
            <input
                name="album"
                className={styles.search}
                placeholder={placeholder}
                required
                // {...getInputProps()}
            />
            </div>
            <div>
                <button className={styles.searchButton} type="submit">
                    <SearchIcon/>
                </button>
            </div>
        </div>
    )
}

export default Search