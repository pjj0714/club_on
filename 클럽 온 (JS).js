$('#노래_재생').hide();

var which_top = 0;
var which_left = 0;

var which_obj = {
  1 : function() {
    which_top = 350;
    which_left = 560;
  },

  2 : function() {
    which_top = 200;
    which_left = 800;
  },

  3 : function() {
    which_top = 370;
    which_left = 720;
  },

  4 : function() {
    which_top = 200;
    which_left = 650;
  },

  5 : function() {
    which_top = 350;
    which_left = 880;
  },

  6 : function() {
    which_top = 220;
    which_left = 500;
  },

  7 : function() {
    which_top = 220;
    which_left = 950;
  },

  8 : function() {
    which_top = 370;
    which_left = 400;
  },

  9 : function() {
    which_top = 370;
    which_left = 1040;
  },
}

var which_num = 1;
var $make_people;
for(var key in which_obj) {
  $make_people = $('<img src = "club' + which_num + '.gif" id = "person' + which_num +'" class = "people"> </img>')
  which_obj[which_num]();

  $($make_people).css({
    'position' : 'absolute',
    'margin-top' : which_top,
    'margin-left' : which_left
})
  which_num++;
  $('.전체_화면').append($make_people)
  $('.people').hide();
}

var club_switch = null;
var $music_play
$('#클럽_스위치').on('mouseover', () => {
  if(club_switch === null) {
    $('#클럽_스위치').css({
      'background-color' : 'powderblue'
    })
  }

}).on('mouseleave', () => {
  if(club_switch === null) {
    $('#클럽_스위치').css({
      'background-color' : 'white'
    })
  }

}).on('click', () => {
  if(club_switch === null) {
    club_switch = true;
    $music_play = $('<audio src = "Club Music 1.mp3" autoplay> </audio>')

  $('#클럽_스위치').css({
    'background-color' : 'black',
    'color' : 'white',
    'border-color' : 'white'
  })

  $('#클럽_스위치').html('Club On')
  $('.전체_화면').append($music_play);

  setTimeout(background_color_fn, 1800);
  }
})

var light_obj = {
  1 : function() {
    $('#클럽_스위치').css({ 'color' : 'red' })
  },

  2 : function() {
    $('#클럽_스위치').css({ 'color' : 'blue' })
  },

  3 : function() {
    $('#클럽_스위치').css({ 'color' : 'yellow' })
  },

  4 : function() {
    $('#클럽_스위치').css({ 'color' : 'green' })
  },

  5 : function() {
    $('#클럽_스위치').css({ 'color' : 'white' })
  }
}
var light_num = 1;
function background_color_fn() {

  function light_title() {
    if(club_switch === null) {
      return;
    }

    if(light_num === 5) {
      light_obj[light_num]();
      light_num = 1;

      return setTimeout(light_title, 50);
    }

    light_obj[light_num]();
    light_num++;

    return setTimeout(light_title, 50);
  }

  light_title()
  $('.전체_화면').css({ 'background-color' : 'black'})
  $('#디제이').attr({ 'src' : 'DJ.gif'})
  $('.people').show();

  setTimeout(function() {
    $('#클럽_스위치').html('Club Off')
    $('#디제이').attr({ 'src' : 'eee.gif'})
    $('.people').hide();
    $('.전체_화면').css({ 'background-color' : 'white'})
    club_switch = null;

    $('#클럽_스위치').css({
      'background-color' : 'white',
      'color' : 'black',
      'border-color' : 'black'
    })
  }, 31000)
}
