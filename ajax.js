$(document).ready(function(){
    
    $('.btn').click(function()
{
    $('.text').text('loading...');
    $.ajax({
        type:"GET",
        url:"https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",
        success:function(respons)
        {
            for(var i = 0; i< respons.data.children.length; i++)
            {
                var image ="<img src='" + respons.data.children[i].data.thumbnail + "'/>";
                $('.text').append(image);
                $('p').text('Done');
            }
          
        }
    });

});
});