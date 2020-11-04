<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">Tambah Skin</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="documents">
        <template slot="columns">
          <th>Title</th>
          <th>Status</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <img class="mr-3" alt="Image placeholder" :src="row.cover" width="100">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            <badge pill :type="row.active ? 'success' : 'danger'">{{ row.active ? 'AKTIF' : 'TIDAK AKTIF' }}</badge>
          </td>
          <td class="text-right">
            <base-button class="btn-sm" type="primary" icon="fa fa-edit"></base-button>
            <base-button class="btn-sm" type="danger" icon="fa fa-trash"></base-button>
          </td>

        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
import { db } from '@/data/source'
export default {
  name: 'projects-table',
  props: {
    type: {
      type: String
    },
    title: String,
    collection: String
  },
  data() {
    return {
      documents: [],
    }
  },

  async created() {
    const snapshot = await db.collection(this.collection).orderBy('created_at', 'desc').get()
    this.documents = snapshot.docs.map(doc => doc.data())
    console.log(this.documents)
  },
}
</script>
<style>
</style>
