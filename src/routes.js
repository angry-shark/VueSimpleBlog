import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import SingleBlog from './components/SingleBlog.vue';

const Routes = [
    {path:"/",component:ShowBlogs,name:'showblogsLink'},
    {path:"/add",component:AddBlog,name:"addblogLink"},
    {path:"/blog/:id",component:SingleBlog}
]

export default Routes;