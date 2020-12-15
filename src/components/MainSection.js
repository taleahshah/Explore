import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            <h1>Live with Adventure</h1>
            <p>We travel to change. Not to change places, but ideas!</p>
            <div className='main-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

            </div>
        </div>
    )
}

export default MainSection
