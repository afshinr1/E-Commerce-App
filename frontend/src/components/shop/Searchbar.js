import React, { useState } from 'react'
import propstypes from 'prop-types'
export default function Searchbar(props) {
    const [input, setInput] = useState ('');

    function search(e){
        e.preventDefault();
        props.search(input);
    }

    Searchbar.propstypes = {
      search : propstypes.func.isRequired
    }

    return (
        <div className="search-container">
        <form onSubmit={search}>
          <input type="text" placeholder="Search.." onChange={e => setInput(e.target.value)} className="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    )
}
