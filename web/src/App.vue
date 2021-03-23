<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.main-card {
  border: 1px solid #F2F2F2;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
}
.main-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #7B7890;
}

.question-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
}

.main-input-bg {
  background: #FAFAFA !important;
  border: 0.5px solid #E4E4E4;
  box-shadow: inset 0px 1px 1px rgba(16, 32, 89, 0.12);
  border-radius: 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
}
.main-select-bg {
  background: #FAFAFA;
  border: 0.5px solid #E4E4E4;
  box-shadow: 0px 1px 1px rgba(16, 32, 89, 0.12), inset 0px -1px 2px rgba(16, 32, 89, 0.12);
  border-radius: 5px;
  cursor: pointer !important;
}
.main-button-bg {
  background: #2F5597;
  box-shadow: 0px 5px 15px rgba(27, 27, 78, 0.1);
  border-radius: 10px;
  height:50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.yes-button-bg {
  background: #00C165;
  box-shadow: 0px 5px 15px rgba(27, 27, 78, 0.1);
  border-radius: 10px;
  height:50px;
  min-width: 150px;
  margin: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.no-button-bg {
  background: #FF371C;
  min-width: 150px;
  margin: 5px;
  box-shadow: 0px 5px 15px rgba(27, 27, 78, 0.1);
  border-radius: 10px;
  height:50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.secondary-button-bg {
  background: #6F758B;
  box-shadow: 0px 5px 15px rgba(27, 27, 78, 0.1);
  border-radius: 10px;
  height:50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.auth-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  display:block;
  font-size: 34px;
  line-height: 24px;
  text-align: center;
  color: #2F5597;
}
.link-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.02em;
  color: #2F5597;
}
.nolink-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #282842;
}
.q-field--filled .q-field__control {
  background: none !important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  -webkit-text-fill-color: gray;
  -webkit-box-shadow: 0 0 0 1000px #FAFAFA inset !important;
  transition: background-color 300ms ease-in-out 0s;
}
.q-field--filled .q-field__control:before {
  z-index: 1;
}

.my-card-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.2px;
}
.view-all {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
}
.card-bottom-div {
  background: #FFFFFF !important;
  height: 36px;
  opacity: 0.8 !important;
  backdrop-filter: blur(8px);
}
.bottom-div-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #282842;
}
.workout-item {
  box-shadow: 0px 10px 30px rgba(112, 136, 210, 0.2);
  border-radius: 10px;
}
.bottom-div-subtitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.my-card-special {
  box-shadow: 0px 10px 30px rgba(112, 136, 210, 0.2);
  border-radius: 10px;
  background: #F2F4F9;
}
.persona-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.persona-caption {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  mix-blend-mode: normal;
}
.persona-change {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
.message-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #282842;
}
.message-caption {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #282842;
}
.message-item {
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(112, 136, 210, 0.2);
  border-radius: 10px;
  border: none !important;
  outline: none !important;
}
.read-button {
  height: 28px;
  border-radius: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
}
.video-caption {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #282842;
}
.profile-item {
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(16, 32, 89, 0.12), inset 0px -1px 2px rgba(16, 32, 89, 0.12);
  border-radius: 10px;
}
</style>
