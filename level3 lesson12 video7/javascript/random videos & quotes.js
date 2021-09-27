// level3 lesson4 video #2
// random youtube videos from Array

let i = 0;
randomvideo.addEventListener("click", (eo) => {
  const videoArr = [
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/rC6blQtakzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/tZLDEUFtnX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/8x4E8kzYNSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/10wsbG9IsAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/ZJknc9iqiYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/nceUSuYjNXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Ckj9V74HrY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Cbk980jV7Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  ];

  // containeriframe.innerHTML =  videoArr[Math.floor(Math.random() * videoArr.length  )]

  containeriframe.innerHTML = videoArr[i];
  i++;

  if (i == videoArr.length) {
    i = 0;
  }

 
  randomHearts()



});
















// level3 lesson4 video #3
// random quotes videos from Array

let index = 0;
randomquote.addEventListener("click", (eo) => {
  const quoteArr = [

    `<blockquote lang="ar" dir="rtl" class="sidekick">
    لا تُبرر أخطائك بل إجلطهم بالمزيد
    &#128127; &#128514;
    <br>
    <cite>    شخص عادى </cite>
  </blockquote> `,




  `<blockquote lang="ar" dir="rtl" class="sidekick">
  لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً
  &#128514;
  
  <br>
  <cite>  انسان مجروح  </cite>
</blockquote> `,



`<blockquote lang="ar" dir="rtl" class="sidekick">

الحياة ليست سباق  ف إهدى كده و relax  يا صاحبى
&#128526;

<br>
<cite> شخص رايق  </cite>
</blockquote> `,





`<blockquote lang="ar" dir="rtl" class="sidekick">

الحياة إما مغامرة جريئة أو لا شي
&#129505; &#128170;
<br>
<cite> شخص مغامر </cite>
</blockquote> `,



`<blockquote lang="ar" dir="rtl" class="sidekick">
اللى ملوش قلب ملوش رزق
&#129505; &#128170;
<br>
<cite> شخص شجاع</cite>
</blockquote> `,






`<blockquote lang="ar" dir="rtl" class="sidekick">
الثقة بالنفس تصنع المُعجزات
&#128521;
<br>
<cite>   شخص عارف قيمة نفسة  </cite>
</blockquote> `,





  ];

  // containeriframe.innerHTML =  videoArr[Math.floor(Math.random() * videoArr.length  )]

  parentquote.innerHTML = quoteArr[index];
  index++;

  if (index == quoteArr.length) {
    index = 0;
  }


  randomHearts()
});
