<template>
    <div>
        <h3>Add Todo</h3>
         <div class="add">
        <form @submit = "onSubmit">
            <input type="text" v-model="title" placeholder="Add todo...">
            <input type="submit"   value="Submit">
        </form>


    </div>
</div>
</template>



<script>

import {mapActions} from 'vuex'

export default {
    name: 'AddTodo',
    data(){
        return{
            title: ''
        }

    },
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }
    }
    
}
</script>



<style scoped>

form{
    display:flex;
}

input[type="text"]{
    flex:10;
    padding:10px;
    border: 1px rgb(52, 6, 158);
    outline: 0;
}

input[type="submit"]{
    flex:2;
    cursor:pointer;
    border: 1px solid rgb(52, 6, 158);
    background:  rgb(52, 6, 158);
    color:mintcream;
    
}
</style>