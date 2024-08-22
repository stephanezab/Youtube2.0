import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))

  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(162deg, rgba(36,0,12,1) 16%, rgba(121,9,21,1) 43%, rgba(0,212,255,1) 89%)',
          zIndex: 10,
          height: '300px'
        }}
        />
      </Box>
    </Box>
  )
}

export default ChannelDetail