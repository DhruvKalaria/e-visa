<template>
  <div class="wrapper">
    <!--<div id="buttons">-->
    <!--<div class="title">-->
    <!--<h3>-->
    <!--Buttons <br />-->
    <!--<small>Pick your style</small>-->
    <!--</h3>-->
    <!--</div>-->
    <!--<div class="md-layout">-->
    <!--<div class="md-layout-item md-size-66 mx-auto">-->
    <!--<md-button class="md-primary">Default</md-button>-->
    <!--<md-button class="md-primary md-round">Round</md-button>-->
    <!--<md-button class="md-primary"-->
    <!--&gt;<md-icon>favorite</md-icon> With Icon</md-button-->
    <!--&gt;-->
    <!--<md-button class="md-primary md-just-icon md-round"-->
    <!--&gt;<md-icon>favorite</md-icon></md-button-->
    <!--&gt;-->
    <!--<md-button class="md-primary md-simple">Simple</md-button>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="title">-->
    <!--<h3><small>Pick your size</small></h3>-->
    <!--</div>-->
    <!--<div class="md-layout">-->
    <!--<div class="md-layout-item md-size-66 mx-auto md-xsmall-size-100">-->
    <!--<div class="vertical-center">-->
    <!--<md-button class="md-primary md-sm">Small</md-button>-->
    <!--<md-button class="md-primary">Regular</md-button>-->
    <!--<md-button class="md-primary md-lg">Large</md-button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="title">-->
    <!--<h3><small>Pick your color</small></h3>-->
    <!--</div>-->
    <!--<div class="md-layout">-->
    <!--<div class="md-layout-item md-size-66 mx-auto">-->
    <!--<md-button>Default</md-button>-->
    <!--<md-button class="md-primary">Primary</md-button>-->
    <!--<md-button class="md-info">Info</md-button>-->
    <!--<md-button class="md-success">Success</md-button>-->
    <!--<md-button class="md-warning">Warning</md-button>-->
    <!--<md-button class="md-danger">Danger</md-button>-->
    <!--<md-button class="md-rose">Rose</md-button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash; end buttons &ndash;&gt;-->
    <!--<div class="space-50"></div>-->

    <!-- Inputs -->
    <div id="inputs">
      <div class="title">
        <h3>Visa Form</h3>
      </div>
      <div class="md-layout text-center">
        <div
                class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"
        >
          <md-field>
            <label>Name</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
        <div
                class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"
        >
          <md-field>
            <label>Email</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-30 md-small-size-30 md-medium-size-30">
          <!--<div class="title">-->
          <!--<h3>DatePicker</h3>-->
          <!--</div>-->
          <md-datepicker v-model="selectedDate">
            <label>Date of Birth</label>
          </md-datepicker>
        </div>
        <!--<div-->
        <!--class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"-->
        <!--&gt;-->
        <!--<md-field class="md-valid">-->
        <!--<label>Success Input</label>-->
        <!--<md-input v-model="success" type="text"></md-input>-->
        <!--<md-icon>done</md-icon>-->
        <!--</md-field>-->
        <!--</div>-->
        <div
                class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"
        >
          <md-field>
            <label>Phone</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
        <div
                class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"
        >
          <md-field>
            <label>Passport Number</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
        <div
                class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"
        >
          <md-field>
            <label>Address</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
        <div
                class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30"
        >
          <md-field>
            <label>Sponsor(For Poland)</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
      </div>
    </div>

    <!-- ned inputs -->

    <!-- Inputs -->
    <div id="inputs2">
      <div class="title">
        <h4>Visa documents</h4>
      </div>
      <div class="md-layout text-center">
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">

          <md-field class="md-valid">
            <label>Photo(yourself)</label>
            <md-input  v-model="success" id="fileUpload10" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">

          <md-field class="md-valid">
            <label>Passport</label>
            <md-input  v-model="success" id="fileUpload11" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">

          <md-field class="md-valid">
            <label>National Court Legal Status</label>
            <md-input  v-model="success" id="fileUpload12" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">
          <md-field class="md-valid">
            <label>Economic Activity</label>
            <md-input  v-model="success" id="fileUpload13" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">
          <md-field class="md-valid">
            <label>Embassy Fee Receipt(332.85 zyloty)</label>
            <md-input  v-model="success" id="fileUpload14" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">
          <md-field class="md-valid">
            <label>Health Insurance</label>
            <md-input  v-model="success" id="fileUpload15" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">
          <md-field class="md-valid">
            <label>Bank Statement</label>
            <md-input  v-model="success" id="fileUpload17" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">
          <md-field class="md-valid">
            <label>Deed for Company</label>
            <md-input  v-model="success" id="fileUpload18" type="file"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-80 md-small-size-50 md-medium-size-30">
          <md-field class="md-valid">
            <label>Contract Service</label>
            <md-input  v-model="success" id="fileUpload1" type="file"></md-input>
          </md-field>
        </div>
      </div>
    </div>


    <!-- end inputs -->

    <div class="space-50"></div>

    <!-- Checkboxes/Radios/Toggle -->
    <div id="checkRadios">
      <div class="md-layout">
        <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <div class="title">
            <h3>Checkboxes</h3>
          </div>
          <div class="flex-column">
            <md-checkbox v-model="checkbox1">I accept that my application will be rejected if any wrong data found in my application</md-checkbox>
            <!--<md-checkbox v-model="checkbox2">Unchecked</md-checkbox>-->
            <!--<md-checkbox v-model="checkbox3" disabled-->
            <!--&gt;Disabled Checked</md-checkbox-->
            <!--&gt;-->
            <!--<md-checkbox v-model="checkbox4" disabled-->
            <!--&gt;Disabled Unchecked</md-checkbox-->
            <!--&gt;-->
          </div>
        </div>
        <!--<div-->
        <!--class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"-->
        <!--&gt;-->
        <!--<div class="title">-->
        <!--<h3>Toggle Buttons</h3>-->
        <!--</div>-->
        <!--<div class="flex-column">-->
        <!--<md-switch v-model="switch1">Toogle is on</md-switch>-->
        <!--<md-switch v-model="switch2">Toogle is off</md-switch>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
    <!-- end Checkboxes/Radios/Toggle -->
    <div class="md-layout-item md-size-33 mx-auto mt-auto mr-auto text-center">
      <md-button class="md-success" @click="classicModal = true">Submit Form</md-button>
      <modal v-if="classicModal" @close="classicModalHide">
        <template slot="header">
          <h4 class="modal-title">Confirmation</h4>
          <md-button
                  class="md-simple md-just-icon md-round modal-default-button"
                  @click="classicModalHide"
          >
            <md-icon>clear</md-icon>
          </md-button>
        </template>

        <template slot="body">
          <p>
            Before submission, kindly check your all required fields
            that you filled correctly. If any wrong data found
            in your submitted form, it may lead your visa to rejection.
          </p>
        </template>

        <template slot="footer">
          <md-button class="md-danger md-simple" @click="classicModalHide">Close Box</md-button>
          <md-button
                  class="md-success md-simple"
                  @click="classicModalHide"
          >Submit</md-button
          >
        </template>
      </modal>
    </div>

    <!--<div class="space-70"></div>-->

    <!-- Progress/Pagination -->
    <!--<div id="progress-pagination">-->
    <!--<div class="md-layout">-->
    <!--<div class="md-layout-item md-size-50 md-xsmall-size-100">-->
    <!--<div class="title">-->
    <!--<h3>Progress</h3>-->
    <!--</div>-->
    <!--<md-progress-bar-->
    <!--class="md-primary"-->
    <!--:md-value="amount"-->
    <!--&gt;</md-progress-bar>-->
    <!--<md-progress-bar-->
    <!--class="md-info"-->
    <!--:md-value="amount2"-->
    <!--&gt;</md-progress-bar>-->
    <!--<md-progress-bar-->
    <!--class="md-warning"-->
    <!--md-mode="buffer"-->
    <!--:md-value="buffer"-->
    <!--:md-buffer="buffer"-->
    <!--&gt;</md-progress-bar>-->
    <!--</div>-->
    <!--<div class="md-layout-item md-size-50 md-xsmall-size-100">-->
    <!--<div class="title">-->
    <!--<h3>Pagination</h3>-->
    <!--</div>-->
    <!--<pagination no-arrows v-model="defaultPagination" :page-count="5">-->
    <!--</pagination>-->
    <!--<pagination-->
    <!--class="pagination-info"-->
    <!--v-model="infoPagination"-->
    <!--with-text-->
    <!--:page-count="5"-->
    <!--&gt;-->
    <!--</pagination>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!-- end progress/pagination -->

    <!--<div class="space-50"></div>-->

    <!-- Sliders -->
    <!--<div id="sliders">-->
    <!--<div class="md-layout">-->
    <!--<div class="md-layout-item md-size-50 md-xsmall-size-100">-->
    <!--<div class="title">-->
    <!--<h3>Sliders</h3>-->
    <!--</div>-->
    <!--<slider v-model="sliders.simple"> </slider>-->

    <!--<slider v-model="sliders.rangeSlider" type="info" :connect="true">-->
    <!--</slider>-->
    <!--</div>-->
    <!--<div class="md-layout-item md-size-50 md-xsmall-size-100">-->
    <!--<div class="title">-->
    <!--<h3>Badges</h3>-->
    <!--</div>-->
    <!--<badge type="default">Default</badge>-->
    <!--<badge type="primary">Primary</badge>-->
    <!--<badge type="info">Info</badge>-->
    <!--<badge type="success">Success</badge>-->
    <!--<badge type="warning">Warning</badge>-->
    <!--<badge type="danger">Danger</badge>-->
    <!--<badge type="rose">Rose</badge>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!-- end sliders -->
  </div>
</template>

<script>
  // import { Pagination } from "@/components";
  // import { Slider } from "@/components";
  // import { Badge } from "@/components";
  import { Modal } from "@/components";


  export default {
    components: {
      Modal
      // Pagination,
      // Slider,
      // Badge
    },
    data() {
      return {
        classicModal: false,
        selectedDate: new Date("2022/05/05"),
        defaultPagination: 3,
        infoPagination: 3,
        initial: null,
        floatingLabel: null,
        success: null,
        error: null,
        withMIcon: null,
        withFaIcon: null,
        checkbox1: true,
        checkbox2: null,
        checkbox3: true,
        checkbox4: null,
        radio1: true,
        radio2: false,
        switch1: true,
        switch2: null,
        amount: 30,
        amount2: 60,
        buffer: 40,
        sliders: {
          simple: 40,
          rangeSlider: [20, 60]
        },
        files: [],
        readers: [],
        isSelecting: false,
        selectedFile: null
      };
    },
    methods: {
      classicModalHide() {
        this.classicModal = false;
      },
      addFiles(){
        console.log('files', this.files)
        this.files.forEach((file, f) => {
          this.readers[f] = new FileReader();
          this.readers[f].onloadend = (e) => {
            let fileData = this.readers[f].result
            let imgRef = this.$refs.file[f]
            imgRef.src = fileData
            console.log(fileData)
            // send to server here...
          }

          this.readers[f].readAsDataURL(this.files[f]);
        })
      },
      handleFileImport() {
        this.isSelecting = true;

        // After obtaining the focus when closing the FilePicker, return the button state to normal
        window.addEventListener('focus', () => {
          this.isSelecting = false
        }, { once: true });

        // Trigger click on the FileInput
        this.$refs.uploader.click();
      },
      onFileChanged(e) {
        this.selectedFile = e.target.files[0];

        // Do whatever you need with the file, liek reading it with FileReader
      },
      chooseFiles() {
        document.getElementById("fileUpload").click()
      },
      chooseFiles1() {
        document.getElementById("fileUpload1").click()
      },
      chooseFiles2() {
        document.getElementById("fileUpload2").click()
      },
      chooseFiles3() {
        document.getElementById("fileUpload3").click()
      },
      chooseFiles4() {
        document.getElementById("fileUpload4").click()
      },
      chooseFiles10() {
        document.getElementById("fileUpload10").click()
      },
      chooseFiles11() {
        document.getElementById("fileUpload11").click()
      },chooseFile12() {
        document.getElementById("fileUpload12").click()
      },
      chooseFiles13() {
        document.getElementById("fileUpload13").click()
      },
      chooseFiles14() {
        document.getElementById("fileUpload14").click()
      },
      chooseFiles15() {
        document.getElementById("fileUpload15").click()
      },
      chooseFiles16() {
        document.getElementById("fileUpload16").click()
      },
      chooseFiles17() {
        document.getElementById("fileUpload17").click()
      },
      chooseFiles18() {
        document.getElementById("fileUpload18").click()
      },

    }
  };
</script>

<style lang="scss" scoped>
  .vertical-center {
    display: flex;
    align-items: center;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .md-checkbox,
  .md-radio {
    display: flex;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .img-fluid {
    width: 100%;
  }
</style>
