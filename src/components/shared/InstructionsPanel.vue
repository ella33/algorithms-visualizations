<template>
  <div class="instructions-panel">
    <h2>{{title}}</h2>
    <div class="hint" v-html="explanation"></div>
    <div
      v-for="item in commands"
      :key="item.id"
      v-bind:class="['command', `command-${item.id}`]"
      v-html="item.text"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionsPanel',
  props: {
    commands: Array,
    explanation: String,
    title: String,
  },
}
</script>

<style scoped>
.instructions-panel {
  width: 100%;
  padding: 0 50px;
}

.command {
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  max-width: 300px;
}

.hint {
  font-size: 0.85rem;
  margin-bottom: 20px;
}
</style>