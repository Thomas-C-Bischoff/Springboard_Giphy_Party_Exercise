const $gifText = $("#gif-text");
const $gifCollection = $("#gif-collection");

function appendGIF(res)
{
    const resultCount = res.data.length;
    if (resultCount)
    {
        const randomNum = Math.floor(Math.random() * resultCount);
        const $gifContainer = $("<div>");
        const $newGIF = $("<img>", {src: res.data[randomNum].images.original.url});
        $gifContainer.append($newGIF);
        $gifCollection.append($gifContainer);
    }
}

$("#gif-form").on("submit", async function(evt)
{
    evt.preventDefault();
    const searchValue = $gifText.val();
    $gifText.val("");
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchValue, 
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(response.data);
    appendGIF(response.data);
});

$("#gif-remove").on("click", function()
{
    $gifCollection.empty();
});