<template>
    <div v-theme="'narrow'" id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" placeholder="搜索文章" v-model="search">
        <div class="single-blog" v-for="(blog,index) in this.filterBlogs" :key="index">
            <router-link :to="'/blog/' + blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            
            <article>
                {{blog.body | snippet}}
            </article>
        </div>
    </div>
</template>


<script>
export default {
    name:"show-blogs",
    data () {
        return {
            blogs:[],
            search:''
        }
    },
    created () {
      this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        //   console.log(data);
        this.blogs = data.body.slice(0,10);
      })  
    },
    computed: {
        filterBlogs:function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
        "to-uppercase":function(value){
            return value.toUpperCase()
        },
        "snippet":(value) => {
            return value.slice(0,80) + "...";
        }
    },
    directives:{
        "rainbow":{
            bind(el,binding,vnode){
                //el 是使用指令的元素，binding是使用时传入的参数，
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        },
        "theme":{
            bind(el,binding,vnode){
                if(binding.value === 'wide'){
                el.style.maxWidth = "1260px";
                }else if(binding.value === 'narrow'){
                el.style.maxWidth = "800px";
                }
            }
}
    },
    methods: {
        
    },
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
    background: rgb(98, 98, 168);
    padding: 10px;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background:#eee;
    border: 1px dotted #aaa;
}

#show-blogs a{
    color:#aaa;
    text-decoration: none;
}

input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
