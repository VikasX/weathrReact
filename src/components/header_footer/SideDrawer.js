import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in"}>
                    HOME
                </ListItem>

                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in/#/health"}>
                    HEALTH
                </ListItem>

                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in/#/techblog"}>
                    TECHNOLOGY
                </ListItem>

                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in/#/lifehack"}>
                    LIFESTYLE
                </ListItem>

                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in/#/food"}>
                    FOOD
                </ListItem>


                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in/#/about"}>
                    ABOUT
                </ListItem>


                <ListItem button onClick={(windows)=>  window.location.href = "http://www.elit-vitae.co.in/#/contact"}>
                    CONTACT
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;
