
array = JSON.parse(localStorage.getItem("myBookmarks") || "[]");
array.forEach(element => {
    $(".navbar-nav").append(`
    <li class="nav-item d-flex" key="`+ element.key + `">
        <a href="`+ element.url + `"
            class="nav-link text-decoration-none p-2 flex-grow-1 rounded-3"
            target="_blank"><img src="`+ element.logo + `" class="icon mx-2" /> <span>` + element.name + `</span></a>
            <button type="button" class="btn px-2 btn-custom delete" id="`+ element.key + `"><img src="./icons/x-circle-fill.svg" /></button>
    </li>
    `);
});

$("#show").on("click", function () {
    $('#form').css("display", "block");
    $('#show').css("display", "none");
    $('#hide').css("display", "block");
    $('.delete').css("display", "none");
})
$("#hide").on("click", function () {
    $('#form').css("display", "none");
    $('#show').css("display", "block");
    $('#hide').css("display", "none");
})
$("#edit").on("click", function () {
    if ($('.delete').css("display") == "block") {
        $('.delete').css("display", "none");
    } else {
        $('.delete').css("display", "block");
    }
})
$("#add").on("click", function () {
    array = JSON.parse(localStorage.getItem("myBookmarks") || "[]");
    let name = $("#bookmarkName").val();
    let url = $("#bookmarkUrl").val();
    let logo = "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + url + "&size=50";
    let key = array.length;

    $(".navbar-nav").append(`
    <li class="nav-item d-flex" key="`+ key + `">
        <a href="`+ url + `"
            class="nav-link text-decoration-none p-2 flex-grow-1 rounded-3"
            target="_blank"><img src="`+ logo + `" class="icon mx-2" /> <span>` + name + `</span></a>
            <button type="button" class="btn px-2 btn-custom delete" id="`+ key + `"><img src="./icons/x-circle-fill.svg" /></button>
    </li>
    `);

    array.push({ name: name, url: url, logo: logo, key: key });
    localStorage.setItem("myBookmarks", JSON.stringify(array));

    $("#bookmarkName").val("");
    $("#bookmarkUrl").val("");
    $("#hide").click();
    $('.delete').css("display", "none");
    location.reload();
})
$(".delete").on("click", function () {
    var key = $(this).attr('id');
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        console.log(obj.key.toString() == key.toString())
        if (obj.key == key) {
            array.splice(i, 1);
            localStorage.setItem("myBookmarks", JSON.stringify(array));
            location.reload();
        }
    }
})