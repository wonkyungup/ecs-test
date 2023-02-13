<template>
  <v-container>
    <v-row dense>
      <v-col cols="0" md="6" lg="8" xl="8" />
      <v-col cols="12" md="6" lg="4" xl="4">
        <v-text-field
            dense
            class="mx-2 rounded-0"
            solo
            label="Search"
            prepend-inner-icon="mdi-filter"
            hide-details="auto"
            background-color="#616161"
        />
      </v-col>
      <v-col>
        <v-card
            color="transparent"
            elevation="0"
        >
          <v-list>
            <v-list-group
                v-for="user in syncState.userList"
                :key="user.index"
                prepend-icon="mdi-account"
                no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ user.email }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  v-for="info in user.moreInfo"
                  :key="info.index"
              >
                <v-list-item-content>
                  <v-list-item-content>
                    <v-row dense>
                      Status: {{ info.state }}
                      <v-switch
                          class=""
                          dense
                      />
                    </v-row>
                  </v-list-item-content>

                  <v-divider width="100"/>

                  <v-list-item-content class="d-inline">
                    <v-row dense>
                      <v-col col="6">
                        Sync Count: {{ info.syncCount }}
                      </v-col>
                      <v-col col="6">
                        Device: {{ info.device }}
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "UsersPage",
  computed: {
    ...mapState({ syncState: 'Sync' }),
  }
}
</script>

<style scoped>

</style>
