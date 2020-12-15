import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Investment in travel is an investment in Yourself!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/new-waterfall.jpg'
                            text='Finding a  hidden waterfall in an Amamzon Forest'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/himalaya-mountain.jpg'
                            text='Experience of Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/cebu-island.jpg'
                            text='Enjoy in Cebu Island'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/atlantic-ocean.jpg'
                            text='Set Sail in the Atlantic Ocean'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/maldives-beach.jpg'
                            text='Chilling in Maldives Beach'
                            label='Mystery'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/dubai-luxury.jpg'
                            text='Luxurious stay in Dubai'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/malaysia-luxury.jpg'
                            text='Vacations in Malaysia'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/uk-hotel.jpg'
                            text='Spending time in England'
                            label='Luxury'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/paris-dinner.jpg'
                            text='Dinner with view of Paris'
                            label='Luxury'
                            path='/sign-up'
                        />
                    </ul>

                    <p>"Of all the books in the world, the best stories are found between the pages of a passport."</p>

                </div>
            </div>
        </div>
    );
}

export default Cards;
