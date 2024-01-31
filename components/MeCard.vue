<script setup>
  import { MapPin, Mail } from 'lucide-vue-next';
</script>

<template>
  <Card>
    <div class="me_card">
      <img src="~/assets/img/me.png" alt="Me" class="me_pic" />
      <div class="me_content">
        <div class="me_welcome">
          <h6>Enchanté 👋, moi c’est</h6>
          <h2>Vince Linise</h2>
        </div>

        <h6>
          Développeur web et mobile, UI/UX, brand & motion designer de 16 ans, passionné d’informatique en général. Je transmets cette passion à travers de nombreux projets en ligne et dans la vie.
        </h6>

        <div class="me_contact">
          <div class="me_location">
            <MapPin />
            <div class="me_location_text">
              <p class="me_location_text_t">Autour de</p>
              <p class="me_location_text_d">Rennes <span class="desktop-only">(Ille-et-Vilaine)</span> <span class="mobile-only">(35)</span></p>
            </div>
          </div>
          <a href="mailto:contact@vincelinise.com" class="btn-primary">
            <Mail :size="22" />
            <p class="desktop-only">Contactez-moi</p>
          </a>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>
  .me_card {
    display: flex;
    flex-direction: row;
  }

  .me_pic {
    width: 52px;
    height: 52px;
    border-radius: 80px;
  }

  .me_content {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .me_welcome {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .me_contact {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    margin-top: 10px;
  }

  .me_location {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .me_location_text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .me_location_text_t {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.65px;
    text-transform: uppercase;
    color: var(--color-text-light);
  }

  .me_location_text_d {
    font-size: 17px;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .btn-primary {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: var(--color-primary);
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    border: 1px solid var(--color-primary);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0px 3px 0px 0px var(--color-border);
    border: 1px solid var(--color-border);
  }

  .btn-primary:active {
    transform: translateY(0px);
    box-shadow: 0px 0px 0px 0px var(--color-border);
    border: 1px solid var(--color-primary);
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 600px) {
    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: inline;
    }
  }
</style>