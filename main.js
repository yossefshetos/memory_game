document.querySelector('.control-buttons span').onclick = function() {

    let yourName = prompt('Whts Your Name ?');
    
    if(yourName == null || yourName == "") {

        document.querySelector('.name span').textContent = "Unknown";

    } else {

        document.querySelector('.name span').textContent = yourName;
    }

    document.querySelector('.control-buttons').remove();

}

let duration = 1000;

let blocksContainer = document.querySelector('.memory-game-blocks');

let blocks = Array.from(blocksContainer.children);

// let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

shuffle(orderRange);

blocks.forEach(function(block, index) {


    block.style.order = orderRange[index]

    block.addEventListener('click', function() {

        flipBlock(block);

    });

});


function flipBlock(selectedBlock) {

    selectedBlock.classList.add('is-flipped');
    
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if(allFlippedBlocks.length == 2) {

        stopClicking();

        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])

    }

}

function stopClicking() {

    blocksContainer.classList.add('no-clicking')

    setTimeout(() => {

        blocksContainer.classList.remove('no-clicking')

    }, duration)
}

function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries span');

    if(firstBlock.dataset.animals == secondBlock.dataset.animals) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();

    } else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        }, duration);
        
        document.getElementById('fail').play();
    }

    let allhasMatchBlocks = blocks.filter(hasMatchBlocks => hasMatchBlocks.classList.contains('has-match'));

    if(allhasMatchBlocks.length == blocks.length) {

        
        setTimeout(() => {

            allhasMatchBlocks[0].classList.remove('has-match');
            allhasMatchBlocks[1].classList.remove('has-match');
            allhasMatchBlocks[2].classList.remove('has-match');
            allhasMatchBlocks[3].classList.remove('has-match');
            allhasMatchBlocks[4].classList.remove('has-match');
            allhasMatchBlocks[5].classList.remove('has-match');
            allhasMatchBlocks[6].classList.remove('has-match');
            allhasMatchBlocks[7].classList.remove('has-match');
            allhasMatchBlocks[8].classList.remove('has-match');
            allhasMatchBlocks[9].classList.remove('has-match');
            allhasMatchBlocks[10].classList.remove('has-match');
            allhasMatchBlocks[11].classList.remove('has-match');
            allhasMatchBlocks[12].classList.remove('has-match');
            allhasMatchBlocks[13].classList.remove('has-match');
            allhasMatchBlocks[14].classList.remove('has-match');
            allhasMatchBlocks[15].classList.remove('has-match');
            allhasMatchBlocks[16].classList.remove('has-match');
            allhasMatchBlocks[17].classList.remove('has-match');
            allhasMatchBlocks[18].classList.remove('has-match');
            allhasMatchBlocks[19].classList.remove('has-match');
            
            triesElement.innerHTML = parseInt(0);

        }, duration);
    }

}

function shuffle(array) {

    let current = array.length,
        temp,
        random;

    while(current > 0) {

        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;
    }

    return array

}