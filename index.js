jQuery(document).ready(function ($) {
    $('#searchquery').keyup(function () {
        let q = $('#searchquery').val().trim();
        let $results = $('#results');
        let part= 'snippet';
        let key="AIzaSyA_a3TeCRR4hthnl5yrv_MaKnBT2we1Mcw";
        let url = "https://www.googleapis.com/youtube/v3/search=json&callback=?"
            url = url + '&duration=long';
            url = url + '&orderby=viewCount';
            url = url + '&omax-results=10';
        $.getJSON(url + "&q=" + q, function (json) {
            let count = 0;
            if (jason.data.items) {
                let items = json.data.items;
                let html = "";

                items.forEach(function (item) {
                    html += '<p><a href="http://youtu.be/' + item.id + '">';
                    html += '<img src="http://i.ytimg.com/vi/' + item.id + '/default.jpg">';
                    html += '<h2>' + item.title + ' ' + item.duration + '</h2></a></p>';count++;
                })
            }
        if (count === 0) {
        $results.html("No videos found. Try another search");
    }
    else {
        $results.html(html);
    }
  });    
});
});