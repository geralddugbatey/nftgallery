import React from 'react'
import {CardBack,CardFront,Box,P,Main, Tab, Eye, Copy} from './nftelements'
const NftCard = ({nft}) => {

function copyinfo(text){
    navigator.clipboard.writeText(text)
}

    return (
        <Main>
        <Box>
            <CardFront>
            <img src={nft.media[0].gateway}/>
            </CardFront>

            <CardBack>
            <p>{nft.title}</p>
 
    <p>{nft.description?.substr(0,150)}</p>
            </CardBack>


        </Box>
        <Tab>
        <P>{`${nft.contract.address.substr(0,5)}...${nft.contract.address.substr(nft.contract.address.length-4)}`}</P>
        <Copy onClick={()=>{
            copyinfo(nft.contract.address)
        }}/>
  
            <a target="_blank" href={`https://etherscan.io/token/${nft.contract.address}`}>
                <Eye></Eye>
            </a>

        </Tab>

        </Main>
    )
}

export default NftCard
