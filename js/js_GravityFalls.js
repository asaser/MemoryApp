const pictures = [
    'GF-pic1',
    'GF-pic2',
    'GF-pic3',
    'GF-pic4',
    'GF-pic5',
    'GF-pic6',
    'GF-pic7',
    'GF-pic8'
  ];

  

for (let picture of pictures) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${picture}`;
    cardA.setAttribute('data-picture', picture);
  
    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${picture}`;
    cardB.setAttribute('data-picture', picture);
  }
  
  
  function onCardClicked(e) {
    const target = e.currentTarget;
  
    if (
      notclickCard || target === clickCard || target.className.includes('done')
    ) {
      return;
    }
  
    target.className = target.className.replace('card_reverse', '');
    target.className += ' done';
    
    if (!clickCard) {
      // if we haven't clicked a card, keep track of the card, display it's color
      clickCard = target;
  
      startCounter();
    } else if (clickCard) {
      // if we have already clicked a card, check if the new card matches the old card color
      if (
        clickCard.getAttribute('data-picture') !==
        target.getAttribute('data-picture')
  
      ) {
        notclickCard = true;
        setTimeout(() => {
          clickCard.className =
            clickCard.className.replace('done', '') +
            'card_reverse';
          target.className =
            target.className.replace('done', '') +
            'card_reverse';
          clickCard = null;
          notclickCard = false;
        }, 500);
      } else {
        allCard++;
        clickCard = null;
  
        if (allCard === 8) {
          alert('YOU WIN');
          stopTime();
        }
      }
    }
  }