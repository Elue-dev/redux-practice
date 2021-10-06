import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FrozenDept extends Component {
    render() {
        const frozenInventory = this.props.frozenData.map((item, i) => {
            return(
                <div key = {i}>
                    <li style= {{listStyle: 'none'}}>{item.food} : {item.quantity}</li>
                </div>
            )
        })
        return (
            <div>
                <h1>This is the Frozen Department!</h1>
                {frozenInventory}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        frozenData: state.frozen
    }
}

export default connect(mapStateToProps)(FrozenDept)
