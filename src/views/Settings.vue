<template>
<div class="settings">

  <a-row type="flex" justify="start">
    <a-col class="item">
      <a-button icon="plus-circle"  block type="link" class="button" >
        Add
      </a-button>
    </a-col>

    <a-col class="item">
      <a-button icon="minus-circle"  block type="link" class="button" >
        Delete
      </a-button>
    </a-col>

    <a-col class="item">
      <a-button icon="check-circle"  block type="link" class="button" >
        Check
      </a-button>
    </a-col>

    <a-col class="item">
      <a-button block type="link" class="button"  >
        Витя логист logist2@mail.ru
        <a-icon type="check" class="ml-auto" />
      </a-button>
    </a-col>

    <a-col class="item">
      <a-button block type="link" class="button"   >
        <div>Current value</div>
        <label  >value</label>

      </a-button>
    </a-col>

    <a-col class="item">
      <a-button block type="link" class="button"  >
        Sub menu
        <a-icon type="right" class="ml-auto" />
      </a-button>
    </a-col>

    <a-col class="item">
      <a-button block type="link" class="button"  >
        Reorder
        <a-icon type="menu" class="ml-auto" />
      </a-button>
    </a-col>

    <a-col class="item">
      <a-button icon="plus-circle"  block type="link" class="button" >
        Add
      </a-button>
    </a-col>
  </a-row>
</div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped lang="scss">
.item {
  width: 100%;
    border-bottom: 1px solid black;
    text-align: left;
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
