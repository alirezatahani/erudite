<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer permanent app>
        <v-list id="nav">
          <v-list-item v-for="(route, i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="route.to">{{ route.title }}</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-library-shelves',
        title: 'Book library',
        to: '/'
      },
      // {
      //   icon: 'mdi-library',
      //   title: 'Book Detail',
      //   to: '/books/:id'
      // },
      {
        icon: 'mdi-history',
        title: 'Latest viewed books',
        to: '/viewed-books'
      }
    ]
  })
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
