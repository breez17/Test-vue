<template>
  <div>
    <div class="modal__bot-avatar bot-avatar" v-if="avatar">
      <button class="bot-avatar__btn--delete" @click="deleteAvatar">
        x
      </button>
      <img class="bot-avatar__image" :src="avatar" alt="">
    </div>
    <div class="modal__bot-avatar bot-avatar" v-else>
      ?
    </div>
    <form class="modal__form modal-form" @submit.prevent="submitHandler">
      <UploadFiles
              class="modal-form__input"
              :multiple="false"
              v-model="files"
              @input="uploadImages"
              accept="image/*"
      />
      <md-field
        class="modal-form__input"
        :class="{'md-invalid': ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}">
        <label>Bot Name *</label>
        <md-input v-model="name" />
        <span class="md-error">
          The Bot Name field is required. Minimal length is {{ minNameLength }} symbols
        </span>
      </md-field>
      <md-field
        class="modal-form__input"
        :class="{'md-invalid': $v.description.$dirty && !$v.description.required}">
        <label>Description *</label>
        <md-textarea v-model="description"></md-textarea>
        <span class="md-error">The Description field is required</span>
      </md-field>
      <DatePicker v-model="selectedDate">
        <template v-slot="{ inputValue, inputEvents }">
          <input
                class="bg-white border px-2 py-1 rounded modal__calendar-view"
                :value="valueDate"
          />
        </template>
      </DatePicker>
      <button
        v-if="isBotCreating"
        class="modal-form__btn--submit"
        type="submit"
      >
        Create
      </button>
      <button
        v-else
        class="modal-form__btn--submit"
        type="submit"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import moment from "moment";
import uniqid from 'uniqid';
import UploadFiles from '@/components/HOCs/UploadFiles';

export default {
  name: 'BotForm',
  validations: {
    name: { required, minLength: minLength(3) },
    description: { required },
    selectedDate: { required }
  },
  props: {
    isBotCreating: Boolean,
    activeBot: Object
  },
  data: () => {
    return {
      name: null,
      description: null,
      files: null,
      avatar: null,
      selectedDate: null,
    }
  },
  created() {
    if (this.activeBot) {
      this.name = this.activeBot.name;
      this.description = this.activeBot.description;
      this.avatar = this.activeBot.avatar;
      this.selectedDate = this.activeBot.date;
    }
  },
  computed: {
    minNameLength() {
      return this.$v.name.$params.minLength.min;
    },

    valueDate() {
      if (this.selectedDate) {
        return moment(this.selectedDate).format("LLL");
      }
      return "Choose date";
    }
  },
  methods: {
    submitHandler(e) {
      if (this.$v.$invalid) {
        this.$v.$touch();

        return;
      }

      const formData = {
        id: this.isBotCreating ? uniqid() : this.activeBot.id,
        name: this.name,
        description: this.description,
        avatar: this.avatar,
        date: this.selectedDate
      };

      this.$emit('submitHandler', formData);
    },
    uploadImages(val) {
      this.files = val;
      if (val.length) {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = e => {
          this.avatar = e.target.result;
        };
      }
    },
    deleteAvatar() {
      this.files = [];
      this.avatar = null;
    },
  },
  components: {
    UploadFiles,
    DatePicker,
    Calendar
  }
}
</script>
