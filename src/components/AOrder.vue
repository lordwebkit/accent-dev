<script setup>
import { ref } from 'vue';
import ABtn from './ABtn.vue';
import { useCartStore } from '@/stores/cart'
import { useModalCartStore} from '@/stores/modalCart'

const store = useCartStore();
const modalStore = useModalCartStore();

let name = ref("")
let phone = ref("")

async function sendOrderReq() {
  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();

  if (!nameValue || !phoneValue) {
    return;
  }

  const userData = {
    name: nameValue,
    phone: phoneValue,
    order: store.getCart.value
  }

  const url = "https://cors.iamnd.eu.org/?url=https://app.aaccent.su/js/confirm.php"
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json();
    modalStore.openModalCart()
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

</script>
<template>
  <form class="order">
    <div class="order-inner">
      <h3 class="order__title">Оформление заказа</h3>
      <form class="order__form">
        <div class="order__field">
          <label class="order__label" for="order-name">Ваше имя</label>
          <input class="order__input" type="text" name="name" id="order-name" placeholder="Иван" v-model="name" required>
        </div>
        <div class="order__field">
          <label class="order__label" for="order-name">Ваш номер телефона</label>
          <input class="order__input" type="tel" name="name" id="order-phone" placeholder="+7(999) 999-99-99"
            v-model="phone" required>
        </div>
        <p class="order__price">Итоговая цена: <span class="order__price-number">{{ store.getTotalPrice.toFixed(2) }}
            USD</span></p>
        <ABtn class="order__put" @click.prevent="sendOrderReq">
          Оформить заказ
        </ABtn>
      </form>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.order {
  &__form {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__label {
    @media (max-width: 970px) {
      font-size: 16px;
    }
  }

  &__input {
    padding: 5px;
    height: 40px;

    @media (max-width: 1040px) {
      margin-top: 10px;
    }

    @media (max-width: 970px) {
      font-size: 16px;
      height: 35px;
    }
  }

  &__field {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 1040px) {
      flex-direction: column;
    }
  }

  &__price {
    margin-bottom: 10px;

    @media (max-width: 970px) {
      font-size: 17px;
    }
  }

  &__price-number {
    @media (max-width: 660px) {
      display: block;
    }
  }
}
</style>