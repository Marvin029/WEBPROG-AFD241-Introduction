const app3 = Vue.createApp({
    data() {
      return {
        itemName: "",
        itemNumber: null,
        itemImportant: false,
        shoppingList: [
          { name: 'Tomatoes', number: 5, important: false, found: false },
          { name: 'Bread', number: 1, important: false, found: false },
          { name: 'Soap', number: 1, important: true, found: true }
        ]
      };
    },
    methods: {
      addItem() {
        if (!this.itemName || !this.itemNumber) return;
  
        this.shoppingList.push({
          name: this.itemName,
          number: this.itemNumber,
          important: this.itemImportant,
          found: false
        });
  
        this.itemName = "";
        this.itemNumber = null;
        this.itemImportant = false;
      },
      toggleFound(index) {
        this.shoppingList[index].found = !this.shoppingList[index].found;
      }
    }
  });
  
  app3.mount('#app3');
  