
$.getJSON('/json/menu.json', start); //calling json


let svTranslations = {



  wholeweek: 'hela Veckan',

  monday: 'måndag',

  tuesday: 'tisdag',

  wednesday: 'onsdag',

  thursday: 'torsdag',

  friday: 'fredag',

  saturday: 'lördag',

  sunday: 'söndag',

};


$("#En").click(function () {

  $(".menu-containerEn").show();
  $(".menu-containerSv").hide();
});



$("#Sv").click(function () {
  $(".menu-containerSv").show();
  $(".menu-containerEn").hide();

});

$('.menu-containerEn').hide();



function start(menuData) {
  let ul = $('<ul.menu-containerSv/>');



  for (let day in menuData) {
    let dayData = menuData[day];
    let daySw = svTranslations[day];
    ul.append('<h5>' + daySw + '</h5>');


    for (let meal of dayData.sv) {

      let li = $('<li/>');
      li.append('<h6>' + meal.name + '</h6>');
      li.append('<p class = "meal-desc">' + meal.desc + '</p>');
      ul.append(li);
      $('.menu-containerSv').append(ul);

    };

  };



  ul = $('<ul.menu-containerEn/>');
  for (let day in menuData) {
    let dayData = menuData[day];
    ul.append('<h5>' + day + '</h5>');

    for (let meal of dayData.en) {

      li = $('<li/>');
      li.append('<h6>' + meal.name + '</h6>');
      li.append('<p class = "meal-desc">' + meal.desc + '</p>');
      ul.append(li);
      $('.menu-containerEn').append(ul);
    };



  };

}









