import { Link } from 'react-router-dom';
import css from './Slider.module.css';

import pizza1 from '../../assets/slidePizza1.jpeg';
import pizza2 from '../../assets/slidePizza2.jpg';
import pizza3 from '../../assets/slidePizza3.png';
import pizza4 from '../../assets/slidePizza4.jpg';


const Slider = () => {
    
    setTimeout(() => {
        const slides = document.querySelectorAll('.pizza');
        slides.forEach((slide) => slide.classList.add(css.pizza));
    }, 1200);



    return (
        <>
            <div className={css.contSlider} >
                <div className={css.contSlides} >

                    <Link to='/allpizzas' >
                        <img src={pizza1} alt='pizza' className={`pizza`} />
                        <div className={`${css.infoPizza1} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Supreme</h3>
                            <p>Mozzarella Cheese - Scallions - Thyme</p>
                            <h2 className={css.pizzaName} >$399</h2>
                        </div>
                        <div className={`${css.contBtn1} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                    </Link>

                    <Link to='/allpizzas' >
                        <img src={pizza2} alt='pizza' className={`pizza`} />
                        <div className={`${css.infoPizza2} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Meat lovers</h3>
                            <p>Mozzarella Cheese - Scallions - Thyme</p>
                            <h2 className={css.pizzaName} >$399</h2>
                        </div>
                        <div className={`${css.contBtn2} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                    </Link>
                    <Link to='/allpizzas' >
                        <img src={pizza3} alt='pizza' className={`pizza`} />
                        <div className={`${css.infoPizza3} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Chicken Alfredo</h3>
                            <p>Mozzarella Cheese - Scallions - Thyme</p>
                            <h2 className={css.pizzaName} >$399</h2>
                        </div>
                        <div className={`${css.contBtn3} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                    </Link>
                    <Link to='/allpizzas' >
                        <img src={pizza4} alt='pizza' className={`pizza`} />
                        <div className={`${css.infoPizza4} ${css.infoPizza}`} >
                            <h3 className={css.pizzaName} >Pepperoni</h3>
                            <p>Mozzarella Cheese - Scallions - Thyme</p>
                            <h2 className={css.pizzaName} >$399</h2>
                        </div>
                        <div className={`${css.contBtn4} ${css.contBtn}`} >
                            <button className={css.orderBtn} >Order now!</button>
                        </div>
                    </Link>
                </div>

              
            </div>
        </>
    );
};



export default Slider;