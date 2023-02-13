<template>
  <MenuTab>
    <template v-if="!syncState.tab">
      <StatisticsPage />
    </template>
    <template v-else>
      <UsersPage />
    </template>
  </MenuTab>
</template>

<script>
import MenuTab from './MenuTab.vue'
import { mapState } from 'vuex'
import StatisticsPage from './StatisticsPage.vue'
import UsersPage from './UsersPage.vue'

export default {
  name: "ViewPage",
  components: {
    MenuTab,
    StatisticsPage,
    UsersPage
  },
  computed: {
    ...mapState({ syncState: 'Sync' }),
  }
}
</script>

<style scoped>

</style>
