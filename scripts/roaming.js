document.querySelector('.logo')
 .addEventListener('click', () => {
    window.location.href = 'https://www.example.com';
 })

 document.querySelectorAll('#more-News-1, #more-News-2, #more-News-3, #more-News-4')
 .forEach(button => {
   button.addEventListener('click', () => {
     if (button.id === 'more-News-1') {
       window.location.href = 'https://www.hindustantimes.com';
     } else if (button.id === 'more-News-2') {
       window.location.href = 'https://www.brut.media/in';
     } else if (button.id === 'more-News-3') {
       window.location.href = 'https://www.wionews.com';
     } else if (button.id === 'more-News-4') {
       window.location.href = 'https://www.thehindu.com';
     }
   });
 });



 document.querySelectorAll('#ht1, #ht2, #ht3').forEach((button) => { 
   button.addEventListener('click', () => {
     if (button.id === 'ht1') {
       window.location.href = 'https://www.hindustantimes.com/world-news/donald-trump-agreed-to-pause-tariffs-for-one-month-mexico-president-101738597233061.html';
     } else if (button.id === 'ht2') {
       window.location.href = 'https://www.hindustantimes.com/india-news/thumbs-up-or-down-how-india-bloc-reacted-to-nirmala-sitharamans-budget-2025-101738402613094.html';
     } else if (button.id === 'ht3') {
       window.location.href = 'https://www.hindustantimes.com/education/board-exams/cbse-board-exams-2025-strategies-and-key-focus-areas-for-success-with-special-emphasis-on-physics-and-chemistry-101738569293330.html';
     }
   });
 });
 


 document.querySelectorAll('#bt1, #bt2, #bt3').forEach(button => {
   button.addEventListener('click', () => {
      if(button.id === 'bt1') {
         window.location.href = 'https://www.brut.media/in/videos/india/society/the-naga-sadhus-of-mahakumbh';
      }else if(button.id === 'bt2') {
         window.location.href = 'https://www.brut.media/in/videos/health/wellness/ram-kapoor-on-his-weight-loss-journey';
      }else if(button.id === 'bt3') {
         window.location.href = 'https://www.brut.media/in/videos/culture-lifestyle/movies/anushka-and-virats-spiritual-journey';
      }
   });
});


document.querySelectorAll('#wi1, #wi2, #wi3').forEach(button => {
   button.addEventListener('click', () => {
      if(button.id === 'wi1') {
         window.location.href = 'https://www.wionews.com/world/iran-looking-for-quick-ways-to-build-nuclear-weapon-says-us-report-8688177';
      }else if(button.id === 'wi2') {
         window.location.href = 'https://www.wionews.com/world/us-president-trump-warns-of-more-tariffs-on-china-says-talks-expected-within-24-hours-beijing-says-no-winner-in-a-trade-war-8687954';
      }else if(button.id === 'wi3') {
         window.location.href = 'https://www.wionews.com/sports/manchester-city-spend-whopping-224mn-in-winter-transfer-window-despite-financial-charges-8688164';
      }
   })
})

document.querySelectorAll('#th1, #th2, #th3').forEach(button => {
   button.addEventListener('click', () => {
      if(button.id === 'th1') {
         window.location.href = 'https://www.thehindu.com/business/Industry/how-will-the-govt-produce-the-required-fuel-ethanol-explained/article69177413.ece';
      }else if(button.id === 'th2') {
         window.location.href = 'https://www.thehindu.com/news/international/bill-to-regulate-social-media-raises-risk-of-free-speech-and-free-press-being-casualty-in-nepal/article69176319.ece';
      }else if(button.id === 'th3') {
         window.location.href = 'https://www.thehindu.com/sci-tech/science/the-promises-and-problems-of-using-bacteria-to-get-rid-of-plastic/article69175500.ece';
      }
   })
})

// Get the login button element
const loginButton = document.querySelector('.login-button');

// Add a click event listener to the login button
loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Simulate a login process
    const username = prompt('Enter your username:'); // Prompt for username
    const password = prompt('Enter your password:'); // Prompt for password

    // Check if the username and password are valid (for demonstration purposes)
    if (username && password) {
        // Simulate a successful login
        alert(`Welcome back, ${username}!`);
        // Redirect to a dashboard or home page (you can replace the URL)
        window.location.href = 'https://example.com/dashboard';
    } else {
        // Simulate a failed login
        alert('Invalid username or password. Please try again.');
    }
});


document.querySelectorAll('.hindu-t, .brut-i, .wio-n, .the-h').forEach(button => {
   button.addEventListener('click', () => {
      if (button.classList.contains('hindu-t')) {
         window.location.href = 'https://www.hindustantimes.com';
      } else if (button.classList.contains('brut-i')) {
         window.location.href = 'https://www.brut.media/in';
      } else if (button.classList.contains('wio-n')) {
         window.location.href = 'https://www.wionews.com';
      } else if (button.classList.contains('the-h')) {
         window.location.href = 'https://www.thehindu.com';
      }
   });
});
