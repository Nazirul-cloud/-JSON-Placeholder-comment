const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then (res => res.json())
    .then (data => displayComment(data.slice(0,10)))
}
// loadComment();

const displayComment = comments =>{
    const commentDetail = document.getElementById('comment-detail');
    // for (const comment of comments){
    // }
    comments.forEach(comment =>{
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
         <div class="card border-warning mb-4 p-4">
            <h5 class="card-title">${comment.name}</h5>
            <p class="card-text">${comment.body.slice(0,100)}</p>
            <p>${comment.id}</p>
            <button onclick="loadDetails(${comment.id})">Details</button>
         </div>
  
        `;
        commentDetail.appendChild(div);
    })
    
}

const loadDetails = id =>{
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then (res => res.json())
    .then (data => displayDetails(data))
}

const displayDetails = comment =>{
    const details = document.getElementById('details');
    details.textContent ='';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card border-warning mb-4 p-4">
       <p>${comment.id}</p>
       <h5 class="card-title">${comment.name}</h5>
       <p class="card-text">${comment.body.slice(0,100)}</p>
       <p>${comment.email}</p>
    </div>
   `;
   details.appendChild(div);
    
}
