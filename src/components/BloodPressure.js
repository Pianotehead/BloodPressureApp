import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './BloodPressure.module.css';
import Measurement from './Measurement';

const BloodPressure = () => {
  return (
    <section>
      <Row className={classes.headerRow}>
         <Col>Date</Col>
         <Col>Time</Col>
         <Col>Systolic</Col>
         <Col>Diastolic</Col>
         <Col>Pulse</Col>
         <Col>EHS Classification</Col>
         <Col>Warning</Col>
      </Row>
      <Measurement />
    </section>
  )
}

export default BloodPressure