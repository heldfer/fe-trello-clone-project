<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              v-if="!loading"
              v-model="valid"
              @keydown.prevent.enter
              @submit.prevent="signIn"
            >
              <v-text-field
                v-model="user.username"
                :rules="rules.required"
                label="Username"
                name="username"
                prepend-icon="person"
                type="text"
              />

              <v-text-field
                v-model="user.password"
                :rules="rules.required"
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
              />

              <v-spacer />
              <v-row class="justify-center">
                <v-btn
                  :disabled="!valid"
                  type="submit"
                  color="primary"
                >
                  Sign In
                </v-btn>
              </v-row>
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="primary"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data: vm => ({
    valid: true,
    user: { username: "", password: "" },
    rules: {
      required: [value => !!value.trim().length || "Is required"]
    }
  }),
  computed: {
    ...mapState('auth', { loading: 'isAuthenticatePending' }),
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    async signIn() {
      if (this.valid) {
        try {
          await this.authenticate({
            strategy: 'local',
            ...this.user
          })
          this.$router.push('dashboard')
        } catch (error) {
          console.error('Authentication error', error);
        }
      }
    }
  }
};
</script>