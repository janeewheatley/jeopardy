<template>
  <div class="next offset-md-9">
    <button
      type="button"
      class="btn btn-outline-light nextButton"
      @click="$emit('onNextQuestion')"
      :disabled="disableNextBtn"
    >
      Next >
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disableNextBtn: Boolean,
  },
};
</script>


