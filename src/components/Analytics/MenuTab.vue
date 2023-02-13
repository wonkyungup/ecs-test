<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h2 class="font-weight-bold text-h2">
        Session Sync
      </h2>
    </v-card-title>

    <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#66BB6A"
        grow
    >
      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="item in items"
          :key="item"
      >
        <v-card
            flat
            height="100%"
        >
          <v-card-text>
            <slot />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "MenuTab",
  data: () => {
    return {
      tab: 0,
      items: ['통계', '사용자']
    }
  },
  computed: {
    ...mapState({ syncState: 'Sync' }),
  },
  watch: {
    tab: {
      handler () {
        this.setCurTab(this.tab)
      },
      deep: false,
      immediate: false
    }
  },
  mounted() {
    console.log(this.syncState.tab)
  },
  methods: {
    ...mapActions('Sync', ['setCurTab'])
  }
}
</script>

<style scoped>

</style>
