const movies = [
  // ================= COMEDY =================
  {
    id: 1,
    title: "The Hangover",
    genre: ["Comedy"],
    year: 2009,
    duration: "1h 40m",
    rating: 7.7,
    tagline: "Some guys just can't handle Vegas.",
    match: 85,
    poster: "https://images.justwatch.com/poster/285598209/s718/the-hangover.jpg"
  },
  {
    id: 2,
    title: "Superbad",
    genre: ["Comedy"],
    year: 2007,
    duration: "1h 53m",
    rating: 7.6,
    tagline: "Come and get some.",
    match: 82,
    poster:"https://i.pinimg.com/736x/c6/ab/8a/c6ab8aac50ce0b4846534a7b5b578c27.jpg"
  },
  {
    id: 3,
    title: "Deadpool",
    genre: ["Comedy", "Action"],
    year: 2016,
    duration: "1h 48m",
    rating: 8.0,
    tagline: "Feel the love.",
    match: 90,
    poster:"https://www.tallengestore.com/cdn/shop/products/Movie_Poster_Art_-_Deadpool_-_Smart_Ass_-_Tallenge_Hollywood_Poster_Collection_eb68c775-21d2-44a4-a683-7ae5f6eaf25f.jpg?v=1578044982"
  },
  {
    id: 4,
    title: "3 Idiots",
    genre: ["Comedy", "Drama"],
    year: 2009,
    duration: "2h 50m",
    rating: 8.4,
    tagline: "All is well.",
    match: 93,
    poster:"https://www.tallengestore.com/cdn/shop/products/7381745172660A_aa3dbd6e-f6eb-4f9a-94a5-023a04feea59.jpg?v=1683929428"
  },
  {
    id: 5,
    title: "The Grand Budapest Hotel",
    genre: ["Comedy", "Drama"],
    year: 2014,
    duration: "1h 39m",
    rating: 8.1,
    tagline: "A perfect hotel. In a less-than-perfect world.",
    match: 88,
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBN8Z4tDb4xfb0T5wie7jncudYlToCo1NTQ&s"
  },

  // ================= SCI-FI =================
  {
    id: 6,
    title: "Interstellar",
    genre: ["Sci-Fi", "Adventure"],
    year: 2014,
    duration: "2h 49m",
    rating: 8.6,
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    match: 96,
    poster:"https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 7,
    title: "Inception",
    genre: ["Sci-Fi", "Thriller"],
    year: 2010,
    duration: "2h 28m",
    rating: 8.8,
    tagline: "Your mind is the scene of the crime.",
    match: 94,
    poster:"https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "The Matrix",
    genre: ["Sci-Fi", "Action"],
    year: 1999,
    duration: "2h 16m",
    rating: 8.7,
    tagline: "Welcome to the real world.",
    match: 91,
    poster:"https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"

  },
  {
    id: 9,
    title: "Arrival",
    genre: ["Sci-Fi", "Drama"],
    year: 2016,
    duration: "1h 56m",
    rating: 7.9,
    tagline: "Why are they here?",
    match: 87,
    poster:"https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg"

  },
  {
    id: 10,
    title: "Blade Runner 2049",
    genre: ["Sci-Fi", "Drama"],
    year: 2017,
    duration: "2h 44m",
    rating: 8.0,
    tagline: "The key to the future is finally unearthed.",
    match: 89,
    poster:"https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg"

  },

  // ================= ACTION =================
  {
    id: 11,
    title: "John Wick",
    genre: ["Action", "Thriller"],
    year: 2014,
    duration: "1h 41m",
    rating: 7.4,
    tagline: "Don't set him off.",
    match: 88,
    poster:"https://m.media-amazon.com/images/I/71OQhop-4DL._AC_UF1000,1000_QL80_.jpg"
    
  },
  {
    id: 12,
    title: "Mad Max: Fury Road",
    genre: ["Action", "Adventure"],
    year: 2015,
    duration: "2h 0m",
    rating: 8.1,
    tagline: "What a lovely day.",
    match: 90,
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Mad_Max_Fury_Road.jpg/250px-Mad_Max_Fury_Road.jpg"

  },
  {
    id: 13,
    title: "Gladiator",
    genre: ["Action", "Drama"],
    year: 2000,
    duration: "2h 35m",
    rating: 8.5,
    tagline: "What we do in life echoes in eternity.",
    match: 92,
    poster:"https://m.media-amazon.com/images/I/912Ht9rUWWS._AC_UF1000,1000_QL80_.jpg"

  },
  {
    id: 14,
    title: "The Dark Knight",
    genre: ["Action", "Crime"],
    year: 2008,
    duration: "2h 32m",
    rating: 9.0,
    tagline: "Why so serious?",
    match: 97,
    poster:"https://preview.redd.it/whatre-ur-thoughts-on-the-dark-knight-is-it-still-the-v0-z19ndjd7m2ac1.jpeg?auto=webp&s=76033d75fd7e180ef5df3f2112f0a6664bc9413c"

  },
  {
    id: 15,
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure"],
    year: 2019,
    duration: "3h 1m",
    rating: 8.4,
    tagline: "Part of the journey is the end.",
    match: 95,
    poster:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX190_CR0,0,190,281_.jpg"
    
  },

  // ================= HORROR =================
  {
    id: 16,
    title: "The Conjuring",
    genre: ["Horror", "Thriller"],
    year: 2013,
    duration: "1h 52m",
    rating: 7.5,
    tagline: "Based on the true case files of the Warrens.",
    match: 86,
    poster:"https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg"

  },
  {
    id: 17,
    title: "Hereditary",
    genre: ["Horror", "Drama"],
    year: 2018,
    duration: "2h 7m",
    rating: 7.3,
    tagline: "Every family tree hides a secret.",
    match: 84,
    poster:"https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png"

  },
  {
    id: 18,
    title: "A Quiet Place",
    genre: ["Horror", "Sci-Fi"],
    year: 2018,
    duration: "1h 30m",
    rating: 7.5,
    tagline: "If they hear you, they hunt you.",
    match: 89,
    poster:"https://m.media-amazon.com/images/I/A1zV1fxtMEL._AC_UF1000,1000_QL80_.jpg"

  },
  {
    id: 19,
    title: "The Exorcist",
    genre: ["Horror"],
    year: 1973,
    duration: "2h 2m",
    rating: 8.1,
    tagline: "Something beyond comprehension is happening.",
    match: 83,
    poster:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6107_p_v10_az.jpg"

  },
  {
    id: 20,
    title: "It",
    genre: ["Horror"],
    year: 2017,
    duration: "2h 15m",
    rating: 7.3,
    tagline: "Your fears are unleashed.",
    match: 87,
    poster:"https://m.media-amazon.com/images/M/MV5BZDFhODExOTctNTFkZS00NjE1LWE2MWMtY2Q1ZThhMGY5NjJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"

  },

  // ================= ROMANCE =================
  {
    id: 21,
    title: "Titanic",
    genre: ["Romance", "Drama"],
    year: 1997,
    duration: "3h 14m",
    rating: 7.9,
    tagline: "Nothing on Earth could come between them.",
    match: 91,
    poster:"https://public-website-assets.paramountpictures.com/paramount2025/s3fs-public/styles/poster_medium/public/titanic2012_en_800x1200.jpg?itok=lbdE3VIG"

  },
  {
    id: 22,
    title: "La La Land",
    genre: ["Romance", "Musical"],
    year: 2016,
    duration: "2h 8m",
    rating: 8.0,
    tagline: "Here's to the fools who dream.",
    match: 89,
    poster:"ihttps://m.media-amazon.com/images/S/pv-target-images/178c2a0f654a66eda07ca098fa243728b6bc7c5f4359863860e12c50be3b8e39.jpg"

  },
  {
    id: 23,
    title: "The Notebook",
    genre: ["Romance", "Drama"],
    year: 2004,
    duration: "2h 3m",
    rating: 7.8,
    tagline: "Behind every great love is a great story.",
    match: 88,
    poster:"https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_.jpg"

  },
  {
    id: 24,
    title: "Pride & Prejudice",
    genre: ["Romance", "Drama"],
    year: 2005,
    duration: "2h 9m",
    rating: 7.8,
    tagline: "A romance ahead of its time.",
    match: 86,
    poster:"https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"

  },
  {
    id: 25,
    title: "Before Sunrise",
    genre: ["Romance", "Drama"],
    year: 1995,
    duration: "1h 41m",
    rating: 8.1,
    tagline: "Can the greatest romance of your life last only one night?",
    match: 90,
    poster:"https://images.justwatch.com/poster/91967506/s718/before-sunrise.jpg"

  }

];


let btn=document.querySelector(".st")
let card=document.querySelector(".card")
let welcome=document.querySelector(".wlcNote")
let genres=document.querySelector(".gen")
let bdy=document.querySelector(".bodyCard")

function showmovie(){
          card.innerHTML=""
          if(currIndex>=filteredMovies.length){
            card.innerHTML= "<h2>No More Movies Left 📽️</h2>"
            return;
          }
          let movie=filteredMovies[currIndex]
          let movieDiv=document.createElement("div")

          let movieName=document.createElement("h2")
          movieName.innerText=movie.title

          let year =document.createElement("p")
          year.innerText="Year:"+movie.year

          let genr=document.createElement("p")
          genr.innerText="Genre:"+movie.genre

          let tagline=document.createElement("p")
          tagline.innerText=movie.tagline

          let rating=document.createElement("p")
          rating.innerText="Rating:"+movie.rating

          let duration=document.createElement("p")
          duration.innerText="Duration:"+movie.duration

          let imgDiv=document.createElement("div")
          let image=document.createElement("img")
          image.src=movie.poster
          imgDiv.classList.add("img")

          let match=document.createElement("p")
          match.innerText=movie.match +"% match by your movie taste 🔥"

          let matchBtn=document.createElement("button")
          let unmatchBtn=document.createElement("button")
          let swipe=document.createElement("div")
          let info=document.createElement("div")
          
          movieDiv.appendChild(movieName)
          movieDiv.appendChild(imgDiv)
          movieDiv.appendChild(info)
          
          imgDiv.appendChild(image)

          swipe.appendChild(matchBtn)
          swipe.appendChild(unmatchBtn)
          
          card.appendChild(movieDiv)
          card.appendChild(swipe)

          info.appendChild(match)
          info.appendChild(tagline)
          info.appendChild(rating)
          info.appendChild(year)
          info.appendChild(genr)
          info.appendChild(duration)

          movieName.classList.add("movName")
          image.classList.add("poster")
          matchBtn.classList.add("matchbtn")
          unmatchBtn.classList.add("unmatchbtn")
          swipe.classList.add("btns")
          tagline.classList.add("tagline")
          rating.classList.add("rating")
          genr.classList.add("genr")
          year.classList.add("year")
          duration.classList.add("duration")
          match.classList.add("match")
          info.classList.add("info")
          
          matchBtn.innerText="Match"
          unmatchBtn.innerText="UnMatch"

          matchBtn.addEventListener("click",nextmovie)
          unmatchBtn.addEventListener("click",nextmovie)

}
function nextmovie(){
    currIndex++
    showmovie()
}
btn.addEventListener("click",()=>{
     if(genres.value.trim()===""){
        alert("Enter your Genre !")
        return
     }
     card.style.height="95vh"
     let selectedGenre=genres.value.trim().toLowerCase()
     filteredMovies = movies.filter(movie =>
        movie.genre.some(g => g.toLowerCase() === selectedGenre)
     );
  
     currIndex=0
     showmovie()
})
