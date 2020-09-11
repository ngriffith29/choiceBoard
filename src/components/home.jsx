import React, {useState, useEffect, useRef} from 'react'
import { SayButton, Say } from 'react-say';
import More  from '../images/more.PNG'
import Bathroom from '../images/bathroom.PNG'
import Done from '../images/done.PNG'
import Help from '../images/help.PNG'
import Yes from '../images/yes.PNG'
import No from '../images/no.PNG'
import MyName from '../images/mynameis.png'
import '../home.css'



function Home() {
    let cards = [{src:More, text: 'More'} , {src: Bathroom, text:"Bathroom"}   ,{src:Done, text: 'Done'}   ,{src: Help, text:"help"}   ,{src: Yes, text:"Yes"}   ,{src: No, text: "No"}, {src: MyName, text: "Hi i'm Nolan"}    ]
    const myRefname= useRef(null);

    const handleClick = () => {
        myRefname.current.focus();
     }
 
    useEffect(() => {
       
      }, [])



    return (
        <div className="container">
            {cards.map((e) => {
               return (
              
                <div className="card">
                <SayButton  speak={e.text}  pitch={ 4 }  volume={ 10 } >
                  
                    <img src={e.src} />
                 
                </SayButton>
                </div>
               )

            })}

        </div>
    )
}

export default Home
