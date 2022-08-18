fetch('/assets/js/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        json.results.forEach(element => {
            let notation = Math.floor(element.vote_average) / 2;
            let stars = '';
            if(notation != 0) {
                for(let i = 0 ; i < notation ; i++) {
                    stars += '<i class="fa-solid fa-star"></i>';
                }
            }

            document.getElementById('container').innerHTML += 
            `<div class="filmDesc">
                <img src="${element.poster_path}">
                <div class="right">
                    <h2>${element.original_title}</h2>
                    <p class="pDesc">${element.overview}</p>
                    <p class="voteAverage">${stars}</p>
                </div>
            </div>`

            document.querySelectorAll('.right').forEach(element => {
                element.addEventListener('click', () => {
                    document.querySelector('.overlay').classList.remove('overlayOut')
                    document.querySelector('.overlay').classList.add('overlayIn');
                    document.querySelector('.overlay').innerHTML = element.innerHTML
                })
            })
            document.querySelector('.overlay').addEventListener('click', () => {
                document.querySelector('.overlay').classList.remove('overlayIn')
                document.querySelector('.overlay').classList.add('overlayOut')
            })
        });
    });