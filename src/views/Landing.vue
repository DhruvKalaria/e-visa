<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <!-- <h1 class="title">Your life journey Starts With Us.</h1> -->
            <h1 class="title">Service of the Republic of Poland.</h1>
            <h4>
              Citizens of non-EU countries who do not have the right to
              enter under the visa-free regime and who do not have any other
              document authorizing them to enter (e.g., a residence card) are
              required to have a visa. Such a visa certifies the consent of
              the authorities of the country for the entry and stay of a specific
              person on its territory.
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Visa Process System</h2>
              <h5 class="description">
                This is the oplatform by which you can get visa
                of poland by online approach
                Data you give will be secure in our database.
              </h5>
            </div>

            
            
          </div>
          
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Free Approach</h4>
                  <p>
                    We give visa by online approach.
                    dont need to visit here embassies.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Verified Users</h4>
                  <p>
                    Government embassies are always care about
                    their customers.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <h4 class="info-title">Fingerprint</h4>
                  <p>
                    Your data will be secure in our database.
                    we will not share with any agency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-content ">
        <div>
          <div class="profile-tabs">
            <tabs
                    :tab-name="['Track','Study', 'Work', 'Tour']"
                    :tab-icon="['search','school', 'work', 'travel_explore']"
                    plain
                    nav-pills-icons
                    color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-80 ml-auto">
                    <div class="section section-basic">
                      <div class="container">
                        <div class="title">
                          <h4>Track your process by your tracking number.</h4>
                        </div>
                        <BasicElementsTrack></BasicElementsTrack>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div> -->
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-80 ml-auto">
                    <div class="section section-basic">
                      <div class="container">
                        <div class="title">
                          <h4>Fill the below form to start your process for student visa.</h4>
                        </div>
                        <basic-elements></basic-elements>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div> -->
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-80 ml-auto">
                    <div class="section section-basic">
                      <div class="container">
                        <div class="title">
                          <h4>Fill the below form to start your process for work visa.</h4>
                        </div>
                        <BasicElementsWork></BasicElementsWork>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                  </div> -->
                </div>
              </template>
              <template slot="tab-pane-4">
                <div class="md-layout">
                  <div class="md-layout-item md-size-80 ml-auto">
                    <div class="section section-basic">
                      <div class="container">
                        <div class="title">
                          <h4>Fill the below form to start your process for tour visa.</h4>
                        </div>
                        <BasicElementsTour></BasicElementsTour>
                      </div>
                    </div>
                  </div>
                  <!--<div class="md-layout-item md-size-25 mr-auto">-->
                  <!--<img :src="tabPane3[2].image" class="rounded" />-->
                  <!--<img :src="tabPane3[3].image" class="rounded" />-->
                  <!--<img :src="tabPane3[4].image" class="rounded" />-->
                  <!--</div>-->
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
      <div class="section section-javascript">
        <div class="container">
          <javascript-components></javascript-components>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Amar
                      <br />
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Compur Enginner in Politechnika Wroclaw University.
                        Interested in communication, networking, sport.
                        will learn tools
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                              :src="teamImg2"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Aqib
                      <br />
                      <small class="card-description text-muted"
                      >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Compur Enginner in Politechnika Wroclaw University.
                        Interested in communication, networking, sport.
                        will learn tools
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                              href="javascript:void(0)"
                              class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                              href="javascript:void(0)"
                              class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Gonzalo
                      <br />
                      <small class="card-description text-muted"
                        >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                          Compur Enginner in Politechnika Wroclaw University.
                          Interested in communication, networking, sport.
                          will learn tools
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Dhrov
                      <br />
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                          Compur Enginner in Politechnika Wroclaw University.
                          Interested in communication, networking, sport.
                          will learn tools
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work with us</h2>
              <h4 class="text-center description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will responde get back to you in a
                couple of hours.
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Send Message</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tabs } from "@/components";
  import BasicElements from "./components/BasicElementsSection";
  import BasicElementsWork from "./components/BasicElementsWorkSection";
  import BasicElementsTour from "./components/BasicElementsTourSection";
  import BasicElementsTrack from "./components/BasicElementsTrackSection";
  import JavascriptComponents from "./components/JavascriptComponentsSection";
export default { 
  components: {
    BasicElements,
    BasicElementsWork,
    BasicElementsTour,
    JavascriptComponents,
    BasicElementsTrack,
    Tabs
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      // default: require("@/assets/img/bg7.jpg")
      default: require("@/assets/img/poland-banner-s.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/card-profile2-square.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/card-profile2-square.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/card-profile2-square.jpg")
    }
  },
  data() {
    return {

      name: null,
      email: null,
      message: null,
      tabPane1: [

      ],
      tabPane2: [
       
      ],
      tabPane3: [
       
      ],
      tabPane4: [
        
      ]
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};

// import { Tabs } from "@/components";
// export default {
//   components: {
//     Tabs
//   },
//   bodyClass: "profile-page",
//   data() {
//     return {
//       tabPane1: [
       
//       ],
//       tabPane2: [
       
//       ],
//       tabPane3: [
        
//       ]
//     };
//   }
// };
</script>


<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}


.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    /*margin-top: 3.213rem;*/
    /*padding-bottom: 50px;*/
  }
}
</style>
