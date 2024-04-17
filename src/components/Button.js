import React from 'react'
function doSomething() {
    console.log(123);

}
function Button() {
  return (
    <div>
        <button onClick={doSomething()}>Click Me</button>
    </div>
  )
}

export default Button
