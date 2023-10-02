import "./Header.css"
import find from "../../src/assets/find.png";
import account from "../../src/assets/account.png";
import { useState } from "react";
function Header(){

    const [query, setQuery] = useState("");
    console.log(query)
    return(
        <div className="head">
            <h2><i>Seller Shop</i></h2>
            <div className="Searcher">
            <input  className="search" type="text" name="search" placeholder="Search for items" 
            value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <img src={find} alt="find" className="find"/>
            </div>
            <div className="profile">
            <img src={account} alt="account"/>
            </div>
        </div>
    )
}

export default Header