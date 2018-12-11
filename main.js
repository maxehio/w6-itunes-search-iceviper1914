// let countP= document.createElement('p')
// countP.innerText='Total Jams: ${result.total_count}'
// resultDiv.appendChild(countP)
// Define search-field
const searchField = document.getElementById('search-field')
// Define search-button
const searchButton = document.getElementById('search-button')

// Using Ajax
searchButton.addEventListener('click',function(event){
    $.ajax({
        type: 'GET',
        url: "https://itunes-api-proxy.glitch.me/search",
        data: {
            term: searchField.value,
            media: "music",
            country: "US",
            entity: "musicTrack",
            limit: 10
        },
        dataType: 'json',
        success: function(list){
            console.log(list)
            let resultDiv= document.getElementById('search-results')
            resultDiv.innerHTML = ''
            for(let song of list.results){
                let coolTunes = document.createElement('div')
                // $(coolTunes).addClass("card")
                let artistLink = document.createElement('a')
                let previewSong = document.createElement('audio')

                previewSong.src = song.previewUrl
                previewSong.controls = true
                artistLink.href = song.artistViewUrl
                let songP= document.createElement('p')
                songP.innerText = song.trackCensoredName
                let albulmPic = document.createElement('img')
                albulmPic.src = song.artworkUrl100
                let artistP = document.createElement('p')
                artistP.innerText = song.artistName
                $(artistLink).addClass("ml0 black truncate w-100")
                $(songP).addClass("mt2 f6 lh-copy")
                $(albulmPic).addClass("fl w-50 w-25-m w-20-l pa2")
                $(artistP).addClass("ml0 gray truncate w-100")
                artistLink.appendChild(artistP)
                coolTunes.appendChild(albulmPic)
                coolTunes.appendChild(songP)
                coolTunes.appendChild(previewSong)
                coolTunes.appendChild(artistLink)
                resultDiv.appendChild(coolTunes)
                albulmPic.setAttribute("onclick", function playSong(previewSong){})

            }
        },


            // Look for preview link
        error: function(error){
            console.log("There was an error")
            console.log(error)
        }
    })
})





