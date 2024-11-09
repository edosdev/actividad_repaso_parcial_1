import React from 'react'

function Mensaje({ message }) {
  return (
    <div class="alert alert-danger" role="alert">
      {message}
    </div>
  )
}

export default Mensaje