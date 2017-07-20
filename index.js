let car1 = {
  year: 2003,
  make: 'Acura',
  model: '3.2 CL',
  getInfo: function(){
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
  }
}

let car2 = {
  year: 2013,
  make: 'Toyata',
  model: 'Camry',
  getInfo: function(){
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
  }
};

console.log(car1);
console.log(car2);
