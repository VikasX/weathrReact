import React, { Component } from 'react';
import { connect } from "react-redux";

import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

import image1 from '../../resources/img/app_main.jpg';
import image2 from '../../resources/img/lightpack.jpg';
import image3 from '../../resources/img/game2.jpg';
import image4 from '../../resources/img/fatbelly.jpg';
import image5 from '../../resources/img/brkfst.jpg';
import image6 from '../../resources/img/flat_belly_food.jpeg';
import image7 from '../../resources/img/hdd_main.jpg';
import image8 from '../../resources/img/gdrive.jpg';
import image9 from '../../resources/img/logon.jpg';
import image10 from '../../resources/img/cycle.jpeg';
 

class Pricing extends Component {

    state = {
        prices:[100,150,250,200,850,450,145,125,859,124],
        positions:['Balcony','Medium','Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
            'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[150,350,550,150,350,550,150,350,550,150],
articles: [
{
"_id": "59aeac7e734d1d25a0f6f006",
"author": "life-ring",
"title": "5 must have Android apps that will make life easy",
"subtitle": "Life-Hack",
"body": "With the current world we live in, technology has taken over everything specially mobile phones,70% of the day to day work is done through mobile apps only, so it becomes crucial to be aware of some of the good applications in this vast ocean of apps that can help us achieve what we need quickly",
"category": "599aa53e734d1d0dd4061660",
"pic": "/static/media/app_main.31525097.jpg",
"date": "20 Jan 2016",
"page": "lifehack/5app.html",
"href": "http://elit-vitae.co.in/#/article/show/59aeac7e734d1d25a0f6f006"
},
{
"_id": "59b2fd16734d1d2c1613de7c",
"author": "life-ring",
"title": "Give Your Home Theatre a new life with LIGHTPACK !!!",
"subtitle": "Life-Hack",
"body": "The Home entertainment system has evolved dramatically in the last 10 years from small television to Home theatre system which includes large HDTVs, 7.1 surround sound",
"category": "599aa53e734d1d0dd4061660",
"pic": "/static/media/lightpack.d1877a91.jpg",
"date": "12 May 2016",
"page": "lifehack/lightpack.html",
"href": "http://elit-vitae.co.in/#/article/show/59b2fd16734d1d2c1613de7c"

},
{
"_id": "59aeacaf734d1d25a0f6f03e",
"author": "laptop",
"title": "5 awesome old PC games that are still evergreen",
"subtitle": "Tech-Hack",
"body": "Games are something which is as much as important like studies as it is directly related to person's intellectual level and enhances it.",
"category": "599aa535734d1d0dd4061653",
"pic": "/static/media/game2.2ead534b.jpg",
"date": "25 May 2015",
"page": "techblog/5game.html",
"href": "http://elit-vitae.co.in/#/article/show/59aeacaf734d1d25a0f6f03e"

},
{
"_id": "59b7e094f36d284a7e7bc518",
"author": "heart",
"title": "Top ABS workout that are really effective",
"subtitle": "Health-Hack",
"body": "Belly fat is indeed stubborn fat but with regular exercise and good diet it can be controlled.",
"category": "59b43b33f36d2860f7d4f7b7",
"pic": "/static/media/fatbelly.5f1f4c2a.jpg",
"date": "03 Mar 2017",
"page": "health/fatbelly.html",
"href": "http://elit-vitae.co.in/#/article/show/59b7e094f36d284a7e7bc518"

},
{
"_id": "59b7e10cf36d284a7e7bc545",
"author": "cutlery",
"title": "Quick breakfast options in case of limited time",
"subtitle": "Food-Hack",
"body": "Breakfast is an important meal of the day we all know but do we really take it seriously?",
"category": "59b43b62f36d2860f7d4f7bd",
"pic": "/static/media/brkfst.8c72b8d3.jpg",
"date": "03 July 2016",
"page": "food/brkfst.html",
"href": "http://elit-vitae.co.in/#/article/show/59b7e10cf36d284a7e7bc545"
},
{
"_id": "59b7e181f36d284a7e7bc5af",
"author": "cutlery",
"title": "5 major food options which helps to balance weight",
"subtitle": "Food-Hack",
"body": "Our body needs proper nutrition and for that its essential to maintain balance between fat and protein",
"category": "59b43b62f36d2860f7d4f7bd",
"pic": "/static/media/flat_belly_food.bc190c57.jpeg",
"date": "09 Aug 2017",
"page": "food/flat_belly_food.html",
"href": "http://elit-vitae.co.in/#/article/show/59b7e181f36d284a7e7bc5af"

},



{
"_id": "59b442d9f36d2860f7d4f8a0",
"author": "laptop",
"title": "SOLUTION: Format the Hard Disk Error",
"subtitle": "Tech-Hack",
"body": "There has been a time that now external storage devices are must to have a backup of current running systems",
"category": "599aa535734d1d0dd4061653",
"pic":  "/static/media/hdd_main.60edc634.jpg",
"date": "17 June 2016",
"page": "techblog/hdd.html",
"href": "http://elit-vitae.co.in/#/article/show/59b442d9f36d2860f7d4f8a0"

},
{
"_id": "59b44341f36d2860f7d4f8f1",
"author": "laptop",
"title": "Run more than one instance of Google Drive",
"subtitle": "Tech-Hack",
"body": "As the personal data becomes crucial, we need to have a regular backup for the same and Google Drive windows application helps us to achieve that but",
"category": "599aa535734d1d0dd4061653",
"pic": "/static/media/gdrive.5743bf09.jpg",
"date": "19 Aug 2016",
"page": "techblog/gdrive.html",
"href": "http://elit-vitae.co.in/#/article/show/59b44341f36d2860f7d4f8f1"

},
{
"_id": "59b446e0f36d2860f7d4f92c",
"author": "laptop",
"title": "Customize Windows 7's Log on screen wallpaper",
"subtitle": "Tech-Hack",
"body": "The default log on screen of Windows 7 is something which could be boring and the best thing to enhance that is simply changing the background",
"category": "599aa535734d1d0dd4061653",
"pic": "/static/media/logon.30219c8c.jpg",
"date": "19 Oct 2015",
"page": "techblog/logon.html",
"href": "http://elit-vitae.co.in/#/article/show/59b446e0f36d2860f7d4f92c"

},
{
"_id": "59b7e021f36d284a7e7bc4f4",
"author": "heart",
"title": "Why cycling can be considered a life changer",
"subtitle": "Health-Hack",
"body": "Cycling is THE best option to consider today if we see from the other side of day to day lifestyle.",
"category": "59b43b33f36d2860f7d4f7b7",
"pic": "/static/media/cycle.97ac914b.jpeg",
"date": "23 Apr 2017",
"page": "health/cycle.html",
"href": "http://elit-vitae.co.in/#/article/show/59b7e021f36d284a7e7bc4f4"

}

]
}



    showBoxes = () => (

        this.state.prices.map((box,i)=>(
     

            <Zoom delay={this.state.delay[i]} key={i}>





            <div className="col-md-4 col-sm-4">


            <div onClick={(windows)=>  window.location.href = this.state.articles[i].href } className="box image-popup">
            

            <div className="box-img">

          
            <img src={this.state.articles[i].pic}/>
             <div class="lable blue-bg">{this.state.articles[i].subtitle}
                  </div>
 
              
            </div>



            <h4  className="post-head">{this.state.articles[i].title}</h4>
                      





            </div>

            </div>
            </Zoom>


        
           
        ))
       
    )



    render() {

        // console.log(image7);

    
        return (
            <div className="bck_black">
               
 <div className="black_line">&nbsp;</div>
                <div  className="heading">
                  <div className="head2">
                    <h2 >You may like</h2>
                  </div>
                  </div>
                <div className="clr"></div>


                <div className="center_wrapper pricing_section">
                    <h2> </h2>

       <div className="row">  

                        {this.showBoxes()}
                                               

                        </div>
                  

                </div>
            </div>
        );
    }
}

function mapStateToProps({ articles }) {
  return { articles };
}

export default connect(mapStateToProps)(Pricing);







