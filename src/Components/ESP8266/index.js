import { child, get, ref } from 'firebase/database';
import { database } from '../../utils/firebaseConfig';
import { useEffect, useState } from 'react';
import ChartData from '../ChartData';

const APPESP = () => {
  const dbRef = ref(database);
  const [HeartRate, setHeartRate] = useState([]);
  const [SpO2, setSpO2] = useState([]);
  const [SensorHeartBeat,setSensoHeartBeat] = useState(0);
  const [SensorSpO2,setSensorSpO2] = useState(0);

  const [Temperature,setTemperature] = useState([]);
  const [ObjectTempC,setObjectTempC] = useState([]);

  // const [DateString, setDateString] = useState(0);
  // const [TimeString, setTimeString] = useState(0);

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
      
        get(child(dbRef, 'sensor'))
        .then((data) => {
          if (data.exists()) {           
            setSensoHeartBeat(data.child("HeartBeat").val());
          }
        })
        .catch((err) => {
          console.log(err);
        });

        get(child(dbRef, 'sensor'))
        .then((data) => {
          if (data.exists()) {
            setSensorSpO2(data.child("SpO2").val());
          }
        })
        .catch((err) => {
          console.log(err);
        });
      
      get(child(dbRef, 'Temperature'))
        .then((data) => {
          if (data.exists()) {
             setTemperature(data.val())
          }
        })
        .catch((err) => {
          console.log(err);
        });

        get(child(dbRef, 'ObjectTempC'))
        .then((data) => {
          if (data.exists()) {
             setObjectTempC(data.val())
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // get(child(dbRef, 'ObjectTempC'))
      //   .then((data) => {
      //     if (data.exists()) {
            
      //       const dataArrayObjectTempC = Object.values(data.toJSON());
      //       const dataObjectTempCFormat = dataArrayObjectTempC.map((item, index) => {
      //         return {
      //           name: `Turn ${String(index + 1)}`,
      //           value: item,
      //         };
      //       });
      //       setObjectTempC(dataObjectTempCFormat);        
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });           
      // 


      // get(child(dbRef, 'DateString'))
      //   .then((data) => {
      //     if (data.exists()) {
      //       setDateString(data.val());
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // get(child(dbRef, 'TimeString'))
      //   .then((data) => {
      //     if (data.exists()) {
      //       setTimeString(data.val());
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }, 1000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        {/* <h1 class='namegr'> P-CARE </h1> */}
          <div class='container'>

            <div class= "heath_info">

              <div class='col-sm-6'>
                <div class='card'>
                  <div class='label'> HEARTRATE</div>
                  <div class='value'>{SensorHeartBeat}</div>
                  <div class='label'>BPM</div>
                </div>
              </div>

              <div class='col-sm-6'>
                <div class='card'>
                  <div class='label'>SPO2</div>
                  <div class='value'>{SensorSpO2}</div>
                  <div class='label'>%</div>
                </div>
              </div>

              <div class='col-sm-6'>
                <div class='card'>
                  <div class='label'>Temperature</div>
                  <div class='value'>{Temperature}</div>
                  <div class='label'>°C</div>
                </div>
              </div>

              <div class='col-sm-6'>
                <div class='card'>
                  <div class='label'>ObjectTemp</div>
                  <div class='value'>{ObjectTempC}</div>
                  <div class='label'>°C</div>
                </div>
              </div>

            </div>
          
          
            <div class = "chart">

              <div class = "chart_info">
                <ChartData data={HeartRate} />
              </div>

              <div class = "chart_info">
                <ChartData data={SpO2} />
              </div>

            </div>

            </div>

          
           { /* <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>DATE</div>
                <div class='value'>{DateString}</div>
                <div class="label"></div>
              </div>
            </div>
            <div class='col-sm-6'>
              <div class='card'>
                <div class='label'>TIME</div>
                <div class='value'>{TimeString}</div>
                <div class="label">%</div>
              </div>
            </div>*/ } 
      </div>  
    </>
  );
};
          
        

export default APPESP;
