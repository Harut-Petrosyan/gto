import React from 'react'

function Shop() {
  return (
    <div>
        <header>
            <h1 className=' bg-black' height={50}>Shop</h1>
            <div className=' flex gap-18 justify-around'>
                <img width={370} height={250} src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/V7NSFDQZDVLJ5G74LWPXWBXKZQ.jpg' alt=''/>
                <img width={300} src='https://ir.ozone.ru/s3/multimedia-w/c1000/6689908148.jpg' alt=''/>
                <img width={300} src='https://miro.medium.com/v2/resize:fit:1400/1*zBRkcBbsjWzcPjtcxqhb3Q.jpeg' alt=''/>
                <img width={300} src='https://exploringjs.com/impatient-js/img-homepage/cover-homepage.jpg' alt=''/>
            </div>
            <p>250000$</p>
            <button>BUY ALL</button>
        </header>
    </div>
  )
}

export default Shop
