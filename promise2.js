/*
    Understanding promises
    Created by Aashish Loknath Panigrahi
*/

//post array storing blog post details
let posts = [
    {title:'Blog post title 1',body:'Body of blog post title 1'},
    {title:'Blog post title 2',body:'Body of blog post title 2'}
];

//Function to publish all the posts
function getPosts(){
    setTimeout(()=>{
        let output = '<ol>';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`;
        });
        output+='</ol>'
        document.body.innerHTML = output;
    },1000);
}

//Function to create a new post
function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = true;
            if(!error){
                resolve();
            }
            else{
                reject(`ERROR : Some error happened!`);
            }
        },2000);
    });
}

createPosts({title:'Blog post title 3',body:'Body of blog post title 3'})
.then(getPosts)
.catch((err)=>{
    console.log(err);
});