CKEDITOR.plugins.add('quickvideo', {
    icons: 'quickvideo',
    init: function( editor ) {
        editor.addCommand('quickvideoDialog', new CKEDITOR.dialogCommand( 'quickvideoDialog' ));
        editor.ui.addButton('quickvideo', {label: 'Insert Video', command: 'quickvideoDialog', toolbar: 'insert, 2'});
        CKEDITOR.dialog.add( 'quickvideoDialog', this.path + 'dialogs/quickvideo.js' );
    }
});