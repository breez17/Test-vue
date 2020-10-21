<template>
  <div class="upload-files" @drop.prevent="handleFilesDrop" @dragover.prevent>
    <input
      class="upload-files__input"
      type="file"
      :id="id"
      :multiple="multiple"
      :accept="accept"
      @change="handleFiles"
    >
    <label class="upload-files__btn" :for="id">Upload</label>
    <span class="upload-files__message"> or drag image on this area</span>
  </div>
</template>

<script>
  import randomHash from '../../utils/randomHash';

  export default {
    name: 'UploadFiles',
    props: {
      multiple: {
        type: Boolean,
        default: false,
      },
      value: {
        type: Array,
        default: () => [],
      },
      accept: {
        type: String,
      }
    },
    data() {
      return {
        hash: randomHash(),
      };
    },
    computed: {
      id() {
        return `upload-${this.hash}`;
      }
    },
    methods: {
      handleFiles(event) {
        const { files } = event.target;

        if (files.length === 0) {
          return;
        }

        this.submit(files);
      },
      handleFilesDrop(event) {
        const droppedFiles = event.dataTransfer.files;

        if (droppedFiles.length === 0) {
          return;
        }

        this.submit(droppedFiles);
      },
      submit(files) {
        this.$emit('input', [...files]);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/scss-variables";

  .upload-files {
    border: 1px solid lightblue;
    padding: 30px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__input {
      display: none;
    }

    &__message {
      font-size: 15px;
    }

    &__btn {
      display: inline-block;
      padding: 8px 10px;
      background: $blue;
      cursor: pointer;
      color: $white;
      border-radius: 2px;
      transition: 0.25s;
      font-weight: bold;
    }
  }
</style>
