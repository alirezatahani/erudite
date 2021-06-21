<template>
  <v-row class="row">
    <v-col lg="6" md="6" sm="12">
      <img :src="data.formats['image/jpeg']" />
    </v-col>
    <v-col lg="6" md="6" sm="12">
      <v-row>
        <v-col cols="12">
          <h1>{{ data.title }}</h1>
        </v-col>
        <v-col cols="12">
          <v-chip v-for="(author, i) in data.authors" :key="i" class="ma-2">
            {{ author.name }}
          </v-chip>
        </v-col>
        <v-col cols="12">
          <v-chip
            v-for="(bookshelve, i) in data.bookshelves"
            :key="i"
            class="ma-2"
          >
            {{ bookshelve }}
          </v-chip>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BookDetail',
  computed: {
    ...mapGetters({
      data: 'bookDetail/getData',
      meta: 'bookDetail/getMeta',
      loading: 'bookDetail/getLoading'
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'bookDetail/fetchData'
    }),
    next(page) {
      this.fetchData(page);
    }
  },
  mounted() {
    this.fetchData(this.$route.params.id);
  }
};
</script>

<style scoped>
.row {
  flex-direction: row;
}
</style>
