import React ,{useReducer, useEffect}from 'react'
import {Div,In,Sec,Togg, Circle,Button,Container, Inside, Tell,Warn, Close,Right,Left} from './headerelemnts'
import { useState } from 'react'
import NftCard from '../NftCard/NftCard'




const Header = () => {

    const [isCollection, setisCollection] = useState(false)
    const [flick, setflick] = useState(false)
    const [message, setmessage] = useState("")
    const [wallet, setwallet] = useState("")
    const [load, setload] = useState(0)
    const [collection, setcollection] = useState("")
    const [startToken, setStartToken] = useState('')
    const [left, setleft] = useState(false)
    const [right, setright] = useState(false)
const [nfts, setnfts] = useState([])
const [pages, setpages] = useState([""])
const [L, setL] = useState(false)
const changeWallet=(event)=>{

setwallet(event.target.value)
} 
const changeCollection=(event)=>{

   setcollection(event.target.value)
} 




const untoggle=()=>{
    setflick(false)
}

const getNfts= async()=>{

    var requestOptions = {
        method: 'GET',
       
      };
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_API_KEY}/getNFTs/`;

let nfts


if(collection===""&&wallet===""){
    setmessage("Enter an address")
    setflick(true)


}
    if(!collection.length){
 
    
    
          const fetchURL = `${baseURL}?owner=${wallet}`;
   
          setload(1)
     

        fetch(fetchURL,requestOptions)
        .then((respose) => respose.json())
        .then((nfts) => {

            setnfts(nfts.ownedNfts)
          setload(2)   
      });
       

    }


    if(collection.length){
        if(wallet.length===0){
            setmessage("Enter Wallet")
            setflick(true) 
        }
            
        else{
            const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
            setload(1)
     

            fetch(fetchURL,requestOptions)
            .then((respose) => respose.json())
            .then((nfts) => {
             
                setnfts(nfts.ownedNfts)
             
              setload(2)   
          }).catch((err)=>{

            setflick(false)
          });
        }
  
 
    }


 

 

  
}


const check=()=>{
    if(load==2){
        setflick(false)
    }
    if(load==1){
    
        setmessage("Loading")
        setflick(true)
    }
}

useEffect(() => {
   check()
}, [load])

const getNFTscollection=async(num)=>{
    let nfts
    if(num==1){
        setpages(oldArray => [...oldArray,startToken] );
     
    }
    if(collection.length!==0){
        var requestOptions = {
            method: 'GET',
           
          };
        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_API_KEY}/getNFTsForCollection`;

        const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}&startToken=${startToken}`;

        setload(1)
     

        fetch(fetchURL,requestOptions)
        .then((respose) => respose.json())
        .then((nfts) => {
           if(nfts.nextToken){
   
               setright(true)
               setStartToken(nfts.nextToken)
           }
           
           else{
               setright(false)
           }
           
            setnfts(nfts.nfts)
          setload(2)   
      });

    }
    
    else{
        setmessage("Enter Collection")
        setflick(true)
        
    }
}

const toggle =()=>{
    setisCollection(!isCollection)

}


const forward=()=>{

    getNFTscollection(1)
    setL(!L)
}

useEffect(() => {
    if(startToken!==""){
        setleft(true)
    }
    else{
        setleft(false)
    }
}, [L])




    return (
        <>
        <Div >
            <Tell flick={flick}>
                <Warn>
                    <Close onClick={()=>{
                        setflick(false)
                    }}/>
                <p>{message}</p>
                </Warn>
         
            </Tell>
            <In>
               
            <input disabled={isCollection} onClick={()=>{
                        setflick(false)
                    }} type="text" placeholder="wallet" onChange={changeWallet}></input>
            <input type="text" onClick={()=>{
                        setflick(false)
                    }} placeholder="collection" onChange={changeCollection}></input>
            <Sec>
            <Togg onClick={toggle} isCollection={isCollection} >
                <Circle isCollection={isCollection}/>
            </Togg>
            <p>Fetch Collection</p>
            </Sec>
            <Button onClick={()=>{
    if(isCollection){

        getNFTscollection()
    }
    else{

        getNfts()
    }

}}>Search</Button>
<Right onClick={forward} right={right}/>
            </In>
          

            




          
        </Div>

        <Container>
            
      <Inside>

      {
        nfts.length===0 ? <div></div>:
    nfts.map((i)=>(
            <NftCard nft={i}/>
        ))
    }

      </Inside>
        </Container>

        </>
        
    )
}

export default Header
