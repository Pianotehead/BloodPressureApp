import classes from './MainNavigation.module.css';
import logo from './bloodprmonitor3.png';

const MainNavigation = () => {
   return (
      <header className={classes.header}>
         <div className={classes.logo}>
            <p>Blood Pressure Measurements</p>
            <span>
               <img className="w-75" src={logo} alt="logo" />
            </span>
         </div>
      </header>
   )
}

export default MainNavigation