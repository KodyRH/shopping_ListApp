<script lang="ts" setup>
import { ref } from 'vue';

// Placeholder data
const items = ref([
  { id: 1, name: 'Milk', quantity: 2 },
  { id: 2, name: 'Bread', quantity: 1 },
  { id: 3, name: 'Eggs', quantity: 12 },
]);

// New item inputs
const newItemName = ref('');
const newItemQuantity = ref(1);

// Add item function
const addItem = () => {
  if (newItemName.value.trim() !== '') {
    items.value.push({
      id: Date.now(),
      name: newItemName.value,
      quantity: newItemQuantity.value,
    });
    newItemName.value = '';
    newItemQuantity.value = 1;
  }
};

// Delete item function
const deleteItem = (id: number) => {
  items.value = items.value.filter(item => item.id !== id);
};
</script>

<template>
  <div class="shopping-list">
    <h1>Shopping List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.quantity }}
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
    <div class="add-item">
      <input
        v-model="newItemName"
        type="text"
        placeholder="Item name"
      />
      <input
        v-model.number="newItemQuantity"
        type="number"
        min="1"
        placeholder="Quantity"
      />
      <button @click="addItem">Add Item</button>
    </div>
  </div>
</template>

<style>
.shopping-list {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.add-item {
  margin-top: 20px;
}

.add-item input {
  margin-right: 10px;
}

.add-item button {
  padding: 5px 10px;
}
</style>