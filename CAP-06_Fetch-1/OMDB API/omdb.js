document.querySelector('#btn').addEventListener('click',search)
let moviename = document.querySelector('#moviename');
function search(){
  fetch(`https://www.omdbapi.com/?t=${moviename.value}&apikey=92a49ce9`)
  .then(response => response.json())
  .then(data => { 
    let apd = ''; 
    console.log(data);  
      apd += `
      <div class="card">
                <div class="img">
                    <img src="${data.Poster}" alt="">
                </div>
                <div class="part">
                    <div>
                        <p>Movie Name : ${data.Title} </p>
                        <p>Year : ${data.Year}</p>
                        <p>Released : ${data.Released} </p>
                        <p>Director : ${data.Director}</p>
                        <p>Writer : ${data.Writer}</p>
                        <p>Awards : ${data.Awards}</p>
                    </div>
                    <div>
                        <p>Actors : ${data.Actors}</p>
                        <p>Language : ${data.Language}</p>
                        <p>Country : ${data.Country}</p>
                        <p>imdbRating : ${data.imdbRating}</p>
                        <p>Genre : ${data.Genre}</p>
                        <p>Runtime : ${data.Runtime}</p>
                    </div>
                </div>
            </div>
      ` 
    document.querySelector('.main').innerHTML = apd;
  }) 
  .catch(err => {
    console.log(err);
  })
  
} 


 

 