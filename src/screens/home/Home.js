import React, { Component } from 'react'
import Header from '../../common/header/Header'
import './Home.css'
import moviesData from './moviesData';
import { Button } from '@material-ui/core';
import { Badge, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';


export class Home extends Component {

    render() {

        return (
            <>
                <div>
                    <div>
                        <Header />
                    </div>
                    <div id='header2'>Upcoming Movies</div>
                    <div>
                        <button type="button" class="btn btn-success">bootstrap js </button>
                        <Button variant="contained">material ui</Button>
                        <Badge badgeContent={4} color="primary">mui5
                        </Badge>
                    </div>
                </div>
                <ImageList sx={{ width: 2000, height: 250 }} cols={12} rowHeight={250}>
                    {moviesData.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={item.poster_url}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                            // subtitle={item.author}
                            // actionIcon={
                            //     <IconButton
                            //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            //         aria-label={`info about ${item.title}`}
                            //     >
                            //         <InfoIcon />
                            //     </IconButton>
                            // }
                            />
                        </ImageListItem>

                    ))}
                </ImageList>
                <div className='flex-container' >
                    <div className='left' >
                        <h2>Released Movies</h2>
                        <ImageList sx={{ width: 2000, height: 350 }} cols={12} rowHeight={350}>
                            {moviesData.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        src={item.poster_url}
                                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        
                                    subtitle={item.release_date}
                                    // actionIcon={
                                    //     <IconButton
                                    //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    //         aria-label={`info about ${item.title}`}
                                    //     >
                                    //         <InfoIcon />
                                    //     </IconButton>
                                    // }
                                    />
                                </ImageListItem>

                            ))}
                        </ImageList>
                    </div>
                    <div className='right'>

                    </div>

                </div>
            </>
        )
    }
}

export default Home
