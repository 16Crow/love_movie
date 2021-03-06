# 爱电影WEB APP(based on Vue.js)

## 食用方法
```
git pull git@github.com:16Crow/love_movie.git
npm install
npm run serve
```

## 初始化项目
+ 通过vue-cli脚手架初始化项目结构
+ vue create love_movie
+ 手动配置

## 项目接口文件
|接口名称	|请求方式	|请求示列|
| --------   | -----:  | :----: |
|正在热映	|get	|http://39.97.33.178/api/movieOnInfoList?cityId=10|
|即将上映	|get	|http://39.97.33.178/api/movieComingList?cityId=10|
|搜索	    |get	|http://39.97.33.178/api/searchList?cityId=10&kw=a|
|城市	    |get	|http://39.97.33.178/api/cityList|
|电影详情	|get	|http://39.97.33.178/api/detailmovie?movieId=345808|
|影院	    |get	|http://39.97.33.178/api/cinemaList?cityId=10|
|城市定位	|get	|http://39.97.33.178/api/getLocation|

## 技术栈
- [x] vue 
- [x] vuex进行状态管理 
- [x] vue-router路由分发
- [x] better-scroll滚动效果插件
- [x] proxy
- [x] axios

## 界面展示
正在热映  
![image](https://github.com/16Crow/love_movie/blob/master/docImg/movie_now.png)  
即将上映  
![image](https://github.com/16Crow/love_movie/blob/master/docImg/movie_comming.png)  
搜索  
![image](https://github.com/16Crow/love_movie/blob/master/docImg/movie_search.png)  
定位城市  
![image](https://github.com/16Crow/love_movie/blob/master/docImg/movie_location.png)  
影院列表  
![image](https://github.com/16Crow/love_movie/blob/master/docImg/cinemaList.png)  
我的  
![image](https://github.com/16Crow/love_movie/blob/master/docImg/mine.png)  
