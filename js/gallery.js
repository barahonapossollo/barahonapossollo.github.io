function filterGallery(category) {
  // console.log('filter gallery category: '+category)

  if(category != "") {
    $(".grid2").isotope({ filter: "." + category });
  } else {
    $(".grid2").isotope({ filter: "" });
  }
  $(".grid2").isotope({ sortBy: "pos" });
  // $('#loader').hide();
  $(".grid2").css("opacity", 1); // hide

  switch (category) {
    case "eat":
      $(".collapsible").show();
      $(".collapsed").show();
      $("#text").show();
      $("#text").html(all_you_can_eat);
      break;
    case "green":
      $(".collapsible").show();
      $(".collapsed").show();
      $("#text").show();
      $("#text").html(behind_the_green_door);
      break;
    default:
      $(".collapsible").hide();
      $(".collapsed").hide();
      $("#text").hide();
  }
}

$(".grid2").css("opacity", 0); // hide
$(".collapsible").hide();
$(".collapsed").hide();
$("#text").hide();

var per_inc = 0;
var counter = 0;
var total = -1;
// var urldev = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlaCTd_5UhNxupH70kZxxqRyl4rPBqcEDfgm-xA3VcPmwBcYoNJMYMvqSyN-GjLhdbYLUzlrkDiaFS/pub?gid=1226465631&single=true&output=csv";
var url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlaCTd_5UhNxupH70kZxxqRyl4rPBqcEDfgm-xA3VcPmwBcYoNJMYMvqSyN-GjLhdbYLUzlrkDiaFS/pub?gid=1871399810&single=true&output=csv";
Papa.parse(url, {
  download: true,
  header: true,
  complete: function (results) {
    var data = results.data;
    total = data.length;
    $.each(data, function (i, item) {
      var listData =
        "<div class='is-loading grid-item2 " +
        item.class +
        " " +
        item.cat.toLowerCase() +
        "' style=''>";
      listData +=
        "<div class='pos' style='display: none; vertical-align: middle; left: 50%; top: 50%; position: absolute; font-size: 50px; color: white; z-index: 99'>" +
        item.pos +
        "</div>";
      var title = item.enTitle.replace(/'/g, "&apos;");
      var cc =
        "<br/>This photo of " +
        title +
        ' by <a href="/author">Barahona Possollo</a> is licensed as <a href="https://creativecommons.org/licenses/by-sa/4.0/"><i class="cc cc-BY-SA"></i></a><br/>';
      var download =
        '<a target="_blank" href="' +
        (item.url ? "" : "/img/gallery/") +
        (item.url ? item.url : item.filename + "." + item.ext) +
        '" download="' +
        title.replace(/[^a-z0-9]/gi, "_").toLowerCase() +
        "_by_barahona_possollo" +
        "." +
        item.ext +
        '"><i class="fa icon-download" aria-hidden="true"></i> Click here if you wish to download and use it.</a>';
      if (item.url != "") {
        listData +=
          "<a class='fancybox' href='" +
          item.url +
          "' title='" +
          title +
          "' data-fancybox-title='<b>";
        listData += title + "</b>, " + item.enInfo;
        if (item.size != "") listData += ", " + item.size;
        listData += ", " + item.year + cc + download;
        listData += "'><img src='" + item.url + "'></a></div>";
      } else {
        listData +=
          "<a class='fancybox' href='/img/gallery/" +
          item.filename +
          "." +
          item.ext +
          "' title='" +
          title +
          "' data-fancybox-title='<b>";
        listData += title + "</b>, " + item.enInfo;
        if (item.size != "") listData += ", " + item.size;
        listData += ", " + item.year + cc + download;
        listData +=
          "'><img src='/img/gallery/" +
          item.filename +
          "." +
          item.ext +
          "'></a></div>";
      }
      $(".grid2").append(listData);
    });
    $(".grid2").isotope({
      itemSelector: ".grid-item2",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer2",
      },
      getSortData: {
        pos: ".pos parseInt",
      },
    });
    $(".grid2")
      .imagesLoaded()
      .progress(function (instance, image) {
        counter++;
        var $item = $(image.img).parent().parent();
        $item.removeClass("is-loading");
        if (!image.isLoaded) {
          $item.addClass("is-broken");
        }
        per_inc = (counter / total) * 100;
        document.getElementById("bar1").style.width = per_inc + "%";
        if (document.getElementById("bar1").style.width == "100%") {
          $(".progressGal").fadeOut("slow");
          $("#loader").fadeOut("slow");
          $("#loader").hide();
        }
      });

    $(".grid2")
      .imagesLoaded()
      .done(function () {
        console.log("finished loading gallery");
        $(".grid2").isotope({ sortBy: "pos" });
        $(".grid2").isotope("layout");
      });
  },
});

var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--el-active");
    this.classList.add("s--active");
    console.log($el);
    $cat = $(".el.s--active h2").innerHTML;
    $cat = $cat.replace(/\s+/g, "");
    $cat = $cat.toLowerCase();
    var category = $cat;

    if ($cat == "eros") {
      $(".grid2").css("opacity", 0); // hide
      $("#myModal2").modal("show");
    } else {
      filterGallery(category);
    }
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAction();
    $(".collapsible").hide();
    $(".collapsed").hide();
    $("#text").hide();
  });
});

function closeAction() {
  $cont.classList.remove("s--el-active");
  document.querySelector(".el.s--active").classList.remove("s--active");
  $(".grid2").css("opacity", 0); // hide
  $(".collapsible").hide();
  $(".collapsed").hide();
}

$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "elastic",
    closeEffect: "elastic",
    helpers: {
      title: {
        type: "inside",
      },
    },
  });
});
