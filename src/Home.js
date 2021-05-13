import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  List,
  Drawer,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItem,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  Switch
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import {useTheme} from '@material-ui/core/styles'




const useStyles = makeStyles((theme) => ({
  root:{
    height:'100vh',
    backgroundColor:theme.palette.background.dark
  },
  AppBar:{
    zIndex:theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    
  },
  logo:{
    height:'25px'
  },
  icons:{
    paddingRight: theme.spacing(5)
  },
  menuIcon:{
    marginLeft: theme.spacing(2)
  },
  listItem:{
    paddingTop:4,
    paddingBottom:4
  },
  listItemText:{
    fontSize:14,
  },
  grow:{
    flexGrow: 1,
  },
  subheader:{
    textTransform:"uppercase",
    fontWeight:"bold",
    color:"black"
  }

}))

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home ({darkMode, setDarkMode}){

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root} >
        <AppBar position="fixed"  color='inherit' className={classes.AppBar} >
          <Toolbar>
            <IconButton edge="start" className={classes.menuIcon}  aria-label="menu">
              <MenuIcon />
            </IconButton>
            <img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt="Logo" className={classes.logo} />
            <div className={classes.grow}/>
            <Switch 
            value={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
            className={classes.menuButton}  
            />
            <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
              <VideoCallIcon/>
            </IconButton>
            <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
              <AppsIcon/>
            </IconButton>
            <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
              <NotificationsIcon/>
            </IconButton>
            
            <Button variant='outlined' color="secondary" startIcon={<AccountCircleIcon/>}>Fazer Login</Button>
          </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                <ListItemText  classes={{
                  primary: classes.listItemText
                }} primary={'Inicio'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}} >
                <ListItemIcon>{<WhatshotIcon/>}</ListItemIcon>
                <ListItemText  classes={{
                  primary: classes.listItemText
                }} primary={'Em Alta'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}} >
                <ListItemIcon>{<SubscriptionsIcon/>}</ListItemIcon>
                <ListItemText  classes={{
                  primary: classes.listItemText
                }} primary={'Inscrições'} />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<VideoLibraryIcon/>}</ListItemIcon>
                <ListItemText  classes={{
                  primary: classes.listItemText
                }} primary={'Biblioteca'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<HistoryIcon/>}</ListItemIcon>
                <ListItemText  classes={{
                  primary: classes.listItemText
                }} primary={'Histórico'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<WatchLaterIcon/>}</ListItemIcon>
                <ListItemText  classes={{
                  primary: classes.listItemText
                }} primary={'Assister mais tarde'} />
              </ListItem>
              <Divider />
              <Box p={4} >
                  <Typography variant="body2">
                      Faça Login pra curtir videos, comentar e se inscrever
                    </Typography> 
                    <Box mt={2}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AccountCircle/>}
                      >
                        Fazer Login
                      </Button>
                    </Box>
              </Box>
              <Divider />
                <List>
                  <ListSubheader
                    component="nav"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O melhor do YouTube
                  </ListSubheader>
                  <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText  classes={{
                    primary: classes.listItemText
                  }} primary={'Musica'} />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText  classes={{
                    primary: classes.listItemText
                  }} primary={'Esportes'} />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText  classes={{
                    primary: classes.listItemText
                  }} primary={'Jogos'} />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText  classes={{
                    primary: classes.listItemText
                  }} primary={'Filmes'} />
               </ListItem>
               <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircle/>}</ListItemIcon>
                  <ListItemText  classes={{
                    primary: classes.listItemText
                  }} primary={'Noticias'} />
               </ListItem>
                </List>
          </List>
        </div>
      </Drawer>
        </Hidden>
      
      
      <Box p={5} >
        <Toolbar/>
          <Typography
            variant='h5'
            color='textPrimary'
            style={{fontWeight: 600}}
          >
              Recomendados
          </Typography>
            <Grid container spacing={4} >
              {
                videos.map((item,index) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} >
                    <Box>
                     <img
                      style={{width:"100%"}}
                      alt={item.title} 
                      src={item.thumb} /> 
                    </Box> 
                    <Typography
                      style={{fontWeight:600}}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >
                      {`${item.views} - ${item.date} ` }
                    </Typography>
                  </Grid>
                ) )
              }
            </Grid>   

      </Box>
      </Box>
    </div>
  )
}

export default Home;