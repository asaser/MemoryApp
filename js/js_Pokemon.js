const pictures = [
    'P-pic1',
    'P-pic2',
    'P-pic3',
    'P-pic4',
    'P-pic5',
    'P-pic6',
    'P-pic7',
    'P-pic8',
    'P-pic9',
    'P-pic10',
    'P-pic11',
    'P-pic12',
    'P-pic13',
    'P-pic14',
    'P-pic15',
    'P-pic16',
    'P-pic17',
    'P-pic18',
    'P-pic19',
    'P-pic20',
    'P-pic21',
    'P-pic22',
    'P-pic23',
    'P-pic24',
    'P-pic25'
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
  
        if (allCard === 25) {
          alert('YOU WIN');
          stopTime();
        }
      }
    }
  }