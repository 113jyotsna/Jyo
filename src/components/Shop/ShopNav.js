import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopNav() {
    let name = useParams()

    return(
        <div className='overflow-hidden'>
            <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700'>
                {name.collection === undefined && <h1>  </h1>}
                {name.collection === 'airPurifying' && <h1>Entertainment </h1>}
                {name.collection === 'beginner' && <h1>Beginner Friendly</h1>}
                {name.collection === 'pet-friendly' && <h1>User Friendly</h1>}
                {name.collection === 'succulents' && <h1>Other</h1>}
            </div>
            <div className='font-body text-gray-600 text-center'>
                {name.collection === undefined && <p>Registering for events has never been easier</p>}
                {name.collection === 'airPurifying' && <p>Breathe easy with these refrshing events.</p>}
                {name.collection === 'beginner' && <p>Easy to care use, even for first time users. </p>}
                {name.collection === 'pet-friendly' && <p>Safe events for a carefree enjoyment.</p>}
                {name.collection === 'succulents' && <p>Beautiful small events that can lighten your mood.</p>}
            </div>

            <div className='flex flex-wrap space-y-2 md:space-y-0 space-x-2 md:space-x-4 w-full items-end
            justify-center md:mt-6 mb-6 md:mb-12 font-body text-gray-700'>
                <Link to={'/shop'} className={name.collection === undefined && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Register All</button>
                </Link>
                <Link to={`/shop/airPurifying`} className={name.collection === 'airPurifying' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Entertainment</button>
                </Link>
                <Link to={`/shop/beginner`} className={name.collection === 'beginner' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Beginner Friendly</button>
                </Link>
                <Link to={`/shop/pet-friendly`} className={name.collection === 'pet-friendly' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>User Friendly</button>
                </Link>
                <Link to={`/shop/succulents`} className={name.collection === 'succulents' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Other</button>
                </Link>
            </div>
        </div>
    )
}

export default ShopNav