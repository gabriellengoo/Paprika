<template>
  <section id="team" class="module team-section">
    <div v-if="module.members && module.members.length" class="team-section__grid">
      <article
        v-for="(member, index) in module.members"
        :key="member._key || index"
        class="team-section__card"
      >
        <h3 class="team-section__name">{{ member.name }}</h3>
        <p class="team-section__role">{{ member.role }}</p>
      </article>
    </div>

    <p v-else class="team-section__empty">No team members found.</p>
  </section>
</template>

<script>
export default {
  props: {
    module: {
      type: Object,
      required: true,
    },
  },
}
</script>
