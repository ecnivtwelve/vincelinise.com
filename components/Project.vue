<script setup>
  // get title and description from passed props
  const { title, description } = defineProps({
    image: String,
    title: String,
    type: String,
    date: String,
    description: String,
    role: String,
    color: String,
    href: String
  })
</script>

<template>
  <NuxtLink class="project_card" :to="href">
    <img class="project_image" :src="image" :alt="title" />
    <div class="project_content">
      <p class="title">{{ title }}</p>
      <div class="about">
        <p class="about-type" :style="`color: ${color}`">{{ type }}</p>
        <p class="about-date">{{ date }}</p>
      </div>
      <p class="description">{{ description }}</p>
      <p class="role"><span>Rôle :</span> {{ role }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
  .project_card {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .project_card {
    text-decoration: none;
  }

  .project_card:hover .project_image {
    transform: translateY(-3px);
    filter: drop-shadow(0px 1px 2px var(--color-text-light));
  }

  .project_card:hover .title {
    text-decoration: underline;
  }

  .project_image {
    width: 180px;
    border-radius: 10px;
    transition: all 0.1s ease-in-out;
    aspect-ratio: 200/85;
    height: 80px;
  }

  .project_content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text);
  }

  .about {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  .about-type {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.65px;
    text-transform: uppercase;
  }

  .about-date {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.65px;
    text-transform: uppercase;
    color: var(--color-text-light);
  }

  .description {
    font-size: 15px;
    font-weight: 500;
    color: var(--color-text-light);
  }

  .role {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-text);
  }

  .role span {
    font-weight: 500;
    color: var(--color-text-light);
  }

  @media (max-width: 768px) {
    .project_card {
      flex-direction: column;
      gap: 12px;
      margin-bottom: 14px;
    }

    .project_image {
      width: 200px;
      height: 85px;
    }

    .project_content {
      gap: 8px;
    }

    .about {
      flex-direction: column;
      gap: 4px;
    }
  }
</style>