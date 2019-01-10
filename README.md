CKEDITOR.appendTo('editor', {

  ... //Your other settings here
  
  onQuickVideoError : function(){
    //this function is optional. 
    //Display your own err message when video URL could not be recognized.
    //If this optional function is absent, the following error message will be displayed:
    alert('This URL is not recognized. Please copy the URL of the video site directly and paste it here.');
  },
  onQuickVideo : function(url){
    //You need to set your own width and height, usually based on the editor's width
      var w = 640,
          h = 480,
          html = '<div contenteditable="false" class="your_own_css_for_video_div"><iframe width="' + w + '" height="' + h + '" frameborder="0" allowfullscreen="1" src="' + url + '"></iframe></div>';
	  return html;
  }
})
