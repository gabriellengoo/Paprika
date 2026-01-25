<template>
  <div class="coming-soon-page">
    <main class="coming-soon-page__shell">
      <header class="header-section coming-soon-page__header" aria-label="Coming soon page">
        <h1 class="header-section__headline" aria-label="Coming soon" role="text">
          <span
            class="header-section__headline-track"
            aria-hidden="true"
          >
            <span>Coming soon</span>
            <span>Coming soon</span>
          </span>
        </h1>
        <p class="coming-soon-page__description">
          Choose this placeholder when you need the navigation item to exist before the destination is ready.
        </p>
      </header>
    </main>
  </div>
</template>

<style scoped>
.coming-soon-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
}

.coming-soon-page__shell {
  width: 100%;
  max-width: 900px;
}

.coming-soon-page__header {
  text-align: center;
}

.coming-soon-page__description {
  margin-top: 2rem;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
