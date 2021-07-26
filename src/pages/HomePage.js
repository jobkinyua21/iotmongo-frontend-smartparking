import React,{Component} from 'react';
// import LabelBottomNavigation from '../components/LabelBottomNavigation';
// import ButtonAppBar from '../components/ButtonAppBar';
import {Card,ListGroup} from "react-bootstrap";
import '../App.css';
// import socketIOClient from "socket.io-client";

$(document).ready(function() {
    var socket = io.connect('http://localhost:3000')
  
    socket.on('status-changed', (parkingLot) => {
      if(parkingLot.status === 'vacant')
        $('#parking-lot').css('background-color','green')
      else
        $('#parking-lot').css('background-color', 'red')
    })
  })

export default class HomePage extends Component{
    render(){
        return(
        <div style ={{backgroundColor: '#e6e6ff'}}>

            <div className="body">
                <div className="cards left">
                    <Card className="empty-card">
                        <ListGroup variant="flush">
                            <ListGroup.Item>slot1</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div>
        )

    }

}
