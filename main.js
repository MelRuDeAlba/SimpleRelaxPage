/** Umbrela JS */
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = {
    skyDay : "https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg",
    skyNight : "https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg",
    neon : "https://images.pexels.com/photos/5745014/pexels-photo-5745014.jpeg",
  }
  let overlayActive = false;
  u("#settings-icon").on('click', e => {
    if(!overlayActive){
      overlayActive = true;
      u("#overlay").removeClass('hidden');
      u("#overlay").removeClass('hide-overlay');
      u("#overlay").addClass('show-overlay');
    } else {
      overlayActive = false;
      u("#overlay").removeClass('show-overlay');
      u("#overlay").addClass('hide-overlay');
      setTimeout(() => {
        u("#overlay").addClass('hidden');
      }, 500);
    }
  });

  // Submit a form through Ajax
  u('form.config').on('submit', function(event){
    // Prevent the default form submission
    event.preventDefault();
    var backgound = document.getElementById("backgound").value;
    var mainContainer = document.getElementById("main-container");
    // Set the background image URL dynamically
    mainContainer.style.backgroundImage = 'url('+backgrounds[backgound]+')';
    var title = document.getElementById("title").value;
    u("#main-title").text(title);
  });


});


