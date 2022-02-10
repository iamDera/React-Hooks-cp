import React from 'react';

 function SearchBar({setSearch}) {
  return (
   <div>
       <input
       placeholder='Type here to search'
       //value={value}
       onChange={(e) => setSearch(e.target.value)}

       />

   </div>
  )
}


export default SearchBar;



