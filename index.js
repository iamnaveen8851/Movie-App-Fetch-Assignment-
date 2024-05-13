let movieInput = document.getElementById('movie')

let searchBtn = document.getElementById('searchMovie');

let API_KEY = 'd67c9775';


searchBtn.addEventListener("click", searchMovie)



function searchMovie(){
    let movie = movieInput.value

    if(movieInput.value === ""){
        alert("Please enter a movie name")
       return;
    }
    
    

    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        // let movieData = data.Search
        console.log(data)
       
        if(data.Error !== undefined)
        {
            alert(data.Error)
        }
        else{
            displayMovie(data)
        }
          
        

        
        

    })
    .catch(err => console.log(err))
}




function displayMovie(movie){
   
   
    movieInput.value = ""


    
        let movieCard = document.querySelector(".movieCard")

        let movieDetails = document.querySelector(".details")


        movieCard.innerHTML = ""
        movieDetails.innerHTML = ""

        let poster = document.createElement('img')
        poster.src = movie.Poster
        poster.style.width = "100%"
        poster.style.height = "100%"
        // movieCard.append(poster)

        let title = document.createElement('h1')
        
        title.innerText = `Title : ${movie.Title}`

        let cast = document.createElement('h3')
        cast.innerText = `Cast : ${movie.Actors}`

        let year = document.createElement('h3')
        year.innerText = `Year : ${movie.Year}`

        let imdbRating = document.createElement('h3')
        imdbRating.innerText =`IMDb Rating : ${movie.imdbRating}`


        let director =  document.createElement('h3')
        director.innerText = `Director : ${movie.Director}`

        let genre = document.createElement('h3')
        genre.innerText = `Genre : ${movie.Genre}`

        let lang = document.createElement('h3')
        lang.innerText = `Language : ${movie.Language}`

        let runtime = document.createElement('h3')
        runtime.innerText = `Runtime : ${movie.Runtime}`

        let plot = document.createElement('p')
        plot.style.fontWeight = "650"
        plot.innerText = `Plot : ${movie.Plot}`
        movieCard.appendChild(poster)
        movieDetails.append(
            title,
            cast,
            director,
            genre,
            lang,
            runtime,
            year,
            imdbRating,
            plot
        )


       
}


