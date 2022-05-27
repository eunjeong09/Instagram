<template>
    <div>
        <!-- MypostList body -->
        <TitleHeader></TitleHeader>
        <!-- header component -->
        <PostList v-bind:isMypage="true"></PostList>
    </div>
</template>

<script>
import PostList from '../../components/PostList.vue'
import TitleHeader from '../../components/TitleHeader.vue'
export default {
    name : 'MyPostList',
    data() { 
        return {
        }
    },
    components : {
        PostList,
        TitleHeader
    },
}
</script>