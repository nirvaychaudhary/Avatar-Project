import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

    class Avatar extends Component{
        constructor(){
            super();
            this.state = {
                name : "Welcome to Avatar API World"
            }
        }

        namechange(){
            this.setState({name : "Subscribed to Avatar API World"})
        }
        render (){
            const avatarlistarray = [
                {
                    id:1,
                    name:"Nirvay" ,
                    work:"Full stack developer" 
                },
                {
                    id:2,
                    name:"Tyler" ,
                    work:"Full stack developer" 
                },
                {
                    id:3,
                    name:"Amrit" ,
                    work:"Full stack developer" 
                },
                {
                    id:4,
                    name:"Maria" ,
                    work:"Full stack developer" 
                }
            ]
        
            // map(callback(currentvalue, index, array)arg)
                const arrayavatarcard = avatarlistarray.map( (avatarcard, index) => {
                    return <Avatarlist key = {index} id={avatarlistarray[index].id} name={avatarlistarray[index].name} work={avatarlistarray[index].work}/>
                })
            return (
                <div className="mainpage">
                    <h1>{this.state.name}</h1>
                    {arrayavatarcard}
                    <button onClick = { () => this.namechange() }>Subscribe</button>
                </div> 
            )
        }
    }

export default Avatar