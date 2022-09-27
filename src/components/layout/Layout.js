import BloodPressure from '../BloodPressure';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';


const Layout = () => {
   return (
      <div className={classes.card}>
         <MainNavigation />
         <main className={classes.main}>
            <BloodPressure />
         </main>
      </div>
   )
}

export default Layout;