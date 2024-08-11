import React from 'react'
import { Stack, colors } from '@mui/material'
import { categories } from '../utils/constants'

const selectCategory = "New"

const Sidebar = () => {
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map((category)=>(
                <button
                className='category-btn'
                style={{background: category.name === selectCategory && "#FC1503"}}
                key={category.name}   
                >
                    <span style={{color: category.name === selectCategory ? "white": "red", marginRight: "15px"}}>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}



        </Stack>

    )
}

export default Sidebar