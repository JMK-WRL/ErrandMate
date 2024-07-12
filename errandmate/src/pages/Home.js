import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, makeStyles, Grid, Paper } from '@material-ui/core';
import { EmojiObjects, Build, People } from '@material-ui/icons';
import './Home.css';

const useStyles = makeStyles((theme) => ({
    heroSection: {
        textAlign: 'center',
        marginTop: theme.spacing(8),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: theme.spacing(8),
        borderRadius: theme.spacing(1),
        color: '#fff',
    },
    heroTitle: {
        fontWeight: 'bold',
    },
    heroSubtitle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    heroButton: {
        margin: theme.spacing(1),
        backgroundColor: '#1F7891',
        '&:hover': {
            backgroundColor: '#F18C8E',
        },
    },
    section: {
        marginTop: theme.spacing(8),
    },
    sectionTitle: {
        marginBottom: theme.spacing(4),
        textAlign: 'center',
    },
    featureItem: {
        padding: theme.spacing(4),
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: theme.spacing(1),
        transition: 'background-color 0.3s ease',
    },
    featureItemHover: {
        '&:hover': {
            backgroundColor: '#e0e0e0',
        },
    },
    testimonialSection: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8),
        marginTop: theme.spacing(8),
    },
    testimonial: {
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: theme.spacing(2),
    },
    footer: {
        color: '#fff',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8),
        textAlign: 'center',
    },
    footerLink: {
        color: '#fff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#ff4081',
        },
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className="home-container">
            <Box className={classes.heroSection}>
                <Typography variant="h2" className={classes.heroTitle}>
                    Welcome to ErrandMate
                </Typography>
                <Typography variant="h5" className={classes.heroSubtitle}>
                    Connecting You to Trusted Errand Masters
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/signup" className={classes.heroButton}>
                    Get Started
                </Button>
            </Box>

            <Box className={classes.section}>
                <Typography variant="h4" className={classes.sectionTitle}>
                    Our Services
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={`${classes.featureItem} ${classes.featureItemHover}`}>
                            <EmojiObjects fontSize="large" />
                            <Typography variant="h6">Innovative Errand Solutions</Typography>
                            <Typography>Efficiently manage your errands with our innovative solutions.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={`${classes.featureItem} ${classes.featureItemHover}`}>
                            <Build fontSize="large" />
                            <Typography variant="h6">Professional Errand Masters</Typography>
                            <Typography>Our errand masters provide high-quality, professional services.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={`${classes.featureItem} ${classes.featureItemHover}`}>
                            <People fontSize="large" />
                            <Typography variant="h6">24/7 Customer Support</Typography>
                            <Typography>We offer round-the-clock support to assist you with your errands.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Box className={classes.testimonialSection}>
                <Typography variant="h4" className={classes.sectionTitle}>
                    What Our Users Say
                </Typography>
                <Typography className={classes.testimonial}>"ErrandMate has made my life so much easier!" - Jane Doe</Typography>
                <Typography className={classes.testimonial}>"I love the innovative solutions they offer!" - John Smith</Typography>
                <Typography className={classes.testimonial}>"The errand masters are professional and reliable!" - Sarah Lee</Typography>
            </Box>

            <Box className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    ErrandMate
                </Typography>
                <Typography variant="subtitle1" align="center" color="#000" component="p">
                    Simplifying your errands, one task at a time.
                </Typography>
                <Typography variant="body2" align="center">
                    <Link to="/contact" className={classes.footerLink}>Contact Us</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
