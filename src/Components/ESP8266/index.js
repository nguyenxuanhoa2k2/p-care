import { child, get, ref } from "firebase/database"
import { database } from "../../utils/firebaseConfig"
import { useEffect, useState } from "react"

const APPESP = () => {
    const dbRef = ref(database)
    const [NhietDo, setNhietDo] = useState(0)


    useEffect(() => {
        const id = setInterval(() => {
            get(child(dbRef,'Temperature')).then((data) => {
                if (data.exists()) {
                    setNhietDo(data.val())
                }
                else {
                    console.log(`no data`);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        },3000)

        return () => clearInterval(id)
    },[])

    return (
        <div style={{color:"black"}}>{NhietDo}</div>
    )
}


export default APPESP