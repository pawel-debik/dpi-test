const required_fields = document.getElementsByClassName('contact-us-required-field');
const contact_us_submit = document.getElementById('contact-us-submit');
const show_errors = document.getElementById('contact-us-show-errors');
const contact_us_options = document.getElementById('options');
const optional_comments = document.getElementById('optional-comments');
let errors = [];


// On option select
contact_us_options.addEventListener('click', function(e){

  // If option C is selected, then display textarea
  if ( contact_us_options.value === 'optie_c' ) {
    optional_comments.classList.remove('hide');
  }
});


// On form submit
contact_us_submit.addEventListener('click', function(e){

  // Don't reload page
  e.preventDefault();

  // Clear error field on new submit
  show_errors.innerHTML = "";

  // Check if required fields are empty
  Array.from(required_fields).forEach(function(item, i){

    if ( item.value === '' ){
      errors.push(item.name);

      item.classList.add('error');
    } else {
      item.classList.remove('error');      
    }

  });

  // Error handling
  if ( errors.length > 0 ) {
    let error_message = document.createElement('span');
    let error_message_heading = document.createElement('p');
    let error_message_heading_text = document.createTextNode('De volgende veld(en) zijn verplicht:');
    error_message_heading.appendChild(error_message_heading_text);
    error_message_heading.classList.add('error-message-heading');

    errors.forEach(function(item, i){
      let error_message_text = document.createTextNode(item);
      let error_message_newline = document.createElement('br');
      error_message.appendChild(error_message_text);
      error_message.appendChild(error_message_newline);
    })

    show_errors.appendChild(error_message_heading);
    show_errors.appendChild(error_message);

    errors = [];
  } else {
    console.log('submit');
    document.forms['contact-us_form'].submit();
  }

});