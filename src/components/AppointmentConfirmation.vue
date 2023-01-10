<template>
  <div class="appointmentconfirmation">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10">
          <b-alert v-model="showDismissibleAlert" variant="warning" dismissible><strong>{{errorMessage}}</strong> => {{errorStatus}}</b-alert>
        </div>
      </div>
    </div>
    <div class="container mt-5" v-if="consumer" :key="consumer.enquiryID" >
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10 intro">
          <p>Dear <strong>{{ consumer.fullName }}</strong>; please confirm the appointments listed below?<br>
            Here is your enquiry reference number <strong>{{ consumer.enquiryID }}</strong>, please make a note of it.<br>
            The product you enquired about was&hellip; <strong>{{ consumer.product }}</strong>.</p>
          <p>We have provided useful information on each company to assist you with your project.<br>
            <strong>Please confirm the appointment to progress</strong>.</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-12 col-md-10">
          <div class="row" v-for="(appointment, index) in consumer.appointments" :key="appointment.replyID">
            <div class="col col-12 col-md-7 my-4 intro">
              <p>Appointment {{ (index + 1) }}</p>
              <p>Company: <strong>{{ appointment.supplierBio.supplierTradingName }}</strong></p>
              <p>Date: <strong>{{ appointment.appointment | formatDate }}</strong></p>
            </div>
            <div class="biobutton col col-12 col-md-5 mt-4 text-right">
              <button @click="itemClicked(appointment)" class="secondary-button">Company Biography</button>
              <button @click="confirmApp([appointment.replyID])" class="primary-button mt-3 col-md-mt-0 ripple" v-if="appointment.isConfirmed !== true">Confirm Appointment</button>
              <button class="primary-button mt-3 col-md-mt-0" disabled v-if="appointment.isConfirmed === true">Appointment Confirmed</button>
            </div>
            <hr class="col col-12" v-if="(index === 0)">
            <!-- use the modal component, pass in the prop -->
            <modal v-if="showModal" @close="showModal = false">
              <template v-slot:header>
                <h3>{{ name }}</h3>
              </template>
              <template v-slot:body>
                <div class="row justify-content-center">
                  <div class="col col-12 col-md-my-4">
                    <p>
                      {{ installerbio1 }}
                    </p>
                    <p>
                      {{ installerbio2 }}
                    </p>
                    <p>
                      {{ installerbio3 }}
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col col-12 my-1 col-md-my-4">
                    <div class="table-responsive">
                      <b-table-simple>
                        <b-tbody>
                          <b-tr>
                            <b-th>Years Trading</b-th>
                            <b-td>{{trading}}</b-td>
                          </b-tr>
                          <b-tr>
                            <b-th>Local Installations</b-th>
                            <b-td>{{local}}</b-td>
                          </b-tr>
                          <b-tr>
                            <b-th>Member of Industry Body</b-th>
                            <b-td>{{body1}} {{body2}} {{body3}}</b-td>
                          </b-tr>
                          <b-tr>
                            <b-th>Provides Finance</b-th>
                            <b-td>{{finance}}</b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col col-12 text-center my-1 col-md-my-2">
                    <h3>Rated {{installerrating}}</h3>
                  </div>
                </div>
              </template>
            </modal>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-12 col-md-8 my-4">
          <p class="advise col-md-px-5">We advised you to ask to see copies of industry body certificate and insurance backed guarantee certificate to satisfy yourself they are all valid before you place an order. The installer will be happy to assist you.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
name: "AppointmentConfirmation",
  components: {
    Modal
  },
  props: {
    fullName: String,
    enquiryID: String,
    product: String,
    replyID: String,
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
    appointment: String,
    isConfirmed: Boolean,
  },
  data() {
    return {
      title:'Your Appointments',
      consumer: null,
      errorMessage: null,
      errorStatus: null,
      showDismissibleAlert: false,
      showModal: false,
    }
  },
  computed: {

  },
  async mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch("https://services.trustedlocalsuppliers.org/installers"+this.$route.path+"")
          .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response statusText
              const error = (data && data.message) || response.statusText;
              this.hideAlert();
              return Promise.reject(error);
            }

            this.consumer = data.consumer;
          })
          .catch(error => {
            this.errorMessage = "No Appointments Found";
            this.errorStatus = error;
            this.showAlert();
          });
    },
    showAlert() {
      this.showDismissibleAlert=true
    },
    hideAlert() {
      this.showDismissibleAlert=false;
    },
    itemClicked(appointment) {
      this.installerbio1 = appointment.supplierBio.bio1;
      this.installerbio2 = appointment.supplierBio.bio2;
      this.installerbio3 = appointment.supplierBio.bio3;
      this.name = appointment.supplierBio.supplierTradingName;
      this.trading = appointment.supplierBio.yearsTrading;
      this.local = appointment.supplierBio.noLocalInstallations;
      this.body1 = appointment.supplierBio.industryBody1;
      this.body2 = appointment.supplierBio.industryBody2;
      this.body3 = appointment.supplierBio.industryBody3;
      this.finance = appointment.supplierBio.provideFinance;
      this.installerrating = appointment.supplierBio.rating;
      this.showModal = true;
    },
    confirmApp(rid) {
      fetch("https://services.trustedlocalsuppliers.org/installers/consumerconfirm/"+rid+"")
      this.fetchData()
    }
  }
}
</script>

<style scoped>

.intro p {
  font-size: 1.375rem;
  line-height: normal;
}
.primary-button, .secondary-button {
  width: 100%;
}
@media only screen and (max-width: 576px) {
  .biobutton {
    text-align: center;
  }
}
hr {
  border-top: 1px solid rgba(0, 0, 0, 0.4);
}

.ripple {
  background-position: center;
  transition: background 0.5s;
}
.ripple:hover {
  background: #7da713 radial-gradient(circle, transparent 1%, #7da713 1%) center/15000%;
}
.ripple:active {
  background-color: #c5e86a;
  background-size: 100%;
  transition: background 0s;
}

</style>
