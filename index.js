class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((itemA, itemB) => {
      if (itemA > itemB) {
        return 1;
      } else if (itemA < itemB) {
        return -1;
      } else {
        return 0;
      }
    });

    this.length = this.items.length;
  }


  get(pos) {
    if(pos > this.items.length -1){
      throw new Error('OutOfBounds');
    }
    else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.items[this.length -1];
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.items[0];
    }
  }
  sum() {
    return this.items.reduce((acumulator, currentValue) => {
      return acumulator + currentValue;
    }, 0);
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.sum() / this.length;
      };
    }
    
  }

module.exports = SortedList;
