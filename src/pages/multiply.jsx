import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { multiplyFun } from '../services/actions/actionFile';

const Multiply = ({ data }) => {
    console.log(data);
    const dispatch = useDispatch()
    const selector = useSelector(storeState => storeState)

    return (
        <div>Multiply
            <br />
            <br />
            <button onClick={() => {
                dispatch(multiplyFun(data.a, data.b))
            }}>Multiply</button>
            <br />
            <br />
            <label>output with Multiply :{selector?.data?.test?.mulData}</label>
        </div>
    )
}

export default Multiply