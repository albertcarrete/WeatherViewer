// Container vs Component
// this is a component because it doesn't need to communicate with redux
// all it will do is receive data from its parents

// Class-based Component or Function-based component
// we don't need to make any use of component state, we just recieve data and
// that's it so we can get away with making a function component here

import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}


export default (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>        
        </div>
    )
}