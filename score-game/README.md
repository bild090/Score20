# Score-game

### Technologies 
* Hyper Text Markup Language(HTML)
* Cascading Style Sheets(CSS)
* jquery
* visual studio code
* Figma
* git bash
* github
### wireframes
1. **home page**
![Home page](/wireframes/home.png)
2. **playing page**
![Playin page](/wireframes/play.png)

### Mockup 

[Score game](https://www.figma.com/proto/RLo9pzXnKlM7lPTjlCKL10/Score-20?node-id=1%3A2&viewport=605%2C411%2C0.6310811042785645&scaling=min-zoom)

### Stories
1. as a player i want to be able to enter my name so that i can see my name while playing.
2. as a player i want be able to read guide so that i can know how to play game.
3. as a player i want be able to click on a button so that i can start play game.
4. as a player i want be able to click on a button so that i can throw the dice.
5. as a player i want be able to click on a button so that i can stop throw the dice.
 

 ### Develop story

 first i start think about a simple game but in the same time has some compatitive thing,
 i start searching through websits to find a game suit to my thoughts,
 i found one with 100 Score and i change it to 20 becouse i think 100 will be boring,
 i start looking for color to represent my game so i gose with these colors BE3E3E, 000000, FAFAFA, FFFFFF,
 i start imagen how it's going to look like then start drawing ,
 after find the structure i want i start desigin on Figma,
 after all things done let's start coding,
 i opend my visual studio code (vs) and start writing the what  it need to bulid good looking interactive website,
 the most problem i faced is how to use local storge to save players names.

### Unsolved problems 
1. make game playable for one player
2. create local storge

### Winner describe 
the winner who get 20 score if player get more than 20 he will lose.

### Favorite function
my favorite function is when one of the player start to play and how it's locked on the other player then generate random image then how it's call the image by the number 

```javascript
// playing 1
    let lock = true;
    $("#play2").prop('disabled', lock);
    $("#stop2").prop('disabled', lock);
    $("#img1").hide();
    $("#img2").hide();
    let curr1 = 0;
    $("#play1").on("click", function(){
        
        let dice = Math.floor((Math.random() * 6) + 1);
        curr1 +=dice;
        $("#curr1").text(curr1); 
        $("#img1").attr("src", "images/"+dice+".png");
        $("#img1").show();
    });
    // stop round
    let total1 = 0;
    $("#stop1").on("click", function(){
        total1 += curr1;
        $("#total-score1").text(total1);
        $("#curr1").text(0); 
        curr1 = 0;
        if(total1 >20){
            lose(localStorage.getItem("player1"));
            $("#total-score1").text(0);
            total1 = 0;
            redirect();
        }
        if(total1 === 20){
            win(localStorage.getItem("player1"));
            $("#total-score1").text(0);
            total1 = 0;
            redirect();
        }
        $("#play1").prop('disabled', lock);
        $("#stop1").prop('disabled', lock);
        $("#play2").prop('disabled', !lock);
        $("#stop2").prop('disabled', !lock);
    });
```