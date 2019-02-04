

import React from 'react'
const form = props=>(
  <form onSubmit={props.getRecipe}>
    <input type="text" name="recipeName"/>
    <button>Search</button>
  </form>
)
export default form;