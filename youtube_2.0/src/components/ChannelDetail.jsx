import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard  } from './'

const ChannelDetail = () => {
  const {id} = useParams()
  
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail