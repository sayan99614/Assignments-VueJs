<template>
  <div class="container">
    <h1 class="mb-5 mt-4 text-center bg-info text-white fw-bold font">
      {{ heading }}
    </h1>
    <div class="text-center"></div>
    <div class="row">
      <div class="col-sm-6">
        <h3 class="bg-dark text-white p-1">{{ carname }}</h3>
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="car-img"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-6">
        <div class="descp">
          <h5>{{ descp }}</h5>
          <p>{{ details }}</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-info text-white mt-4 w-25" @click="handleClick">
        Info
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery-card",
  data() {
    return {
      heading: "Car Gallery",
      descp: "Description",
      carname: "Porsche",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam labore magnam natus iste corrupti quasi, amet voluptatibus neque veniam dolores fuga est adipisci quae architecto rerum? Vitae optio consequuntur ex esse ratione maxime eum perspiciatis commodi, ipsam voluptatem in aspernatur sed molestias dolorum possimus sint culpa consequatur corporis id? Adipisci eius commodi nobis cupiditate sapiente eveniet consequatur ex atque vero? Vero maiores temporibus facilis iusto officia, autem voluptas incidunt aliquid! Vitae assumenda dolore fugiat consectetur doloremque facilis quos corporis et aperiam, quibusdam, veniam at tenetur distinctio laborum! Impedit modi possimus vero autem fugiat voluptates aliquam asperiores harum blanditiis placeat.",
    };
  },
  methods: {
    handleClick() {
      alert("car price is 1M$");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
}
.font {
  position: relative;
  font-family: "Roboto", sans-serif;
}
.container {
  box-shadow: rgb(177 174 174) 3px 3px 9px -3px;
  padding: 10px 25px;
  margin-bottom: 15px;
}
.descp {
  position: relative;
  top: 45px;
}
</style>
