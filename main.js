movie_array=[];

function submit() {
    var name_1 = document.getElementById("Name_of_the_movie_1").value;
    var name_2 = document.getElementById("Name_of_the_movie_2").value;
    var name_3 = document.getElementById("Name_of_the_movie_3").value;
    var name_4 = document.getElementById("Name_of_the_movie_4").value;

    movie_array.push(name_1);
    movie_array.push(name_2);
    movie_array.push(name_3);
    movie_array.push(name_4);

    console.log(movie_array);

    document.getElementById("display_name").innerHTML=movie_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    movie_array.sort();
    console.log(movie_array);
    document.getElementById("display_name").innerHTML=movie_array;
}

