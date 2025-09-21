$(document).ready(function() {
    var minAnimDuration = 15;
    var maxAnimDuration = 30;
    var numFlowers = 30; 


    const flowerImages = [
        'amar.png', 
        'girasol.png', 
        'naturaleza.png' 
    ];

    for(var i = 0; i < numFlowers; i++) {
        var animDuration = getRandom(minAnimDuration, maxAnimDuration);
        
        var imageSrc = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        
        var flowerSize = getRandom(40, 100); 
        
        var startLeft = getRandom(0, 100);
        var endLeft = startLeft + getRandom(-20, 20); 

        var html = `<div class="lantran-all flower-${i}" style="width:${flowerSize}px;">
                       <img src="${imageSrc}" alt="Flor amarilla volando">
                    </div>`;
        
        $(".container-sky").append(html);
        
        $('.flower-' + i).css({
            'left': startLeft + '%',
            'animation': `fly ${animDuration}s infinite linear`,
            'animation-delay': `-${getRandom(0, animDuration)}s` 
        });
    }

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
});