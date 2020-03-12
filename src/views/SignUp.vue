<template>
  <v-app id="inspire">
    <v-content>
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
                <v-toolbar-title>Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
                  v-if="!loading"
                  v-model="valid"
                  @keydown.prevent.enter
                  @submit.prevent="signUp"
                >
                  <v-text-field
                    v-model="user.userName"
                    :rules="rules.required"
                    label="Username"
                    name="username"
                    prepend-icon="person"
                    type="text"
                  />

                  <v-text-field
                    v-model="user.imageUrl"
                    :rules="rules.required"
                    id="imageUrl"
                    label="Image url"
                    name="imageUrl"
                    prepend-icon="image"
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

                  <v-text-field
                    v-model="user.confirmPassword"
                    :rules="rules.confirmPassword"
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
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
                      Sign Up
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
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "SignUp",
  data: vm => ({
    valid: true,
    user: { userName: "", password: "", confirmPassword: "", imageUrl: "" },
    rules: {
      required: [value => !!value.trim().length || "Is required"],
      confirmPassword: [
        confirmPassword =>
          vm.user.password === confirmPassword || "Passwords don't match"
      ]
    }
  }),
  computed: {
    ...mapState('users', { loading: 'isCreatePensing' }),
  },
  methods: {
    async signUp() {
      if (this.valid) {
        try {
          const { User } = this.$FeathersVuex.api;
          const newUser = await new User(this.user).save();
          console.log(newUser)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
};
</script>

<style>
</style>