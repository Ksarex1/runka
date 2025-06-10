<script>
export default {
  name: "category"
}
</script>

<template>
  <section>
    <div class="container">
      <div class="cards">
        <div class="card">
          <img src="../assets/img/card-img-1.png">
          <div class="text">
            <div class="text-left">
              <h4>Сопровождение 1С</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
            <button><img src="../assets/img/arrow-right.png"></button>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/card-img-2.png">
          <div class="text">
            <div class="text-left">
              <h4>Сопровождение 1С</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
            <button><img src="../assets/img/arrow-right.png"></button>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/card-img-3.png">
          <div class="text">
            <div class="text-left">
              <h4>Сопровождение 1С</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
            <button><img src="../assets/img/arrow-right.png"></button>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/card-img-4.png">
          <div class="text">
            <div class="text-left">
              <h4>Сопровождение 1С</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
            <button><img src="../assets/img/arrow-right.png"></button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.cards{
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

img{
  position: relative;
  z-index: -1;
  background-size: cover;
}

.card{
  position: relative;
  width: 340px;
  height: 210px;
}

.text{
  position: relative;
  margin-top: -5px;
  z-index: 1;
  padding: 20px 15px 20px 15px;
  border: 1px solid #5F687A;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.text-left{
  width: 65%;
}

.text-left h4{
  font-weight: bold;
  font-size: 20px;
  color: #030303;
}

.text-left p{
  font-weight: 400;
  font-size: 14px;
  color: #5F687A;
}

button{
  cursor: pointer;
}
</style>