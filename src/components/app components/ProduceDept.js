import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProduceDept extends Component {
    render() {
        const produceInventory = this.props.produceData.map((item, i) => {
            return(
                <div key = {i}>
                    <li style= {{listStyle: 'none'}}>{item.food} : {item.quantity}</li>
                </div>
            )
        })
        return (
            <div>
                <h1>This is the Produce Department!</h1>
                {produceInventory}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        produceData: state.produce,
    }
}

export default connect(mapStateToProps)(ProduceDept)