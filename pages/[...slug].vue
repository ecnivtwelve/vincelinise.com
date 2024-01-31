<script setup>
  import { ref, onMounted } from 'vue'
  import { ArrowLeft, ExternalLink } from 'lucide-vue-next';

  // get current md file route
  const route = useRoute()
  const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <div class="cards_layout">
    <ContentDoc>
      <template v-slot="{ doc }">
        <Card class="custom-card">
          <div
            class="head-container"
            :style="`background-color: #${doc.color}`"
          >
            <NuxtLink to="/" class="back">
              <ArrowLeft />
            </NuxtLink>

            <img :src="doc.image" />
            <p class="title">{{ doc.title }}</p>
            <div class="about">
              <p class="type">{{ doc.type }}</p>
              <p class="date">{{ doc.date }}</p>
            </div>

            <a :class="website" :href="doc.website" target="_blank" class="website" v-if="doc.website" :style="`color: #${doc.color}`">
              <ExternalLink />
              <p>Ouvrir le site web</p>
            </a>
          </div>

          <ContentRenderer :value="doc">
            <div class="article">
              <ContentRendererMarkdown :value="doc" />
            </div>
          </ContentRenderer>
        </Card>
      </template>
      <template #not-found>
        <h3>Page introuvable</h3>
        <h6>
          La page que vous avez demandé n’existe pas ou a été supprimée
        </h6>
        <a href="/">Retourner à l’accueil</a>
      </template>
    </ContentDoc>

    <Card class="custom-card">
      <p class="copyright">
        (C) 2022 - 2024 Vince Linise (vincelinise.com)<br />
        Ce site web n’utilise pas de cookies et est la propriété intellectuelle exclusive de Vince Linise. Toute reproduction ou copie est interdite.
      </p>
    </Card>
  </div>
</template>

<style scoped>
  .custom-card {
    padding: 0;
    width: var(--card-width);
    overflow: hidden;
    position: relative;
  }

  @media screen and (max-width: 768px){
    .custom-card {
      width: 90vw;
    }
  }

  .copyright {
    font-size: 0.8em;
    font-weight: 500;
    opacity: 0.5;
    margin: 16px 18px;
  }

  .article > div {
    padding: 20px;
    padding-top: 5px;
  }

  .head-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .head-container .title {
    font-size: 1.5em;
    font-weight: 700;
  }

  .head-container img {
    width: 180px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .head-container .about {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }

  .head-container .about .type {
    font-size: 1em;
    font-weight: 600;
    opacity: 1;
  }

  .head-container .about .date {
    font-size: 1em;
    font-weight: 500;
    opacity: 0.5;
  }

  .head-container .back {
    position: absolute;
    top: 18px;
    left: 18px;
    color: white;
    text-decoration: none;

    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    padding: 4px;

    transition: all 0.1s ease-in-out;
  }

  .head-container .back:hover {
    background-color: #ffffff30;
    padding: 10px;
    transform: translateX(-6px) translateY(-6px);
  }

  @media screen and (max-width: 768px) {
    .head-container {
      padding-top: 48px;
    }
    
  }

  .website {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    border-radius: 8px;
    padding: 4px;

    transition: all 0.1s ease-in-out;

    padding: 6px 12px;
    background-color: #ffffff;
    border: 1px solid #ffffff;

    gap: 8px;

    text-decoration: none;
    font-weight: 500;
  }

  .website:hover {
    transform: translateY(-3px);
    border: 1px solid #000000;
    filter: drop-shadow(0px 3px 0px #000000);
  }
</style>