import React from 'react'
import cardImg from "../assets/cardimg.jpg"

const CardList = () => {

  const data = [
    {
        id: 1,
        title: "card1",
        subtitle: "This is card1",
        image: "kjdnksn",
    },
    {
        id: 2,
        title: "card2",
        subtitle: "This is card2",
        image: "kjdnksn",
    },
    {
        id: 3,
        title: "card3",
        subtitle: "This is card3",
        image: "kjdnksn",
    },
  ];

  return (
    <div className='text-white md:px-4'>
        <h2 className='pt-10 pb-5 text-lg font-medium'>Upcoming</h2>

        <div>
            {data.map((item) => (
                <div>
                    <img src={ cardImg } alt="Image" />
                    <p>{ item.title }</p>
                </div>
            ))}
        </div>
    </div>

    
  )
}

export default CardList