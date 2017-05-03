import React from 'react';
//import ReactDOM from 'react-dom';
import { Carousel,Card } from 'antd';
import './FrontCarousel.less';
import Url from '../../../apipackage/frontPageMediaFile.json';
let CarouselImgDatas = Url.CarouselImg;
let WeeklyNice = Url.WeeklyNice;
console.log(CarouselImgDatas);
//自执行函数动态获取轮播图路径,简介
CarouselImgDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../../../../resource/images/carousel/' + singleImageData.title);
    singleImageData.imageDescription = singleImageData.description;
    console.log(singleImageData.imageURL);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(CarouselImgDatas);
console.log(CarouselImgDatas[1]);
/*
WeeklyNice = (function genWeeklyImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleWeeklyImageData = imageDatasArr[i];
    singleWeeklyImageData.imageURL = require('../../images/weekly/' + singleWeeklyImageData.title);
    console.log(singleWeeklyImageData.imageURL);
    imageDatasArr[i] = singleWeeklyImageData;
  }
  return imageDatasArr;
})(WeeklyNice);
*/

export default class FrontCarousel extends React.Component {

  render() {

    let imgFigures = [];
    CarouselImgDatas.forEach(function(value,index){
      imgFigures.push(
          <div className="frontimgBox">
            <img src={CarouselImgDatas[index].imageURL} key={index}/>
            <div className="imagedes">{CarouselImgDatas[index].imageDescription}</div>
          </div>
      );
      console.log(CarouselImgDatas[index]);
    });

    return (
      <div className="CarouselBox">
        <Carousel autoplay className="Carousel">
          {imgFigures}
        </Carousel>
      </div>
    )
  }
}
