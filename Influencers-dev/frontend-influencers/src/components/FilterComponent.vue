<template>

  <div>
    <!-- Sidebar Filters -->
    <b-sidebar  no-header-close visible no-close-on-esc
                  id="sidebar-1" title="Filtros">
      <!--Regions-->
      <b-card>
        <b-button
          v-b-toggle.collapse-regions
          size="sm"
          variant="outline-primary"
          >Regiones</b-button
        >
        <b-collapse id="collapse-regions" class="mt-2">
          <b-form-checkbox-group stacked v-model="selectedRegions" :options="regions">
          </b-form-checkbox-group>
        </b-collapse>
      </b-card>

      <!-- Categories -->
      <b-card>
        <b-button
          v-b-toggle.collapse-categories
          size="sm"
          variant="outline-primary"
          >Categoria</b-button
        >
        <b-collapse id="collapse-categories" class="mt-2">
          <b-form-checkbox-group stacked v-model="selectedCategories" :options="categories">
          </b-form-checkbox-group>
        </b-collapse>
      </b-card>
      <b-button variant="secondary" v-on:click="sendFilters()">Enviar</b-button>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "FilterComp",

  methods:{
    sendFilters(){
      const filter = {
        selectedRegions: this.selectedRegions,
        selectedCategories: this.selectedCategories
      };

      this.$emit("onFilter", filter);
    }
  },
  props:{
    regions: Array,
    categories: Array
  },
  data(){
    return {
      selectedRegions: [],
      selectedCategories: [],
    }
  }
};
</script>
<style >
.b-sidebar{
  margin-top: 65px !important;
  width: 100vw !important;
}
@media (min-width: 100px){
 .b-sidebar{
   width: 50vw !important;
}
}
@media (min-width: 100px){
 .b-sidebar{
   width: 15vw !important;
}
}
</style>



