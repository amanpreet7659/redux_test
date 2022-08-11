import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition } from '../services/actions/actionFile'
import Multiply from './multiply'

const Add = () => {
    const obj = {
        a: 10,
        b: 20
    }
    const dispatch = useDispatch()
    const selector = useSelector(storeState => storeState)

    console.log(selector.data.test, "selector");
    return (
        <div>Add

            <label>Data: {JSON.stringify(obj)}</label>
            <br/>
            <br/>
            <button onClick={() => {
                dispatch(addition(obj.a, obj.b))
            }}>Add</button>
            <br/>
            <br/>
            <label>output with addition :{selector?.data?.test?.addData}</label>
            <br/>
            <br/>
            <Multiply data={obj} />
        </div>
    )
}

export default Add