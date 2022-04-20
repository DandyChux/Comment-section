// Fetch the JSON data
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        createComments(data);
    })
    .catch(function (err) {
        console.log(err);

    });
// Create comment function
function createComments(data) {
    const container = document.querySelector('.container');
    // Loop through the data and create a comment for each id in the JSON
    for (let i = 0; i < data.length; i++) {
        const currentUser = document.createElement('div');
        const users = document.createElement('div');
        const comment = document.createElement('textarea');
        const profile = document.createElement('div');
        const profileImg = document.createElement('img');
        const sendBtn = document.createElement('button');
        const holder = document.createElement('div');

        // Other user comments 
        for (let j = 0; j < data[i].comments.length; j++) {
            console.log(data[j]);
        }

        // Append to parent div
        container.appendChild(currentUser);
        container.appendChild(users);
        currentUser.appendChild(holder);
        holder.appendChild(profile);
        holder.appendChild(comment);
        profile.appendChild(profileImg);
        currentUser.appendChild(sendBtn);

        // Set 
        profileImg.src = data[i].currentUser.image; //returns the image src stored in json data
        sendBtn.innerHTML = 'send';
        comment.placeholder = 'Add a comment...';

        // Adding class name 
        currentUser.classList.add('current-user');
        users.classList.add('users');
        sendBtn.classList.add('send-btn');
        holder.classList.add('holder');
        comment.classList.add('input');
        profile.classList.add('profile');
    }
}