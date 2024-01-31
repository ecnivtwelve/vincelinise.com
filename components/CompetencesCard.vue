
import type { jsx } from 'vue/jsx-runtime';
<script setup>
  const stack = [
    {
      name: 'Figma',
      color: '#FFE7E1',
      image: 'image-1.png'
    },
    {
      name: 'After Effects',
      color: '#EBEBFF',
      image: 'image-2.png'
    },
    {
      name: 'React',
      color: '#DBEEF4',
      image: 'image-3.png'
    },
    {
      name: 'Vue.js',
      color: '#E9F8F2',
      image: 'image-4.png'
    },
    {
      name: 'JavaScript',
      color: '#FFF0E1',
      image: 'image-5.png'
    },
    {
      name: 'Python',
      color: '#E1F0FF',
      image: 'image-6.png'
    },
    {
      name: 'HTML/CSS',
      color: '#FAECE7',
      image: 'image-7.png'
    },
    {
      name: 'C#',
      color: '#F4EDFE',
      image: 'image-8.png'
    },
    {
      name: 'Git',
      color: '#F8EAE8',
      image: 'image-9.png'
    },
    {
      name: 'Xcode',
      color: '#E1F0FF',
      image: 'image-10.png'
    },
  ]
</script>

<template>
  <Card>
    <h3>Compétences</h3>
    <h6>
      Au fur et a mesure du temps, j’ai pu utiliser de nombreux outils et langages informatiques qui m’ont servi dans la conception de nombreux projets.
    </h6>
    <hr />
    <div class="competences_grid">
      <div class="competences_grid_item"
        v-for="item in stack"
        :key="item.name"
        :style="`background-color: ${item.color}`"
      >
        <img class="competences_grid_item_image" :src="`/stack/${item.image}`" :alt="item.name" />
        <p class="competences_grid_item_text">{{ item.name }}</p>
      </div>
    </div>
  </Card>
</template>

<style scoped>
  .competences_grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }

  .competences_grid_item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 8px 12px;
    gap: 4px;
    background-color: var(--color);
    border: 1px solid #00000000;
    transition: all 0.1s ease-in-out;
    user-select: none;
  }

  .competences_grid_item_image {
    width: 26px;
    height: 26px;
  }

  .competences_grid_item_text {
    font-size: 1em;
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .competences_grid_item:hover {
    border: 1px solid var(--color-border);
    transform: translateY(-3px);
    filter: drop-shadow(0px 3px 0px var(--color-border));
  }

  .competences_grid_item:active {
    transform: translateY(0px);
    filter: drop-shadow(0px 0px 0px var(--color-border));
  }

  @media (max-width: 768px) {
    .competences_grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .competences_grid_item:nth-last-child(-n+1) {
      display: none;
    }
  }

  @media (max-width: 400px) {
    .competences_grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .competences_grid_item:nth-last-child(-n+1) {
      display: none;
    }
    .competences_grid_item:nth-last-child(-n+2) {
      display: none;
    }
  }
</style>