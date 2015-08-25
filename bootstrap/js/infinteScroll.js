jQuery(document).ready(function () {
    //location.href = 'index.html#start';
    var pages = new Array(); //key value array that maps the pages. Ex. 1=>page2.html, 2=>page3.html
    var current = 0; //the index of the starting page. 0 for index.html in this case
    var loaded = new Array(); //key value array to prevent loading a page more than once
    var calls = 0;
    var p = 0;
    var doneYet = false;


    //get all the pages link inside the #pages div and fill an array
    $('#pages a').each(function (index) {
        pages[index] = $(this).attr('href');
        loaded[$(this).attr('href')] = 0; //initialize all the pages to be loaded to 0. It means that they are not yet been loaded.
    });

    //on scroll gets when bottom of the page is reached and calls the function do load more content
    $(window).scroll(function () {
        //Not always the pos == h statement is verified, expecially on mobile devices, that's why a 300px of margin are assumed.
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && doneYet == false) {
            console.log("bottom of the page reached!");
            //in some broswer (es. chrome) if the scroll is fast, the bottom 
            //reach events fires several times, this may cause the page loaging 
            //more than once. To prevent such situation every time the bottom is 
            //reached the number of time is added to that page in suach a way to call 
            //the loadMoreContent page only when the page value in "loaded" array is 
            //minor or equal to one
            loaded[pages[current + 1]] = loaded[pages[current + 1]] + 1;


            p++;
            //alert("p[]" + p);



            loadMoreContent(current + 1);
        }
    });

    //loads the next page and append it to the content with a fadeIn effect. 
    //Before loading the content it shows and hides the loaden Overlay DIV
    function loadMoreContent(position) {
        doneYet = true;
        $('#loader').fadeIn(1000, function () {
            $.get("lol.html", function (data) {
                $('#loader').fadeOut(1000, function () {
                    $('#contain').append(data).fadeIn(2000);
                    calls++;

                    //alert(calls);

                    $(".contentContainer").css("min-height", initHeight);
                    doneYet = false;


                });
            });
        });


    }
});