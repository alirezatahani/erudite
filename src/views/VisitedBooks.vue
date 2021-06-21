<template>
  <v-row>
    <v-col sm="6" md="4" lg="4" v-for="(item, i) in data" :key="i">
      <router-link :to="`book/${item.id}`">
        <v-card min="400">
          <v-img height="250" :src="item.formats['image/jpeg']"></v-img>

          <v-card-title class="col-12 overflowHidden"
            ><span class="overflowHidden">{{ item.title }}</span></v-card-title
          >

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <v-chip-group
              v-model="selection"
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VisitedBooks',
  computed: {
    ...mapGetters({
      data: 'visitedBooks/getData'
    })
  }
};
</script>
