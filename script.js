
document.addEventListener('DOMContentLoaded', function () {
    const playerForm = document.getElementById('playerForm');

    playerForm.addEventListener('submit', function (event) {
        event.preventDefault();
     
        const addplayer = document.getElementById('addplayer')

        const name = document.getElementById('name').value;
        const photo = document.getElementById('photo').value;
        const position = document.getElementById('position').value;
        const nationality = document.getElementById('nationality').value;
        const club = document.getElementById('club').value;

        const rating = document.getElementById('rating').value;
        const pace = document.getElementById('pace').value;
        const shooting = document.getElementById('shooting').value;
        const passing = document.getElementById('passing').value;
        const dribbling = document.getElementById('dribbling').value;
        const defending = document.getElementById('defending').value;
        const physical = document.getElementById('physical').value;

        const diving = document.getElementById('diving').value;
        const handling = document.getElementById('handling').value;
        const kicking = document.getElementById('kicking').value;
        const reflexes = document.getElementById('reflexes').value;
        const speed = document.getElementById('speed').value;
        const positioning = document.getElementById('positioning').value;



        if (rating < 1 || rating > 99 || pace < 1 || pace > 99 || shooting < 1 || shooting > 99 || passing < 1 || passing > 99 || dribbling < 1 || dribbling > 99 || defending < 1 || defending > 99 || physical < 1 || physical > 99) {
            alert("Please respect the role of the rating .");
            return;
        }


        if (!name || !photo || !nationality || !club || !position || !rating) {
            alert("Please fill in all fields.");
            return;
        }

        if (position === "GK") {
            const diving = document.getElementById("diving").value;
            const handling = document.getElementById("handling").value;
            const kicking = document.getElementById("kicking").value;
            const reflexes = document.getElementById("reflexes").value;
            const speed = document.getElementById("speed").value;
            const positioning = document.getElementById("positioning").value;

            if (diving < 1 || diving > 99 || handling < 1 || handling > 99 || kicking < 1 || kicking > 99 || reflexes < 1 || reflexes > 99 || speed < 1 || speed > 99 || positioning < 1 || positioning > 99) {
                alert("Please respect the role of the rating .");
                return;
            }

            if (!diving || !handling || !kicking || !reflexes || !speed || !positioning) {
                alert("Please fill in all fields.");
                return;
            }
        } else {

            if (!pace || !shooting || !passing || !dribbling || !defending || !physical) {
                alert("Please fill in all fields.");
                return;
            }
        }



        const playerCard = document.createElement('div');
        playerCard.classList.add('LM');


        const buttoncontainer = document.createElement('div');
        buttoncontainer.className = 'buttoncontainer';

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = '✏️';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = '🗑️';



        deleteButton.addEventListener('click', function () {
            playerCard.remove();
        });

        editButton.addEventListener('click', function () {
          0
            document.getElementById('name').value = name;
            document.getElementById('photo').value = photo;
            document.getElementById('position').value = position;
            document.getElementById('nationality').value = nationality;
            document.getElementById('club').value = club;
            document.getElementById('rating').value = rating;
            document.getElementById('pace').value = pace;
            document.getElementById('shooting').value = shooting;
            document.getElementById('passing').value = passing;
            document.getElementById('dribbling').value = dribbling;
            document.getElementById('defending').value = defending;
            document.getElementById('physical').value = physical;
        
            if (position === 'GK') {
                document.getElementById('diving').value = diving;
                document.getElementById('handling').value = handling;
                document.getElementById('kicking').value = kicking;
                document.getElementById('reflexes').value = reflexes;
                document.getElementById('speed').value = speed;
                document.getElementById('positioning').value = positioning;
            }
        
            addplayer.addEventListener('click', function () {
                playerCard.remove();
            });
        });
        



        buttoncontainer.appendChild(editButton);
        buttoncontainer.appendChild(deleteButton);
        playerCard.appendChild(buttoncontainer);





        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');



        const raytingpransipal = document.createElement('div');
        raytingpransipal.id = 'rayting-pransipal';



        const playerphotocontainr = document.createElement('div');
        playerphotocontainr.id = 'playerphotocontainr';


        const photoflagclubcontainr = document.createElement('div');
        photoflagclubcontainr.id = 'photoflagclubcontainr';

        const photoflagcontainr = document.createElement('div');
        photoflagcontainr.id = 'photoflagcontainr';

        const flagphoto = document.createElement('img');
        flagphoto.id = 'flagphoto'

        photoflagclubcontainr.appendChild(photoflagcontainr);
        photoflagcontainr.appendChild(flagphoto);
        flagphoto.src = nationality;



        const photoclubcontainr = document.createElement('div');
        photoclubcontainr.id = 'photoclubcontainr';

        const clubphoto = document.createElement('img');
        clubphoto.id = 'clubphoto'

        photoflagclubcontainr.appendChild(photoclubcontainr);
        photoclubcontainr.appendChild(clubphoto);
        clubphoto.src = club;


        const playerphoto = document.createElement('img');
        playerphoto.id = 'playerphoto'
        playerphoto.src = photo;



        playerphotocontainr.appendChild(playerphoto);
        playerphotocontainr.appendChild(photoflagclubcontainr);




        const playerrayting = document.createElement('p');
        playerrayting.textContent = rating;
        raytingpransipal.appendChild(playerrayting)


        const playerpost = document.createElement('p');
        playerpost.textContent = position;
        raytingpransipal.appendChild(playerpost)




        const playerName = document.createElement('p');
        playerName.textContent = name;



        const playerStatscontent = document.createElement('div');
        playerStatscontent.classList.add('player-stats-content');

        const playerrait = document.createElement('p');
        playerrait.textContent = "PAC  SHO  PAS  DRI  DEF  PHY"

        const playerraitgk = document.createElement('p');
        playerraitgk.textContent = "DIV HAN KIC REF SPE POS"


        const playerStats = document.createElement('div');
        playerStats.classList.add('player-stats');


        function createStat(label, value) {
            const stat = document.createElement('div');
            const statLabel = document.createElement('strong');
            statLabel.textContent = label;
            stat.appendChild(statLabel);
            stat.appendChild(document.createTextNode(value));
            return stat;
        }



        if (positionSelect.value === 'GK') {

            playerStats.appendChild(createStat('', diving));
            playerStats.appendChild(createStat('', handling));
            playerStats.appendChild(createStat('', kicking));
            playerStats.appendChild(createStat('', reflexes));
            playerStats.appendChild(createStat('', speed));
            playerStats.appendChild(createStat('', positioning));
            playerStatscontent.appendChild(playerraitgk)

        } else {

            playerStats.appendChild(createStat('', pace));
            playerStats.appendChild(createStat('', shooting));
            playerStats.appendChild(createStat('', passing));
            playerStats.appendChild(createStat('', dribbling));
            playerStats.appendChild(createStat('', defending));
            playerStats.appendChild(createStat('', physical));
            playerStatscontent.appendChild(playerrait)

        }

        cardContent.appendChild(raytingpransipal);
        cardContent.appendChild(playerphotocontainr);
        cardContent.appendChild(playerName);
        cardContent.appendChild(playerStatscontent);
        cardContent.appendChild(playerStats);
        playerCard.appendChild(cardContent);

        if (rating < 50) {
            playerCard.style.backgroundImage = `url(/image/silver1.png)`;
        } else if (rating >= 50 && rating < 70) {
            playerCard.style.backgroundImage = `url(/image/badge_gold.webp)`;

        } else if (rating >= 70 && rating < 80) {
            playerCard.style.backgroundImage = `url(/image/badge_ballon_dor.webp)`;
        } else {
            playerCard.style.backgroundImage = `url(/image/badge_total_rush.webp)`;
        }


        if (position === 'CF') {
            document.getElementById('stcard').appendChild(playerCard);
        } else if (position === 'RW') {
            document.getElementById('rwcard').appendChild(playerCard);
        } else if (position === 'LW') {
            document.getElementById('lwcard').appendChild(playerCard);
        } else if (position === 'CM' || position === 'CDM') {
            document.getElementById('medfild').appendChild(playerCard);
        } else if (position === 'LB') {
            document.getElementById('lbcard').appendChild(playerCard);
        } else if (position === 'RB') {
            document.getElementById('rbcard').appendChild(playerCard);
        } else if (position === 'CB') {
            document.getElementById('CBcard').appendChild(playerCard);
        } else if (position === 'GK') {
            document.getElementById('goal').appendChild(playerCard);
        }

        playerForm.reset();

    });








    const positionSelect = document.getElementById('position');
    const goalkeeperFields = document.querySelectorAll('.form-group-gk');
    const playerFields = document.querySelectorAll('.form-group-pl');

    function toggleGoalkeeperFields() {
        if (positionSelect.value === 'GK') {
            goalkeeperFields.forEach(field => field.style.display = 'block');
            playerFields.forEach(field => field.style.display = 'none');
        } else {
            goalkeeperFields.forEach(field => field.style.display = 'none');
            playerFields.forEach(field => field.style.display = 'block');
        }
    }

    positionSelect.addEventListener('change', toggleGoalkeeperFields);
    toggleGoalkeeperFields();
});









