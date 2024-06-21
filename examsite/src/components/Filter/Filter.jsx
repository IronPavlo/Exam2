import { useState } from 'react'

function Filter() {

  const[q,setQ]=useState("")
  const [searchParam] =useState(["name"])

  return (
    <>
    
      <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search for..."
                   value={q}
                  /*
                  // set the value of our useState q
                  //  anytime the user types in the search box
                  */
                 onChange={(e) => setQ(e.target.value)}
                />
               <span className="sr-only">Search</span>
                </label>
          </div>
       </div>

    </>
  )
}

export default Filter