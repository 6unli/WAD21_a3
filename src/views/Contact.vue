<template>
  <div class="contact">
    <h2>Contact</h2>
    <br />
    <p>You are welcome to contact us on Workdays from Dusk till Dawn.</p>
    <p>You will find us in a dark and empty place.</p>
    <p>
      Online You can find us on the dark web... or just contact with us with the following channels:    </p>
    <div v-for="record in contacts" :key="record.phone" :email="record.email">
      <p><br>Tel: {{ record.phone }}<br> e-mail: {{ record.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      contacts: [
        { email: "wad2021@wad2021.ee", phone: "+372123456" },
        { email: "wad1900@wad1900.ee", phone: "+372654321" },
      ],
    };
  },
};
</script>


<style>
.contact {
  margin: auto;
  background-color: whitesmoke;
  width: 45%;
  height: 50vh;
  padding: 104px 80px;
  align-items: center;
}
</style>
