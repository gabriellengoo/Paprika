<template>
  <section
    class="module editorial-text"
    :class="editorialClasses"
  >
    <h2
      v-if="module.headline && !module.headlineBeforeBody"
      class="editorial-text__headline"
    >
      {{ module.headline }}
    </h2>

    <!-- <div v-if="showIntro" class="text-parent">
   		<div class="text">
     			<span>Paprika — это независимый мультимедийный журнал о музыке, который уже четыре года делают 20 энтузиастов-волонтёров.</span>
     			<span class="span"> Мы представляем кураторскую альтернативу алгоритмам и информационному шуму, поддерживая локальную сцену и создавая среду для осмысленного слушания.</span>
   		</div>
   		<img class="telegram-cloud-photo-size-2-52-icon" alt="" src="/assets/telegram-cloud-photo-size-2-52-icon.jpg"/>
 	</div> -->
    <div v-if="module.body && module.body.length" class="prose">
      <template v-if="module.headline && module.headlineBeforeBody">
        <div class="editorial-text__lead" v-html="$portableText([{ _type: 'block', children: [{ _type: 'span', text: module.headline || '' }] }])" />
        <div
          class="editorial-text__body"
          v-html="$portableText(module.body)"
        />
      </template>
      <div
        v-else
        class="editorial-text__body"
        v-html="$portableText(module.body)"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    module: {
      type: Object,
      required: true,
    },
    showIntro: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    editorialClasses() {
      return {
        'editorial-text--centered': this.module.centered,
        'editorial-text--lead-first': this.module.headlineBeforeBody,
      }
    },
  },
}
</script>