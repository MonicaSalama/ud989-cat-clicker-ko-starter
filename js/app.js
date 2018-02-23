
var cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

  this.level = ko.computed(function() {
      if (this.clickCount() <= 10) {
        return "Baby";
      }
      if (this.clickCount() <= 20) {
        return "Infant";
      }
      return "Teen";
  }, this);

  this.nickNames = ko.observableArray([
    'Tabtab', 'Temon', 'Bomba'
  ]);
}

var ViewModel = function (){
    this.currentCat = ko.observable(new cat());
    this.incrementCount = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
