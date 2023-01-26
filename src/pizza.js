import React,{Component} from 'react';
import './styles.css';
import pizza from './pizza.png';



class Pizza extends React.Component{
    
   
    
    constructor(props){
        super(props)
        this.state = {
            msg: 0,
        }
    }

    
    takeOrder(){
        this.setState({
            msg: this.state.msg + 1,
                
        })
        
    }

    cancelOrder(){

        for (let i=this.state.msg; i>0; i-- ){
                  this.setState({
                msg: this.state.msg - 1,
            })
        }


        // do{
        //     this.setState({
        //         msg: this.state.msg - 1,
        //     })
        //     counter --;
        // }
        // while (counter>0)

        // console.log(counter);

    }

    


    render(){
        return <div >
            <div>
                <img width="200" src={pizza} />
            </div>
                <h2>Pizza Order Counter</h2>
                <div className="displayArea">
                    <h2>{this.state.msg}</h2>
                </div>
                
                <br />
                <br />
                <button onClick={() => this.takeOrder()} className="button"> Take Order</button>
                <br />
                <button id="a" onClick={() => this.cancelOrder()} className="button" > Take Order</button>
                <br />
                <br />  
                
        </div>
    }
}


export default Pizza;