import img from '../../img/address-book-telephone.png'

import css from './Home.module.css'

export const Home = () => {

    return(
        <div className={css.wrapper}>
           
            <div>
                <h1 className={css.title}>Welcome to the PhoneBook App</h1>
                <img className={css.img} src={img} alt="telephone" />
            </div>
            
        </div>
    )
}  


