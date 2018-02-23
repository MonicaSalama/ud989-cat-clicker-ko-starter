

var ViewModel = function (){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

    this.incrementCount = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function() {
        if (this.clickCount() <= 10) {
          return "Baby";
        }
        if (this.clickCount() <= 20) {
          return "Infant";
        }
        return "Teen";
    }, this);
}

ko.applyBindings(new ViewModel());
