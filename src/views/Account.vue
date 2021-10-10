<template>
  <div class="account">
    <a-row type="flex" justify="start" class="px-3 pt-5">
        <a-col class="item">
          <a-avatar shape="square" :size="100" icon="user" style="margin: auto !important"/>
        </a-col>
        <a-col class="item">
          <a-button icon="plus-circle"  block type="link" class="button" >
            Данные профиля
          </a-button>
        </a-col>
        <a-col class="item">
          <a-button icon="plus-circle"  block type="link" class="button" >
            Смена пароля
          </a-button>
        </a-col>
        <a-col class="item">
          <a-button icon="plus-circle"  block type="link" class="button" >
            Выданные доступы
          </a-button>
        </a-col>

      <a-col class="item">
        <a-button   block type="link" class="button" >
          Алексей логист logist1@mail.ru
          <a-icon type="check" class="ml-auto" />
        </a-button>
      </a-col>

      <a-col class="item">
        <a-button block type="link" class="button"  >
          Витя логист logist2@mail.ru
          <a-icon type="check" class="ml-auto" />
        </a-button>
      </a-col>

        <a-col class="item">
          <a-button icon="plus-circle"  block type="link" class="button" >
            Настройка уведомлений
          </a-button>
        </a-col>

        <a-col class="item">
          <a-button icon="minus-circle"  block type="link" class="button" >
            Выход из аккаунта
          </a-button>
        </a-col>


    </a-row>
  </div>
</template>

<script>
export default {
  name: "Account"
}
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  &:not(:first-child){
    border-bottom: 1px solid black;
    text-align: left;


  }
}

.button {
  text-align: left;
  color: black;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 22px 0;
}

</style>
