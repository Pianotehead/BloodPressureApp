import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './BloodPressure.module.css';
import Measurement from './Measurement';

const BloodPressure = () => {
  return (
    <section>
      <div className={`${classes.headerRow} row fw-bold bg-info sticky-top`}>
         <div className="col border border-dark">Date</div>
         <div className="col border border-dark">Time</div>
         <div className="col border border-dark">Systolic</div>
         <div className="col border border-dark">Diastolic</div>
         <div className="col-1 border border-dark">Pulse</div>
         <div className="col border border-dark">EHS Classification</div>
         <div className="col border border-dark">Warning</div>
      </div>
      <Measurement />
    </section>
  )
}

export default BloodPressure