import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
//import DownloadIcon from '@material-ui/icons/PictureAsPdf';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MusicIcon from '@material-ui/icons/QueueMusic';
import DataIcon from '@material-ui/icons/Receipt';
import MenuIcon from '@material-ui/icons/Menu';

import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Distribution from './distribution';
import Map_page from './map_page';
import Add_case from './add_case';
import Modify_case from './modify_case';
import Vaccination from './vaccination';
import Home from './home';
import '../styles/homepage.css';
import '../styles/drawer.css';



export default class Homepage extends Component {
    constructor(props) {
        super(props);
        const username = localStorage.getItem('name');
        this.state = { open: false, fabOpen: false, user: username };
    }

    toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ open: open });
    }

    sideList = (
        <div
          style={{ width: '14vw', minHeight: '100vh', backgroundColor: 'rgba(35, 150, 127, 0.4)', color: '#ffffff' }}
          role="presentation"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          <List style={{ backgroundColor: 'rgba(35, 150, 127, 0.4)' }}>
            <NavLink to="/home" className="drawer_link">
              <ListItem button>
                    <ListItemIcon style={{ color: '#fcd29f' }}><HomeIcon /></ListItemIcon>
                    <ListItemText primary="首頁"/>
              </ListItem>
            </NavLink>
            <NavLink to="/distribution" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><MusicIcon /></ListItemIcon>
                <ListItemText primary="地區疫苗分配現況"/>
              </ListItem>
            </NavLink>
            <NavLink to="/vaccination" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="地區人口疫苗接種現況"/>
              </ListItem>
            </NavLink>
            <NavLink to="/map_page" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="彙整疫苗地圖"/>
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <List style={{ backgroundColor: 'rgba(35, 150, 127, 0.4)' }}>
            <NavLink to="/add_case" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="新增接種資訊"/>
              </ListItem>
            </NavLink>
            <NavLink to="/modify_case" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="修改地區資料"/>
              </ListItem>
            </NavLink>
          </List>
        </div>
    )
    sideList2 = (
      <div
          style={{ width: '14vw', minHeight: '100vh', backgroundColor: 'rgba(35, 150, 127, 0.4)', color: '#ffffff' }}
          role="presentation"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          <List style={{ backgroundColor: 'rgba(35, 150, 127, 0.4)' }}>
            <NavLink to="/home" className="drawer_link">
              <ListItem button>
                    <ListItemIcon style={{ color: '#fcd29f' }}><HomeIcon /></ListItemIcon>
                    <ListItemText primary="首頁"/>
              </ListItem>
            </NavLink>
            <NavLink to="/distribution" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><MusicIcon /></ListItemIcon>
                <ListItemText primary="地區疫苗分配現況"/>
              </ListItem>
            </NavLink>
            <NavLink to="/vaccination" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="地區疫苗接種現況"/>
              </ListItem>
            </NavLink>
            <NavLink to="/map_page" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="彙整疫苗地圖"/>
              </ListItem>
            </NavLink>
            
          </List>

        </div>
    )


    handleToggle = () => {
        this.setState({ fabOpen: true });
      }
    
    handleClose = () => {
        this.setState({ fabOpen: false });
      }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        if (localStorage.name === undefined){
          this.props.logout()
        }
        var result = ""
        result = this.sideList
        return (
            <div className="bg-container">
                <div style={{ position: 'relative' }}>
                    <header>
                        <div className="homepage-header">
                            <div className="homepage-menu">
                                <IconButton style={{ marginBottom: '2vh' }}
                                    color="inherit"
                                    onClick={this.toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
                                    {result}
                                </Drawer>
                            </div>
                            <div className="homepage-title">
                                <h1 style={{ marginLeft: '2vw' }}><NavLink className="nav_title" to="/home">台灣疫苗地圖</NavLink></h1>
                            </div>
                            <div className="homepage-fab">
                                <Fab onClick={this.handleToggle}
                                    style={{ maxHeight: '50px', maxWidth: '50px', top: '1.5vh', marginLeft: '15vw' }}
                                    color=""
                                    className="fab_button"><PersonIcon />
                                </Fab>
                                <Dialog className="fab-dialog" open={this.state.fabOpen} onClose={this.handleClose}>
                                    <DialogTitle id="fab-menu">哈囉，{this.state.user}</DialogTitle>
                                    <DialogActions>
                                        <div className="personal-actions">
                                          <Button onClick={this.handleClose} color="primary">取消</Button>
                                          <Button onClick={this.props.logout} color="primary">登出</Button>
                                        </div>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                    </header>
                    <section className="homepage-section">
                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route path="/distribution" component={Distribution} />
                            <Route exact path="/map_page" component={Map_page}/>
                            <Route path="/map_page/:contractNum" component={Map_page}/>
                            <Route path="/vaccination" component={Vaccination}/>
                            <Route path="/add_case" component={Add_case}/>
                            <Route path="/modify_case" component={Modify_case}/>
                        </Switch>
                    </section>
                    <footer className="homepage-footer">
                        台灣疫苗地圖
                    </footer>
                </div>
            </div>
        );
    }
}
