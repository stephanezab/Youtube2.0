import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos, direction }) => {
  if (!videos) return <div>Loading...</div>
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>

      {videos.map((item, idx) => {
        const hascontent = item.id?.videoId || item.id?.channelId;

        return hascontent ?
          (<Box key={idx} sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, maxWidth: '400' }}>

            {item?.id?.videoId && <VideoCard video={item} />}

            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
            
          </Box>
          ) : null
      })}

    </Stack>
  )
}

export default Videos