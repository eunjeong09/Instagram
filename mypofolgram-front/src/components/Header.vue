<template>
    <div class="header">
        <h1 class="logo">
            <img src="/images/logo.png" alt="" @click="moveTo('/')" />
        </h1>
        <div class="iconList">
            <div class="plusWrap">
                <i class="fa-solid fa-square-plus" @click="toggle"></i>
                <div class="createModal" v-if="isCreate">
                    <ul>
                        <li @click="show('showRegister')">
                            <!-- <li @click="showRegister = true"> -->
                            <span>게시물</span>
                            <i class="fa-solid fa-table-cells"></i>
                        </li>
                        <li>
                            <span>스토리</span>
                            <i class="fa-solid fa-circle-plus"></i>
                        </li>
                        <li>
                            <span>릴스</span>
                            <i class="fa-solid fa-clapperboard"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <i class="fa-solid fa-heart" @click="moveTo('/activity')"></i>
            <i class="fa-solid fa-paper-plane"></i>
            <img @click="moveTo('/mypage')" src="/images/example.jpeg" alt="유저이미지" />
        </div>
    </div>
    <!-- use the modal component, pass in the prop -->
    <new-post :show="showRegister" @close="close('showRegister')">
        <template #header>
            <div class="topWithButton">
                <i></i>
                <p class="bold center">새 게시물 만들기</p>
                <i class="point" v-if="files.length === 0"></i>
                <i @click="addContent()" class="point" v-if="files.length !== 0 && this.showUploadModal2">다음</i>
                <i @click="upload()" v-else-if="files.length !== 0 && !this.showUploadModal2" class="point">공유하기</i>
            </div>
        </template>
        <template #body>
            <div v-if="!files.length" class="uploadBody1">
                <div>사진과 동영상을 여기에 끌어다 놓으세요.</div>
                <input
                    ref="fileInput"
                    id="input"
                    type="file"
                    name="image"
                    accept="image/*"
                    multiple="multiple"
                    class="input"
                    @change="uploadImage()"
                />

                <br />
                <div @click="$refs.fileInput.click()" class="buttonBackground">컴퓨터에서 선택</div>
            </div>
            <!-- <div v-else-if="files.length !== 0 && this.showUploadModal2" class="imagesWrap uploadBody2">
                <div v-bind:style="{ backgroundImage: `url(&quot;${files[0].preview}&quot;)` }"></div>
            </div> -->

            <!-- 위에 백그라운드 이미지로 처한걸 img태그로 변겅 -> cropper.js 적용 -->
            <div v-else-if="files.length !== 0 && this.showUploadModal2" class="imagesWrap uploadBody2" id="uploadBody2">
                <!-- 이미지 업로드까지 확인 -->
                <!-- <img id="cropperImage" src=""/> -->

                <!-- cropper 적용 -->
                <div class="flex">
                    <div class="w-3/4 mr-4">
                        <img ref="cropperImage" src="" class="hidden" id="cropperImage" alt="image-edit" />
                    </div>
                </div>
            </div>

            <div v-else class="uploadBody3">
                <div class="leftArea">
                    <!-- <div v-for="(file, index) in files" :key="index">
                        <img :src="file.preview" />
                    </div> -->
                    <!-- 첫번째 이미지만 출력되도록 -->
                    <!-- <div v-bind:style="{ backgroundImage: `url(&quot;${files[0].preview}&quot;)` }"></div> -->

                    <!-- cropper -->
                    <img :src="cropped" alt="cropped image">
                </div>
                <div class="rightArea">
                    <div>
                        <img :src="getterUserInfo.userImgUrl" alt="" />
                        <span class="nickname" v-text="getterUserInfo.userId"></span>
                    </div>
                    <textarea aria-label="문구 입력..." placeholder="문구 입력..." rows="12" v-model="content"></textarea>
                </div>
            </div>
        </template>
        <template #footer>
            <div></div>
        </template>
    </new-post>
</template>

<script>
import modal from "./modal.vue";
// import axios from 'axios'
import http from "../utils/http";
import { mapGetters } from "vuex";
// cropper
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
    components: {
        newPost: modal,
    },
    computed: {
        ...mapGetters("userInfo", ["getterUserInfo"]),
    },
    data() {
        return {
            isCreate: false,
            imgTest: "/images/example.jpeg",
            showRegister: false,
            selectedFile: null,
            showComplete: false,
            images: "",
            // 업로드
            files: [],
            filesPreview: [],
            uploadImageIndex: 0, // 이미지 업로드를 위한 변수
            content: "",
            showUploadModal2: false,
            multipartFiles: [],

            postDetailDto: {
                userId: "",
                content: "",
            },
            // cropper
            cropperImage: {},
            cropper: {},
            cropped:''
        };
    },
    methods: {
        toggle() {
            this.isCreate = !this.isCreate;
        },
        moveTo(path) {
            this.$router.push({
                path: path,
            });
        },
        show(type) {
            this[type] = true;
            this.isCreate = false;
        },
        close(type) {
            switch (type) {
                case "showRegister":
                    this[type] = false;
                    this.files = [];
                    this.filesPreview = [];
                    this.uploadImageIndex = 0;
                    break;
                default:
                    console.log("close 함수 실행");
            }
        },
        uploadImage() {
            let num = -1;
            for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
                this.multipartFiles[i] = this.$refs.fileInput.files[i];
                this.files = [
                    ...this.files,
                    //이미지 업로드
                    {
                        //실제 파일
                        file: this.$refs.fileInput.files[i],
                        //이미지 프리뷰
                        preview: URL.createObjectURL(this.$refs.fileInput.files[i]),
                    },
                ];
                num = i;
                //이미지 업로드용 프리뷰
                this.filesPreview = [...this.filesPreview, { file: URL.createObjectURL(this.$refs.fileInput.files[i]) }];
            }
            this.uploadImageIndex = num + 1; //이미지 index의 마지막 값 + 1 저장
            if (this.filesPreview.length !== 0) {
                this.showUploadModal2 = true;

                setTimeout(() => {
                    this.createImageUrl();
                }, 1000);
            }
        },
        createImageUrl() {
            // null 문제 해결 필요
            // let test = document.getElementById("cropperImage");
            document.getElementById("cropperImage").src = this.files[0].preview;

            this.image = this.$refs.cropperImage;
            this.cropper = new Cropper(this.image, {
                dragMode: 'move',
                aspectRatio: 16 / 9,
                autoCropArea: 0.65,
                restore: false,
                guides: false,
                center: false,
                highlight: false,
                cropBoxMovable: true,
                cropBoxResizable: false,
                toggleDragModeOnDblclick: false,
                preview: ".preview",
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas();
                    this.cropped = canvas.toDataURL('image/png');
                    console.log("여기 확인---");

                    // 파일로 변환하는 방법 -> 적용필요
                    // 파일 이름알기 
                    let fileName = this.multipartFiles[0].name;
                    this.cropper.getCroppedCanvas().toBlob((blob) => {
                        const formData = new FormData();
                        formData.append('croppedImage', blob, fileName , 0.7);

                        for (var pair of formData.entries()) {
                            console.log(pair[0]+ ', ' + pair[1]); 
                        }
                    });
                },
            });
        },
        addContent() {
            this.showUploadModal2 = false;
        },
        async upload() {
            const form = new FormData();
            this.postDetailDto.userId = this.getterUserInfo.id;
            this.postDetailDto.content = this.content;
            this.multipartFiles.forEach((file) => {
                form.append("multipartFiles", file);
            });
            form.append("postDetailDto", new Blob([JSON.stringify(this.postDetailDto)], { type: "application/json" }));

            await http
                .post("/api/post/savePost", form, {
                    headers: { "content-type": "multipart/form-data" },
                })
                .then((response) => {
                    if (response.data.result === true) {
                        console.log(true);
                    } else {
                        console.log(false);
                    }
                })
                .finally(this.close("showRegister"));
        },
    },
};
</script>

<style scoped>
.buttonBackground {
    width: 130px;
    height: 32px;
    cursor: pointer;
}
.input {
    display: none;
}
.imagesWrap {
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
.uploadBody2 > div {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.leftArea {
    width: 60%;
    float: left;
    border-right: 2px solid #dbdbdb;
    position: relative;
}
.rightArea {
    padding: 10px;
    width: 39%;
    float: right;
    position: relative;
    /* border-bottom: 2px solid #dbdbdb; */
}
.rightArea::after {
    content: "";
    width: 100%;
    background: #dbdbdb;
    position: absolute;
    height: 2px;
    left: 0px;
    top: 50%;
}
.rightArea > div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.leftArea > div {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
.rightArea img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
}
img {
    display: block;
    max-width: 100%; /* This rule is very important, please do not ignore this! */
}
</style>
