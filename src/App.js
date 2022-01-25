import { Container, createTheme, Grid, ThemeProvider } from '@material-ui/core';
import './App.css';
import FeaturedPost from './components/FeaturedPost';
import Header from './components/Header';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Main from './components/Main'
import {sidebar} from './data/Data'
import {featuredPosts} from './data/Data';
import Footer from './components/Footer'


const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
              <PostCard post={post} key={post} />
          ))}
        </Grid>
        <Grid container spacing={5}>
          <Main title="From the firehose" />
          <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social} />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
