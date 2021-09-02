import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Icon, Image } from 'semantic-ui-react'

export const LatestNews = () => {

    return (
        <div className='latest-news'>
            <Container textAlign='center'>
                <p className='main-text mini-heading'>Latest News</p>
                <p className='primary-text main-heading'>Out Insights & Articles</p>
                <Grid columns={3}>
                    <Grid.Column textAlign='left'>
                        <div className="news">
                            <div style={{position: 'relative'}}>
                                <Image className='image' src={'/assets/homepage/latestNews/news1.png'} />
                                <p className='date'>28 JANUARY, 2020</p>
                            </div>
                            <div className='tags'>
                                <p className='main-text tag'><Icon name='user outline' />BY ADMIN</p>
                                <p className='main-text tag'><Icon name='folder open outline' />Air transport</p>
                            </div>
                            <p className='secondary-text'>Having over weight and depression can</p>
                            <Link className='main-text read-more' to='/about'>Read More</Link>
                        </div>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <div className="news">
                            <div style={{position: 'relative'}}>
                                <Image className='image' src={'/assets/homepage/latestNews/news2.png'} />
                                <p className='date'>28 JANUARY, 2020</p>
                            </div>
                            <div className='tags'>
                                <p className='main-text tag'><Icon name='user outline' />BY ADMIN</p>
                                <p className='main-text tag'><Icon name='folder open outline' />Air transport</p>
                            </div>
                            <p className='secondary-text'>Having over weight and depression can</p>
                            <Link className='main-text read-more' to='/about'>Read More</Link>
                        </div>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <div className="news">
                            <div style={{position: 'relative'}}>
                                <Image className='image' src={'/assets/homepage/latestNews/news3.png'} />
                                <p className='date'>28 JANUARY, 2020</p>
                            </div>
                            <div className='tags'>
                                <p className='main-text tag'><Icon name='user outline' />BY ADMIN</p>
                                <p className='main-text tag'><Icon name='folder open outline' />Air transport</p>
                            </div>
                            <p className='secondary-text'>Having over weight and depression can</p>
                            <Link className='main-text read-more' to='/about'>Read More</Link>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}