<template>
    <div v-if="followerCount === 0" class="empty">
        <div>
            <i class="fa-solid fa-user-plus"></i>
            <p>팔로워</p>
            <span>회원님을 팔로우하는 모든 사람이 여기에 표시됩니다.</span>
        </div>
    </div>
    <div v-else>
        <div v-for="(follower) in followerList" class="people" v-bind:key="follower">
            <img src="/images/example.jpeg" alt="고양이" />
            <span @click="moveToUserPage(follower.followingId)">{{follower.followingId}}</span>
            <div class="button right" @click="test">삭제</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
    props : ['followerList'],
    data() {
        return {
            followerCount: 1
        };
    },

    mounted() {
        // followerCount
        // followerList
    },
    methods : {
        ...mapMutations('userInfo', ['setUserId']),
        ...mapActions('userInfo', ['getUserInfo']),
        test() {
        },
        async moveToUserPage(val) {
            // follower.followingId
            this.setUserId(val)
            await this.getUserInfo()
            this.$router.push({ path: '/mypage/' });
        }
    }
};
</script>
