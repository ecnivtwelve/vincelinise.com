<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
  .card {
    background-color: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    box-shadow: 0px 4px 0px 0px #000;
    
    width: var(--card-width);
    padding: var(--card-padding);

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>