<script setup>
  import { Phone, Mail, Send } from 'lucide-vue-next';
</script>

<template>
  <div class="cards_layout">
    <MeCard />
    <CompetencesCard />

    <Card>
      <h3>Projets complets</h3>
      <h6>
        Voici un historique non-exhaustif des projets que j’ai mené ou auxquels j’ai contribué pendant ces dernières années
      </h6>
      <hr />

      <Project
        image="/images/prj-papillon.svg"
        title="Papillon"
        type="Application mobile"
        date="janvier 2021 - aujourd'hui"
        description="Avec plus de 30 000 utilisateurs, Papillon est le client de vie scolaire le plus téléchargé"
        role="Développeur et fondateur du projet"
        color="#1D7E67"
        href="projects/papillon"
      />
      <Project
        image="/images/prj-mhb.svg"
        title="My Halal Brows"
        type="Site web & Branding"
        date="août 2023"
        description="Conception d’un branding et d’un site web pour la marque de services et de produits My Halal"
        role="Designer graphique"
        color="#AC18A3"
        href="projects/my-halal-brows"
      />
    </Card>

    <Card>
      <h3>Moi & le monde du numérique</h3>
      <h6>
        Depuis mon plus jeune age, le monde du numérique m’a toujours intéressé et c’est tout naturellement que j’ai commencé a apprendre le design graphique et la programmation. A travers de nombreux projets fictifs, j’ai pu apprendre en pratique de nombreuses compétences.
      </h6>
    </Card>

    <Card>
      <h3>Me contacter</h3>
      <h6>
        Besoin de me retrouver ? Retrouvez mes coordonnées ci-dessous
      </h6>
      <hr />
      <a class="contact" href="tel:+3367416854">
        <Phone />
        <h6>Par téléphone</h6>
        <h4>07 67 41 68 54</h4>
      </a>
      <a class="contact" href="mailto:contact@vincelinise.com">
        <Mail />
        <h6>Par e-mail</h6>
        <h4>contact@vincelinise.com</h4>
      </a>
    </Card>

    <Card>
      <p class="copyright">
        (C) 2022 - 2024 Vince Linise (vincelinise.com)<br />
        Ce site web n’utilise pas de cookies et est la propriété intellectuelle exclusive de Vince Linise. Toute reproduction ou copie est interdite.
      </p>
    </Card>
  </div>
</template>

<style scoped>
  .copyright {
    font-size: 0.8em;
    font-weight: 500;
    opacity: 0.5;
  }

  .contact {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
  }


</style>