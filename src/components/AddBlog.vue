<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!this.submitted">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required>
        
            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label>Vue.js</label>
                <input type="checkbox" value="vue.js" v-model="blog.cetegories">

                <label>node.js</label>
                <input type="checkbox" value="node.js" v-model="blog.cetegories">

                <label>react.js</label>
                <input type="checkbox" value="react.js" v-model="blog.cetegories">

                <label>Angular4</label>
                <input type="checkbox" value="Angular4" v-model="blog.cetegories">
            </div>

            <label>作者：</label>
            <select v-model="blog.author">
                <option v-for="(author,index) in this.authors" :key="index" :value="author">
                    {{author}}
                </option>
            </select>
            <button @click.prevent="postBlog">添加博客</button>
        </form>

        <div v-if="this.submitted">
            <h3>你的博客添加成功</h3>
        </div>

        <hr>

        <div id="preview">
            <h3>blog overview</h3>
            <p>blog title:{{this.blog.title}}</p>
            <p>blog content:{{this.blog.content}}</p>
            <p>blog class:</p>
            <ul>
                <li v-for="(item,index) in blog.cetegories" :key="index">
                    {{item}}
                </li>
            </ul>
            <p>author:{{this.blog.author}}</p>
        </div>
    </div>
</template>

<script>

//http://jsonplaceholder.typicode.com/posts

export default {
    name:'add-blog',
    data () {
        return {
            blog:{
                title:"",
                content:"",
                cetegories:[],
                author:''
            },
            authors:["文刀琳","冷鱼涧","yujianlin"],
            submitted:false
        }
    },
    methods: {
        postBlog:function(){
            this.$http.post("http://jsonplaceholder.typicode.com/posts",{
                title:this.blog.title,
                body:this.blog.content,
                userId:1
            }).then((data) => {
                console.log(data);
                this.submitted = true;
            })
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label{
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
}

textarea{
    height: 200px;
}

#checkboxes label{
    display: inline-block;
    margin-top: 0;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: white;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}

#preview{
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin: 30px 0;
}

h3{
    margin-top: 10px;
}
</style>


