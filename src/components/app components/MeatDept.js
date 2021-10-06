import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MeatDept extends Component {
    render() {
        // const meatInventory = this.props.meatData.map((item, i) => {
        //     return(
        //         <div key = {i}>
        //             <li style= {{listStyle: 'none'}}>{item.food} : {item.quantity}</li>
        //         </div>
        //     )
        // })
        console.log(connect)
        return (
            <div>
                <h1>This is the meat Department!</h1>
                {/* {meatInventory} */}
            </div>
        )
    }
}

// function mapStateToProps (state) {
//     return{
//         meatData: state.meat,
//     }
// }

export default connect()(MeatDept)