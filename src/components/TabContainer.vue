<template>
  <div class="main">
    <input id="tab1" type='radio' name="tabs" checked>
    <label for="tab1">Employer Tab</label>

    <input id="tab2" type='radio' name="tabs">
    <label for="tab2">Employee Tab</label>

    <div id="content1" class="content">
      <SalarySubmitTab
        label="How much are you willing to pay?"
        placeholder="enter maximum offer"
        :onSubmit="onEmployerSubmit"/>
    </div>

    <div id="content2" class="content">
      <SalarySubmitTab
        label="How much do you expect to be paid minimally?"
        placeholder="enter minimum salary"
        :onSubmit="onEmployeeSubmit"/>
    </div>

    <v-dialog/>

  </div>
</template>

<script>
import { SUBMIT_MAX_OFFERED_SALARY, SUBMIT_MIN_EXPECTED_SALARY } from '../vuex/store'
import SalarySubmitTab from './SalarySubmitTab'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    SalarySubmitTab
  },
  computed: {
    ...mapState(['maxOfferedSalary', 'minExpectedSalary'])
  },
  methods: {
    ...mapMutations([SUBMIT_MAX_OFFERED_SALARY, SUBMIT_MIN_EXPECTED_SALARY]),
    onEmployerSubmit (quantity) {
      this.showPopupWhenSalariesSubmitted()
      this.$store.commit(SUBMIT_MAX_OFFERED_SALARY, parseInt(quantity))
    },
    onEmployeeSubmit (quantity) {
      this.$store.commit(SUBMIT_MIN_EXPECTED_SALARY, parseInt(quantity))
      this.showPopupWhenSalariesSubmitted()
    },
    showPopupWhenSalariesSubmitted () {
      if (!this.maxOfferedSalary || !this.minExpectedSalary) return
      if (parseInt(this.maxOfferedSalary) >= parseInt(this.minExpectedSalary)) {
        this.showModal('SUCCESS!')
      } else {
        this.showModal('FAILURE!')
      }
    },
    showModal (title) {
      this.$modal.show('dialog', {
        title: title,
        text: this.enteredSalaries(),
        buttons: [
          {
            title: 'Ok'
          }
        ]
      })
    },
    enteredSalaries () {
      return `Maximum offer was: ${this.maxOfferedSalary}<br>Minimum expected salary was: ${this.minExpectedSalary}`
    }
  }
}
</script>

<style scoped>

  label {
    display: inline-block;
    margin: 0 0 -1px;
    padding: 15px 25px;
    font-weight: 600;
    color: #bbb;
    border: 1px solid transparent;
  }

  .main {
    min-width: 320px;
    max-width: 800px;
    padding: 50px;
    margin: 0 auto;
    background: #fff;
  }

  .content {
    display: none;
    padding: 20px 0 0;
    border-top: 1px solid #ddd;
  }

  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2 {
    display: block;
  }

  input {
    display: none;
  }

  input:checked + label {
    color: #555;
    border: 1px solid #ddd;
    border-top: 2px solid orange;
    border-bottom: 1px solid #fff;
  }

  label:before {
    font-family: fontawesome;
    font-weight: normal;
    margin-right: 10px;
  }

  label:hover {
    color: #888;
    cursor: pointer;
  }

  @media screen and (max-width: 650px) {
    label {
      font-size: 0;
    }
    label:before {
      margin: 0;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    label {
      padding: 15px;
    }
  }
</style>
