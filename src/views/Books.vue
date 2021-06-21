<template>
  <v-sheet v-if="loading">
    <v-skeleton-loader type="card"></v-skeleton-loader>
  </v-sheet>
  <div v-else>
    <v-row>
      <v-col class="book-card" lg="4" v-for="(item, i) in data" :key="i">
        <router-link
          @click.native="() => addToVisitedMethod(item)"
          :to="`book/${item.id}`"
        >
          <v-card min="400">
            <v-img height="250" :src="item.formats['image/jpeg']"></v-img>

            <v-card-title class="col-12 overflowHidden"
              ><span class="overflowHidden">{{
                item.title
              }}</span></v-card-title
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip v-for="(author, i) in item.authors" :key="i">{{
                  author.name
                }}</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col lg="12">
        <v-pagination
          @input="next"
          v-model="meta.current.page"
          :length="Math.floor(meta.total / 32)"
          :total-visible="7"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Books',
  computed: {
    ...mapGetters({
      data: 'booksLibrary/getData',
      meta: 'booksLibrary/getMeta',
      loading: 'booksLibrary/getLoading'
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'booksLibrary/fetchData',
      addToVisited: 'visitedBooks/addToVisited'
    }),
    next(page) {
      this.fetchData(page);
    },
    addToVisitedMethod: function(item) {
      this.addToVisited(item);
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.book-card a {
  text-decoration: none;
}

.overflowHidden {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
}
</style>
