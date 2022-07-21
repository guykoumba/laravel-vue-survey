import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic Youtube channel content",
        slug: "thecodeholic-youtube-channel-content",
        status: "draft",
        image:
            "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description:
            "My name is Zura.<br /> I am Web Developer with 9+ years of experience, free educational content creator.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you",
                description: null,
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA" },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Georgia" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Germany" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "India" },
                        { uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc", text: "Inited kingdom" },
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "Which language videos do you want to see on my channel ?",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quod debitis esse. Omnis quibusdam perferendis nobis tempora nihil provident earum, ipsum cumque voluptatum. Quisquam commodi officiis obcaecati, incidunt placeat qui. ",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "JavaScript" },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "PHP" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "HTML + CSS" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "All of the above" },
                        { uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc", text: "Everything Zura thikns will be good" },
                    ]
                }
            },
            {
                id: 3,
                type: "radio",
                question: "Which Laravel framework videos do you love most?",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quod debitis esse. Omnis quibusdam perferendis nobis tempora nihil provident earum, ipsum cumque voluptatum. Quisquam commodi officiis obcaecati, incidunt placeat qui. ",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel 5" },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Laravel 6" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Laravel 7" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Laravel 8" },
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "Which PHP framework videos do you want to see on my channel ?",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quod debitis esse. Omnis quibusdam perferendis nobis tempora nihil provident earum, ipsum cumque voluptatum. Quisquam commodi officiis obcaecati, incidunt placeat qui. ",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel" },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Yii2" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Codeigniter" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Symfony" },
                    ]
                }
            },
            {
                id: 5,
                type: "radio",
                question: "What type of projects do you want to see on my channel built with Laravel ?",
                description:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quod debitis esse. Omnis quibusdam perferendis nobis tempora nihil provident earum, ipsum cumque voluptatum. Quisquam commodi officiis obcaecati, incidunt placeat qui. ",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "REST API" },
                        { uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "E-commerce" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Real Estate" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "All of above" },
                    ]
                }
            },
            {
                id: 6,
                type: "text",
                question: "What's your favourite Youtube channel ?",
                description: null,
                data: {}
            },
            {
                id: 7,
                type: "textarea",
                question: "What do you think about TheCodeholic channel ?",
                description: "Write your honest opinion. Everything is anonymous.",
                data: {}
            },
        ],
    },
    {
        id: 200,
        title: "Laravel 8",
        description: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.",
        slug: "laravel-8",
        status: "active",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",        
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [],
    },
    {
        id: 300,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        description: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",        
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [],
    },
    {
        id: 400,
        title: "Tailwind 3",
        slug: "tailwind-3",
        description: `Rapidly build modern websites without ever leaving your HTML.
        A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,        
        status: "active",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [],
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        surveys:[...tmpSurveys],
    }, getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })

        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout');
                    return response;
                })
        }
    },
    mutations: {
        logout: state => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    }, modules: {}
})

export default store;
