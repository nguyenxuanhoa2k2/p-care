import { child, get, ref } from 'firebase/database';
import { database } from '../../utils/firebaseConfig';
import { useEffect, useState } from 'react';
import ChartData from '../ChartData';

const APPESP = () => {
  const dbRef = ref(database);
  const [HeartRate, setHeartRate] = useState([]);
  const [SpO2, setSpO2] = useState([]);
  const [LatitudeString, setLatitudeString] = useState(0);
  const [LongitudeString, setLongitudeString] = useState(0);
  const [DateString, setDateString] = useState(0);
  const [TimeString, setTimeString] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      get(child(dbRef, 'HeartBeat'))
        .then((data) => {
          if (data.exists()) {
            const dataArrayHeartRate = Object.values(data.toJSON());
            const dataArrayHeartRateFormat = dataArrayHeartRate.map(
              (item, index) => {
                return {
                  name: `Turn ${String(index + 1)}`,
                  value: item,
                };
              }
            );
            setHeartRate(dataArrayHeartRateFormat);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      get(child(dbRef, 'SpO2'))
        .then((data) => {
          if (data.exists()) {
            const dataArraySpO2 = Object.values(data.toJSON());
            const dataSp02Format = dataArraySpO2.map((item, index) => {
              return {
                name: `Turn ${String(index + 1)}`,
                value: item,
              };
            });
            setSpO2(dataSp02Format);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      get(child(dbRef, 'LatitudeString'))
        .then((data) => {
          if (data.exists()) {
            setLatitudeString(data.val());
          }
        })
        .catch((err) => {
          console.log(err);
        });
      get(child(dbRef, 'LongitudeString'))
        .then((data) => {
          if (data.exists()) {
            setLongitudeString(data.val());
          }
        })
        .catch((err) => {
          console.log(err);
        });
      get(child(dbRef, 'DateString'))
        .then((data) => {
          if (data.exists()) {
            setDateString(data.val());
          }
        })
        .catch((err) => {
          console.log(err);
        });
      get(child(dbRef, 'TimeString'))
        .then((data) => {
          if (data.exists()) {
            setTimeString(data.val());
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h1 class='namegr'> P-CARE </h1>
        <h2 class='ten'>MAX30100 - GPS </h2>
        <div style={{ color: 'red' }}>
          <div class='container mt-5'>
            <div class='row'>
              <div class='card'>
                <div class='label'> HEARTRATE</div>
                {/* <div class='value'>{HeartRate[0]}</div> */}
                <div class='label'>BPM</div>
              </div>
            </div>
            <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>SPO2</div>
                {/* <div class='value'>{SpO2[0]}</div> */}
                <div class='label'>%</div>
              </div>
            </div>
            <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>LATITUDE</div>
                <div class='value'>{LatitudeString}</div>
                <div class='label'>""</div>
              </div>
            </div>
            <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>LONGITUDE</div>
                <div class='value'>{LongitudeString}</div>
                <div class='label'>""</div>
              </div>
            </div>
            <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>DATE</div>
                <div class='value'>{DateString}</div>
                {/* <div class="label"></div> */}
              </div>
            </div>
            <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>TIME</div>
                <div class='value'>{TimeString}</div>
                {/* <div class="label">%</div> */}
              </div>
            </div>
          </div>
        </div>
        <ChartData data={HeartRate} />
        <ChartData data={SpO2} />
      </div>
    </>
  );
};

export default APPESP;
