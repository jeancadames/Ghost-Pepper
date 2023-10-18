import { useState } from 'react';
import { platesData } from '../data/platesData'
import { menuOpt } from '../data/menuOptions';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Menu = () => {

    const [menuOption, setMenuOption] = useState('Breakfast');

    const onClickMenu = (e) => {
        setMenuOption(e.target.innerText);
    }

  return (
    <section className="section container" id="menu">
            <h1 className="section-title">Our special menu</h1>
            <div className="menu">
                <div className="menu-container">
                    <div className="menu-options">
                        <ul>
                            {
                                menuOpt.map(option => (
                                    <li key={option.id} className={menuOption === option.menu ? 'active' : ''} onClick={(e) => onClickMenu(e)}>{option.menu}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="plates-container">
                    {
                        platesData.filter((plate => plate.type === menuOption)).map(plate => ( 
                            <>
                                <div className="plate-img">
                                    <img src={`src/assets/${plate.type}-${plate.id}.jpg`} alt=""/>
                                </div>
                                <div className="plate-desc">
                                    <div className="desc-container">
                                        <h4>{plate.title}</h4>
                                        <small>{plate.description}</small>
                                        <span>${plate.price}</span>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
  )
}
