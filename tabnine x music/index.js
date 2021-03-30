const defaultHTML = `
    <form>
    Artist
    <input type="text" id="inputArtist">
    <br>
    Song
    <input type="text" id="inputSong">
</form>
<button onclick="update()">Visualise!</button>
    `


function update(){
    artist = document.getElementById("inputArtist").value;
    song = document.getElementById("inputSong").value;
    
    section.innerHTML = `
    <h1>Visualised Music!</h1>

    <h2>Song: ${song}</h2>
    <h3>By: ${artist}</h3>

    <button onclick="returnBack()">Return</button>

    `


}

function returnBack(){
    section.innerHTML = defaultHTML;
}