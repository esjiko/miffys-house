import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [stage, setStage] = useState(0);
  const [numberOfCarrots, setNumberOfCarrots] = useState(0);
  const [miffySide, setMiffySide] = useState("Left");


  const moveMiffy = () => {
    if(miffySide == "Left") {
      setMiffySide("Right")
    } else {
      setMiffySide("Left")
    }
  };
  useEffect(() => {
    // Set up the interval when the component is mounted
    const intervalId = setInterval(moveMiffy, 5000); // 10,000 milliseconds = 10 seconds
    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  })


  useEffect(() => {
    const oneLife = setTimeout(() => {
      console.log("life")
    }, 10000)
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{margin: 0}}>
      {(stage != 0 && stage != 1) &&
       <div style={{ visibility: stage == 7 ? "hidden" : "visible",position: "absolute", color: "#fff", zIndex:10, height: "30", transition: 'left 5s', left: miffySide == "Left" ? (0) : ("calc(100vw - 160px)")}}> 
        <img style={{height: 160}} src="/MiffyZombie.png"/> 
      </div>}


      <div style={{position: "absolute", fontSize: 48, margin:0, display: "flex", zIndex: 10, flexDirection: "row", bottom: 0, right: 34}}>
        {
          Array.from({ length: numberOfCarrots }, (_, i) => i).map((carrot) => 
          <p> 
            
🥕 
        </p>)
        }
      </div>
        
        {/* start screen  */}
        {stage == 0 && 
        
        <div style={{width: "100vw", overflow: "hidden", height: "100vh"}}>
          <p style={{position: "absolute", top: -32, color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", fontSize: 48}}>CLICK THE REMOTE</p>

          <div onClick={() => setStage(1)} style={{height: "22.5vw", width: "10vw", position: "absolute", bottom: 0, left: "calc(50% - 5vw)"}}></div>
          <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/tvbg.png"/> 
        </div>}

        

        {/* info screen */}
        {stage == 1 &&
        <div style={ { width: "100vw", height: "100vh"}} onClick={() => setStage(2)}>
          <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/carrot.GIF"/> 
        </div>}

        {/* door 1 */}
        {stage == 2 && 
        <div style={{ width: "100vw", overflow: "hidden", height: "100vh", backgroundColor: "#fefae7", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          {/* <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/doors.png"/>  */}
          <p style={{marginBottom: 0, fontSize: 32, marginBottom: 92}}>Miffy originates from which country?</p>  


          <div
          style={{width: "100%", display: "flex", justifyContent: 'space-around'}}>
            <div onClick={() => {
            alert("WHAT THE HECK!! ARE YOU CRAZY?!")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}> 
              <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.02 AM.png"/>
              <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>England</p>
            </div>

             
            <div onClick={() => {
            alert("FAKE MIFFY FAN!!! START OVER!!!")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.39 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Japan</p>

            </div>
            <div onClick={() => {
            setStage(3)
            setNumberOfCarrots(1)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.28 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Netherlands</p>

            </div>
          </div>
          
    
        </div>}
{/* 
door 3 */}

        {stage == 3 && 
        <div style={{ width: "100vw", overflow: "hidden", height: "100vh", backgroundColor: "#fefae7", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          {/* <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/doors.png"/>  */}
          <p style={{marginBottom: 0, fontSize: 32, marginBottom: 92}}>What color is Miffy's dress in most of the books?</p>  


          <div
          style={{width: "100%", display: "flex", justifyContent: 'space-around'}}>
            <div onClick={() => {
            alert("BRUH??? WHO LET YOU ON THIS TEAM??!!")
 setStage(1) 
setNumberOfCarrots(0)
}}
          style={{display: "flex", flexDirection: "row", position: "relative"}}> 
              <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.02 AM.png"/>
              <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Red</p>
            </div>

             
            <div onClick={() => {
            setStage(4)
            setNumberOfCarrots(2)
            }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.39 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Blue</p>

            </div>
            <div onClick={() => {
            alert("DID YOU EVEN READ THE QUESTION??!")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.28 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Yellow</p>

            </div>
          </div>
          
    
        </div>}

      {/* door 3 */}
      {stage == 4 && 
        <div style={{ width: "100vw", overflow: "hidden", height: "100vh", backgroundColor: "#fefae7", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          {/* <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/doors.png"/>  */}
          <p style={{marginBottom: 0, fontSize: 32, marginBottom: 92}}>What is Miffy's original Dutch name?</p>  

          <div
          style={{width: "100%", display: "flex", justifyContent: 'space-around'}}>
            <div onClick={() => {
            setStage(5)
            setNumberOfCarrots(3)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}> 
              <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.02 AM.png"/>
              <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Nijntje</p>
            </div>

             
            <div 
onClick={() => {
  alert("DO YOU LIVE UNDER A ROCK?? THIS IS COMMON KNOWLEDGE")
setStage(1) 
setNumberOfCarrots(0)
}}

          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.39 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Miftziens</p>

            </div>
            <div onClick={() => {
            alert("YIKES!! THAT WAS A TRAINWRECK OF AN ANSWER")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.28 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>Nijnje</p>

            </div>
          </div>
          
    
        </div>}

        {/* door 4 */}


        
        {stage == 5 && 
        <div style={{ width: "100vw", overflow: "hidden", height: "100vh", backgroundColor: "#fefae7", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <p style={{marginBottom: 0, fontSize: 32, marginBottom: 92}}>What kind of pet does Miffy have?</p>  


          <div
          style={{width: "100%", display: "flex", justifyContent: 'space-around'}}>
            <div onClick={() => {
            alert("WHAT THE HECK!! ARE YOU CRAZY?!")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}> 
              <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.02 AM.png"/>
              <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>A bird</p>
            </div>

             
            <div onClick={() => {
            alert("SERIOUSLY???! EVEN I KNEW THAT")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.39 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>A cat</p>

            </div>
            <div onClick={() => {
            setStage(6)
            setNumberOfCarrots(4) 
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.28 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>A fish</p>

            </div>
          </div>
          </div>
        }

{stage == 6 && 
        <div style={{ width: "100vw", overflow: "hidden", height: "100vh", backgroundColor: "#fefae7", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          {/* <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/doors.png"/>  */}
          <p style={{marginBottom: 0, fontSize: 32, marginBottom: 92}}>When is Miffy's official birthday?</p>  


          <div
          style={{width: "100%", display: "flex", justifyContent: 'space-around'}}>
            <div           onClick={async () => 
            {setStage(7)
          await setNumberOfCarrots(5)
          
          setTimeout(() => {
            alert("dang it... you got all the carrots \n goodbye")
          }, 500)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}> 
              <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.02 AM.png"/>
              <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>June 21st</p>
            </div>

             
            <div onClick={() => {
            alert("CONGRATULATIONS ON THE WORST ANSWER OF THE DAY.")
 setStage(1) 
setNumberOfCarrots(0)
          }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.39 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>March 16th</p>

            </div>
            <div onClick={() => {
            alert("FAKE MIFFY FAN!!! START OVER!!!")
 setStage(1) }}
          style={{display: "flex", flexDirection: "row", position: "relative"}}>
            <img style={{maxHeight: "50vh"}} src="/Screenshot 2023-10-29 at 3.37.28 AM.png"/>
            <p style={{position: "absolute", bottom: -48, transform: "translate(-50%, -50%)", left: "50%"}}>May 28th</p>

            </div>
          </div>
          </div>
        }
     {/* {stage == 5 &&
   
          } *//* ending screen 1 */}
         {stage == 0 && 
        
        <div style={{width: "100vw", overflow: "hidden", height: "100vh"}}>
          <p style={{position: "absolute", top: -32, color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", fontSize: 48}}>CLICK THE REMOTE</p>

          <div onClick={() => setStage(1)} style={{height: "22.5vw", width: "10vw", position: "absolute", bottom: 0, left: "calc(50% - 5vw)"}}></div>
          <img style={{width: "100vw", height: "100vh", objectFit: "cover"}} src="/tvbg.png"/> 
        </div>}

         {stage == 7 &&
          <div style={{width: "100vw", objectFit: "cover", position: 'relative', height: "100vh"}}>
           <div 
            onClick={() => {
              window.location.href = "https://hauntedhouse.hackclub.com/rooms/cat-room";
            }
            }
           style={{position: "absolute", border: "0px solid red",  bottom: 32, right: 69, width: "600px", height: "400px"}}>

           </div>
           
           <img style={{width: "100vw", objectFit: "cover", height: "100vh"}} src="/tvbg (1).png"/>
        </div>}

        
        </main>
    </>)}