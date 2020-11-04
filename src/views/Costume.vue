<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8" />

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table collection="skins" title="List Skin"></projects-table>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import ProjectsTable from './Tables/SkinTable'
export default {
  name: 'tables',
  components: {
    ProjectsTable
  }
};
</script>
<style></style>
