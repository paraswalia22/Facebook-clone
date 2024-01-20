document.querySelector("#dark-mode-toggle").onclick = () => {
  document.documentElement.classList.toggle("dark");
};

document.querySelector("#dark-mode-toggle-mb").onclick = () => {
  document.documentElement.classList.toggle("dark");
};

let requests = document.getElementById('requests');
let deleterequest = document.getElementById('deleterequest');
deleterequest.addEventListener('click', ()=>{
  requests.style.display = "none";
})


let confirmrequest = document.getElementById('confirmrequest');
confirmrequest.addEventListener('click', ()=>{
  deleterequest.style.display = 'none';
  confirmrequest.innerHTML = "Confirmed";
})


let likebtn = document.getElementById('likebtn');
let likedbtn = document.getElementById('likedbtn');

const clicklike = document.getElementById('clicklike')
clicklike.addEventListener('click', ()=>{
if(likebtn.style.display == 'block'){
  likebtn.style.display = 'none';
  likedbtn.style.display = 'block';
}
else{
  likebtn.style.display = 'block';
  likedbtn.style.display = 'none';

} 
  console.log(1)
})



let comment = document.getElementById('comment');

let commentSection = document.getElementById('comment-section');


comment.addEventListener('keyup', (event)=>{
  if(event.key === 'Enter'){ 
        commentSection.innerHTML = `
        <img src="./images/me.jpeg" alt="Profile picture" class="w-9 h-9 rounded-full cursor-pointer">
                
        <div>
          <div class="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm relative">
            <span class="font-semibold block hover:underline">Paras Walia</span>
            <span>${comment.value}</span>
          </div>


        </div>
        `;
  }
})