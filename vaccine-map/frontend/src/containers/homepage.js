import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
//import DownloadIcon from '@material-ui/icons/PictureAsPdf';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MusicIcon from '@material-ui/icons/QueueMusic';
import DataIcon from '@material-ui/icons/Receipt';
import MenuIcon from '@material-ui/icons/Menu';

import LogoutIcon from '@material-ui/icons/ArrowForward';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import tagmanage from './tagmanage'
import Item_search from './item_search';
import Item_manage from './item_manage';
import Item_modify from'./item_modify';
import AgentProfile from './agentProfile';
import new_item from './new_item';
import Mymusic from './mymusic';
import Home from './home';
import Agent_manage from './agent_manage';
import AddAgent from './addAgent';
import PDFModel from './PDFModel';
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
            <NavLink to="/item_search" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><MusicIcon /></ListItemIcon>
                <ListItemText primary="物件搜尋"/>
              </ListItem>
            </NavLink>
            <NavLink to="/mymusic" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="謄本搜尋"/>
              </ListItem>
            </NavLink>
            
            
          </List>
          <Divider />
          <List style={{ backgroundColor: 'rgba(35, 150, 127, 0.4)' }}>
            <NavLink to="/item_manage" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="物件管理"/>
              </ListItem>
            </NavLink>
            <NavLink to="/new_item" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="新增物件"/>
              </ListItem>
            </NavLink>
            {/* <NavLink to="/tagmanage" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="資料標籤管理"/>
              </ListItem>
            </NavLink> */}
            <NavLink to="/agent_manage" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><PersonIcon /></ListItemIcon>
                <ListItemText primary="經紀人管理"/>
              </ListItem>
            </NavLink>            
            <NavLink to="/login" className="drawer_link">
              <ListItem button onClick={this.props.logout}>
                <ListItemIcon style={{ color: '#fcd29f' }}><LogoutIcon /></ListItemIcon>
                <ListItemText primary="登出"/>
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
            <NavLink to="/item_search" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><MusicIcon /></ListItemIcon>
                <ListItemText primary="物件搜尋"/>
              </ListItem>
            </NavLink>
            <NavLink to="/mymusic" className="drawer_link">
              <ListItem button>
                <ListItemIcon style={{ color: '#fcd29f' }}><DataIcon /></ListItemIcon>
                <ListItemText primary="謄本搜尋"/>
              </ListItem>
            </NavLink> 
            <NavLink to="/login" className="drawer_link">
              <ListItem button onClick={this.props.logout}>
                <ListItemIcon style={{ color: '#fcd29f' }}><LogoutIcon /></ListItemIcon>
                <ListItemText primary="登出"/>
              </ListItem>
            </NavLink>
          </List>
          <Divider />
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
        if (localStorage.title === "業務員"){result = this.sideList2}
        else {result = this.sideList}
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
                                <h1 style={{ marginLeft: '2vw' }}><NavLink className="nav_title" to="/home">中信房屋樹林冠軍團隊</NavLink></h1>
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
                            <Route path="/item_search" component={Item_search} />
                            <Route exact path="/item_manage" component={Item_manage}/>
                            <Route path="/tagmanage" component={tagmanage} />
                            <Route path="/new_item" component={new_item}/>
                            <Route path="/item_manage/:contractNum" component={Item_modify}/>
                            <Route path="/mymusic" component={Mymusic}/>
                            <Route path="/agent_manage" component = {Agent_manage}/>
                            <Route path="/agentProfile" component = {AgentProfile}/>
                            <Route path="addAgent" component ={AddAgent}/>
                            <Route path="/PDFModel" component={PDFModel}/>
                        </Switch>
                    </section>
                    <footer className="homepage-footer">
                        中信房屋樹林冠軍團隊
                    </footer>
                </div>
            </div>
        );
    }
}
