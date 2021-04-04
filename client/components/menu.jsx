import React, {useState, useEffect} from 'react'

function Munu(){

  const [resouceType, setResouceType] = useState('login');

useEffect (() => {
	fetch('some-url')	
	.then (res => res.json())
	.then(json => console.log(json))
}, [resouceType]);

return(
	<div>
		<button onClick={() => setResouceType(‘wardrobe’)}>Wordrobe</button>
		<button onClick={() => setResouceType(‘accessory’)}>Accessory</button>
    <h1>{resouceType}</h1>
	</div>
)
}

export default Menu;