import React, { useContext } from 'react';
import WeatherCardSimplify from '../WeatherCardSimplify/WeatherCardSimplify';
import { AppContext } from '../../context/context';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const WeatherCardList = () => {
    const { cards } = useContext(AppContext);
    
    return (
        <main className='main'>
            <TransitionGroup>
                {cards.map(({ id }) => (
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames='item-transition'
                    >
                        <WeatherCardSimplify id={id} />
                    </CSSTransition>
                ))}
            

            </TransitionGroup>
        </main>
        
    )
}

export default WeatherCardList;