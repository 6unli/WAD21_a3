import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: [
      {
        id: 1,
        username: "John Doe",
        avatar: require("@/assets/user.png"),
        time: "Sep 18, 2020 15:16",
        content: "I think it's going to rain",
        image: require("@/assets/img1.jpeg"),
        likes: 404,
      },
      {
        id: 2,
        username: "Jon Snow",
        avatar: require("@/assets/snow.png"),
        time: "Sep 18, 2020 15:10",
        content: "Which weighs more, a pound of feathers or a pound of bricks?",
        image: null,
        likes: 998,
      },
      {
        id: 3,
        username: "Jane Doe",
        avatar: require("@/assets/goodall.png"),
        time: "Sep 18, 2020 12:12",
        content: "Felt cute, might delete later",
        image: require("@/assets/img2.jpeg"),
        likes: 160,
      },
      {
        id: 4,
        username: "John Wick",
        avatar: require("@/assets/wick.png"),
        time: "Sep 18, 2020 12:12",
        content: "I'm thinking I'm back",
        image:
          "https://images.pexels.com/photos/1790444/pexels-photo-1790444.jpeg",
        likes: 299,
      },
      {
        id: 5,
        username: "Jane Eyre",
        avatar: require("@/assets/eyre.png"),
        time: "Sep 18, 2020 12:12",
        content: "I would always rather be happy than dignified.",
        image:
          "https://images.pexels.com/photos/9888301/pexels-photo-9888301.jpeg",
        likes: 536,
      },
      {
        id: 6,
        username: "Jane Goodall",
        avatar: require("@/assets/goodall.png"),
        time: "Sep 18, 2020 12:12",
        content:
          "Here we are, the most clever species ever to have lived. So how is it we can destroy the only planet we have?",
        image:
          "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/05/28/KidsPost/Images/googall.jpg",
        likes: 1934,
      },
      {
        id: 7,
        username: "John Lennon",
        avatar: require("@/assets/lennon.png"),
        time: "Sep 18, 2020 12:12",
        content: "You may say I'm a dreamer, but I'm not the only one.",
        image:
          "https://guinnessworldrecords.com/Images/abbey-road_tcm25-594684.jpg",
        likes: 159,
      },
      {
        id: 8,
        username: "Johnny Depp",
        avatar: require("@/assets/depp.png"),
        time: "Sep 18, 2020 12:12",
        content: "A dishonest man you can always trust to be dishonest.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/12/Capture-of-Blackbeard.jpg",
        likes: 104,
      },
      {
        id: 9,
        username: "Lorem Ipsum",
        avatar: require("@/assets/logo.png"),
        time: "Sep 18, 2020 12:12",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: null,
        likes: 322,
      },
      {
        id: 10,
        username: "Dolor sit amet",
        avatar: require("@/assets/vuex.png"),
        time: "Sep 18, 2020 12:12",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        image: null,
        likes: 333,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
