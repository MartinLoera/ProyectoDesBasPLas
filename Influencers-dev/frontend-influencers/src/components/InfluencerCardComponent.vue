<template>
<div>
  <b-card
    :title="influencer.name"
    :img-src="influencer.img"
    img-alt="Image"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{influencer.region}}
    </b-card-text>
    <div>
    <b-button v-b-toggle.collapse-3 class="m-1">Categorias</b-button>
    <b-collapse visible id="collapse-3">
      <b-card>
        {{categoriesStr}}
      </b-card>
      </b-collapse>
    </div>
  </b-card>
</div>
</template>
<script>
export default {
  name: 'InfluencerCardComponent',
  props: {
    influencer: Object
  },
  computed: {
    categoriesStr() {
      return this.influencer.categories.join(', ');
    }
  }
}
</script>

<style>

</style>