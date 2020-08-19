<template>
  <div>
    <!--search bar area-->
    <div class="search-bar">
      <van-row>
        <van-col span="3" class="location-wrap">
          <img :src="locationIcon" width="60%" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <div class="search-btn-wrap">
            <van-button class="search-btn">查找</van-button>
          </div>
        </van-col>
      </van-row>
    </div>
    <!--swipwer area-->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item
          v-for="(banner, index) in bannerPicArray"
          v-lazy="banner.imageUrl"
          :key="index"
        >
          <img :src="banner.imageUrl" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <div>{{ cate.mallCategoryName }}</div>
      </div>
    </div>
    <!--AD banner area-->
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="100%" />
              <div>{{ item.goodsName }}</div>
              <div>￥{{ item.price }} (￥{{ item.mallPrice }})</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!--floor one area-->
    <div class="floor">
      <floorComponent
        :floorData="floorData"
        :floortitle="floortitle"
      ></floorComponent>
    </div>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.price"
              ></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import floorComponent from "@/components/floorComponent";
import goodsInfo from "@/components/goodsInfoComponent";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    floorComponent,
    goodsInfo,
    swiper,
    swiperSlide
  },
  data() {
    return {
      locationIcon: require("../assets/images/location.png"),
      bannerPicArray: [
        { imageUrl: require("@/assets/images/swaper1.jpg") },
        { imageUrl: require("@/assets/images/swaper2.jpg") },
        { imageUrl: require("@/assets/images/swaper3.jpg") }
      ],
      category: [],
      adBanner: [],
      recommendGoods: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      floorData: [],
      floortitle: "",
      hotGoods: [] //热卖商品
    };
  },
  created() {
    this.getMails();
  },
  methods: {
    getMails() {
      setTimeout(() => {
        this.category = [
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果"
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            mallCategoryName: "营养鲜果2"
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果3"
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            mallCategoryName: "营养鲜果2"
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果3"
          }
        ];
        this.adBanner = {
          PICTURE_ADDRESS: require("@/assets/images/swaper1.jpg")
        };
        this.recommendGoods = [
          {
            image: require("@/assets/images/swaper1.jpg"),
            goodsName: "营养鲜果",
            price: 100,
            mallPrice: 150
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            goodsName: "营养鲜果2",
            rice: 100,
            mallPrice: 150
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            goodsName: "营养鲜果3",
            price: 100,
            mallPrice: 150
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            goodsName: "营养鲜果2",
            price: 100,
            mallPrice: 150
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            goodsName: "营养鲜果3",
            price: 100,
            mallPrice: 150
          }
        ];
        this.floorData = [
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果"
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            mallCategoryName: "营养鲜果2"
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果3"
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果3"
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            mallCategoryName: "营养鲜果2"
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            mallCategoryName: "营养鲜果3"
          }
        ];
        this.floortitle = "西湖水";
        this.hotGoods = [
          {
            image: require("@/assets/images/swaper1.jpg"),
            name: "营养鲜果3",
            price: 24
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            name: "营养鲜果1",
            price: 24
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            name: "营养鲜果3",
            price: 24
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            name: "营养鲜果1",
            price: 24
          },
          {
            image: require("@/assets/images/swaper1.jpg"),
            name: "营养鲜果3",
            price: 24
          },
          {
            image: require("@/assets/images/swaper3.jpg"),
            name: "营养鲜果1",
            price: 24
          }
        ];
      }, 1000);
    }
  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: #fff;
}
.location-wrap {
  text-align: center;
}
.location-icon {
  display: inline-block;
  border: none;
  vertical-align: middle;
}
.search-btn-wrap {
  width: 80%;
  height: 1.6rem;
  margin: 0 auto;
  padding: 0.3rem 0;
}
.search-btn {
  display: block;
  width: 100%;
  height: 1.6rem;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
}
.swiper-area {
  width: 20rem;
  clear: both;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  color: #333333;
  padding: 0.2rem;
  font-size: 12px;
  text-align: center;
}
.ad-banner {
  height: 3rem;
  overflow: hidden;
}
.ad-banner img {
  width: 100%;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area {
  text-align: center;
  font-size: 14px;
  line-height: 1.8rem;
}
</style>
