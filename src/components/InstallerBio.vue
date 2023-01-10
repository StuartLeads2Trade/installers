<template>
  <div class="installerbio">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10">
          <b-alert v-model="showDismissibleAlert" variant="warning" dismissible><strong>{{errorMessage}}</strong> => {{errorStatus}}</b-alert>
        </div>
      </div>
    </div>
    <div class="container" :key="installer.supplierTradingName" v-for="installer in installers">
      <div class="row justify-content-center">
        <div class="col col-12 col-md-8 text-center my-4">
          <img :alt="installer.supplierTradingName" class="logo_image" :src="installer.logoUrl" width="100%">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10 my-4">
          <h1>{{ installer.supplierTradingName }}</h1>
          <p>
            {{ installer.bio1 }}
          </p>
          <p>
            {{ installer.bio2 }}
          </p>
          <p>
            {{ installer.bio3 }}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10 my-4">
          <div class="table-responsive">
            <b-table-simple>
              <b-tbody>
                <b-tr>
                  <b-th>Years Trading</b-th>
                  <b-td>{{installer.yearsTrading}}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>Local Installations</b-th>
                  <b-td>{{installer.noLocalInstallations}}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>Member of Industry Body</b-th>
                  <b-td>{{installer.industryBody1}} {{installer.industryBody2}} {{installer.industryBody3}}</b-td>
                </b-tr>
                <b-tr>
                  <b-th>Provides Finance</b-th>
                  <b-td>{{installer.provideFinance}}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
        </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10 text-center my-2">
          <h3>Rated {{installer.rating}}</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10 my-4">
          <p class="advise px-5">We advised you to ask to see copies of industry body certificate and insurance backed guarantee certificate to satisfy yourself they are all valid before you place an order. The installer will be happy to assist you.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InstallerBio',
  props: {
    supplierTradingName: String,
    logoUrl: String,
    bio1: String,
    bio2: String,
    bio3: String,
    yearsTrading: String,
    noLocalInstallations: String,
    industryBody1: String,
    industryBody2: String,
    industryBody3: String,
    provideFinance: String,
    rating: String,
  },
  data() {
    return {
      title:'Installer Bio',
      installers: null,
      errorMessage: null,
      errorStatus: null,
      showDismissibleAlert: false
    }
  },
  async mounted() {
    // GET request using fetch with async/await
    fetch("https://services.trustedlocalsuppliers.org/installers/bio"+this.$route.path+"")
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            this.hideAlert();
            return Promise.reject(error);
          }

          this.installers = data.installers;
        })
        .catch(error => {
          this.errorMessage = "No Data Found";
          this.errorStatus = error;
          this.showAlert();
        });
  },
  methods: {
    showAlert() {
      this.showDismissibleAlert=true
    },
    hideAlert() {
      this.showDismissibleAlert=false;
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
