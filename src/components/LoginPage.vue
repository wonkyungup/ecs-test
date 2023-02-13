<template>
  <v-container
      fluid
      fill-height
      class="text-xs-center"
      @keydown.enter="submit"
  >
    <v-layout
        row
        wrap
        class="text-xs-center"
    >
      <v-container fill-height>
        <v-card
            flat
            class="mx-auto"
            width="400"
        >
          <v-row
              dense
              justify="center"
              align="center"
          >
            <v-col>
              <v-card-title class="justify-center">Session Sync Page</v-card-title>
              <v-card-text class="pa-5">
                <v-form>
                  <v-text-field
                      dense
                      class="mx-2 rounded-0 rounded-t-lg"
                      solo
                      label="Username"
                      prepend-inner-icon="mdi-account"
                      hide-details="auto"
                      background-color="#616161"
                      :disabled="loading"
                      :append-icon="username.length > 0 ? 'mdi-close-circle' : ''"
                      @click:append="onClearTextField('username')"
                      v-model="username"
                  />

                  <v-text-field
                      dense
                      class="mx-2 rounded-0 rounded-b-lg"
                      solo
                      label="Password"
                      prepend-inner-icon="mdi-lock"
                      hide-details="auto"
                      background-color="#616161"
                      type="password"
                      :disabled="loading"
                      :append-icon="password.length > 0 ? 'mdi-close-circle' : ''"
                      @click:append="onClearTextField('password')"
                      v-model="password"
                  />
                </v-form>

                <v-card-actions class="pt-5">
                  <v-row dense>
                    <v-col cols="12">
                      <p
                          v-if="errMsg.length > 0"
                          class="red--text"
                      >{{ errMsg }}</p>
                    </v-col>

                    <v-col cols="12">
                      <v-btn
                          block
                          class="text-capitalize"
                          color="#66BB6A"
                          :loading="loading"
                          @click="submit"
                      >Submit</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data: () => {
    return {
      loading: false,
      errMsg: '',
      username: '',
      password: ''
    }
  },
  methods: {
    onClearTextField (target) {
      if (target !== 'password') {
        this.username = ''
        return
      }
      this.password = ''
    },
    submit () {
      this.loading = true
      setTimeout(() => {
        if (this.username === 'test' && this.password === 'test') {
          this.errMsg = 'Session sync login page error message test!'
        } else {
          if (this.$route.path !== 'analytics') {
            this.$router.push('analytics')
          }
        }
        this.loading = false
      }, 3000)
    }
  }
}
</script>
