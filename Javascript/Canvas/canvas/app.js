var canvas = document.getElementById('canvas');
if( canvas.getContext )
{ 
    var context = canvas.getContext( '2d' );
     var img = new Image();
}

     img.src = 'logo.png';
       img.onload = function(){
       context.drawImage(img, 100,100);
       }
    
'