
// Get data slider as slider_json.json

function get_json_slider() {
  $.ajax({

    type: 'GET',
    url: '../files/json/slider_json.json',
    dataType: 'json',
    data: {},
    success: function (data) {
      create_dom_index.create_slider_header.call(data)
    }

  })
}

// ______________________________________________________________________

// Get data vpn services as slider_json.json

function get_vp_services_data() {
  $.ajax({

    type: 'GET',
    url: '../files/json/vpn_services.json',
    dataType: 'json',
    data: {},
    success: function (data) {
      create_dom_index.create_vpn_card_services.call(data)
    }

  })
}
// ______________________________________________________________________

function get_questions_data() {

  $.ajax({

    type: "GET",
    url: "../files/json/questions.json",
    dataType: "json",
    data: {},

    success: function (data) {
      create_dom_index.create_frequently_asked_questions.call(data);
    },

  })
}
// ______________________________________________________________________

var create_dom_index = {


  create_slider_header: function () {
    var sliders = this.sliders;

    for (let i = 0; i < sliders.length; i++) {
      $('.carousel-indicators').append(`<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`);

      $('.carousel-inner').append('<div class="carousel-item"></div>');
      $('.carousel-item').append(`<img class="d-block w-100" src="../${sliders[i].img}" alt="slide${i + 1}">`);
      $('.carousel-item').append('<div class="carousel-caption d-none d-md-block"></div>');
      $('.carousel-caption').append(`<h5>${sliders[i].caption1}</h5>`);
      $('carousel-caption').append(`<p class="bg-success">${sliders[i].caption2}</p>`);
    };
    $('.carousel-indicators>li:first-child').addClass('active');
    $('.carousel-inner>.carousel-item:first-child').addClass('active');

  },

  // ---------------------------------------------------------------------------------
  
  create_vpn_card_services: function () {
    var vpn_servers = this.vpn_servers;
    // console.log(vpn_servers);
    $('.btn-group-services').append(`<div class="col-12 services-location"></div>`);
    for (let i = 0; i < vpn_servers.length; i++) {
      var server = vpn_servers[i]
      $('.services-location').append(`<button type="button" class="btn btn-lg btn-service" data-toggle="collapse" data-target=#${server.server_id}>${server.server_name}</button>`)
      
    };
    
    $('.btn-service[data-target="#germany-location"]').attr('id', 'btn-germany');
    $('.btn-service[data-target="#germany-location"]').addClass('btn-outline-dark');
    
    $('.btn-service[data-target="#usa-location"]').attr('id', 'btn-usa');
    $('.btn-service[data-target="#usa-location"]').addClass('btn-outline-primary');
    
    $('.btn-service[data-target="#turkey-location"]').attr('id', 'btn-turkey');
    $('.btn-service[data-target="#turkey-location"]').addClass('btn-outline-danger');
    
    $('.btn-service[data-target="#iran-location"]').attr('id', 'btn-iran');
    $('.btn-service[data-target="#iran-location"]').addClass('btn-outline-success');
    
    
    for (let i = 0; i < vpn_servers.length; i++) {
      var server1 = vpn_servers[i];
      
    
      $('.container-cards').append(`<div class="container-cards-inner"><div class="card-deck collapse fade" id=${server1.server_id} role="tabpanel" data-parent="#accordion"></div></div>`);
      // $('.container-cards-inner').append(``);
      for (let i = 0; i < server1.list_servers.length; i++) {
        const server_period = server1.list_servers[i];
        const card_id = server1.server_id + server_period.id;
        
        $(`#${server1.server_id}`).append(`<div class="card text-center" id='${card_id}'></div>`);
        $(`#${card_id}`).append(`<div class="card-header"></div>`);
        $(`#${card_id} .card-header`).append(`<i class="fa-solid fa-shield-halved"></i>`);
        $(`#${card_id} .card-header`).append(`<span>${server_period.period_of_time}</span>`);
        $(`#${card_id} .card-header`).append(`<i class="fa-solid fa-shield-halved"></i>`);
        $(`#${card_id}`).append(`<div class="card-body p-0"></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-title"> <span>${server_period.price}</span> <span>تومان</span></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-text mb-3 py-1 px-2"><span>${server_period.number_of_users.title}</span><i class="fa-solid fa-user-check" data-toggle="tooltip" data-placement="top" title='${server_period.number_of_users.description}'></i></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-text mb-3 py-1 px-2"><span>${server_period.location.title}</span><i class="fa-solid fa-flag" data-toggle="tooltip" data-placement="top" title='${server_period.location.description}'></i></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-text mb-3 py-1 px-2"><span>${server_period.ip_type.title}</span> <i class="fa-solid fa-circle-info" data-toggle="tooltip" data-placement="top" title='${server_period.ip_type.description}'></i></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-text mb-3 py-1 px-2"><span>${server_period.connect_devices.title}</span> <i class="fa-solid fa-circle-info" data-toggle="tooltip" data-placement="top" title='${server_period.connect_devices.description}'></i></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-text mb-3 py-1 px-2"><span>${server_period.support.title}</span> <i class="fa-solid fa-circle-info" data-toggle="tooltip" data-placement="top" title="${server_period.support.description}"></i></div>`);
        $(`#${card_id} .card-body`).append(`<div class="card-subtitle"></div>`);
        $(`#${card_id} .card-subtitle`).append(`<button type="button" class="btn btn-success btn-block">خرید / سفارش </button>`);
      };
      
    };
    
    $('#germany-location').addClass('show');
    $('[data-toggle="tooltip"]').tooltip(
      { 'delay': { 'hide': 50, 'show': 200 } }
      );
      $('.tooltip-arrow').css('display', 'hidden')
      
    },
    
    // ---------------------------------------------------------------------------------
    
    create_frequently_asked_questions: function () {
    var questions_answers = this.frequently_asked_questions;
    for (let i = 0; i < questions_answers.length; i++) {
      const question_answer = questions_answers[i];
      const card_id = 'card_question' + question_answer.id;
      const heading = 'heading' + question_answer.id;
      const collapse_content = 'collapse-content' + question_answer.id;

      $('.answer-questions-frequently').append(`<div class="card" id="${card_id}"></div>`);
      $(`#${card_id}`).append(`<div class="card-header" id="${heading}"></div>`);
      $(`#${heading}`).append(`
      <h4>
      <i class="fa-solid fa-circle-arrow-left"></i>
      <div class="btn stretched-link btn-question" 
      data-toggle="collapse" data-target="#${collapse_content}" aria-controls="${collapse_content}" aria-expanded="false">${question_answer.question_title}</div>
      </h4>
      `);

      $(`#${card_id}`).append(`
      <div class="collapse" id="${collapse_content}" aria-labelledby="${heading}">
        <div class="card-body">
            <p>
              ${question_answer.answer_question}
            </p>
        </div>
      </div>
      `)

    };

    $('.answer-questions-frequently .card-header').click(function () {
      $(this).toggleClass('active-header');
    })


  }
};

// ______________________________________________________________________

$(document).ready(function () {

  get_json_slider();
  get_vp_services_data();
  get_questions_data();





})