const y: number = 6; //number of posts to be published
const jsonURL: string = "https://api.myjson.com/bins/tn258";
//SERVER TESTING

let req = new XMLHttpRequest();
req.open('GET', jsonURL);
req.onload = function () {
    let title: string, subTitle: string, author: string, date: string, type: string, n: boolean, description: string, article: string, imageSrc: string, i: number, dateMonth;
    let obj: string, ending: string; //turning doc.innerHTML into fn



    //declaring a function to do all the displaying so we get rid of long redundent code
    //var obj is the HTML class
    //var ending is the var that includes our JSON extraction
    let display = (obj, ending) => $("." + obj).append(ending);

    let serverData = JSON.parse(req.responseText);
    for (let i = 0; i < y; i++) {
        $(".blog").append(`
    <div class="block${i} animated fadeInRight faster delay-${i}s">
        <div class="divider"></div>
        <div class="date${i}"></div>
        <div class="label${i}"></div>
        <div class="title${i}"></div>
    </div>
    `);
        $(".block0").addClass("current");
        if (i >= 5) {
            $(".blog").append(`
        <button class="bttn bttn--light">See more posts</button>
        `)
        }

        //get and display title
        title = serverData.news.blog[i].title;
        //$(".title" + i).append(title);
        display("title" + i, title);

        //get and display subtitle
        subTitle = serverData.news.blog[i].subTitle;
        display("subTitle" + i, subTitle);

        //get and display author
        author = serverData.news.blog[i].author;
        display("author" + i, author);

        dateMonth = serverData.news.blog[i].date.month;
        if (dateMonth == 1) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "Jan"
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (dateMonth == 2) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "Feb";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 3) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "Mar";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 4) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "Apr";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 5) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "May";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 6) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "jun";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 7) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "jul";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 8) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "aug";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 9) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "sep";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 10) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "oct";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 11) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "nov";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else if (serverData.news.blog[i].date.month == 12) {
            dateMonth = serverData.news.blog[i].date.month.toString();
            dateMonth = "dec";
            date = dateMonth + " " + serverData.news.blog[i].date.year;
        } else {
            serverData.news.blog[i].date.month == null;
        }

        //display date
        display("date" + i, date);

        //get post type
        type = serverData.news.blog[i].type;

        //get post new bool
        n = serverData.news.blog[i].new;


        if (serverData.news.blog[0].new == false) {
            serverData.news.blog[0].new = true;
        }
        for (let x: number = 1; x < y; x++) {
            if (serverData.news.blog[x].new == true) {
                serverData.news.blog[x].new = false;
            }
        }

        //tri if statement  
        //if key new has value true display n in ".n"
        //else display type in ".type"
        (serverData.news.blog[i].new == true) ? display("label" + i, "new"): display("label" + i, type);


        //get and display description
        description = serverData.news.blog[i].description;
        display("desc" + i, description);

        //get and display article
        article = serverData.news.blog[i].article;
        display("article" + i, article);


        //get blog post imgsrc
        imageSrc = serverData.news.blog[i].imageSrc;
        //display album img
        $("#newsImg").css("background-image", "url('" + serverData.news.blog[0].imageSrc + "')");
    }//end of for loop
    
    //need to make the albums dynamic
        //set up skeleton or append via TS
        //on click slider to hide and show the album data for different albums
    $(".albumContent__title").append(serverData.album[0].title);    
    $(".albumContent__date--year").append(serverData.album[0].date.year);
    $(".albumContent__desc").append(serverData.album[0].desc);
    $(".albumContent__img").css("background-image", "url('" + serverData.album[0].cover + "')");
};



req.send();
//END OF SESSION