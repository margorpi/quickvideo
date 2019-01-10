CKEDITOR.dialog.add( 'quickvideoDialog', function( editor ) {
    return {
        title: 'Insert Video',
        minWidth: 400,
        minHeight: 100,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'videoURL',
                        label: 'Paste URL from Video Site:'
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this,
				url=dialog.getValueOf( 'tab-basic', 'videoURL').trim(),
				v = null;
			if(/:\/\/www.youtube.com\/embed\//i.test(url)){
				v = url.match(/embed\/([^"|'$]+)/i);
				if(v == null || v[1] == null){
					url = '';
				} else {
					url = 'https://www.youtube.com/embed/' + v[1];
				}
			} else if(/:\/\/www.youtube.com\/watch\?v=/i.test(url)){
				v = url.match(/v=([^&$]+)/i);
				if(v == null || v[1] == null){
					url = '';
				} else {
					url = 'https://www.youtube.com/embed/' + v[1];
				}				
			} else if(/:\/\/player.youku.com\/embed\//i.test(url)){
				v = url.match(/embed\/([^"|'$]+)/i);
				if(v == null || v[1] == null){
					url = '';
				} else {
					url = 'https://player.youku.com/embed/' + v[1];
				}				
			} else if(/:\/\/v.youku.com\/v_show\/id_/i.test(url)){
				v = url.match(/id_(.+).html/i);
				if(v == null || v[1] == null){
					url = '';
				} else {
					url = 'https://player.youku.com/embed/' + v[1];
				}
			} else if(/:\/\/v.qq.com\/txp\/iframe\/player.html\?vid=/i.test(url)){
				v = url.match(/vid=([^"|'$]+)/i);
				if(v == null || v[1] == null){
					url = '';
				} else {
					url = 'https://v.qq.com/txp/iframe/player.html?vid=' + v[1];
				}				
			} else if(/:\/\/v.qq.com\/x\/(page|cover)\//i.test(url)){
				v = url.match(/(page|cover)\/(.+).html/i);
				if(v == null || v[2] == null){
					url = '';
				} else {
					url = 'https://v.qq.com/txp/iframe/player.html?vid=' + v[2];
				}
			} else {
				url = '';
			}
			if(url == ''){
				if(editor.config.onQuickVideoError == null){
					alert('This URL is not recognized. Please copy the URL of the video site directly and paste it here.');
				} else {
					editor.config.onQuickVideoError();
				}
			} else {
				if(editor.config.onQuickVideo){
					var html = editor.config.onQuickVideo(url);
					if(html != null ){
						editor.insertElement(CKEDITOR.dom.element.createFromHtml(html));
					}
				}				
			}
        }
    };
});