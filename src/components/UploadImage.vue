<template>
    <div 
      class="upload-container" 
      @dragover.prevent="dragOver"
      @dragleave.prevent="dragLeave"
      @drop.prevent="drop"
    >
      <input 
        type="file" 
        ref="fileInput" 
        @change="handleFileChange" 
        style="display: none;"
      />
      <div 
        class="upload-box" 
        @click="triggerFileInput"
        :class="{ 'is-dragover': isDragOver }">
        <p v-if="!imageUrl">Click/Arrasta <br> Imagem</p>
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: null,
        isDragOver: false
      };
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        const file = event.target.files[0];
        this.previewImage(file);
      },
      dragOver(event) {
        this.isDragOver = true;
      },
      dragLeave(event) {
        this.isDragOver = false;
      },
      drop(event) {
        this.isDragOver = false;
        const file = event.dataTransfer.files[0];
        this.previewImage(file);
      },
      previewImage(file) {
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .upload-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8a2d21;
    padding: 5px;
    border-radius: 100px;
  }
  
  .upload-box {
    width: 150px;
    height: 150px;
    background-color: #ffffffe8;
    border: 2px solid #626161;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.3s;
  }

  .upload-box p{
    font-size: 17px;
  }
  
  .upload-box.is-dragover {
    border-color: #00bfff;
  }
  
  .upload-box img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
  </style>
  