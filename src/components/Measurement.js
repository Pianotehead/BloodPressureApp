import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const bloodpressures = [
   {
     "Date": "10-Sep-2022",
     "Time": "05:44 PM",
     "Systolic": "142 mmHg",
     "Diastolic": "87 mmHg",
     "Pulse": "86 bpm",
     "Classification": "Systolic Hypertension",
     "Data": "Irregular Heartbeat"
   },
   {
     "Date": "10-Sep-2022",
     "Time": "05:45 PM",
     "Systolic": "138 mmHg",
     "Diastolic": "96 mmHg",
     "Pulse": "86 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "10-Sep-2022",
     "Time": "05:46 PM",
     "Systolic": "139 mmHg",
     "Diastolic": "95 mmHg",
     "Pulse": "85 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "11-Sep-2022",
     "Time": "10:12 AM",
     "Systolic": "153 mmHg",
     "Diastolic": "103 mmHg",
     "Pulse": "58 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "11-Sep-2022",
     "Time": "10:13 AM",
     "Systolic": "145 mmHg",
     "Diastolic": "97 mmHg",
     "Pulse": "59 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "11-Sep-2022",
     "Time": "10:15 AM",
     "Systolic": "146 mmHg",
     "Diastolic": "94 mmHg",
     "Pulse": "61 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "11-Sep-2022",
     "Time": "09:53 PM",
     "Systolic": "154 mmHg",
     "Diastolic": "105 mmHg",
     "Pulse": "74 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "11-Sep-2022",
     "Time": "09:55 PM",
     "Systolic": "151 mmHg",
     "Diastolic": "103 mmHg",
     "Pulse": "70 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "11-Sep-2022",
     "Time": "09:57 PM",
     "Systolic": "148 mmHg",
     "Diastolic": "104 mmHg",
     "Pulse": "74 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "12-Sep-2022",
     "Time": "06:45 AM",
     "Systolic": "147 mmHg",
     "Diastolic": "99 mmHg",
     "Pulse": "73 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "12-Sep-2022",
     "Time": "06:47 AM",
     "Systolic": "148 mmHg",
     "Diastolic": "101 mmHg",
     "Pulse": "69 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "12-Sep-2022",
     "Time": "06:48 AM",
     "Systolic": "146 mmHg",
     "Diastolic": "100 mmHg",
     "Pulse": "73 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "12-Sep-2022",
     "Time": "10:01 PM",
     "Systolic": "155 mmHg",
     "Diastolic": "96 mmHg",
     "Pulse": "86 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "12-Sep-2022",
     "Time": "10:03 PM",
     "Systolic": "168 mmHg",
     "Diastolic": "98 mmHg",
     "Pulse": "86 bpm",
     "Classification": "High BP - Stage 2",
     "Data": "Irregular Heartbeat"
   },
   {
     "Date": "12-Sep-2022",
     "Time": "10:04 PM",
     "Systolic": "148 mmHg",
     "Diastolic": "98 mmHg",
     "Pulse": "89 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "12:45 AM",
     "Systolic": "146 mmHg",
     "Diastolic": "102 mmHg",
     "Pulse": "81 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "09:52 AM",
     "Systolic": "148 mmHg",
     "Diastolic": "101 mmHg",
     "Pulse": "64 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "09:54 AM",
     "Systolic": "140 mmHg",
     "Diastolic": "98 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "09:55 AM",
     "Systolic": "148 mmHg",
     "Diastolic": "101 mmHg",
     "Pulse": "69 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "09:54 PM",
     "Systolic": "134 mmHg",
     "Diastolic": "97 mmHg",
     "Pulse": "75 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "09:55 PM",
     "Systolic": "134 mmHg",
     "Diastolic": "94 mmHg",
     "Pulse": "73 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "13-Sep-2022",
     "Time": "09:57 PM",
     "Systolic": "137 mmHg",
     "Diastolic": "96 mmHg",
     "Pulse": "74 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "14-Sep-2022",
     "Time": "08:08 AM",
     "Systolic": "137 mmHg",
     "Diastolic": "90 mmHg",
     "Pulse": "65 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "14-Sep-2022",
     "Time": "08:09 AM",
     "Systolic": "136 mmHg",
     "Diastolic": "94 mmHg",
     "Pulse": "61 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "14-Sep-2022",
     "Time": "08:10 AM",
     "Systolic": "143 mmHg",
     "Diastolic": "93 mmHg",
     "Pulse": "61 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "14-Sep-2022",
     "Time": "11:33 PM",
     "Systolic": "149 mmHg",
     "Diastolic": "98 mmHg",
     "Pulse": "60 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "14-Sep-2022",
     "Time": "11:34 PM",
     "Systolic": "156 mmHg",
     "Diastolic": "99 mmHg",
     "Pulse": "62 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "14-Sep-2022",
     "Time": "11:35 PM",
     "Systolic": "150 mmHg",
     "Diastolic": "99 mmHg",
     "Pulse": "62 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "15-Sep-2022",
     "Time": "09:25 AM",
     "Systolic": "140 mmHg",
     "Diastolic": "94 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "15-Sep-2022",
     "Time": "09:26 AM",
     "Systolic": "131 mmHg",
     "Diastolic": "90 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "15-Sep-2022",
     "Time": "09:27 AM",
     "Systolic": "131 mmHg",
     "Diastolic": "91 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "15-Sep-2022",
     "Time": "09:49 PM",
     "Systolic": "140 mmHg",
     "Diastolic": "88 mmHg",
     "Pulse": "68 bpm",
     "Classification": "Systolic Hypertension",
     "Data": ""
   },
   {
     "Date": "15-Sep-2022",
     "Time": "09:50 PM",
     "Systolic": "150 mmHg",
     "Diastolic": "104 mmHg",
     "Pulse": "69 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "15-Sep-2022",
     "Time": "09:51 PM",
     "Systolic": "146 mmHg",
     "Diastolic": "95 mmHg",
     "Pulse": "65 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "16-Sep-2022",
     "Time": "08:24 AM",
     "Systolic": "137 mmHg",
     "Diastolic": "93 mmHg",
     "Pulse": "68 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "16-Sep-2022",
     "Time": "08:25 AM",
     "Systolic": "141 mmHg",
     "Diastolic": "91 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "16-Sep-2022",
     "Time": "08:26 AM",
     "Systolic": "142 mmHg",
     "Diastolic": "88 mmHg",
     "Pulse": "66 bpm",
     "Classification": "Systolic Hypertension",
     "Data": ""
   },
   {
     "Date": "16-Sep-2022",
     "Time": "10:12 PM",
     "Systolic": "139 mmHg",
     "Diastolic": "88 mmHg",
     "Pulse": "79 bpm",
     "Classification": "High Normal",
     "Data": ""
   },
   {
     "Date": "16-Sep-2022",
     "Time": "10:13 PM",
     "Systolic": "136 mmHg",
     "Diastolic": "87 mmHg",
     "Pulse": "79 bpm",
     "Classification": "High Normal",
     "Data": ""
   },
   {
     "Date": "16-Sep-2022",
     "Time": "10:14 PM",
     "Systolic": "138 mmHg",
     "Diastolic": "88 mmHg",
     "Pulse": "81 bpm",
     "Classification": "High Normal",
     "Data": ""
   },
   {
     "Date": "17-Sep-2022",
     "Time": "10:16 AM",
     "Systolic": "132 mmHg",
     "Diastolic": "90 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "17-Sep-2022",
     "Time": "10:17 AM",
     "Systolic": "130 mmHg",
     "Diastolic": "95 mmHg",
     "Pulse": "68 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "17-Sep-2022",
     "Time": "10:18 AM",
     "Systolic": "125 mmHg",
     "Diastolic": "88 mmHg",
     "Pulse": "65 bpm",
     "Classification": "High Normal",
     "Data": ""
   },
   {
     "Date": "17-Sep-2022",
     "Time": "08:51 PM",
     "Systolic": "144 mmHg",
     "Diastolic": "93 mmHg",
     "Pulse": "78 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "17-Sep-2022",
     "Time": "08:52 PM",
     "Systolic": "143 mmHg",
     "Diastolic": "91 mmHg",
     "Pulse": "78 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "17-Sep-2022",
     "Time": "08:53 PM",
     "Systolic": "137 mmHg",
     "Diastolic": "87 mmHg",
     "Pulse": "78 bpm",
     "Classification": "High Normal",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "12:08 AM",
     "Systolic": "173 mmHg",
     "Diastolic": "107 mmHg",
     "Pulse": "70 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "12:10 AM",
     "Systolic": "164 mmHg",
     "Diastolic": "107 mmHg",
     "Pulse": "70 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "12:11 AM",
     "Systolic": "156 mmHg",
     "Diastolic": "100 mmHg",
     "Pulse": "69 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "08:21 AM",
     "Systolic": "149 mmHg",
     "Diastolic": "94 mmHg",
     "Pulse": "62 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "08:22 AM",
     "Systolic": "149 mmHg",
     "Diastolic": "100 mmHg",
     "Pulse": "64 bpm",
     "Classification": "High BP - Stage 2",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "08:23 AM",
     "Systolic": "147 mmHg",
     "Diastolic": "97 mmHg",
     "Pulse": "61 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "11:10 PM",
     "Systolic": "148 mmHg",
     "Diastolic": "99 mmHg",
     "Pulse": "83 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "11:11 PM",
     "Systolic": "145 mmHg",
     "Diastolic": "97 mmHg",
     "Pulse": "83 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "22-Sep-2022",
     "Time": "11:12 PM",
     "Systolic": "140 mmHg",
     "Diastolic": "95 mmHg",
     "Pulse": "82 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "23-Sep-2022",
     "Time": "11:32 AM",
     "Systolic": "146 mmHg",
     "Diastolic": "95 mmHg",
     "Pulse": "68 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "23-Sep-2022",
     "Time": "11:33 AM",
     "Systolic": "142 mmHg",
     "Diastolic": "94 mmHg",
     "Pulse": "67 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "23-Sep-2022",
     "Time": "11:34 AM",
     "Systolic": "139 mmHg",
     "Diastolic": "97 mmHg",
     "Pulse": "70 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "23-Sep-2022",
     "Time": "09:50 PM",
     "Systolic": "143 mmHg",
     "Diastolic": "95 mmHg",
     "Pulse": "76 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "23-Sep-2022",
     "Time": "09:51 PM",
     "Systolic": "146 mmHg",
     "Diastolic": "92 mmHg",
     "Pulse": "72 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   },
   {
     "Date": "23-Sep-2022",
     "Time": "09:52 PM",
     "Systolic": "142 mmHg",
     "Diastolic": "93 mmHg",
     "Pulse": "74 bpm",
     "Classification": "High BP - Stage 1",
     "Data": ""
   }
 ];

const Measurement = () => {
   return (
      <div>
         {bloodpressures.map(bp => (
            <Row>
               <Col>{bp.Date}</Col>
               <Col>{bp.Time}</Col>
               <Col>{bp.Systolic}</Col>
               <Col>{bp.Diastolic}</Col>
               <Col>{bp.Pulse}</Col>
               <Col>{bp.Classification}</Col>
               <Col>{bp.Data}</Col>
            </Row>
         ))}

      </div>
   )
}

export default Measurement