<template>
  <form class="row needs-validation text-center" novalidate>
    <div class="row response text-center">
      <div class="col-md-8 offset-md-2 text-center">
        <textarea
          @keyup="$emit('onUserAnswer', $event)"
          @keypress="$emit('onUserAnswer', $event)"
          class="form-control"
          placeholder="Enter your response"
          required
          v-model="userAnswerValue"
          :disabled="disableTextField"
          @keyup.enter="responseSubmit()"
          :class="classObject"
        ></textarea>
      </div>
    </div>
    <div class="col-md-8 offset-md-2 text-center">
    <AnswerComponent v-if="displayAnswer" />
      <button
        type="button"
        class="btn btn-outline-light"
        @click="responseSubmit()"
        :disabled="disableSubmitBtn || formInvalid"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import AnswerComponent from "@/components/AnswerComponent.vue";

export default {
  components: {
    AnswerComponent,
  },
  props: {
    displayAnswer: Boolean,
    onSubmit: Function,
    disableTextField: Boolean,
    disableSubmitBtn: Boolean,
    responseValid: Boolean,
    responseInvalid: Boolean,
  },
  data() {
    return {
      userAnswer: false,
      displayCounterCorrect: 0,
      displayCounterTotal: 0,
      alreadyAnswered: false,
      userAnswerValue: "",
    };
  },
  created() {
    //.on is a function that is called with a parameter 'on-next', which is the name of the event.  this.clearValue is a second parameter, that is a function in this case
    this.emitter.on("on-next", this.clearValue);
  },
  methods: {
    //should go in submit component
    responseSubmit() {
      this.onSubmit(this.userAnswerValue);
    },
    clearValue() {
      this.userAnswerValue = "";
    },
  },
  computed: {
    formInvalid() {
      return this.userAnswerValue == "";
    },
    classObject() {
      return {
        "is-valid": this.responseValid,
        "is-invalid": this.responseInvalid,
      }
    }
  },
};
</script>

