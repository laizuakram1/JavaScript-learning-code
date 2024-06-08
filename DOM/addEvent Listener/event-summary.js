

document.getElementById('update-button').addEventListener('click', function(){
    const inputText = document.getElementById('input-field');
    const updateText = document.getElementById('update-text');

    updateText.innerText = inputText.value;
    inputText.value = '';
   
})

//add new comment in comment box

document.getElementById('post-btn').addEventListener('click', (e) =>{
    const commentText = document.getElementById('comment-field');
    const inputValue = commentText.value;
    const newComment = document.createElement('p');
    newComment.innerText = inputValue;

    const commentContainer = document.getElementById('comment-box-container');
    commentContainer.appendChild(newComment);

    commentText.value = ' ';


    
})
