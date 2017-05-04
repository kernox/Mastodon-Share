$(document).ready(function(){

  if(document.location.hash == '#start')
    $('#startInfo').removeClass('hide');

  loadOptions();
});

function loadOptions(){
    chrome.storage.sync.get({
    instanceUrl: 'https://',
    shortner: false
  }, function(items) {
    $('#instanceUrl').val(items.instanceUrl);
    $('#shortner').prop("checked", items.shortner);
  });
}

function saveOptions(e){
  e.preventDefault();

  var instanceUrl = $('#instanceUrl').val();
  var shortner = $('#shortner').prop('checked');

  chrome.storage.sync.set({
    instanceUrl: instanceUrl,
    shortner: shortner
  }, function() {

    $('#status').removeClass('hide');
    $('#startInfo').addClass('hide');

    setTimeout(function() {
      $('#status').addClass('hide');
    }, 1000);

  });
}

$('#options').on('submit', saveOptions);



