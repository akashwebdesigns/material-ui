import { Card, CardActions, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(()=>({
    title:{
        fontSize:40,
        fontFamily:"Montserrat"
    },
    cover:{
        backgroundImage:`url(https://images.unsplash.com/photo-1536828695183-c54a9633296d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80)`,
        backgroundSize:'cover',
        padding:'35px 25px',
    }
}))

const FeaturedPost = () => {
    const classes=useStyles();
  return <>
    <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
            <Typography className={classes.title} gutterBottom>
            Title of a longer featured blog post
            </Typography>
            <Typography variant="h5">
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents
            </Typography>
        </CardContent>
        <CardActions>
            <Button>
              Continue reading ...
            </Button>
        </CardActions>
    </Card>
  </>;
};

export default FeaturedPost;
