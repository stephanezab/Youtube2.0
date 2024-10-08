import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
  }, [id])


  if (!videoDetail) return <div></div>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight='95vh' >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} sx={{ position:{xs:'fixed',sm:'fixed', md:'relative'}, backgroundColor:'black', width:'100%'}}>
          <Box sx={{ width: '100%', position: {md:'sticky'}, top:'86px', zIndex: 100 }} >

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player' controls />
            <Typography color="#fff" variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color='#fff' variant={{ sm: 'subtitle1', md: 'h6' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', }} />
                </Typography>
              </Link>

              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} views
                </Typography>
              </Stack>

            </Stack>

          </Box>
        </Box>
        <Box sx={{ mt: { xs: '500px',sm:'500px', md: '0' }}} px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction= 'column' />
        </Box>

      </Stack>


    </Box>
  )
}

export default VideoDetail