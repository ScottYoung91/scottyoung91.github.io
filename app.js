//Init github class
const github = new Github;

//Init UI class
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) =>{
  //get input text
  const userText = e.target.value;

  if(userText !== ''){
    //Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          //Show Alert
          ui.clearProfile();
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
})